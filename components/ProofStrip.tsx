"use client";

import { useEffect, useRef, useState } from "react";
import { metrics } from "@/data/portfolio";
import { useCountUp } from "@/hooks/useCountUp";

interface MetricItemProps {
  value: number;
  display?: string;
  suffix?: string;
  prefix?: string;
  label: string;
  start: boolean;
}

function MetricItem({ value, display, suffix = "", prefix = "", label, start }: MetricItemProps) {
  const count = useCountUp(value, 1500, start);

  const formattedValue = display
    ? display
    : `${prefix}${count.toLocaleString()}${suffix}`;

  return (
    <div className="group flex flex-col items-center justify-center py-8 w-full transition-transform duration-500 hover:scale-[1.02] cursor-default">
      {/* Value */}
      <span
        className="font-bold relative z-10 transition-shadow duration-500 group-hover:drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(36px, 6vw, 72px)",
          letterSpacing: "-0.03em",
          color: "var(--text-primary)",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {start ? formattedValue : `${prefix}0${suffix}`}
      </span>
      
      {/* Label and Centered Line */}
      <div className="flex flex-col items-center justify-center mt-4">
         <span className="w-6 h-[2px] bg-[var(--accent)]/40 rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-[var(--accent)] mb-3" />
         <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[var(--text-secondary)] transition-colors duration-300 group-hover:text-[var(--text-primary)]">
            {label}
         </span>
      </div>
    </div>
  );
}

export default function ProofStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-12 md:py-20 w-full z-10" style={{ background: "rgba(5, 5, 5, 0.55)" }}>
      <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {metrics.map((m) => (
            <MetricItem
              key={m.label}
              value={m.value}
              display={m.display}
              suffix={m.suffix}
              prefix={m.prefix}
              label={m.label}
              start={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
