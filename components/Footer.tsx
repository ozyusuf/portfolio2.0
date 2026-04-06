"use client";

export default function Footer() {
  return (
    <footer
      className="py-6"
      style={{ borderTop: "1px solid var(--border)", background: "rgba(5, 5, 5, 0.55)" }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-4 flex-wrap">
        <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
          © 2026 Yusuf Öz
        </span>
        <span className="font-mono text-[11px]" style={{ color: "var(--text-dim)" }}>
          system.status:{" "}
          <span style={{ color: "var(--accent)" }}>operational</span>
        </span>
      </div>
    </footer>
  );
}
