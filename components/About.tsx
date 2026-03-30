"use client";

import { education, certifications, experience } from "@/data/portfolio";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: "var(--bg-elevated)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <SectionLabel>About / Mindset</SectionLabel>
          <SectionTitle>How I Think</SectionTitle>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
          {/* Left: bio */}
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-col gap-5">
              <p className="text-[16px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                I&apos;m a{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  Software Engineering student
                </strong>{" "}
                at Muğla Sıtkı Koçman University with a bias toward{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  building and shipping.
                </strong>{" "}
                I don&apos;t just have side projects — I have products that real people use every day.
              </p>

              <p className="text-[16px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                I&apos;ve published apps on{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  Google Play
                </strong>
                , built a PWA that serves{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  thousands of users monthly
                </strong>
                , and worked on production systems during internships. I care about clean architecture
                as much as I care about shipping on time.
              </p>

              <p className="text-[16px] leading-[1.8]" style={{ color: "var(--text-secondary)" }}>
                Currently, I&apos;m deepening my work in{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  autonomous systems
                </strong>{" "}
                through Turkey&apos;s National Technology Academy — a program supported by the Ministry of
                Industry and Technology. The intersection of embedded perception and autonomous
                decision-making is where I&apos;m headed.
              </p>

              <div className="mt-4">
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.1em] mb-3"
                  style={{ color: "var(--accent)" }}
                >
                  ← Experience
                </p>
                <div className="flex flex-col gap-4">
                  {experience.map((exp) => (
                    <div key={exp.role} className="flex flex-col gap-1">
                      <div className="flex items-baseline justify-between gap-4">
                        <span
                          className="font-sans font-medium text-[15px]"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {exp.role}
                        </span>
                        <span
                          className="font-mono text-[11px] flex-shrink-0"
                          style={{ color: "var(--text-dim)" }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <span
                        className="font-mono text-[12px]"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {exp.company}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: sidebar */}
          <RevealOnScroll delay={0.2}>
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)", background: "var(--bg-card)" }}
            >
              {/* Education */}
              <div className="p-8">
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.1em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  ← Education
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-dim)" }}>— </span>
                    {education.degree}
                  </p>
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-dim)" }}>— </span>
                    {education.university}
                  </p>
                  <p className="text-[13px] font-mono" style={{ color: "var(--text-dim)" }}>
                    {education.period}
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div
                className="p-8"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.1em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  ← Certifications
                </p>
                <div className="flex flex-col gap-2">
                  {certifications.map((cert) => (
                    <div key={cert.name}>
                      <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--text-dim)" }}>— </span>
                        {cert.name}
                      </p>
                      <p className="text-[12px] font-mono" style={{ color: "var(--text-dim)" }}>
                        {cert.issuer} · {cert.period}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div
                className="p-8"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.1em] mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  ← Languages
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-dim)" }}>— </span>
                    Turkish
                  </p>
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-dim)" }}>— </span>
                    English
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
