"use client";

import { useState, useRef } from "react";
import TechTag from "./ui/TechTag";

interface Project {
  name: string;
  featured: boolean;
  tech: string[];
  description: string;
  stats?: { value: string; label: string }[] | null;
  link: { url: string; label: string } | null;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col h-full rounded-xl transition-all duration-500 overflow-hidden group"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        boxShadow: hovered ? "0 20px 40px -20px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)" : "inset 0 1px 1px rgba(255,255,255,0.02)",
        padding: "clamp(20px, 5vw, 36px)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Spotlight Effect overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(800px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(255,255,255,0.03), transparent 40%)",
          zIndex: 0
        }}
      />
      {/* Soft Top Glow overlay on Hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent, var(--accent-muted), transparent)",
          opacity: hovered ? 0.5 : 0,
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between mb-4 gap-4">
        <h3
          className="font-sans font-semibold text-[22px] leading-tight"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
        >
          {project.name}
        </h3>
        {project.link && (
          <a
            href={project.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 font-mono text-[11px] px-3 py-1 rounded-full transition-all duration-300"
            style={{
              border: "1px solid var(--border-accent)",
              color: "var(--accent)",
              background: "var(--accent-dim)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(74,222,128,0.15)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--accent-dim)";
            }}
          >
            → {project.link.label}
          </a>
        )}
      </div>

      {/* Stats (featured only) */}
      {project.featured && project.stats && (
        <div className="flex flex-wrap gap-4 mb-4">
          {project.stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-1">
              <span className="font-mono text-[13px] font-medium" style={{ color: "var(--accent)" }}>
                {stat.value}
              </span>
              <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <p
        className="relative z-10 text-[14px] leading-[1.7] mb-6 flex-1 text-balance"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>
    </div>
  );
}
