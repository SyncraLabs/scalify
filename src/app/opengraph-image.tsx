import { ImageResponse } from "next/og";

// Generación estática (compatible con `output: export`).
export const dynamic = "force-static";

export const alt = "ScalifyLabs — Agencia de Marketing Digital en España";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 30% 0%, #1a1040 0%, #050510 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #6C3AED, #3B82F6, #EC4899)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: "40px", fontWeight: 700, display: "flex" }}>
            <span>Scalify</span>
            <span style={{ color: "#a78bfa" }}>Labs</span>
          </div>
        </div>
        <div
          style={{
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: "920px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          Escalamos tu negocio en internet
        </div>
        <div
          style={{
            fontSize: "34px",
            color: "#cbd5e1",
            marginTop: "32px",
            maxWidth: "880px",
          }}
        >
          Desarrollo web · SEO · Redes Sociales · Ads · Embudos
        </div>
        <div
          style={{
            marginTop: "auto",
            fontSize: "26px",
            color: "#94a3b8",
            display: "flex",
          }}
        >
          scalifylabs.es · Canarias · Barcelona · Madrid
        </div>
      </div>
    ),
    { ...size }
  );
}
