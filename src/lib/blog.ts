/**
 * Registro del blog de ScalifyLabs.
 *
 * Para añadir un artículo nuevo:
 *   1. Crea src/content/blog/mi-slug.ts (copia uno existente).
 *   2. Impórtalo abajo y añádelo al array `registry`.
 * El resto —ruta, sitemap, metadata, JSON-LD— se genera solo.
 */

export interface PostFaq {
  question: string;
  answer: string;
}

export interface Post {
  /** Parte final de la URL: /blog/<slug> */
  slug: string;
  /** Título SEO (se usa en <title> y og:title) */
  title: string;
  /** H1 visible del artículo (por defecto = title) */
  heading?: string;
  /** Meta description / extracto en el listado */
  description: string;
  /** Fecha de publicación ISO (YYYY-MM-DD) */
  date: string;
  /** Fecha de última actualización ISO */
  updated?: string;
  category: string;
  tags: string[];
  /** Servicio relacionado para enlace interno y CTA */
  relatedService?: { name: string; href: string };
  /** Preguntas frecuentes → se emiten como FAQPage schema */
  faq?: PostFaq[];
  /** Cuerpo del artículo en HTML semántico */
  content: string;
}

import costeWeb from "@/content/blog/cuanto-cuesta-pagina-web-profesional";
import seoLocal from "@/content/blog/seo-local-google-maps";
import metaAds from "@/content/blog/cuanto-invertir-meta-ads-pymes";
import embudoVentas from "@/content/blog/embudo-de-ventas-automatizado";
import redesSociales from "@/content/blog/estrategia-redes-sociales-empresas";
import redisenoWeb from "@/content/blog/senales-rediseno-web";
import softwareMedida from "@/content/blog/software-a-medida-vs-saas";
import branding from "@/content/blog/branding-para-pymes";

/** Orden cronológico inverso lo aplica getAllPosts(). */
const registry: Post[] = [
  costeWeb,
  seoLocal,
  metaAds,
  embudoVentas,
  redesSociales,
  redisenoWeb,
  softwareMedida,
  branding,
];

export function getAllPosts(): Post[] {
  return [...registry].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return registry.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return registry.map((p) => p.slug);
}

/** Estima minutos de lectura a partir del HTML (≈200 ppm). */
export function readingMinutes(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
  return Math.max(2, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
