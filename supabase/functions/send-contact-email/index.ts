import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

function generateContactEmailHtml(data: ContactRequest): string {
  const date = new Date().toLocaleDateString("bg-BG", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; }
    .header { background: linear-gradient(135deg, #D4A574 0%, #B8956B 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 28px; }
    .header p { margin: 10px 0 0; opacity: 0.9; }
    .content { background: #f9f9f9; padding: 30px; border: 1px solid #eee; }
    .section { background: white; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); }
    .section-title { color: #D4A574; font-size: 14px; font-weight: bold; text-transform: uppercase; margin-bottom: 15px; border-bottom: 2px solid #D4A574; padding-bottom: 8px; }
    .field { margin-bottom: 12px; }
    .field-label { color: #666; font-size: 12px; text-transform: uppercase; }
    .field-value { font-size: 16px; font-weight: 500; margin-top: 4px; }
    .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
    .footer a { color: #D4A574; text-decoration: none; }
    .message-box { background: #fff9e6; border-left: 4px solid #D4A574; padding: 15px; margin-top: 10px; white-space: pre-wrap; }
  </style>
</head>
<body>
  <div class="header">
    <h1>✉️ Renovivo</h1>
    <p>Ново запитване от уебсайта</p>
  </div>
  
  <div class="content">
    <div class="section">
      <div class="section-title">📋 Информация за клиента</div>
      <div class="field">
        <div class="field-label">Име</div>
        <div class="field-value">${escapeHtml(data.name)}</div>
      </div>
      <div class="field">
        <div class="field-label">Имейл</div>
        <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
      </div>
      ${data.phone ? `
      <div class="field">
        <div class="field-label">Телефон</div>
        <div class="field-value"><a href="tel:${escapeHtml(data.phone)}">${escapeHtml(data.phone)}</a></div>
      </div>
      ` : ""}
    </div>

    <div class="section">
      <div class="section-title">💬 Съобщение</div>
      <div class="message-box">${escapeHtml(data.message)}</div>
    </div>
  </div>

  <div class="footer">
    <p>Получено на: ${date}</p>
    <p>renovivo.bg | +359 89 371 29 19</p>
  </div>
</body>
</html>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactRequest = await req.json();
    
    console.log("Received contact request:", {
      name: data.name,
      email: data.email,
      phone: data.phone || "not provided",
    });

    // Generate HTML email content
    const htmlContent = generateContactEmailHtml(data);

    const primaryFrom = "Renovivo <zajavki@renovivo.bg>";
    const fallbackFrom = "Renovivo <onboarding@resend.dev>";

    // Send email to office (prefer our domain; fallback if domain isn't verified in Resend yet)
    let emailResponse = await resend.emails.send({
      from: primaryFrom,
      to: ["office@renovivo.bg"],
      reply_to: data.email,
      subject: `✉️ Ново запитване от ${data.name}`,
      html: htmlContent,
    });

    if (emailResponse.error) {
      console.warn("Primary FROM failed, retrying with fallback FROM:", emailResponse.error);
      emailResponse = await resend.emails.send({
        from: fallbackFrom,
        to: ["office@renovivo.bg"],
        reply_to: data.email,
        subject: `✉️ Ново запитване от ${data.name}`,
        html: htmlContent,
      });
    }

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, data: emailResponse.data }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
