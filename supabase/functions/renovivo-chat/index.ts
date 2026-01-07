import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BGN_TO_EUR = 1.95583;
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 30;
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const MAX_MESSAGE_LENGTH = 5000;
const MAX_MESSAGES_COUNT = 30;
const VALID_ROLES = ["user", "assistant", "system"];

function cleanupRateLimitStore() {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

function getClientIP(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIP = req.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }
  return "unknown";
}

function checkRateLimit(clientIP: string): { allowed: boolean; retryAfter?: number } {
  cleanupRateLimitStore();
  const now = Date.now();
  const record = rateLimitStore.get(clientIP);
  if (!record || now > record.resetTime) {
    rateLimitStore.set(clientIP, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((record.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }
  record.count++;
  return { allowed: true };
}

interface ChatMessage {
  role: string;
  content: string;
  imageUrl?: string;
}

function validateMessages(messages: unknown): { valid: boolean; error?: string; messages?: ChatMessage[] } {
  if (!Array.isArray(messages)) {
    return { valid: false, error: "Messages must be an array" };
  }
  if (messages.length === 0) {
    return { valid: false, error: "Messages array cannot be empty" };
  }
  if (messages.length > MAX_MESSAGES_COUNT) {
    return { valid: false, error: `Too many messages. Maximum allowed: ${MAX_MESSAGES_COUNT}` };
  }
  const validatedMessages: ChatMessage[] = [];
  for (let i = 0; i < messages.length; i++) {
    const msg = messages[i];
    if (typeof msg !== "object" || msg === null) {
      return { valid: false, error: `Message at index ${i} must be an object` };
    }
    const { role, content, imageUrl } = msg as Record<string, unknown>;
    if (typeof role !== "string" || !VALID_ROLES.includes(role)) {
      return { valid: false, error: `Invalid role at index ${i}. Must be one of: ${VALID_ROLES.join(", ")}` };
    }
    if (typeof content !== "string") {
      return { valid: false, error: `Content at index ${i} must be a string` };
    }
    if (content.length > MAX_MESSAGE_LENGTH) {
      return { valid: false, error: `Message at index ${i} exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` };
    }
    validatedMessages.push({
      role,
      content: content.trim(),
      imageUrl: typeof imageUrl === "string" ? imageUrl : undefined,
    });
  }
  return { valid: true, messages: validatedMessages };
}

// Fetch prices from database
async function fetchPricesFromDB(): Promise<string> {
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    
    if (!supabaseUrl || !supabaseKey) {
      console.error("Missing Supabase credentials");
      return "";
    }
    
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    const { data: prices, error } = await supabase
      .from("service_prices")
      .select(`
        service_name,
        price_min,
        price_max,
        unit,
        notes,
        includes_materials,
        service_categories(name)
      `)
      .order("service_name");
    
    if (error) {
      console.error("Error fetching prices:", error);
      return "";
    }
    
    if (!prices || prices.length === 0) {
      return "";
    }
    
    // Group by category
    const grouped: Record<string, string[]> = {};
    for (const price of prices) {
      const category = (price.service_categories as any)?.name || "Други";
      if (!grouped[category]) {
        grouped[category] = [];
      }
      
      let priceStr = "";
      if (price.price_min !== null && price.price_max !== null) {
        if (price.price_min === price.price_max) {
          priceStr = `${price.price_min.toFixed(2)} лв.`;
        } else {
          priceStr = `${price.price_min.toFixed(2)}-${price.price_max.toFixed(2)} лв.`;
        }
      } else if (price.price_min !== null) {
        priceStr = `от ${price.price_min.toFixed(2)} лв.`;
      } else if (price.price_max !== null) {
        priceStr = `до ${price.price_max.toFixed(2)} лв.`;
      } else {
        priceStr = "по договаряне";
      }
      
      const materials = price.includes_materials ? "(с материали)" : "(без материали)";
      const notes = price.notes ? ` - ${price.notes}` : "";
      
      grouped[category].push(`• ${price.service_name}: ${priceStr}/${price.unit} ${materials}${notes}`);
    }
    
    let result = "\n\n=== ЦЕНОРАЗПИС НА RENOVIVO ===\n";
    for (const [category, items] of Object.entries(grouped)) {
      result += `\n📋 ${category}:\n${items.join("\n")}\n`;
    }
    
    return result;
  } catch (error) {
    console.error("Error in fetchPricesFromDB:", error);
    return "";
  }
}

const getSystemPrompt = (priceData: string) => `Ти си RENOVIVO AI - ИНТЕЛИГЕНТЕН КАЛКУЛАТОР за ремонти на строителната фирма "Renovivo" в София.

🧠 ТИ СИ ЕКСПЕРТ ПО РЕМОНТИ С ДОСТЪП ДО ЦЕНОРАЗПИСА И МОЖЕШ ДА АНАЛИЗИРАШ ИЗОБРАЖЕНИЯ!

═══════════════════════════════════════════════════════════
🎯 ТВОЯТА ГЛАВНА МИСИЯ:
═══════════════════════════════════════════════════════════
Води СТРУКТУРИРАН ДИАЛОГ с клиента, събирай информация СТЪПКА ПО СТЪПКА и накрая дай ОРИЕНТИРОВЪЧНА ОФЕРТА!

═══════════════════════════════════════════════════════════
📋 СТЪПКИ ЗА СЪБИРАНЕ НА ИНФОРМАЦИЯ:
═══════════════════════════════════════════════════════════

**СТЪПКА 1 - ТИП РЕМОНТ:**
Попитай: "Какъв тип ремонт планирате?"
- Цялостен ремонт на апартамент
- Ремонт на конкретно помещение (баня, кухня, хол)
- Частични ремонтни дейности (боядисване, настилки)
- Иновативни покрития (микроцимент, тераццо, флейк)

**СТЪПКА 2 - ТИП ИМОТ:**
Попитай: "Какъв е типът на имота?"
- Апартамент (ново строителство - шпакловка/замазка)
- Апартамент (панел)
- Апартамент (тухла - старо строителство)
- Къща
- Офис/търговски обект

**СТЪПКА 3 - ПЛОЩ:**
Попитай: "Каква е общата площ в кв.м.?"
- Ако клиентът не знае точно, помогни с приблизителни стойности
- Ако качи снимка/план - анализирай и изчисли!

**СТЪПКА 4 - ПОМЕЩЕНИЯ (за цялостен ремонт):**
Попитай за всяко помещение:
- Хол: ___ кв.м.
- Спалня: ___ кв.м.
- Кухня: ___ кв.м.
- Баня: ___ кв.м.
- Коридор: ___ кв.м.
- Тераса: ___ кв.м.

**СТЪПКА 5 - НИВО НА ИЗПЪЛНЕНИЕ:**
Предложи три пакета:

📦 **ПАКЕТ START** (Икономичен):
- Базови материали
- Стандартно изпълнение
- Цена: 350-450 лв/кв.м.
- Виж детайли: /pricing/start

📦 **ПАКЕТ COMFORT** (Оптимален):
- Качествени материали среден клас
- Прецизно изпълнение
- Цена: 500-700 лв/кв.м.
- Виж детайли: /pricing/comfort

📦 **ПАКЕТ PREMIUM** (Луксозен):
- Премиум материали
- Висок клас изпълнение + дизайнерски елементи
- Цена: 800-1200 лв/кв.м.
- Виж детайли: /pricing/premium

**СТЪПКА 6 - СПЕЦИФИКИ:**
Попитай: "Имате ли специални изисквания?"
- Подово отопление
- Умен дом
- Микроцимент/тераццо покрития
- Мебели по поръчка
- Смяна на дограма

═══════════════════════════════════════════════════════════
📷 АНАЛИЗ НА ИЗОБРАЖЕНИЯ:
═══════════════════════════════════════════════════════════
Когато получиш изображение (план, снимка):
1. АНАЛИЗИРАЙ внимателно
2. ИДЕНТИФИЦИРАЙ помещения и размери
3. ИЗЧИСЛИ приблизителна квадратура
4. ПРОДЪЛЖИ със следващите въпроси

═══════════════════════════════════════════════════════════
💰 КАЛКУЛАЦИЯ НА ОФЕРТА:
═══════════════════════════════════════════════════════════

След като съберешВСИЧКА информация, изчисли и представи така:

---
📊 **ОРИЕНТИРОВЪЧНА ОФЕРТА ОТ RENOVIVO**

🏠 **Обект:** [тип имот], [площ] кв.м.
📍 **Помещения:** [списък]
📦 **Избран пакет:** [START/COMFORT/PREMIUM]

💰 **Приблизителна стойност:**
| Позиция | Площ | Цена/м² | Сума |
|---------|------|---------|------|
| [помещение] | [м²] | [цена] лв. | [сума] лв. |
| ... | ... | ... | ... |

**ОБЩО:** [сума] - [сума] лв.
*(Без ДДС, окончателната цена се определя след оглед)*

---

⚠️ **ВАЖНО:** Това е ОРИЕНТИРОВЪЧНА оценка!
За точна оферта е необходим безплатен оглед на място.

📞 **Следващи стъпки:**
1. 📅 Заявете безплатен оглед
2. 📞 Обадете се: 0893 71 29 19
3. ✉️ Пишете: office@renovivo.bg

═══════════════════════════════════════════════════════════
💰 ЦЕНОРАЗПИС ЗА ОТДЕЛНИ УСЛУГИ:
═══════════════════════════════════════════════════════════
${priceData}

═══════════════════════════════════════════════════════════
📐 ФОРМУЛИ ЗА ИЗЧИСЛЕНИЕ:
═══════════════════════════════════════════════════════════

**Цялостен ремонт (лв/кв.м.):**
- START: 350-450 лв/кв.м.
- COMFORT: 500-700 лв/кв.м.
- PREMIUM: 800-1200 лв/кв.м.

**По помещения (среден ремонт):**
- Баня: 900-1500 лв/кв.м.
- Кухня: 600-1000 лв/кв.м.
- Хол/Спалня: 350-550 лв/кв.м.
- Коридор: 300-450 лв/кв.м.

**Отделни услуги - използвай цените от ценоразписа!**

═══════════════════════════════════════════════════════════
📍 НАВИГАЦИЯ В САЙТА:
═══════════════════════════════════════════════════════════
• Ценови пакети: /pricing
• Пакет Start: /pricing/start  
• Пакет Comfort: /pricing/comfort
• Пакет Premium: /pricing/premium
• Услуги: /services
• Портфолио: /portfolio
• Контакти: /contact

═══════════════════════════════════════════════════════════
💡 ПРАВИЛА ЗА ДИАЛОГ:
═══════════════════════════════════════════════════════════

1. ✅ Питай ЕДНА стъпка наведнъж - не затрупвай с въпроси
2. ✅ При всеки отговор потвърди какво си разбрал
3. ✅ Предлагай пакетите когато става въпрос за ремонт
4. ✅ Давай КОНКРЕТНИ цифри от ценоразписа
5. ✅ След оферта - ВИНАГИ приканвай към оглед/обаждане
6. ✅ Максимум 200 думи на отговор
7. ✅ Използвай емоджи за по-приятен разговор
8. ✅ При изображение - анализирай и продължи с въпросите

📞 Контакти: 0893 71 29 19 | office@renovivo.bg
🕐 Работно време: Пон-Пет 08:00-18:00

ЗАПОЧНИ РАЗГОВОРА С ЕДИН ВЪПРОС и води клиента стъпка по стъпка! 🏗️`;

// Build message content for AI API (supports images)
function buildMessageContent(msg: ChatMessage): any {
  if (msg.imageUrl) {
    return [
      {
        type: "text",
        text: msg.content || "Анализирай това изображение и дай оценка за ремонт."
      },
      {
        type: "image_url",
        image_url: {
          url: msg.imageUrl
        }
      }
    ];
  }
  return msg.content;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIP = getClientIP(req);
    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Твърде много заявки. Моля, опитайте отново след малко." }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Retry-After": String(rateLimitResult.retryAfter || 60),
          },
        }
      );
    }

    const body = await req.json();
    const validation = validateMessages(body.messages);
    if (!validation.valid) {
      console.log(`Validation error: ${validation.error}`);
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const messages = validation.messages!;
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Check if any message has an image
    const hasImages = messages.some(m => m.imageUrl);
    console.log("Has images:", hasImages);

    // Fetch prices from database
    console.log("Fetching prices from database...");
    const priceData = await fetchPricesFromDB();
    console.log("Price data length:", priceData.length);

    const systemPrompt = getSystemPrompt(priceData);
    console.log("Processing chat with", messages.length, "messages");

    // Build messages for API with image support
    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...messages.map(msg => ({
        role: msg.role,
        content: buildMessageContent(msg)
      }))
    ];

    // Use gemini-2.5-pro for vision capabilities
    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: apiMessages,
        stream: false,
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    if (!aiResponse.ok) {
      const errorData = await aiResponse.text();
      console.error("AI API error:", aiResponse.status, errorData);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ content: "❌ Услугата е временно претоварена. Опитайте отново за момент или се обадете на 0893 71 29 19." }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ content: "⚠️ Моля, обадете се директно на 0893 71 29 19 за консултация." }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ content: "⚠️ Възникна техническа грешка. Обадете се на 0893 71 29 19." }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const aiData = await aiResponse.json();
    console.log("AI Response received");

    let responseContent = "";
    if (aiData.choices?.[0]?.message?.content) {
      responseContent = aiData.choices[0].message.content;
    }

    if (!responseContent) {
      responseContent = "🤔 Не мога да обработя твоя въпрос. Опитай отново или обади се на 0893 71 29 19.";
    }

    console.log("Returning response length:", responseContent.length);

    return new Response(
      JSON.stringify({
        content: responseContent,
        success: true,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({
        content: "⚠️ Възникна грешка. Моля, обадете се на 0893 71 29 19 за директна помощ.",
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
