"use client";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = "" }: SectionTitleProps) {
  return (
    <h2
      className={`font-sans font-bold text-[48px] leading-tight tracking-tight mt-3 ${className}`}
      style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}
