"use client";

import { personal } from "@/data/portfolio";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding text-center"
      style={{ background: "var(--bg-elevated)" }}
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
            {/* Primary: Email */}
            <a
              href={`mailto:${personal.email}`}
              className="font-mono text-[13px] px-6 py-3 rounded-full font-medium transition-all duration-300"
              style={{
                background: "var(--accent)",
                color: "#0a0a0c",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 0 30px rgba(74,222,128,0.3)";
                el.style.background = "var(--accent-muted)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "none";
                el.style.background = "var(--accent)";
              }}
            >
              {personal.email}
            </a>

            {/* Secondary: LinkedIn */}
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] px-6 py-3 rounded-full transition-all duration-300"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-secondary)";
              }}
            >
              LinkedIn
            </a>

            {/* Secondary: GitHub */}
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] px-6 py-3 rounded-full transition-all duration-300"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-secondary)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent)";
                el.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-secondary)";
              }}
            >
              GitHub
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
