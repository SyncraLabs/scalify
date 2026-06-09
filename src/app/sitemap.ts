import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

// Generación estática (compatible con `output: export`).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Páginas estáticas con prioridad/frecuencia orientativas.
  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/servicios", priority: 0.9, changeFrequency: "monthly" },
    { path: "/servicios/desarrollo-web", priority: 0.8, changeFrequency: "monthly" },
    { path: "/servicios/seo", priority: 0.8, changeFrequency: "monthly" },
    { path: "/servicios/redes-sociales", priority: 0.8, changeFrequency: "monthly" },
    { path: "/servicios/ads", priority: 0.8, changeFrequency: "monthly" },
    { path: "/servicios/programacion", priority: 0.8, changeFrequency: "monthly" },
    { path: "/servicios/diseno-grafico", priority: 0.8, changeFrequency: "monthly" },
    { path: "/servicios/embudo-ventas", priority: 0.8, changeFrequency: "monthly" },
    { path: "/casos", priority: 0.7, changeFrequency: "monthly" },
    { path: "/nosotros", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contacto", priority: 0.7, changeFrequency: "yearly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/legal/aviso-legal", priority: 0.2, changeFrequency: "yearly" },
    { path: "/legal/privacidad", priority: 0.2, changeFrequency: "yearly" },
    { path: "/legal/cookies", priority: 0.2, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: absoluteUrl(r.path),
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date((post.updated || post.date) + "T00:00:00"),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
