"use client";

import { projects } from "@/data/portfolio";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import RevealOnScroll from "./ui/RevealOnScroll";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const grid = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="section-padding" style={{ background: "rgba(5, 5, 5, 0.6)" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <SectionLabel>Selected Work</SectionLabel>
          <SectionTitle>Systems I&apos;ve Built</SectionTitle>
        </RevealOnScroll>

        <div className="mt-12 flex flex-col gap-6">
          {/* Featured project — full width */}
          {featured && (
            <RevealOnScroll delay={0.1}>
              <ProjectCard project={featured} />
            </RevealOnScroll>
          )}

          {/* Grid of remaining projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grid.map((project, i) => (
              <RevealOnScroll key={project.name} delay={i * 0.1}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
