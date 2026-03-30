"use client";

import { useEffect, useRef, useState } from "react";
import { startMatrixRain } from "@/lib/matrixRain";

const BOOT_LINES = [
  "> initializing system...",
  "> loading portfolio_data...",
  "> verifying credentials...",
  "> signal: strong",
  "> status: ready",
];

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [showLogo, setShowLogo] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const stopRain = startMatrixRain(canvas);

    // Reveal boot lines sequentially
    BOOT_LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, 300 + i * 260);
    });

    // Show logo after all lines
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 300 + BOOT_LINES.length * 260 + 200);

    // Glitch then fade out
    const glitchTimer = setTimeout(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 350);
    }, 300 + BOOT_LINES.length * 260 + 700);

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
      stopRain();
    }, 300 + BOOT_LINES.length * 260 + 1100);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 300 + BOOT_LINES.length * 260 + 1600);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(glitchTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
      stopRain();
    };
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999] transition-opacity duration-500"
      style={{
        background: "var(--bg-primary)",
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? "none" : "all",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.12 }}
      />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-lg w-full px-8">
        {/* Boot log */}
        <div className="w-full">
          {visibleLines.map((line, i) => (
            <p
              key={i}
              className="font-mono text-[13px] leading-7 animate-[fadeIn_0.3s_ease-out]"
              style={{ color: "var(--text-dim)" }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Logo */}
        {showLogo && (
          <div
            className="mt-4 font-sans font-bold text-[32px] tracking-[-0.03em] transition-all duration-500"
            style={{
              color: glitch ? "var(--accent)" : "var(--text-primary)",
              textShadow: glitch ? "2px 0 rgba(74,222,128,0.5), -2px 0 rgba(103,232,249,0.5)" : "none",
              transform: glitch ? "skewX(-3deg)" : "none",
              letterSpacing: "-0.03em",
            }}
          >
            M.Y.{" "}
            <span style={{ color: "var(--accent)" }}>ÖZ</span>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
