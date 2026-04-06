"use client";

import { useEffect, useRef } from "react";

interface Nebula {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
  bg: string;
  blur: number;
  speed: number;
}

const NEBULAE: Nebula[] = [
  {
    top: "5%", left: "-10%", width: "60vw", height: "55vh",
    bg: "radial-gradient(ellipse, rgba(52,211,153,0.18) 0%, transparent 65%)",
    blur: 70, speed: 0.03,
  },
  {
    top: "40%", right: "-15%", width: "50vw", height: "50vh",
    bg: "radial-gradient(ellipse, rgba(34,211,238,0.13) 0%, transparent 65%)",
    blur: 80, speed: -0.02,
  },
  {
    bottom: "5%", left: "10%", width: "55vw", height: "40vh",
    bg: "radial-gradient(ellipse, rgba(52,211,153,0.11) 0%, transparent 65%)",
    blur: 100, speed: 0.015,
  },
  {
    top: "20%", right: "5%", width: "35vw", height: "35vh",
    bg: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
    blur: 90, speed: -0.025,
  },
];

export default function ParallaxNebulae() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const scrollY = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    function animate() {
      currentY.current += (scrollY.current - currentY.current) * 0.1;

      const children = containerRef.current?.children;
      if (children) {
        for (let i = 0; i < children.length; i++) {
          const el = children[i] as HTMLElement;
          const speed = NEBULAE[i]?.speed ?? 0;
          el.style.transform = `translate3d(0, ${currentY.current * speed}px, 0)`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {NEBULAE.map((n, i) => (
        <div
          key={i}
          className="space-nebula"
          style={{
            top: n.top,
            left: n.left,
            right: n.right,
            bottom: n.bottom,
            width: n.width,
            height: n.height,
            background: n.bg,
            filter: `blur(${n.blur}px)`,
          }}
        />
      ))}
    </div>
  );
}
