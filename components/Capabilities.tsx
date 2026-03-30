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
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <SectionLabel>Capabilities</SectionLabel>
          <SectionTitle>Domains</SectionTitle>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {capabilities.map((cap, i) => (
            <RevealOnScroll key={cap.icon} delay={i * 0.1}>
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
      className="rounded-xl p-8 transition-all duration-300 flex flex-col gap-4"
      style={{
        background: "var(--bg-card)",
        border: hovered ? "1px solid var(--border-accent)" : "1px solid var(--border)",
        transform: hovered ? "translateY(-4px)" : "none",
      }}
    >
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
