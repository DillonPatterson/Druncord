import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Druncord — The Online Bar | 18+ Discord Community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
        }}
      >
        <div
          style={{
            color: "#C17A2A",
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          18+ Adults Only
        </div>
        <div
          style={{
            color: "#EDE8DF",
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: 32,
          }}
        >
          Druncord
        </div>
        <div
          style={{
            color: "rgba(237, 232, 223, 0.7)",
            fontSize: 32,
          }}
        >
          The online bar. Voice-first. Always open.
        </div>
      </div>
    ),
    { ...size },
  );
}
