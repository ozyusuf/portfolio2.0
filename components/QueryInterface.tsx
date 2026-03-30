"use client";

import { useState, useRef, useEffect } from "react";
import { queryResponses } from "@/data/portfolio";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import RevealOnScroll from "./ui/RevealOnScroll";

const SUGGESTIONS = [
  "real users?",
  "flutter apps?",
  "ai/ml work?",
  "experience?",
  "tech stack?",
];

const INITIAL_MESSAGE = {
  type: "system" as const,
  text: "System initialized. I answer only from Yusuf's portfolio data.",
};

interface Message {
  type: "system" | "user" | "response";
  text: string;
}

function findResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [pattern, response] of Object.entries(queryResponses)) {
    const keywords = pattern.split("|");
    if (keywords.some((kw) => lower.includes(kw))) {
      return response;
    }
  }
  return "I don't have specific information about that in the portfolio data. Try asking about projects, skills, experience, or education.";
}

export default function QueryInterface() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  function handleSubmit(query: string) {
    if (!query.trim()) return;
    const userMsg: Message = { type: "user", text: query };
    const response = findResponse(query);
    const responseMsg: Message = { type: "response", text: response };
    setMessages((prev) => [...prev, userMsg, responseMsg]);
    setInput("");
  }

  return (
    <section id="query" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <SectionLabel>Query My Work</SectionLabel>
          <SectionTitle>Ask About My Portfolio</SectionTitle>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-12 max-w-[800px] mx-auto">
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid var(--border)", background: "var(--bg-primary)" }}
          >
            {/* Terminal bar */}
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-elevated)" }}
            >
              <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
              <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
              <span
                className="ml-3 font-mono text-[12px]"
                style={{ color: "var(--text-dim)" }}
              >
                portfolio_query — yusuf_oz
              </span>
            </div>

            {/* Chat log */}
            <div
              ref={chatRef}
              className="px-6 py-5 flex flex-col gap-4 overflow-y-auto"
              style={{ maxHeight: "400px" }}
            >
              {messages.map((msg, i) => {
                if (msg.type === "system") {
                  return (
                    <div
                      key={i}
                      className="font-mono text-[12px] leading-[1.6] pl-4"
                      style={{
                        color: "var(--text-dim)",
                        borderLeft: "2px solid var(--border)",
                      }}
                    >
                      {msg.text}
                    </div>
                  );
                }
                if (msg.type === "user") {
                  return (
                    <div
                      key={i}
                      className="font-mono text-[13px] leading-[1.6]"
                      style={{ color: "var(--accent)" }}
                    >
                      <span style={{ color: "var(--text-dim)" }}>&gt; </span>
                      {msg.text}
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    className="text-[14px] leading-[1.7] pl-4"
                    style={{
                      color: "var(--text-secondary)",
                      borderLeft: "2px solid var(--accent-dim)",
                    }}
                  >
                    <span style={{ color: "var(--text-dim)" }}>│ </span>
                    {msg.text}
                  </div>
                );
              })}
            </div>

            {/* Input */}
            <div
              className="px-6 py-4 flex items-center gap-3"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <span className="font-mono text-[14px]" style={{ color: "var(--accent)" }}>
                $
              </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSubmit(input);
                }}
                placeholder="type your question here..."
                className="flex-1 bg-transparent outline-none font-mono text-[13px]"
                style={{
                  color: "var(--text-primary)",
                  caretColor: "var(--accent)",
                }}
              />
            </div>

            {/* Suggestions */}
            <div
              className="px-6 pb-5 flex flex-wrap gap-2"
            >
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => handleSubmit(s)}
                  className="font-mono text-[11px] px-3 py-1.5 rounded-full transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text-dim)",
                    background: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border-accent)";
                    el.style.color = "var(--accent)";
                    el.style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--text-dim)";
                    el.style.background = "none";
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
