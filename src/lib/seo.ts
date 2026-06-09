/**
 * Configuración central de SEO de ScalifyLabs.
 * Cambia SITE_URL aquí (o vía NEXT_PUBLIC_SITE_URL) y todo lo demás
 * —metadata, sitemap, robots, JSON-LD, OG— se actualiza solo.
 */

export const SITE = {
  name: "ScalifyLabs",
  legalName: "ScalifyLabs",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://scalifylabs.es").replace(/\/$/, ""),
  locale: "es_ES",
  lang: "es",
  description:
    "Agencia de marketing digital en España. Escalamos tu negocio con desarrollo web, SEO, redes sociales, publicidad y automatización de embudos. 7+ años, 100+ negocios escalados.",
  email: "info@scalifylabs.es",
  phone: "+34 604 56 15 92",
  phoneRaw: "+34604561592",
  // Áreas de operación
  areas: ["Canarias", "Barcelona", "Madrid", "España"],
  twitter: "@scalifylabs",
  social: {
    instagram: "https://www.instagram.com/scalifylabsmarketing/",
  },
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

/** Devuelve un objeto Metadata.alternates con el canonical correcto. */
export const canonical = (path = "/") => ({ canonical: absoluteUrl(path) });

/* ------------------------------------------------------------------ *
 *  JSON-LD builders (Schema.org)
 * ------------------------------------------------------------------ */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl("/logo-icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    description: SITE.description,
    email: SITE.email,
    telephone: SITE.phone,
    priceRange: "€€",
    areaServed: SITE.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
    address: {
      "@type": "PostalAddress",
      addressCountry: "ES",
      addressRegion: "Canarias",
    },
    sameAs: [SITE.social.instagram],
    knowsAbout: [
      "Marketing digital",
      "Desarrollo web",
      "Posicionamiento SEO",
      "Publicidad en redes sociales",
      "Automatización de embudos de ventas",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.lang,
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    serviceType: opts.name,
    provider: { "@id": `${SITE.url}/#organization` },
    areaServed: SITE.areas.map((name) => ({ "@type": "AdministrativeArea", name })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.path),
    mainEntityOfPage: absoluteUrl(opts.path),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    inLanguage: SITE.lang,
    image: opts.image ? absoluteUrl(opts.image) : absoluteUrl(opts.path + "/opengraph-image"),
    author: { "@type": "Organization", name: opts.author || SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo-icon.svg") },
    },
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
