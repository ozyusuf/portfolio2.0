"use client";

import { useState } from "react";
import { capabilities } from "@/data/portfolio";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function Capabilities() {
  return (
    <section
      id="domains"
      className="section-padding"
      style={{ background: "rgba(5, 5, 5, 0.6)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <SectionLabel>Capabilities</SectionLabel>
          <SectionTitle>Domains</SectionTitle>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {capabilities.map((cap, i) => (
            <RevealOnScroll key={cap.icon} delay={i * 0.1} className="h-full">
              <CapabilityCard cap={cap} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

interface Cap {
  icon: string;
  title: string;
  description: string;
  tools: string;
}

function CapabilityCard({ cap }: { cap: Cap }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-full rounded-xl p-5 md:p-8 transition-all duration-500 flex flex-col gap-4 group overflow-hidden"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        boxShadow: hovered ? "0 20px 40px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)" : "inset 0 1px 1px rgba(255,255,255,0.02)",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
      {/* Soft Top Glow overlay on Hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, var(--accent-muted), transparent)",
          opacity: hovered ? 0.5 : 0,
        }}
      />
      <p className="font-mono text-[13px]" style={{ color: "var(--accent)" }}>
        <span style={{ color: "var(--text-dim)" }}>&gt; </span>
        {cap.icon}
      </p>
      <h3
        className="font-sans font-semibold text-[20px] leading-tight"
        style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
      >
        {cap.title}
      </h3>
      <p className="text-[14px] leading-[1.7] flex-1" style={{ color: "var(--text-secondary)" }}>
        {cap.description}
      </p>
      <p className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
        {cap.tools}
      </p>
    </div>
  );
}
