"use client";

interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p
      className="font-mono text-[11px] uppercase tracking-[0.15em]"
      style={{ color: "var(--accent)" }}
    >
      <span style={{ color: "var(--text-dim)" }}>← </span>
      {children}
    </p>
  );
}
