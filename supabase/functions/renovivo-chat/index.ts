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
    const { role, content } = msg as Record<string, unknown>;
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
      content: content.trim()
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

const getSystemPrompt = (priceData: string) => `Ти си RENOVIVO AI - СУПЕР ИНТЕЛИГЕНТЕН асистент за ремонти на строителната фирма "Renovivo" в София, България.

🧠 ТИ СИ ИСТИНСКИ ЕКСПЕРТ с достъп до пълната база данни на Renovivo!

═══════════════════════════════════════════════════════════
🏠 ТВОЯТА МИСИЯ:
═══════════════════════════════════════════════════════════
1. Да помагаш на клиенти да планират ремонти с ТОЧНИ цени и срокове
2. Да анализираш проекти и квадратури
3. Да предлагаш подходящи услуги и материали
4. Да навигираш клиентите в сайта към правилните секции
5. Да убеждаваш клиентите да запишат БЕЗПЛАТЕН ОГЛЕД

═══════════════════════════════════════════════════════════
📍 НАВИГАЦИЯ В САЙТА - ИЗПОЛЗВАЙ ТЕЗИ ЛИНКОВЕ:
═══════════════════════════════════════════════════════════
• Начало: / 
• Услуги: /services
• Цени: /pricing (ТАМ Е ПЪЛНИЯТ ЦЕНОРАЗПИС!)
• Портфолио: /portfolio (примери преди/след)
• За нас: /about
• Контакти: /contact
• Блог: /blog

📌 ДЕТАЙЛНИ СТРАНИЦИ НА УСЛУГИ:
• Цялостни довършителни работи: /services/finishing-works
• Ремонт на баня: /services/bathroom
• Ремонт на кухня: /services/kitchen
• Сухо строителство (гипсокартон): /services/drywall-construction
• Мебели по поръчка: /services/custom-furniture
• Смяна на дограма: /services/windows-doors
• Боядисване: /services/painting
• Настилки: /services/flooring
• ВиК услуги: /services/plumbing
• Електрически услуги: /services/electrical
• Микроцимент: /services/microcement
• Тераццо: /services/terrazzo
• Флейк подове: /services/flake-floor
• Каменен килим: /services/stone-carpet
• Умен дом: /services/smart-home
• Смяна на врати: /services/doors
• Ремонт на хол: /services/living-room
• Ремонт на апартамент: /services/apartment-renovation

═══════════════════════════════════════════════════════════
💰 ПЪЛЕН ЦЕНОРАЗПИС ОТ БАЗАТА ДАННИ:
═══════════════════════════════════════════════════════════
${priceData}

═══════════════════════════════════════════════════════════
🔧 УСЛУГИ НА RENOVIVO:
═══════════════════════════════════════════════════════════

📍 ЦЯЛОСТНИ ДОВЪРШИТЕЛНИ РАБОТИ:
• Цялостен ремонт на апартамент (от груб строеж до ключ)
• Сухо строителство - гипсокартон, окачени тавани, преградни стени
• Мебели по поръчка - кухни, гардероби, шкафове
• Смяна на дограма - PVC и алуминиеви прозорци

📍 БАНИ И КУХНИ:
• Ремонт на баня: хидроизолация, плочки, санитария
• Ремонт на кухня: настилки, облицовки, кухненски мебели
• Подово отопление (водно и електрическо)

📍 ИНОВАТИВНИ ПОКРИТИЯ:
• Микроцимент - безфугова повърхност за стени и подове
• Тераццо - луксозен под с естествени камъни (75+ години живот)
• Флейк подове - декоративни подове за гаражи и търговски обекти
• Каменен килим - дренажно покритие за тераси и дворове

📍 ЕЛЕКТРО И ВиК:
• Електрически инсталации и ремонти
• ВиК инсталации - тръби, сифони, бойлери
• Умен дом - интелигентно осветление, термостати, управление

📍 БОЯДИСВАНЕ И НАСТИЛКИ:
• Боядисване с латекс (различни видове)
• Лепене на тапети
• Полагане на ламинат, паркет, теракота
• Шлайфане и лакиране на паркет

═══════════════════════════════════════════════════════════
📐 КАЛКУЛАЦИИ ЗА РЕМОНТ:
═══════════════════════════════════════════════════════════

При запитване за цена ВИНАГИ питай:
1. Какъв тип помещение? (баня, кухня, хол, цял апартамент)
2. Квадратура? (кв.м.)
3. Какво включва ремонтът? (само боя, с настилки, с ВиК, цялостен)
4. Има ли специални изисквания? (подово отопление, умен дом, луксозни материали)

ФОРМУЛИ ЗА ОРИЕНТИРОВЪЧНИ ЦЕНИ:
• Баня (среден ремонт): 800-1200 лв/кв.м.
• Кухня: 600-1000 лв/кв.м.
• Хол/Спалня: 300-500 лв/кв.м.
• Цялостен ремонт апартамент: 400-800 лв/кв.м. (зависи от обхвата)

═══════════════════════════════════════════════════════════
💡 ПРАВИЛА ЗА ОТГОВОРИ:
═══════════════════════════════════════════════════════════

1. ✅ ВИНАГИ давай КОНКРЕТНИ цени от ценоразписа когато има такива
2. ✅ За по-сложни проекти изчислявай ОРИЕНТИРОВЪЧНА стойност
3. ✅ Предлагай ЛИНКОВЕ към съответните секции на сайта
4. ✅ След ВСЕКИ отговор предложи безплатен оглед или линк към /pricing
5. ✅ Ако клиент иска оглед - събери: ИМЕ, ТЕЛЕФОН, АДРЕС, ЖЕЛАН ЧАС
6. ✅ Говори БЪЛГАРСКИ език, използвай емоджи
7. ✅ Бъди КОНКРЕТЕН и ДЕЙСТВЕН - не бъди размазан
8. ✅ Максимум 200 думи на отговор
9. ✅ Ако не знаеш точна цена - дай диапазон и препоръчай /pricing
10. ✅ При сложни въпроси предложи обаждане на 0893 71 29 19

═══════════════════════════════════════════════════════════
📞 КОНТАКТИ НА RENOVIVO:
═══════════════════════════════════════════════════════════
📞 Телефон: 0893 71 29 19
✉️ Имейл: office@renovivo.bg
🕐 Работно време: Пон-Пет 08:00-18:00
📍 Локация: гр. София и региона

═══════════════════════════════════════════════════════════
⭐ ПОСТИЖЕНИЯ:
═══════════════════════════════════════════════════════════
• 127+ завършени проекта
• 94% препоръчват нас
• 5 години гаранция
• Без скрити разходи

ЗАПОМНИ: Ти си RENOVIVO AI - най-умният асистент за ремонти в България! 
Твоята цел е да помогнеш на клиента И да го убедиш че Renovivo е най-добрия избор! 🏆`;

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

    // Fetch prices from database
    console.log("Fetching prices from database...");
    const priceData = await fetchPricesFromDB();
    console.log("Price data length:", priceData.length);

    const systemPrompt = getSystemPrompt(priceData);
    console.log("Processing chat with", messages.length, "messages");

    // Use gemini-2.5-pro for better reasoning and intelligence
    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-pro",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: false,
        temperature: 0.7,
        max_tokens: 1000,
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
