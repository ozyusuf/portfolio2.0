"use client";

import { useEffect, useState, useCallback } from "react";

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"counting" | "hold" | "exit">("counting");

  // Stable reference to avoid re-triggering effect
  const stableComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    const duration = 2400; // 2.4s ease-out count
    const start = performance.now();

    let rafId: number;

    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1);
      // Ease-out cubic — starts brisk, settles smoothly at 100
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        // Hold at 100 briefly, then exit
        setPhase("hold");
        setTimeout(() => {
          setPhase("exit");
          setTimeout(stableComplete, 600);
        }, 350);
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [stableComplete]);

  const isExit = phase === "exit";

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "#04060e",
        opacity: isExit ? 0 : 1,
        transform: isExit ? "scale(1.04)" : "scale(1)",
        transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: isExit ? "none" : "all",
      }}
    >
      {/* Same star field as main site — visual consistency */}
      <div className="space-stars" style={{ position: "absolute" }} />

      {/* Living glow — intensifies as counter rises */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "45vw",
          height: "45vw",
          maxWidth: "550px",
          maxHeight: "550px",
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(52,211,153,${(0.02 + count * 0.0015).toFixed(3)}) 0%, rgba(34,211,238,${(0.01 + count * 0.0005).toFixed(3)}) 40%, transparent 70%)`,
          filter: "blur(70px)",
          transition: "background 0.1s linear",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Giant counter */}
        <span
          className="leading-none select-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(110px, 22vw, 240px)",
            fontWeight: 700,
            letterSpacing: "-0.04em",
            fontVariantNumeric: "tabular-nums",
            background:
              "linear-gradient(110deg, rgba(34,211,238,0.85) 0%, rgba(52,211,153,0.95) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {count.toString().padStart(2, "0")}
        </span>

        {/* Thin progress line */}
        <div
          className="mt-6 rounded-full overflow-hidden"
          style={{
            width: "clamp(100px, 18vw, 180px)",
            height: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: `${count}%`,
              background:
                "linear-gradient(90deg, rgba(34,211,238,0.6), var(--accent))",
              transition: "width 0.08s linear",
            }}
          />
        </div>

        {/* Minimal label */}
        <p
          className="mt-6 font-mono uppercase tracking-[0.3em]"
          style={{ fontSize: "11px", color: "var(--text-secondary)", opacity: 0.6 }}
        >
          Yusuf Öz&ensp;·&ensp;Portfolio
        </p>
      </div>
    </div>
  );
}
