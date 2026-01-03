import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useInspectionRequest } from "@/contexts/InspectionRequestContext";
import { useChat } from "@/contexts/ChatContext";

type ChatMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  created_at?: string;
};

const INITIAL_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content:
    "Здравейте! 👋 Аз съм виртуалният асистент на Renovivo. Разкажете ми накратко за вашия ремонт – какво помещение, квадратура и какво искате да постигнете – и ще ви помогна с идеи, срокове и ориентировъчен бюджет.",
};

const RenovivoChat = () => {
  const { isOpen, toggleChat } = useChat();
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { openModal } = useInspectionRequest();
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isOpen, messages.length]);

  const handleToggle = () => {
    toggleChat();
  };

  const handleOpenInspection = () => {
    openModal();
  };

  const handleSend = async () => {
    if (!input.trim() || isSending) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsSending(true);

    try {
      // Build messages array for the API
      const messagesForAPI = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));
      messagesForAPI.push({
        role: "user",
        content: userMessage.content,
      });

      console.log("Sending messages to AI:", messagesForAPI);

      const { data, error } = await supabase.functions.invoke("renovivo-chat", {
        body: { messages: messagesForAPI },
      });

      if (error) {
        console.error("Chat function error:", error);
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "😅 Възникна проблем с връзката към сървъра. Моля, опитайте отново след малко или заявете безплатен оглед от бутона по-долу. Телефон: 0893 71 29 19",
          },
        ]);
        return;
      }

      console.log("Received data:", data);

      // Handle both regular response and streaming response
      let responseText = "";

      if (data?.content) {
        // Direct content response
        responseText = data.content;
      } else if (data?.reply) {
        // Alternative field
        responseText = data.reply;
      } else if (typeof data === "string") {
        // String response
        responseText = data;
      } else if (data && typeof data === "object") {
        // Try to extract text from object
        responseText = data.text || data.message || JSON.stringify(data);
      }

      if (responseText && responseText.trim()) {
        const assistantMessage: ChatMessage = {
          id: crypto.randomUUID(),
          role: "assistant",
          content: responseText,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        console.warn("No valid response content received");
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
              "Опитайте пак със свързан въпрос за ремонт. 🔧",
          },
        ]);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Възникна неочаквана грешка. Моля, обадете се на 0893 71 29 19 или опитайте отново.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <div className="fixed bottom-4 right-4 z-40">
        <Button
          size="lg"
          className="rounded-full shadow-lg px-4 py-2 flex items-center gap-2"
          onClick={handleToggle}
        >
          {isOpen ? (
            <>
              <X className="h-5 w-5" />
              Затвори чат
            </>
          ) : (
            <>
              <MessageCircle className="h-5 w-5" />
              💬 Чат с Renovivo
            </>
          )}
        </Button>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-full max-w-md bg-background border border-border rounded-xl shadow-2xl flex flex-col overflow-hidden z-40">
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <div>
              <p className="font-bold text-lg">🔨 Renovivo Асистент</p>
              <p className="text-xs text-primary-foreground/90">
                Експерт по ремонти - Отговори за секунди
              </p>
            </div>
            <button
              onClick={handleToggle}
              className="rounded-full p-1 hover:bg-primary-foreground/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto max-h-96">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`rounded-2xl px-4 py-2 text-sm max-w-[85%] whitespace-pre-wrap leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none font-medium"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isSending && (
              <div className="flex justify-start">
                <div className="rounded-2xl px-4 py-2 text-sm max-w-[85%] bg-muted text-foreground rounded-bl-none flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Пишем отговор...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* CTA за оглед */}
          <div className="px-4 pb-2 bg-muted/50">
            <Button
              type="button"
              variant="outline"
              className="w-full mb-2 flex items-center justify-center gap-2 text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={handleOpenInspection}
            >
              <Calendar className="h-4 w-4" />
              ✨ Заявете безплатен оглед
            </Button>
          </div>

          {/* Input area */}
          <div className="border-t px-3 py-2 bg-background">
            <div className="flex items-end gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Попишете про ремонта (баня, кухня, хол)..."
                className="min-h-[44px] max-h-24 text-sm resize-none"
                disabled={isSending}
              />
              <Button
                size="icon"
                className="mb-1 flex-shrink-0"
                onClick={handleSend}
                disabled={isSending || !input.trim()}
              >
                {isSending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              💡 Shift + Enter за нов ред
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RenovivoChat;
