"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personal } from "@/data/portfolio";

const Typewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="font-mono font-medium text-[16px] tracking-[0.05em]" style={{ color: "var(--accent)" }}>
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
};

const SOCIAL_LINKS = [
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
    label: "Medium",
    href: personal.links.medium,
    color: "#ffffff",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
      </svg>
    )
  },
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
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    delay,
  },
});

interface HeroProps {
  bootDone: boolean;
}

export default function Hero({ bootDone }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden"
    >
      {/* ── Hero Aurora Layer — dramatic glows behind content ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary emerald aurora — centered, slow pulse */}
        <div
          className="absolute top-1/2 left-1/2 hero-aurora-primary"
          style={{
            width: "130%",
            height: "90%",
            background:
              "radial-gradient(ellipse at 45% 50%, rgba(52,211,153,0.18) 0%, rgba(52,211,153,0.06) 35%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        {/* Cyan accent — right side */}
        <div
          className="absolute top-[20%] right-[-10%] hero-aurora-secondary"
          style={{
            width: "55%",
            height: "65%",
            background:
              "radial-gradient(ellipse at 60% 40%, rgba(34,211,238,0.14) 0%, rgba(34,211,238,0.04) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        {/* Deep indigo — bottom left for color depth */}
        <div
          className="absolute bottom-[5%] left-[5%]"
          style={{
            width: "45%",
            height: "45%",
            background:
              "radial-gradient(ellipse, rgba(99,102,241,0.09) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
        />

        {/* Warm amber accent — top right, very subtle, breaks cold palette */}
        <div
          className="absolute top-[10%] right-[15%]"
          style={{
            width: "25%",
            height: "25%",
            background:
              "radial-gradient(ellipse, rgba(251,191,36,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Dot grid overlay for texture */}
      <div className="absolute inset-0 dot-bg opacity-20 pointer-events-none z-0" />

      {/* Seamless fog gradient to next section */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(5,5,5,0.4) 80%, var(--bg-primary) 100%)",
        }}
      />

      {/* Top edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -10%, transparent 60%, rgba(5,5,5,0.5) 100%)",
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 w-full h-[100svh] flex items-center justify-center">
        {bootDone && (
           <motion.div
             {...fadeUp(0.1)}
             className="relative z-10 w-full max-w-2xl flex flex-col items-center justify-center"
           >
               <motion.h1
                 {...fadeUp(0.15)}
                 className="leading-none mb-6 text-center relative select-none tracking-tight"
                 style={{
                   fontFamily: "var(--font-display)",
                   fontSize: "clamp(60px, 12vw, 130px)",
                   fontWeight: 700,
                   background: "linear-gradient(110deg, rgba(34, 211, 238, 0.9) 0%, rgba(16, 185, 129, 0.95) 100%)",
                   WebkitBackgroundClip: "text",
                   WebkitTextFillColor: "transparent",
                   padding: "10px",
                   letterSpacing: "-0.02em",
                 }}
               >
                 Yusuf ÖZ
               </motion.h1>

               <motion.div {...fadeUp(0.20)} className="h-[30px] mb-8 font-mono text-[11px] md:text-[14px] uppercase tracking-[0.2em] text-[var(--accent)] flex items-center justify-center py-2 px-8">
                 <span className="opacity-50 mr-2">[</span>
                 <Typewriter words={["Software Engineering Student", "Mobile & Web Developer", "Autonomous Systems Explorer"]} />
                 <span className="opacity-50 ml-2">]</span>
               </motion.div>

               <motion.p
                 {...fadeUp(0.25)}
                 className="font-sans font-medium mb-6 text-center text-balance"
                 style={{
                   fontSize: "clamp(18px, 2vw, 24px)",
                   color: "var(--text-secondary)",
                   maxWidth: "550px",
                 }}
               >
                 {personal.heroTagline}
               </motion.p>

               <motion.p
                 {...fadeUp(0.30)}
                 className="font-sans text-[14px] md:text-[15px] leading-[1.8] text-center text-balance opacity-80"
                 style={{ color: "var(--text-secondary)", maxWidth: "500px" }}
               >
                 I ship <strong className="text-[var(--text-primary)] font-semibold">real products</strong> to real users — Flutter apps on Google Play, a PWA serving <strong className="text-[var(--text-primary)] font-semibold">6,600+</strong> monthly visitors, and AI-integrated systems. Currently exploring <strong className="text-[var(--text-primary)] font-semibold">autonomous driving</strong> technologies.
               </motion.p>

               {/* Download CV */}
               <motion.a
                 {...fadeUp(0.40)}
                 href="/docs/cv.pdf"
                 download
                 className="group mt-8 mb-2 flex items-center gap-2.5 px-5 py-2.5 rounded-full font-mono text-[12px] uppercase tracking-[0.15em] transition-all duration-300"
                 style={{
                   border: "1px solid rgba(52,211,153,0.25)",
                   color: "var(--accent)",
                   background: "rgba(52,211,153,0.06)",
                 }}
                 onMouseEnter={(e) => {
                   const el = e.currentTarget as HTMLElement;
                   el.style.background = "rgba(52,211,153,0.14)";
                   el.style.borderColor = "var(--accent)";
                   el.style.boxShadow = "0 0 20px rgba(52,211,153,0.15)";
                 }}
                 onMouseLeave={(e) => {
                   const el = e.currentTarget as HTMLElement;
                   el.style.background = "rgba(52,211,153,0.06)";
                   el.style.borderColor = "rgba(52,211,153,0.25)";
                   el.style.boxShadow = "none";
                 }}
               >
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-y-[2px]">
                   <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                   <polyline points="7 10 12 15 17 10" />
                   <line x1="12" y1="15" x2="12" y2="3" />
                 </svg>
                 Download CV
               </motion.a>

               {/* Mobile Social Links — inline, no overlap risk */}
               <motion.div
                 {...fadeUp(0.50)}
                 className="flex md:hidden items-center gap-3 mt-4"
               >
                 {SOCIAL_LINKS.map((link) => (
                   <a
                     key={link.label}
                     href={link.href}
                     target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                     rel="noopener noreferrer"
                     className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                     aria-label={link.label}
                     style={{
                       background: "rgba(5,5,5,0.9)",
                       border: "1px solid var(--accent-muted)",
                       color: "var(--accent)",
                       boxShadow: "0 0 12px rgba(16,185,129,0.1)",
                     }}
                   >
                     {link.icon}
                   </a>
                 ))}
               </motion.div>
           </motion.div>
        )}

        {/* Molecular Social Hub — desktop only */}
        {bootDone && (
          <motion.div
            {...fadeUp(0.5)}
            className="hidden md:flex absolute bottom-12 left-12 z-20 flex-col justify-end"
          >
            <div className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest mb-6 opacity-60 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[var(--accent)]"></span>
              Comms Hub
            </div>

            <div className="relative w-[140px] h-[140px]">
              {/* Molecule Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                <polygon points="70,22 118,70 70,118 22,70" fill="none" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="1.5" />
                <circle cx="70" cy="70" r="3" fill="var(--accent)" opacity="0.3" />
                <line x1="70" y1="22" x2="70" y2="118" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" />
                <line x1="22" y1="70" x2="118" y2="70" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="1" />
              </svg>

              {SOCIAL_LINKS.map((link, i) => {
                const positions = [
                  { top: "0", left: "50%", transform: "translate(-50%, 0)" },
                  { top: "50%", right: "0", transform: "translate(0, -50%)" },
                  { bottom: "0", left: "50%", transform: "translate(-50%, 0)" },
                  { top: "50%", left: "0", transform: "translate(0, -50%)" },
                ];

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="absolute w-10 h-10 md:w-11 md:h-11 rounded-full transition-all duration-300 flex items-center justify-center z-10 group"
                    aria-label={link.label}
                    style={{
                      ...positions[i],
                      background: "rgba(5, 5, 5, 0.9)",
                      border: "1px solid var(--accent-muted)",
                      color: "var(--accent)",
                      boxShadow: "0 0 15px rgba(16, 185, 129, 0.1)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(16, 185, 129, 0.2)";
                      el.style.borderColor = "var(--accent)";
                      el.style.boxShadow = "0 0 25px rgba(16, 185, 129, 0.4)";
                      el.style.transform = `${positions[i].transform} scale(1.15)`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "rgba(5, 5, 5, 0.9)";
                      el.style.borderColor = "var(--accent-muted)";
                      el.style.boxShadow = "0 0 15px rgba(16, 185, 129, 0.1)";
                      el.style.transform = positions[i].transform;
                    }}
                  >
                    <span className="opacity-90 transition-transform duration-300 group-hover:scale-110">
                      {link.icon}
                    </span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
