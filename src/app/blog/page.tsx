import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate, readingMinutes } from "@/lib/blog";
import { canonical, absoluteUrl, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog de Marketing Digital | ScalifyLabs",
  description:
    "Guías prácticas sobre desarrollo web, SEO, publicidad, redes sociales y automatización para hacer crecer tu negocio. Sin humo, con criterio.",
  alternates: canonical("/blog"),
  openGraph: {
    title: "Blog de Marketing Digital | ScalifyLabs",
    description:
      "Guías prácticas sobre desarrollo web, SEO, publicidad, redes sociales y automatización.",
    url: absoluteUrl("/blog"),
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <section className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(108,58,237,0.12),transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 sm:mb-20">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-secondary mb-4">
              Blog
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
              Aprende a <span className="text-gradient">escalar tu negocio</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
              Guías prácticas sobre desarrollo web, SEO, publicidad, redes
              sociales y automatización. Sin humo, con criterio y pensadas para
              que apliques hoy.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col group"
              >
                <span className="text-xs font-medium uppercase tracking-wider text-brand-secondary mb-3">
                  {post.category}
                </span>
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-white leading-snug group-hover:text-gradient-alt transition-colors">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed flex-1">
                  {post.description}
                </p>
                <div className="mt-5 flex items-center gap-3 text-xs text-gray-500">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden>·</span>
                  <span>{readingMinutes(post.content)} min de lectura</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
