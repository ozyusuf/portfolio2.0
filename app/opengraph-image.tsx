import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yusuf Öz — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#04060e",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow — top left */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "600px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(52,211,153,0.18) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        {/* Background glow — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-80px",
            width: "500px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(34,211,238,0.12) 0%, transparent 65%)",
            filter: "blur(70px)",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, rgba(52,211,153,0.8) 0%, rgba(34,211,238,0.4) 50%, transparent 100%)",
          }}
        />

        {/* Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#34d399",
              boxShadow: "0 0 12px rgba(52,211,153,0.8)",
            }}
          />
          <span
            style={{
              fontSize: "14px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#34d399",
            }}
          >
            Portfolio
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "88px",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            color: "#ededed",
            marginBottom: "16px",
          }}
        >
          Yusuf Öz
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            marginBottom: "48px",
            letterSpacing: "-0.01em",
          }}
        >
          Building mobile, web &amp; intelligent systems.
        </div>

        {/* Pills */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Flutter", "React", "AI/ML", "Autonomous Driving"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 18px",
                borderRadius: "999px",
                border: "1px solid rgba(52,211,153,0.25)",
                color: "#34d399",
                fontSize: "14px",
                background: "rgba(52,211,153,0.07)",
                letterSpacing: "0.05em",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "100px",
            fontSize: "16px",
            color: "#71717a",
            letterSpacing: "0.05em",
          }}
        >
          yusuf-oz.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
