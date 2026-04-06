"use client";

import { personal } from "@/data/portfolio";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import RevealOnScroll from "./ui/RevealOnScroll";

const SOCIAL_LINKS = [
  { 
    label: "Email", 
    href: `mailto:${personal.email}`,
    color: "#ff6b6b",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    )
  },
  { 
    label: "LinkedIn", 
    href: personal.links.linkedin,
    color: "#0a66c2",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  { 
    label: "GitHub", 
    href: personal.links.github,
    color: "#10b981",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    )
  }
];

const hexToRgb = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r}, ${g}, ${b}`;
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding text-center"
      style={{ background: "rgba(5, 5, 5, 0.6)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll className="flex flex-col items-center gap-4">
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle>Let&apos;s Connect</SectionTitle>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <p
            className="mt-6 text-[16px] leading-[1.8] max-w-[480px] mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Open to internship opportunities, collaboration on intelligent systems,
            or just a good technical conversation.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center"
                aria-label={link.label}
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--text-secondary)",
                  background: "var(--bg-card)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  const rgb = hexToRgb(link.color);
                  el.style.borderColor = `rgba(${rgb}, 0.5)`;
                  el.style.color = link.color;
                  el.style.background = `rgba(${rgb}, 0.08)`;
                  el.style.boxShadow = `0 8px 24px rgba(${rgb}, 0.15), inset 0 0 0 1px rgba(${rgb}, 0.2)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.color = "var(--text-secondary)";
                  el.style.background = "var(--bg-card)";
                  el.style.boxShadow = "none";
                }}
              >
                <span style={{ opacity: 0.8, transform: "scale(1.2)" }}>{link.icon}</span>
              </a>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
