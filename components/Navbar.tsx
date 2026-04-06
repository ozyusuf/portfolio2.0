"use client";

import { useState, useEffect } from "react";
import { lenisInstance } from "./SmoothScroll";

const NAV_LINKS = [
  { href: "#home", label: "Index" },
  { href: "#work", label: "Work" },
  { href: "#domains", label: "Domains" },
  { href: "#about", label: "About" },
  { href: "#direction", label: "Direction" },
  { href: "#query", label: "Query" },
  { href: "#contact", label: "Contact" },
];

// Mobile dock — 5 key destinations, enough room on any phone
const MOBILE_NAV = [
  { href: "#home",    label: "Index"   },
  { href: "#work",    label: "Work"    },
  { href: "#about",   label: "About"   },
  { href: "#query",   label: "Query"   },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [dockHovered, setDockHovered] = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);

        const sections = NAV_LINKS.map((l) => l.href.substring(1));
        let current = "#home";

        for (const section of sections) {
          if (section === "home") continue;
          const el = document.getElementById(section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.6) current = `#${section}`;
          }
        }
        setActiveSection(current);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isExpanded = dockHovered || !scrolled;

  const handleNav = (href: string) => {
    if (lenisInstance) {
      if (href === "#home") { lenisInstance.scrollTo(0); return; }
      const el = document.querySelector(href);
      if (el) lenisInstance.scrollTo(el as HTMLElement);
    } else {
      if (href === "#home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ── Mobile Bottom Dock (hidden on md+) ──────────────────── */}
      <nav className="md:hidden fixed bottom-3 left-3 right-3 z-50">
        <div
          className="relative rounded-[20px] overflow-hidden"
          style={{
            background: "rgba(4, 6, 14, 0.88)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: "1px solid rgba(52,211,153,0.22)",
            boxShadow:
              "0 24px 64px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.03) inset",
          }}
        >
          {/* Top glow line */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.6) 25%, rgba(34,211,238,0.5) 75%, transparent 100%)",
            }}
          />

          {/* HUD corner marks */}
          <div
            className="absolute top-2.5 left-2.5 w-2.5 h-2.5 pointer-events-none"
            style={{
              borderTop: "1px solid rgba(52,211,153,0.5)",
              borderLeft: "1px solid rgba(52,211,153,0.5)",
            }}
          />
          <div
            className="absolute top-2.5 right-2.5 w-2.5 h-2.5 pointer-events-none"
            style={{
              borderTop: "1px solid rgba(52,211,153,0.5)",
              borderRight: "1px solid rgba(52,211,153,0.5)",
            }}
          />
          <div
            className="absolute bottom-2.5 left-2.5 w-2.5 h-2.5 pointer-events-none"
            style={{
              borderBottom: "1px solid rgba(52,211,153,0.3)",
              borderLeft: "1px solid rgba(52,211,153,0.3)",
            }}
          />
          <div
            className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 pointer-events-none"
            style={{
              borderBottom: "1px solid rgba(52,211,153,0.3)",
              borderRight: "1px solid rgba(52,211,153,0.3)",
            }}
          />

          {/* Nav items */}
          <div className="flex items-stretch justify-around px-1 py-3">
            {MOBILE_NAV.map((link, index) => {
              // Direction is between About & Query on mobile — map it to About
              const mobileActive = activeSection === "#direction" ? "#about" : activeSection === "#domains" ? "#work" : activeSection;
              const isActive = mobileActive === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="flex flex-col items-center gap-[5px] flex-1 py-1.5 px-0.5 rounded-[14px] transition-all duration-300 relative"
                  style={{
                    background: isActive
                      ? "rgba(52,211,153,0.09)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(52,211,153,0.18)"
                      : "1px solid transparent",
                    boxShadow: isActive
                      ? "0 0 14px rgba(52,211,153,0.1) inset"
                      : "none",
                  }}
                >
                  {/* HUD index */}
                  <span
                    className="font-mono leading-none"
                    style={{
                      fontSize: "8px",
                      color: isActive ? "var(--accent)" : "rgba(113,113,122,0.45)",
                      letterSpacing: "0.08em",
                    }}
                  >
                    0{index}
                  </span>

                  {/* Label */}
                  <span
                    className="font-sans font-semibold uppercase leading-none"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.07em",
                      color: isActive ? "var(--accent)" : "var(--text-dim)",
                      textShadow: isActive
                        ? "0 0 10px rgba(52,211,153,0.4)"
                        : "none",
                    }}
                  >
                    {link.label}
                  </span>

                  {/* Active pulse dot */}
                  {isActive && (
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{
                        background: "var(--accent)",
                        boxShadow: "0 0 6px var(--accent), 0 0 12px rgba(52,211,153,0.4)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Desktop Vertical Sci-Fi Dock (hidden on mobile) ─────── */}
      <nav
        onMouseEnter={() => setDockHovered(true)}
        onMouseLeave={() => setDockHovered(false)}
        className="hidden md:flex flex-col items-start justify-center py-10 pl-5 pr-4 z-50 pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          position: "fixed",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          opacity: isExpanded ? 1 : 0.65,
          background: isExpanded
            ? "linear-gradient(270deg, rgba(8,12,16,0.95) 0%, rgba(16,185,129,0.08) 100%)"
            : "linear-gradient(270deg, rgba(8,12,16,0.6) 0%, rgba(16,185,129,0.02) 100%)",
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(16,185,129,0.15)",
          borderRight: "none",
          borderLeft: "none",
          boxShadow: isExpanded
            ? "-20px 0 40px rgba(0,0,0,0.7), inset -5px 0 20px rgba(16,185,129,0.15)"
            : "none",
          clipPath:
            "polygon(0 20px, 20px 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
        }}
      >
        {/* Invisible hitbox */}
        <div className="absolute top-0 bottom-0 left-[-80px] w-[80px] bg-transparent pointer-events-auto" />

        {/* Ruler segments */}
        <div
          className="absolute top-[15%] h-[25%] left-0 w-[4px] pointer-events-none opacity-[0.35]"
          style={{
            background:
              "repeating-linear-gradient(to bottom, var(--accent) 0, var(--accent) 1px, transparent 1px, transparent 5px)",
          }}
        />
        <div className="absolute top-[10%] h-[35%] left-2 w-[1px] bg-[var(--accent)] opacity-20 pointer-events-none" />
        <div
          className="absolute bottom-[15%] h-[20%] right-1.5 w-[3px] pointer-events-none opacity-[0.35]"
          style={{
            background:
              "repeating-linear-gradient(to bottom, var(--accent) 0, var(--accent) 1px, transparent 1px, transparent 6px)",
          }}
        />
        <div className="absolute bottom-[10%] h-[30%] right-0 w-[1px] bg-[var(--accent)] opacity-20 pointer-events-none" />

        <ul
          className="relative z-10 flex flex-col gap-8 my-6 items-start transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
          style={{ width: isExpanded ? "110px" : "18px" }}
        >
          {NAV_LINKS.map((link, index) => {
            const isActive = activeSection === link.href;
            return (
              <li key={link.href} className="w-full">
                <button
                  onClick={() => handleNav(link.href)}
                  className="group relative flex flex-col items-start justify-center w-[110px] transition-all duration-300"
                  onMouseEnter={(e) => {
                    if (!isExpanded) return;
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    const span = e.currentTarget.querySelector(".nav-label") as HTMLElement;
                    if (span && !isActive) span.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    const span = e.currentTarget.querySelector(".nav-label") as HTMLElement;
                    if (span && !isActive) span.style.color = "var(--text-secondary)";
                  }}
                >
                  <span
                    className={`text-[10px] font-mono transition-opacity duration-300 mb-0.5 ${
                      isActive
                        ? "text-[var(--accent)] opacity-100 drop-shadow-[0_0_8px_var(--accent)]"
                        : "text-[var(--accent)] opacity-40 group-hover:opacity-100"
                    }`}
                  >
                    0{index}
                  </span>
                  <span
                    className="nav-label font-sans font-semibold text-[11px] md:text-[12px] uppercase tracking-[0.15em] transition-all duration-500 whitespace-nowrap"
                    style={{
                      color: isActive ? "var(--accent)" : "var(--text-secondary)",
                      textShadow: isActive ? "0 0 12px rgba(16,185,129,0.4)" : "none",
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded ? "translateX(0)" : "translateX(-10px)",
                    }}
                  >
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-[-6px] left-0 h-[1px] bg-[var(--accent)] transition-all duration-500 ease-out shadow-[0_0_8px_var(--accent)] ${
                      isActive
                        ? "w-[15px] opacity-100"
                        : "w-0 opacity-0 group-hover:w-[20px] group-hover:opacity-100"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
