import type { MetadataRoute } from "next";
import { SITE } from "@/lib/seo";

// Generación estática (compatible con `output: export`).
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ScalifyLabs — Agencia de Marketing Digital",
    short_name: "ScalifyLabs",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#050510",
    theme_color: "#6C3AED",
    lang: SITE.lang,
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/logo-icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
