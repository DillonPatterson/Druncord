import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Druncord — The Online Bar | 18+ Discord Community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1109",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "60%",
            background:
              "radial-gradient(ellipse at 40% 0%, rgba(193,122,42,0.22) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            color: "#C17A2A",
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          18+ Adults Only
        </div>
        <div
          style={{
            color: "#EDE8DF",
            fontSize: 96,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 28,
          }}
        >
          Druncord
        </div>
        <div
          style={{
            color: "rgba(237,232,223,0.65)",
            fontSize: 30,
            lineHeight: 1.5,
            maxWidth: 680,
          }}
        >
          The online bar. Voice-first. Adults only. Always open.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "#C17A2A",
            opacity: 0.7,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
