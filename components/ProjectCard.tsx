"use client";

import { useState } from "react";
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

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col rounded-xl transition-all duration-300 overflow-hidden"
      style={{
        background: "var(--bg-card)",
        border: hovered ? "1px solid var(--border-accent)" : "1px solid var(--border)",
        padding: "36px",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 8px 40px rgba(74,222,128,0.08)" : "none",
      }}
    >
      {/* Accent top line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
        style={{
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4 gap-4">
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
        className="text-[14px] leading-[1.7] mb-6 flex-1"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>
    </div>
  );
}
