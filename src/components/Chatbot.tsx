import React, { useState, useRef, useEffect } from "react";
import { Message } from "../types";
import { MessageCircle, X, Send, Sparkles, AlertCircle } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "model",
      content: "Hello, traveler! 🌟 I'm Sabrina's digital wellness assistant. I am here to help you learn about transformational healing sessions, online courses, or to guide your first steps in our tribe. How can I assist you today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = { role: "user", content: textToSend };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        throw new Error("Unable to connect to the assistant.");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "model", content: data.text }]);
    } catch (err: any) {
      console.error("Chat error:", err);
      setError("I had a small issue connecting. Let me try again if you send a message!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(input);
    }
  };

  const suggestionChips = [
    { text: "📅 Book a Session", query: "How can I book a transformational healing session?" },
    { text: "📚 Explore Courses", query: "What online courses does Sabrina offer?" },
    { text: "✨ Who is Sabrina?", query: "Tell me more about Sabrina Barnett and her tribe" },
    { text: "📍 Location & Contact", query: "Where is Sabrina based and how can I contact her?" }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" id="chatbot-widget-container">
      {/* 1. Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-sage hover:bg-[#6a8b75] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group border border-white/20"
          title="Chat with Wellness Assistant"
          id="btn-open-chatbot"
        >
          <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium pr-1">
            Chat with Sabrina's AI
          </span>
          <div className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
          </div>
        </button>
      )}

      {/* 2. Chat Window Container */}
      {isOpen && (
        <div
          className="w-[360px] sm:w-[400px] h-[480px] max-h-[calc(100vh-130px)] bg-white rounded-2xl shadow-2xl border border-sand/40 flex flex-col overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right"
          id="chatbot-window"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-sage to-[#6a8b75] p-4 text-white flex items-center justify-between border-b border-sand/10">
            <div className="flex items-center gap-3">
              <div className="bg-white/25 p-2 rounded-lg backdrop-blur-md">
                <Sparkles className="w-5 h-5 text-sand" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-base tracking-wide">Sabrina's Tribe Assistant</h3>
                <p className="text-[11px] text-sand/90 flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready to Support Your Journey
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              id="btn-close-chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAF9F6]/50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-sage text-white rounded-br-none"
                      : "bg-white text-charcoal border border-sand/30 rounded-bl-none"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Error Message */}
            {error && (
              <div className="flex items-center gap-2 text-rose-600 bg-rose-50 border border-rose-100 rounded-xl p-3 text-xs">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Typing/Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-charcoal border border-sand/30 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1 shadow-sm">
                  <span className="w-2 h-2 bg-sage/50 rounded-full animate-bounce-slow"></span>
                  <span className="w-2 h-2 bg-sage/70 rounded-full animate-bounce-slow [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-sage rounded-full animate-bounce-slow [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 border-t border-sand/20 bg-[#FAF9F6]/30">
              <p className="text-[11px] text-charcoal/50 uppercase tracking-widest font-semibold mb-2">Suggested Topics</p>
              <div className="flex flex-wrap gap-2">
                {suggestionChips.map((chip, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(chip.query)}
                    className="text-xs bg-white hover:bg-sand/20 text-charcoal/80 border border-sand/40 rounded-full px-3 py-1.5 transition-all duration-200 shadow-sm active:scale-95"
                  >
                    {chip.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Box */}
          <div className="p-4 bg-white border-t border-sand/30 flex items-center gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask me anything about healing or growth..."
              rows={1}
              className="flex-1 bg-[#FAF9F6] text-charcoal text-sm border border-sand/40 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-sage focus:border-sage resize-none max-h-24 font-normal"
              id="chatbot-input-field"
            />
            <button
              onClick={() => handleSendMessage(input)}
              disabled={!input.trim() || isLoading}
              className="bg-sage hover:bg-[#6a8b75] text-white p-2.5 rounded-xl shadow-md disabled:opacity-50 disabled:hover:bg-sage transition-all duration-200 active:scale-95"
              id="btn-send-chat"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
