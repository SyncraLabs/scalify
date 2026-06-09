import { ImageResponse } from "next/og";
import { getPost, getAllSlugs } from "@/lib/blog";

// Generación estática (compatible con `output: export`).
export const dynamic = "force-static";

export const alt = "Artículo del blog de ScalifyLabs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  const title = post?.title ?? "Blog de ScalifyLabs";
  const category = post?.category ?? "Marketing Digital";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          background:
            "radial-gradient(ellipse 80% 60% at 25% 0%, #1a1040 0%, #050510 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #6C3AED, #3B82F6, #EC4899)",
              display: "flex",
            }}
          />
          <div style={{ fontSize: "30px", fontWeight: 700, display: "flex" }}>
            <span>Scalify</span>
            <span style={{ color: "#a78bfa" }}>Labs</span>
          </div>
        </div>

        <div
          style={{
            fontSize: "24px",
            textTransform: "uppercase",
            letterSpacing: "4px",
            color: "#a78bfa",
            marginBottom: "20px",
            display: "flex",
          }}
        >
          {category}
        </div>
        <div
          style={{
            fontSize: "62px",
            fontWeight: 800,
            lineHeight: 1.1,
            maxWidth: "1040px",
            display: "flex",
          }}
        >
          {title}
        </div>

        <div
          style={{
            marginTop: "40px",
            fontSize: "24px",
            color: "#94a3b8",
            display: "flex",
          }}
        >
          scalifylabs.es/blog
        </div>
      </div>
    ),
    { ...size }
  );
}
