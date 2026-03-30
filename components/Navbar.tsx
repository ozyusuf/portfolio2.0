"use client";

import { useState } from "react";
const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#domains", label: "Domains" },
  { href: "#query", label: "Query" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(10, 10, 12, 0.85)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-sans font-bold text-[18px] tracking-[-0.02em] transition-colors duration-300"
          style={{ color: "var(--text-primary)" }}
        >
          M.Y.
          <span style={{ color: "var(--accent)" }}>ÖZ</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-mono text-[12px] uppercase tracking-[0.05em] transition-colors duration-300 group"
                style={{ color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                }}
              >
                <span style={{ color: "var(--text-dim)" }}>{"//"}</span>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--text-secondary)",
              transform: mobileOpen ? "rotate(45deg) translate(3.5px, 3.5px)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--text-secondary)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: "var(--text-secondary)",
              transform: mobileOpen ? "rotate(-45deg) translate(3.5px, -3.5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{ borderColor: "var(--border)", background: "rgba(10,10,12,0.98)" }}
        >
          <ul className="flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-6 py-3 font-mono text-[12px] uppercase tracking-[0.05em] transition-colors duration-200"
                  style={{ color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                  }}
                >
                  <span style={{ color: "var(--text-dim)" }}>{"//"}</span>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
