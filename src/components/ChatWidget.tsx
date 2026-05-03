"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const WELCOME_MESSAGE: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content: "Hello! I'm here to help you with any questions about our mental health and wellness services. How can I assist you today?",
  timestamp: new Date(),
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [showAppointmentCTA, setShowAppointmentCTA] = useState(false);
  const [unread, setUnread] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
      setUnread(false);
    }
  }, [open]);

  const addMessage = useCallback((msg: Omit<ChatMessage, "id" | "timestamp">) => {
    setMessages((prev) => [
      ...prev,
      {
        ...msg,
        id: `${Date.now()}-${Math.random()}`,
        timestamp: new Date(),
      },
    ]);
  }, []);

  const handleSend = useCallback(async () => {
    const text = input.trim();
    if (!text) return;

    setInput("");
    setError(null);
    addMessage({ role: "user", content: text });
    setTyping(true);

    try {
      // Prepare messages for API (excluding system messages)
      const apiMessages = messages
        .filter(msg => msg.role === "user" || msg.role === "assistant")
        .map(msg => ({
          role: msg.role,
          content: msg.content
        }));

      // Add current user message
      apiMessages.push({ role: "user", content: text });

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();

      setTyping(false);
      addMessage({ role: "assistant", content: data.message });

      // Check if the response suggests appointment booking
      const appointmentKeywords = [
        "appointment", "schedule", "book", "consultation", "contact",
        "call", "visit", "meet", "session", "intake"
      ];

      if (appointmentKeywords.some(keyword =>
        data.message.toLowerCase().includes(keyword) ||
        text.toLowerCase().includes(keyword)
      )) {
        setShowAppointmentCTA(true);
      }

    } catch (error) {
      console.error('Chat API error:', error);
      setTyping(false);
      setError("I'm having trouble connecting right now. Please try again or call us directly at (617) 777-7982.");

      addMessage({
        role: "assistant",
        content: "I apologize, but I'm experiencing technical difficulties. Please call us at (617) 777-7982 or email info@curamw.com, and we'll be happy to assist you."
      });
    }
  }, [input, messages, addMessage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.4, type: "spring" }}
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full",
          "bg-gold shadow-2xl flex items-center justify-center",
          "hover:bg-gold-light transition-all duration-300 group",
          open ? "hidden" : "flex"
        )}
        style={{ boxShadow: "0 8px 32px rgba(201,169,110,0.35), 0 2px 8px rgba(0,0,0,0.4)" }}
        aria-label="Open chat"
      >
        <MessageCircle size={22} className="text-bg group-hover:scale-110 transition-transform" />
        {unread && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-sage rounded-full border-2 border-bg animate-pulse" />
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-1.5rem)] flex flex-col"
            style={{ maxHeight: "calc(100vh - 3rem)" }}
          >
            <div className="flex flex-col rounded-2xl overflow-hidden border border-ivory/8"
              style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,169,110,0.1)" }}
            >
              {/* Header */}
              <div className="bg-bg-card border-b border-ivory/8 px-5 py-4 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                    <span className="font-cormorant text-lg text-gold font-light">C</span>
                  </div>
                  <div>
                    <p className="text-ivory/80 text-sm font-medium leading-none mb-0.5">Cura Mind</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
                      <span className="text-sage/60 text-xs">Here to help</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-ivory/30 hover:text-ivory/70 transition-colors p-1"
                  aria-label="Close chat"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto bg-bg p-4 space-y-3"
                style={{ minHeight: "320px", maxHeight: "420px" }}
              >
                {messages.map((msg) => (
                  <MessageBubble key={msg.id} message={msg} />
                ))}

                {/* Typing indicator */}
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2 items-start"
                  >
                    <div className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="font-cormorant text-xs text-gold">C</span>
                    </div>
                    <div className="bg-bg-card rounded-2xl rounded-tl-sm px-4 py-3 border border-ivory/5">
                      <div className="flex gap-1 items-center h-4">
                        {[0, 0.15, 0.3].map((d) => (
                          <motion.div
                            key={d}
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8, delay: d }}
                            className="w-1.5 h-1.5 rounded-full bg-gold/40"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Appointment CTA */}
                {showAppointmentCTA && !typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col gap-2 pt-2"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gold text-bg text-xs font-medium tracking-widest uppercase rounded-xl hover:bg-gold-light transition-colors"
                    >
                      Request Appointment
                      <ArrowRight size={12} />
                    </Link>
                    <a
                      href="tel:6177777982"
                      className="flex items-center justify-center gap-2 w-full py-3 border border-gold/30 text-gold/70 text-xs tracking-widest uppercase rounded-xl hover:border-gold/60 transition-colors"
                    >
                      <Phone size={12} />
                      Call Us Directly
                    </a>
                  </motion.div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="bg-bg-card border-t border-ivory/8 p-3 shrink-0">
                <div className="flex items-center gap-2 bg-bg-elevated rounded-xl border border-ivory/8 px-4 py-2.5">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent text-ivory/70 placeholder:text-ivory/20 text-sm outline-none"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || typing}
                    className={cn(
                      "w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200",
                      input.trim() && !typing
                        ? "bg-gold text-bg hover:bg-gold-light"
                        : "bg-ivory/5 text-ivory/20"
                    )}
                    aria-label="Send"
                  >
                    <Send size={13} />
                  </button>
                </div>
                <p className="text-ivory/15 text-[10px] text-center mt-2">
                  Not a substitute for professional care. For emergencies call 911 or text 988.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  // Convert markdown-style **bold** and *italic* to styled spans, and line breaks
  const formatContent = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="text-ivory/80 font-medium">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={i} className="text-gold/60">{part.slice(1, -1)}</em>;
      }
      // Handle line breaks and bullet points
      return part.split("\n").map((line, j) => (
        <span key={`${i}-${j}`}>
          {j > 0 && <br />}
          {line}
        </span>
      ));
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("flex gap-2 items-start", isUser && "flex-row-reverse")}
    >
      {/* Avatar */}
      {!isUser && (
        <div className="w-6 h-6 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-1">
          <span className="font-cormorant text-xs text-gold">C</span>
        </div>
      )}

      {/* Bubble */}
      <div
        className={cn(
          "max-w-[82%] px-4 py-3 text-sm leading-relaxed",
          isUser
            ? "bg-gold/15 border border-gold/20 rounded-2xl rounded-tr-sm text-ivory/70"
            : "bg-bg-card border border-ivory/5 rounded-2xl rounded-tl-sm text-ivory/60"
        )}
      >
        {formatContent(message.content)}
      </div>
    </motion.div>
  );
}
