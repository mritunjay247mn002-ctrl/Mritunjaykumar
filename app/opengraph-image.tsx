import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const runtime = "edge";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(125deg, #050505 0%, #141008 42%, #0a0a0a 100%)",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "#f5c542",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            fontWeight: 400,
            color: "#a3a3a3",
            maxWidth: 920,
            lineHeight: 1.35,
          }}
        >
          {profile.tagline}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 18,
            color: "#737373",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {profile.subtext}
        </div>
      </div>
    ),
    { ...size }
  );
}
