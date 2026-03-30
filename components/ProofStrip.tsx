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
    <div className="flex flex-col items-center gap-2 py-8 px-4">
      <span
        className="font-sans font-bold metric-number"
        style={{
          fontSize: "clamp(32px, 4vw, 42px)",
          letterSpacing: "-0.03em",
          color: "var(--accent)",
          lineHeight: 1,
        }}
      >
        {start ? formattedValue : `${prefix}0${suffix}`}
      </span>
      <span
        className="font-mono text-[11px] uppercase tracking-[0.1em] text-center"
        style={{ color: "var(--text-dim)" }}
      >
        {label}
      </span>
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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--bg-elevated)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
          style={{ borderColor: "var(--border)" }}>
          {metrics.map((m) => (
            <MetricItem
              key={m.label}
              value={m.value}
              display={"display" in m ? m.display : undefined}
              suffix={"suffix" in m ? m.suffix : undefined}
              prefix={"prefix" in m ? m.prefix : undefined}
              label={m.label}
              start={visible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
