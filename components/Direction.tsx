"use client";

import { useState } from "react";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import TechTag from "./ui/TechTag";
import RevealOnScroll from "./ui/RevealOnScroll";

const DIRECTION_TAGS = [
  "Autonomous Driving",
  "Sensor Fusion",
  "Deep Learning for Perception",
  "Motion Planning & Control",
  "Functional Safety",
];

export default function Direction() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="direction" className="section-padding" style={{ background: "rgba(5, 5, 5, 0.6)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <SectionLabel>Current Direction</SectionLabel>
          <SectionTitle>Where I&apos;m Heading</SectionTitle>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-12">
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative rounded-xl p-6 md:p-12 overflow-hidden transition-all duration-300"
            style={{
              background: "var(--bg-card)",
              border: hovered ? "1px solid var(--border-accent)" : "1px solid var(--border)",
              boxShadow: hovered ? "0 0 60px rgba(74,222,128,0.06)" : "none",
            }}
          >
            {/* Radial glow top-right */}
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background: "radial-gradient(circle at top right, rgba(74,222,128,0.08) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col gap-6 max-w-[720px]">
              <h3
                className="font-sans font-semibold text-[26px] leading-tight"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                Autonomous Driving Technologies
              </h3>

              <p className="text-[16px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                I continue to build and ship{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  mobile and web applications
                </strong>
                , but my next chapter is{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  autonomous driving
                </strong>
                — from sensor fusion and environmental perception to motion planning and vehicle control. That&apos;s where I&apos;m specializing.
              </p>

              <div className="flex flex-wrap gap-2">
                {DIRECTION_TAGS.map((tag) => (
                  <TechTag key={tag} accent>
                    {tag}
                  </TechTag>
                ))}
              </div>
            </div>

            {/* Glow indicator */}
            <div
              className="absolute bottom-8 right-8 w-3 h-3 rounded-full"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 12px var(--accent)",
                opacity: 0.6,
              }}
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
