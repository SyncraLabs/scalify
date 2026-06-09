import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  getPost,
  getAllSlugs,
  getAllPosts,
  formatDate,
  readingMinutes,
} from "@/lib/blog";
import {
  canonical,
  absoluteUrl,
  articleSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: canonical(`/blog/${post.slug}`),
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const schemas: object[] = [
    articleSchema({
      title: post.title,
      description: post.description,
      path: `/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.updated,
    }),
    breadcrumbSchema([
      { name: "Inicio", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];
  if (post.faq?.length) schemas.push(faqSchema(post.faq));

  return (
    <>
      <JsonLd data={schemas} />

      <article className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,58,237,0.1),transparent_55%)]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-gray-500" aria-label="Migas de pan">
            <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <ArrowLeft size={14} /> Volver al blog
            </Link>
          </nav>

          {/* Header */}
          <header className="mb-10">
            <span className="text-xs font-medium uppercase tracking-wider text-brand-secondary">
              {post.category}
            </span>
            <h1 className="mt-3 font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              {post.heading || post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-500">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>·</span>
              <span>{readingMinutes(post.content)} min de lectura</span>
              <span aria-hidden>·</span>
              <span>ScalifyLabs</span>
            </div>
          </header>

          {/* Body */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* FAQ */}
          {post.faq?.length ? (
            <section className="mt-14">
              <h2 className="font-heading font-bold text-2xl text-white mb-6">
                Preguntas frecuentes
              </h2>
              <div className="flex flex-col gap-4">
                {post.faq.map((item) => (
                  <details key={item.question} className="glass rounded-xl p-5 group">
                    <summary className="cursor-pointer font-medium text-white list-none flex items-center justify-between gap-4">
                      {item.question}
                      <span className="text-brand-secondary transition-transform group-open:rotate-45 text-xl leading-none">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {/* CTA */}
          <aside className="mt-14 rounded-2xl p-8 bg-gradient-brand relative overflow-hidden">
            <div className="relative">
              <h2 className="font-heading font-bold text-2xl text-white">
                ¿Quieres aplicar esto en tu negocio?
              </h2>
              <p className="mt-2 text-white/80 text-sm sm:text-base">
                {post.relatedService
                  ? `Te ayudamos con ${post.relatedService.name.toLowerCase()} y mucho más. Cuéntanos tu proyecto y te respondemos en menos de 24h.`
                  : "Cuéntanos tu proyecto y te respondemos en menos de 24h."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-brand-dark font-semibold px-6 py-3 text-sm hover:scale-[1.02] transition-transform"
                >
                  Hablemos de tu proyecto <ArrowRight size={16} />
                </Link>
                {post.relatedService && (
                  <Link
                    href={post.relatedService.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 text-white font-semibold px-6 py-3 text-sm hover:bg-white/10 transition-colors"
                  >
                    Ver {post.relatedService.name}
                  </Link>
                )}
              </div>
            </div>
          </aside>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="font-heading font-bold text-xl text-white mb-6">
                Sigue leyendo
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="glass-card rounded-xl p-5 group"
                  >
                    <span className="text-xs uppercase tracking-wider text-brand-secondary">
                      {p.category}
                    </span>
                    <h3 className="mt-2 font-heading font-semibold text-white leading-snug group-hover:text-gradient-alt transition-colors">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
