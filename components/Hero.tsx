"use client";

import { motion, Easing } from "framer-motion";
import { personal } from "@/data/portfolio";

const SOCIAL_LINKS = [
  { label: "GitHub", href: personal.links.github },
  { label: "LinkedIn", href: personal.links.linkedin },
  { label: "Medium", href: personal.links.medium },
  { label: "Email", href: `mailto:${personal.email}` },
];

const easeOut: Easing = "easeOut";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: easeOut, delay },
});

interface HeroProps {
  bootDone: boolean;
}

export default function Hero({ bootDone }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center section-padding"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 w-full">
        {bootDone && (
          <>
            <motion.p
              {...fadeUp(0)}
              className="font-mono text-[11px] uppercase tracking-[0.15em] mb-6"
              style={{ color: "var(--accent)" }}
            >
              <span style={{ color: "var(--text-dim)" }}>{"//"} </span>
              Who Am I
            </motion.p>

            <motion.h1
              {...fadeUp(0.12)}
              className="font-sans font-bold leading-none tracking-tight mb-6"
              style={{
                fontSize: "clamp(42px, 6vw, 72px)",
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
              }}
            >
              Mahmut Yusuf
              <br />
              <span style={{ color: "var(--accent)" }}>Öz</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.24)}
              className="font-sans font-medium mb-6"
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                color: "var(--text-secondary)",
                maxWidth: "600px",
              }}
            >
              {personal.heroTagline}
            </motion.p>

            <motion.p
              {...fadeUp(0.36)}
              className="font-sans text-[16px] leading-[1.8] mb-10"
              style={{ color: "var(--text-secondary)", maxWidth: "560px" }}
            >
              I ship{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                real products
              </strong>{" "}
              to real users — Flutter apps on Google Play, a PWA serving{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                6,600+
              </strong>{" "}
              monthly visitors, and AI-integrated systems. Currently exploring{" "}
              <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                autonomous driving
              </strong>{" "}
              and multi-agent reinforcement learning.
            </motion.p>

            <motion.div {...fadeUp(0.48)} className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] px-4 py-2 rounded-full transition-all duration-300"
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
                  {link.label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
