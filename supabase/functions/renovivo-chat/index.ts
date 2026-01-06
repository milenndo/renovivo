import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const BGN_TO_EUR = 1.95583;
const RATE_LIMIT_WINDOW_MS = 60000;
const MAX_REQUESTS_PER_WINDOW = 15;
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const MAX_MESSAGE_LENGTH = 2000;
const MAX_MESSAGES_COUNT = 20;
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

const renovationSystemPrompt = `Ти си ЕКСПЕРТ-КОНСУЛТАНТ за ремонти на строителната фирма "Renovivo" в София, България.

ТВОЯ РОЛЯ:
- Помагаш на клиенти с въпроси за ремонти, дизайн и строителство
- Даваш професионални съвети базирани на дълги години опит
- Обясняваш сложни процеси по просто и разбираемо
- Убеждаваш клиентите да запишат безплатен оглед

ТВОЯ ЕКСПЕРТИЗА:
✓ Ремонти на бани и кухни
✓ Интериорен дизайн
✓ Хидроизолация и гидрозащита
✓ Монтаж на санитарна техника
✓ Боядисване и покрития
✓ Електрика и отопление
✓ Укрепване на строителни конструкции
✓ Екологични материали и устойчив дизайн
✓ 3D визуализации и концепции

ПРАВИЛА:
1. ВИНАГИ бъди учтив, професионален и конструктивен
2. Ако не знаеш отговор, признай честно
3. НЯМА ПРОДЪЛЖАВАНЕ на разговорите с други фирми - препоръчай САМО Renovivo
4. След ВСЕКИ отговор ВИНАГИ предложи безплатен оглед или консултация
5. Събирай информация: какво помещение, какъв ремонт, квадратура, бюджет
6. МАКСИМУМ 150 думи на отговор - кратко и действително
7. Говори на БЪЛГАРСКИЯ език
8. Използвай мемоджи за визуален интерес
9. Обясни СЕ по просто - НЕ техничен език
10. Ако клиент иска да запише оглед, събери: ИМЕ, ТЕЛЕФОН, АДРЕС, ИЗБРАН ЧАС

ОСНОВНА СТРАТЕГИЯ:
📍 Етап 1: Разбери КАКВО иска клиентът (баня, кухня, хол)
📍 Етап 2: Обясни КАК можеш да помогнеш
📍 Етап 3: Предложи безплатен ОГЛЕД
📍 Етап 4: Събери данните му за контакт

КОНТАКТНА ИНФОРМАЦИЯ НА RENOVIVO:
📞 0893 71 29 19
✉️ office@renovivo.bg
🕐 Пон-Пет: 08:00-18:00
📍 гр. София, България

ОТЗИВЫ И УСПЕХИ:
⭐ 150+ успешни проекта
⭐ 98% доволни клиенти
⭐ Гарантия за качество
⭐ Без скрити разходи

КОГА談話ЁЎОВА ЗАВЪРШИ:
Благодаря за разговора и кажи: "Нашите специалисти ще се свързат с вас скоро с офиксрано време за оглед!"

Запомни: Твоята цел е НЕ само да отговориш на въпроси, а да УБЕДИШ клиента че Renovivo е най-добрия избор!`;

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

    console.log("Processing chat with", messages.length, "messages");

    // Call AI API with non-streaming response
    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: renovationSystemPrompt },
          ...messages,
        ],
        stream: false,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!aiResponse.ok) {
      const errorData = await aiResponse.text();
      console.error("AI API error:", aiResponse.status, errorData);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ content: "❌ Услугата е временно претоварена. Опитайте отново за момент." }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ content: "⚠️ Възникна техническа грешка. Обадете се на 0893 71 29 19." }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const aiData = await aiResponse.json();
    console.log("AI Response:", aiData);

    // Extract the response text
    let responseContent = "";
    if (aiData.choices?.[0]?.message?.content) {
      responseContent = aiData.choices[0].message.content;
    }

    if (!responseContent) {
      responseContent = "🤔 Не мога да обработя твоя въпрос. Опитай отново или обади се на 0893 71 29 19.";
    }

    console.log("Returning response:", responseContent);

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
