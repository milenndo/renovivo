import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// BNB fixed rate: 1 EUR = 1.95583 BGN
const BGN_TO_EUR = 1.95583;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Fetch prices from database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: prices, error: pricesError } = await supabase
      .from("service_prices")
      .select("*, service_categories(name, slug)")
      .order("service_name");

    if (pricesError) {
      console.error("Error fetching prices:", pricesError);
    }

    // Format prices for the AI context
    const pricesContext = prices?.map((p) => {
      const priceMin = p.price_min ? (p.price_min / BGN_TO_EUR).toFixed(2) : null;
      const priceMax = p.price_max ? (p.price_max / BGN_TO_EUR).toFixed(2) : null;
      const priceStr = priceMin && priceMax 
        ? priceMin === priceMax 
          ? `€${priceMin}` 
          : `€${priceMin} - €${priceMax}`
        : p.price_text || "По запитване";
      
      return `- ${p.service_name} (${p.service_categories?.name}): ${priceStr} за ${p.unit}${p.includes_materials ? " (с материали)" : " (без материали)"}${p.notes ? ` - ${p.notes}` : ""}`;
    }).join("\n") || "Няма налични цени.";

    const systemPrompt = `Ти си Renovivo AI - приятелски и професионален асистент на строително-ремонтна фирма Renovivo. 

ФОРМАТ НА ОТГОВОРИТЕ:
- Използвай КРАТКИ и ЯСНИ изречения
- Структурирай информацията с точки или номерация
- Когато даваш цени, използвай ясен формат: "Услуга: €XX - €XX/единица"
- Групирай подобни услуги заедно
- Ограничи отговора до 3-5 ключови точки
- НЕ изреждай всички услуги наведнъж - питай какво точно интересува клиента

ПРИМЕРЕН ФОРМАТ ЗА ЦЕНИ:
📋 **Полагане на плочки:**
• Стени: €8 - €12/м²
• Под: €10 - €15/м²
• Фаянсови плочки: €9 - €14/м²

НАЛИЧНИ УСЛУГИ И ЦЕНИ (EUR):
${pricesContext}

ПРАВИЛА:
1. Отговаряй САМО на български
2. Цените са ориентировъчни - за точна оферта се свържете с нас
3. Ако не знаеш - насочи към телефон: +359 888 123 456
4. Бъди кратък и полезен - максимум 150 думи на отговор
5. Питай уточняващи въпроси вместо да даваш прекалено много информация
6. Спомени иновативни покрития (микроцимент, терацо, флейк под, каменен килим) само когато е релевантно

КОНТАКТИ:
📞 +359 888 123 456 | ✉️ info@renovivo.bg | 🕐 Пон-Пет 08:00-18:00`;

    console.log("Sending request to Lovable AI Gateway...");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Твърде много заявки. Моля, опитайте отново след малко." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Услугата временно не е достъпна." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Грешка при обработка на заявката." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Неизвестна грешка" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
