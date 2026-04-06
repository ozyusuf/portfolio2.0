"use client";

import { useMemo } from "react";
import { education, experience, academy } from "@/data/portfolio";
import SectionLabel from "./ui/SectionLabel";
import SectionTitle from "./ui/SectionTitle";
import RevealOnScroll from "./ui/RevealOnScroll";

/* ── Progress calculation ─────────────────────────────────── */

type TopicStatus = "completed" | "in-progress" | "upcoming";

interface TopicProgress {
  name: string;
  company: string;
  period: string;
  total: number;
  completed: number;
  status: TopicStatus;
}

function calculateProgress() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let totalSessions = 0;
  let completedSessions = 0;

  const topics: TopicProgress[] = academy.specialization.topics.map((t) => {
    const total = t.sessions.length;
    const completed = t.sessions.filter((s) => {
      const [y, m, d] = s.split("-").map(Number);
      return new Date(y, m - 1, d) <= today;
    }).length;

    totalSessions += total;
    completedSessions += completed;

    const status: TopicStatus =
      completed === total ? "completed" : completed > 0 ? "in-progress" : "upcoming";

    return { name: t.name, company: t.company, period: t.period, total, completed, status };
  });

  return {
    totalSessions,
    completedSessions,
    percent: Math.round((completedSessions / totalSessions) * 100),
    topics,
  };
}

/* ── Sub-components ───────────────────────────────────────── */

function StatusDot({ status }: { status: TopicStatus }) {
  if (status === "completed") {
    return (
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    );
  }
  if (status === "in-progress") {
    return (
      <div className="w-5 h-5 rounded-full flex-shrink-0 academy-pulse" style={{
        background: "rgba(52,211,153,0.1)",
        border: "2px solid rgba(52,211,153,0.5)",
        boxShadow: "0 0 6px rgba(52,211,153,0.15)",
      }} />
    );
  }
  return (
    <div className="w-5 h-5 rounded-full flex-shrink-0" style={{
      border: "2px solid var(--text-dim)",
      opacity: 0.4,
    }} />
  );
}

function TopicRow({ topic }: { topic: TopicProgress }) {
  const isActive = topic.status === "in-progress";
  const isDone = topic.status === "completed";

  return (
    <div
      className="flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300"
      style={{
        background: isActive ? "rgba(52,211,153,0.03)" : "transparent",
        border: isActive ? "1px solid rgba(52,211,153,0.1)" : "1px solid transparent",
      }}
    >
      <StatusDot status={topic.status} />

      <div className="flex-1 min-w-0 flex items-baseline gap-2">
        <span
          className="font-sans font-medium text-[14px]"
          style={{ color: isDone || isActive ? "var(--text-primary)" : "var(--text-dim)" }}
        >
          {topic.name}
        </span>
        {isActive && (
          <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
            Now
          </span>
        )}
      </div>

      <span className="font-mono text-[11px] flex-shrink-0" style={{ color: "var(--text-dim)" }}>
        {topic.company}
      </span>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────── */

export default function About() {
  const progress = useMemo(() => calculateProgress(), []);

  const completedTopics = progress.topics.filter((t) => t.status === "completed");
  const currentTopics = progress.topics.filter((t) => t.status === "in-progress");
  const upcomingTopics = progress.topics.filter((t) => t.status === "upcoming");

  return (
    <section
      id="about"
      className="section-padding"
      style={{ background: "rgba(5, 5, 5, 0.6)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ── Header ────────────────────────────────────── */}
        <RevealOnScroll>
          <SectionLabel>About</SectionLabel>
          <SectionTitle>Who I Am</SectionTitle>
        </RevealOnScroll>

        {/* ── Bio + Education Sidebar ───────────────────── */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16">
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
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>Google Play</strong>,
                built a PWA that serves{" "}
                <strong style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                  thousands of users monthly
                </strong>,
                and worked on production systems during internships. I care about clean architecture
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
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div
              className="rounded-xl overflow-hidden relative"
              style={{
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.02)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)" }} />

              {/* Education */}
              <div className="p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] mb-4" style={{ color: "var(--accent)" }}>
                  <span style={{ color: "var(--text-dim)" }}>← </span>Education
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-dim)" }}>— </span>{education.degree}
                  </p>
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-dim)" }}>— </span>{education.university}
                  </p>
                  <p className="text-[13px] font-mono" style={{ color: "var(--text-dim)" }}>
                    {education.period}
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div className="p-8" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] mb-4" style={{ color: "var(--accent)" }}>
                  <span style={{ color: "var(--text-dim)" }}>← </span>Languages
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-dim)" }}>— </span>Turkish
                  </p>
                  <p className="text-[14px]" style={{ color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--text-dim)" }}>— </span>English
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* ── Experience ────────────────────────────────── */}
        <div className="mt-20">
          <RevealOnScroll>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] mb-3" style={{ color: "var(--accent)" }}>
              <span style={{ color: "var(--text-dim)" }}>← </span>Experience
            </p>
            <h3
              className="font-sans font-bold text-[28px] md:text-[34px] leading-tight tracking-tight"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              Professional Background
            </h3>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {experience.map((exp, i) => (
              <RevealOnScroll key={exp.role} delay={i * 0.1}>
                <div
                  className="h-full rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 group relative overflow-hidden"
                  style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    borderLeft: "3px solid var(--accent-muted)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px transition-opacity duration-500 opacity-0 group-hover:opacity-50 pointer-events-none"
                    style={{ background: "linear-gradient(90deg, var(--accent-muted), transparent)" }}
                  />

                  <div>
                    <h4 className="font-sans font-semibold text-[16px] leading-tight" style={{ color: "var(--text-primary)" }}>
                      {exp.role}
                    </h4>
                    <p className="font-mono text-[12px] mt-1" style={{ color: "var(--accent)" }}>
                      {exp.company}
                    </p>
                    <p className="font-mono text-[11px] mt-0.5" style={{ color: "var(--text-dim)" }}>
                      {exp.period}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    {exp.details.map((detail, j) => (
                      <p key={j} className="text-[13px] leading-[1.6] flex gap-2" style={{ color: "var(--text-secondary)" }}>
                        <span style={{ color: "var(--text-dim)", flexShrink: 0 }}>›</span>
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* ── Academy Program ───────────────────────────── */}
        <RevealOnScroll className="mt-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] mb-3" style={{ color: "var(--accent)" }}>
            <span style={{ color: "var(--text-dim)" }}>← </span>Specialization Program
          </p>
          <h3
            className="font-sans font-bold text-[28px] md:text-[34px] leading-tight tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            {academy.program}
          </h3>
          <p className="font-mono text-[12px] mt-2" style={{ color: "var(--text-dim)" }}>
            {academy.issuer} · Supported by {academy.sponsor}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-8">
          {/* Gradient border wrapper */}
          <div
            className="rounded-xl p-px"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 50%, rgba(34,211,238,0.05) 100%)",
            }}
          >
            <div className="rounded-[11px] overflow-hidden" style={{ background: "var(--bg-card)" }}>
              {/* Top glow */}
              <div className="h-px" style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 40%, rgba(34,211,238,0.07) 70%, transparent)",
              }} />

              <div className="p-6 md:p-10">
                {/* ── Phase cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                  {/* Phase 01: Foundation */}
                  <div className="rounded-lg p-5 md:p-6" style={{
                    background: "rgba(52,211,153,0.025)",
                    border: "1px solid rgba(52,211,153,0.08)",
                  }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded" style={{
                        background: "rgba(52,211,153,0.08)",
                        color: "var(--accent)",
                      }}>
                        Phase 01
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        Completed
                      </span>
                    </div>
                    <h4 className="font-sans font-semibold text-[18px] mb-3" style={{ color: "var(--text-primary)" }}>
                      Foundation Training
                    </h4>
                    <div className="flex flex-col gap-1.5">
                      <p className="font-mono text-[12px]" style={{ color: "var(--text-secondary)" }}>
                        {academy.foundation.applicants.toLocaleString()} applicants · {academy.foundation.sessions} sessions
                      </p>
                      <p className="font-mono text-[12px]" style={{ color: "var(--text-dim)" }}>
                        {academy.foundation.period}
                      </p>
                      <p className="font-mono text-[11px] mt-1 flex items-center gap-1.5" style={{ color: "var(--text-secondary)" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5"><rect width="18" height="14" x="3" y="5" rx="2"/><path d="M3 10h18"/></svg>
                        Certificate Earned
                      </p>
                    </div>
                  </div>

                  {/* Arrow connector (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center" style={{
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 0 12px rgba(52,211,153,0.08)",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>

                  {/* Phase 02: Specialization */}
                  <div className="rounded-lg p-5 md:p-6" style={{
                    background: "rgba(255,255,255,0.015)",
                    border: "1px solid var(--border)",
                  }}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded" style={{
                        background: "rgba(34,211,238,0.06)",
                        color: "var(--cyan)",
                      }}>
                        Phase 02
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-1.5 academy-pulse" style={{ color: "var(--text-secondary)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{
                          background: "var(--accent)",
                          boxShadow: "0 0 4px var(--accent)",
                        }} />
                        In Progress
                      </span>
                    </div>
                    <h4 className="font-sans font-semibold text-[18px] mb-3" style={{ color: "var(--text-primary)" }}>
                      Advanced Specialization
                    </h4>
                    <div className="flex flex-col gap-1.5">
                      <p className="font-mono text-[12px]" style={{ color: "var(--text-secondary)" }}>
                        Top {academy.specialization.selected} selected · {progress.totalSessions} sessions
                      </p>
                      <p className="font-mono text-[12px]" style={{ color: "var(--text-dim)" }}>
                        {academy.specialization.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── Funnel stat ── */}
                <div className="mt-6 flex items-center justify-center gap-3">
                  <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
                    {academy.foundation.applicants.toLocaleString()} Selected
                  </span>
                  <div className="flex items-center gap-1">
                    <div className="w-12 h-px" style={{ background: "var(--border)" }} />
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="2"><path d="m9 18 6-6-6-6" /></svg>
                  </div>
                  <span className="font-mono text-[11px] font-medium" style={{ color: "var(--text-secondary)" }}>
                    Top {academy.specialization.selected} Advanced
                  </span>
                </div>

                {/* ── Progress bar ── */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: "var(--text-dim)" }}>
                      Specialization Progress
                    </span>
                    <span className="font-mono text-[13px] font-medium" style={{ color: "var(--text-primary)" }}>
                      {progress.percent}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${progress.percent}%`,
                        background: "linear-gradient(90deg, var(--accent-muted), var(--accent))",
                        boxShadow: "none",
                        transition: "width 1.5s cubic-bezier(0.16,1,0.3,1)",
                      }}
                    />
                  </div>
                  <p className="font-mono text-[11px] mt-1.5" style={{ color: "var(--text-dim)" }}>
                    {progress.completedSessions} / {progress.totalSessions} sessions completed
                  </p>
                </div>

                {/* ── Topic timeline ── */}
                <div className="mt-8" style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
                  {/* Completed */}
                  {completedTopics.length > 0 && (
                    <div className="mb-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2 flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                        <span className="w-4 h-px" style={{ background: "var(--text-dim)" }} />
                        Completed
                      </p>
                      <div className="flex flex-col gap-1">
                        {completedTopics.map((t) => (
                          <TopicRow key={t.name} topic={t} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* In Progress */}
                  {currentTopics.length > 0 && (
                    <div className="mb-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2 flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
                        <span className="w-4 h-px" style={{ background: "var(--text-dim)" }} />
                        Currently Learning
                      </p>
                      <div className="flex flex-col gap-1">
                        {currentTopics.map((t) => (
                          <TopicRow key={t.name} topic={t} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Upcoming */}
                  {upcomingTopics.length > 0 && (
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] mb-2 flex items-center gap-2" style={{ color: "var(--text-dim)" }}>
                        <span className="w-4 h-px" style={{ background: "var(--text-dim)", opacity: 0.3 }} />
                        Upcoming
                      </p>
                      <div className="flex flex-col gap-1">
                        {upcomingTopics.map((t) => (
                          <TopicRow key={t.name} topic={t} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* ── Training partners ── */}
                <div className="mt-6 pt-6 flex flex-wrap items-center gap-x-4 gap-y-2" style={{ borderTop: "1px solid var(--border)" }}>
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: "var(--text-dim)" }}>
                    Training Partners
                  </span>
                  {["FEV", "BAYKAR", "TÜBİTAK BİLGEM", "ADASTEC", "FORD", "ASELSAN", "AVL"].map((p) => (
                    <span key={p} className="font-mono text-[11px] font-medium" style={{ color: "var(--text-secondary)" }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Pulse animation */}
      <style>{`
        @keyframes academyPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .academy-pulse {
          animation: academyPulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
