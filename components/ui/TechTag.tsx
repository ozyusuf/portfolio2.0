"use client";

interface TechTagProps {
  children: React.ReactNode;
  accent?: boolean;
}

export default function TechTag({ children, accent = false }: TechTagProps) {
  if (accent) {
    return (
      <span
        className="inline-block px-3 py-1 rounded-full font-mono text-[11px] tracking-[0.02em]"
        style={{
          border: "1px solid var(--border-accent)",
          background: "var(--accent-dim)",
          color: "var(--accent)",
        }}
      >
        {children}
      </span>
    );
  }
  return (
    <span
      className="inline-block px-2 py-0.5 rounded-full font-mono text-[11px] tracking-[0.02em]"
      style={{
        border: "1px solid var(--border)",
        background: "rgba(255,255,255,0.03)",
        color: "var(--text-dim)",
      }}
    >
      {children}
    </span>
  );
}
