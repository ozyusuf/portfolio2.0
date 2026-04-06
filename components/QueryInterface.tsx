"use client";

import { useState, useRef, useEffect } from "react";
import { queryKB } from "@/data/portfolio";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import RevealOnScroll from "./ui/RevealOnScroll";

const SUGGESTIONS = [
  "available for internship?",
  "best project?",
  "flutter or web?",
  "remote work?",
  "what's he learning?",
];

const INITIAL_MESSAGE = {
  type: "system" as const,
  text: "System initialized. Ask me anything about Yusuf's projects, experience, or stack.",
};

interface Message {
  type: "system" | "user" | "response" | "thinking";
  text: string;
}

function findResponse(input: string): string {
  const normalized = input
    .toLowerCase()
    .replace(/[?!.,;:'"()\[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  // Exact word set for single-word keywords (prevents "hi" matching "this")
  const wordSet = new Set(normalized.split(" "));

  let bestScore = 0;
  let bestResponse = "";

  for (const entry of queryKB) {
    let score = 0;
    for (const key of entry.keys) {
      const isPhrase = key.includes(" ");
      const found = isPhrase ? normalized.includes(key) : wordSet.has(key);
      if (found) score += isPhrase ? 3 : key.length > 5 ? 2 : 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestResponse = entry.response;
    }
  }

  if (bestScore > 0) return bestResponse;
  return "Not sure I caught that. Try asking about his projects, tech stack, experience, or what he's currently working on.";
}


export default function QueryInterface() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pulse, setPulse] = useState(true);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => setPulse((p) => !p), 1200);
    return () => clearInterval(interval);
  }, []);

  async function handleSubmit(query: string) {
    if (!query.trim() || isLoading) return;
    setInput("");
    setIsLoading(true);

    setMessages((prev) => [
      ...prev,
      { type: "user", text: query },
      { type: "thinking", text: "" },
    ]);

    await new Promise((r) => setTimeout(r, 650 + Math.random() * 450));

    const response = findResponse(query);

    setMessages((prev) => [...prev.slice(0, -1), { type: "response", text: "" }]);

    let i = 0;
    const typeInterval = setInterval(() => {
      i++;
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { type: "response", text: response.slice(0, i) };
        return updated;
      });
      if (i >= response.length) {
        clearInterval(typeInterval);
        setIsLoading(false);
      }
    }, 14);
  }

  return (
    <section
      id="query"
      className="section-padding relative overflow-hidden"
      style={{ background: "rgba(5, 5, 5, 0.6)" }}
    >
      {/* Central ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(52,211,153,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6">
        {/* Header row */}
        <div className="mb-16">
          <RevealOnScroll>
            <SectionLabel>Query My Work</SectionLabel>
            <SectionTitle>Ask About My Portfolio</SectionTitle>
          </RevealOnScroll>
        </div>

        {/* Main two-column layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Left panel — info sidebar */}
          <RevealOnScroll delay={0.05} className="lg:w-[260px] flex-shrink-0">
            <div
              className="rounded-xl p-6 flex flex-col gap-6"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Status row */}
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full transition-opacity duration-700"
                  style={{
                    background: "var(--accent)",
                    boxShadow: "0 0 8px var(--accent)",
                    opacity: pulse ? 1 : 0.3,
                  }}
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: "var(--accent)" }}>
                  Live
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] ml-auto" style={{ color: "var(--text-dim)" }}>
                  Secure
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "var(--border)" }} />

              {/* Description */}
              <p className="text-[13px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                Ask anything about Yusuf&apos;s projects, stack, experience, or what he&apos;s building now.
              </p>

              {/* Bottom rule decoration */}
              <div className="mt-auto pt-4 flex flex-col gap-2" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="font-mono text-[10px]" style={{ color: "var(--text-dim)" }}>
                  portfolio_query — yusuf_oz
                </p>
                <p className="font-mono text-[10px] leading-[1.6]" style={{ color: "var(--text-secondary)", opacity: 0.75 }}>
                  * not an actual LLM.<br />powered by if/else &amp; good vibes.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right panel — terminal */}
          <RevealOnScroll delay={0.1} className="flex-1 min-w-0">
            {/* Gradient border wrapper */}
            <div
              className="h-full rounded-xl p-px"
              style={{
                background: "linear-gradient(135deg, rgba(52,211,153,0.35) 0%, rgba(52,211,153,0.05) 40%, rgba(34,211,238,0.15) 100%)",
              }}
            >
              <div
                className="h-full rounded-[11px] flex flex-col overflow-hidden"
                style={{ background: "var(--bg-primary)" }}
              >
                {/* Terminal title bar */}
                <div
                  className="flex items-center gap-3 px-5 py-3 flex-shrink-0"
                  style={{ borderBottom: "1px solid var(--border)", background: "rgba(10,10,10,0.8)" }}
                >
                  <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
                  <div className="ml-2 flex items-center gap-2">
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                      neural_query
                    </span>
                    <span style={{ color: "var(--border)", fontSize: "10px" }}>·</span>
                    <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                      yusuf_oz
                    </span>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full transition-opacity duration-700"
                      style={{
                        background: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent)",
                        opacity: pulse ? 1 : 0.2,
                      }}
                    />
                    <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                      ready
                    </span>
                  </div>
                </div>

                {/* Top glow bar */}
                <div
                  className="h-px flex-shrink-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.4) 40%, rgba(34,211,238,0.3) 70%, transparent 100%)",
                  }}
                />

                {/* Chat log */}
                <div
                  ref={chatRef}
                  data-lenis-prevent
                  className="flex-1 px-6 py-5 flex flex-col gap-4 overflow-y-auto"
                  style={{ maxHeight: "320px", minHeight: "220px" }}
                >
                  {messages.map((msg, i) => {
                    if (msg.type === "system") {
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <span className="font-mono text-[10px] mt-0.5 uppercase tracking-widest flex-shrink-0" style={{ color: "var(--text-dim)" }}>
                            SYS
                          </span>
                          <p className="font-mono text-[12px] leading-[1.7]" style={{ color: "var(--text-dim)" }}>
                            {msg.text}
                          </p>
                        </div>
                      );
                    }
                    if (msg.type === "user") {
                      return (
                        <div key={i} className="flex items-start gap-3">
                          <span className="font-mono text-[10px] mt-0.5 uppercase tracking-widest flex-shrink-0" style={{ color: "var(--accent)" }}>
                            YOU
                          </span>
                          <p className="font-mono text-[13px] leading-[1.7]" style={{ color: "var(--text-primary)" }}>
                            {msg.text}
                          </p>
                        </div>
                      );
                    }
                    if (msg.type === "thinking") {
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-3 rounded-lg px-4 py-3"
                          style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.1)" }}
                        >
                          <span className="font-mono text-[10px] uppercase tracking-widest flex-shrink-0" style={{ color: "rgba(52,211,153,0.5)" }}>
                            AI
                          </span>
                          <div className="flex gap-1.5 items-center">
                            {[0, 1, 2].map((j) => (
                              <span
                                key={j}
                                className="w-1.5 h-1.5 rounded-full thinking-dot"
                                style={{ background: "var(--text-dim)", animationDelay: `${j * 0.18}s` }}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    }
                    const isTyping = isLoading && i === messages.length - 1;
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-lg px-4 py-3"
                        style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.1)" }}
                      >
                        <span className="font-mono text-[10px] mt-0.5 uppercase tracking-widest flex-shrink-0" style={{ color: "rgba(52,211,153,0.5)" }}>
                          AI
                        </span>
                        <p className="text-[13px] leading-[1.7]" style={{ color: "var(--text-secondary)" }}>
                          {msg.text}
                          {isTyping && (
                            <span className="inline-block w-[2px] h-[14px] ml-[2px] align-middle thinking-cursor" style={{ background: "var(--accent)" }} />
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Input row */}
                <div
                  className="flex items-center gap-3 px-6 py-4 flex-shrink-0"
                  style={{ borderTop: "1px solid var(--border)", background: "rgba(5,5,5,0.6)" }}
                >
                  <span className="font-mono text-[14px]" style={{ color: "var(--accent)" }}>$</span>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSubmit(input);
                    }}
                    placeholder={isLoading ? "processing..." : "type your question here..."}
                    disabled={isLoading}
                    className="flex-1 bg-transparent outline-none font-mono text-[13px] placeholder:opacity-30 disabled:opacity-40"
                    style={{
                      color: "var(--text-primary)",
                      caretColor: "var(--accent)",
                    }}
                  />
                  <button
                    onClick={() => handleSubmit(input)}
                    className="flex-shrink-0 font-mono text-[11px] px-3 py-1.5 rounded transition-all duration-200"
                    style={{
                      border: "1px solid var(--border-accent)",
                      color: "var(--accent)",
                      background: "var(--accent-dim)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(52,211,153,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "var(--accent-dim)";
                    }}
                  >
                    enter ↵
                  </button>
                </div>

                {/* Suggestions */}
                <div
                  className="px-6 pb-5 pt-3 flex flex-wrap gap-2 flex-shrink-0"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.03)" }}
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] self-center mr-1" style={{ color: "var(--text-dim)" }}>
                    try:
                  </span>
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
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
