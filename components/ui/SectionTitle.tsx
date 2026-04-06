"use client";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`font-sans font-bold text-[40px] md:text-[48px] leading-tight tracking-tight mt-3 text-balance ${className}`}
      style={{ color: "var(--text-primary)", letterSpacing: "-0.03em", textShadow: "0 4px 24px rgba(255,255,255,0.06)" }}
    >
      {children}
    </h2>
  );
}
