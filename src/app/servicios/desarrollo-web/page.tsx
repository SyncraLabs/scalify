"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Globe,
  ArrowRight,
  Zap,
  Shield,
  Smartphone,
  Search,
  Gauge,
  Code2,
  Layers,
  CheckCircle2,
  Star,
  Quote,
  Monitor,
  Palette,
  Database,
  ShoppingCart,
  MousePointer,
  Eye,
  Clock,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

/* ─── Animated browser mockup ─── */
function BrowserMockup() {
  const lines = [
    { indent: 0, width: "60%", color: "from-purple-500/40 to-blue-500/40", delay: 0.8 },
    { indent: 1, width: "80%", color: "from-blue-500/40 to-cyan-500/40", delay: 0.9 },
    { indent: 2, width: "45%", color: "from-pink-500/40 to-purple-500/40", delay: 1.0 },
    { indent: 2, width: "65%", color: "from-green-500/40 to-emerald-500/40", delay: 1.1 },
    { indent: 1, width: "50%", color: "from-yellow-500/40 to-orange-500/40", delay: 1.2 },
    { indent: 0, width: "70%", color: "from-purple-500/40 to-pink-500/40", delay: 1.3 },
    { indent: 1, width: "55%", color: "from-blue-500/40 to-indigo-500/40", delay: 1.4 },
    { indent: 2, width: "40%", color: "from-cyan-500/40 to-teal-500/40", delay: 1.5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative max-w-5xl mx-auto mt-10 sm:mt-16"
    >
      <div className="absolute inset-0 -inset-x-10 -inset-y-10 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-pink/10 rounded-3xl blur-[60px] opacity-50" />

      <div className="relative glass rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="flex-1 mx-4">
            <div className="max-w-sm mx-auto h-6 rounded-lg bg-white/5 flex items-center px-3">
              <div className="w-3 h-3 rounded-full border border-green-400/50 mr-2 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
              </div>
              <span className="text-[10px] text-gray-500">tunegocio.es</span>
            </div>
          </div>
        </div>

        {/* Content area - split view */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[350px]">
          {/* Left: Code */}
          <div className="p-6 border-r border-white/5 bg-[#0a0a1a] font-mono text-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="px-2 py-0.5 rounded bg-brand-primary/20 text-brand-primary text-[10px]">index.tsx</div>
              <div className="px-2 py-0.5 rounded bg-white/5 text-gray-500 text-[10px]">styles.css</div>
              <div className="px-2 py-0.5 rounded bg-white/5 text-gray-500 text-[10px]">api.ts</div>
            </div>
            <div className="space-y-1.5">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay, duration: 0.4 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-gray-600 w-4 text-right text-[10px]">{i + 1}</span>
                  <div style={{ marginLeft: `${line.indent * 16}px`, width: line.width }}>
                    <div className={`h-2.5 rounded bg-gradient-to-r ${line.color}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Preview */}
          <div className="p-6 bg-white/[0.01]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="space-y-4"
            >
              {/* Nav mockup */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-3 rounded bg-gradient-to-r from-brand-primary/40 to-brand-secondary/40" />
                <div className="flex gap-3">
                  <div className="w-10 h-2 rounded bg-white/10" />
                  <div className="w-10 h-2 rounded bg-white/10" />
                  <div className="w-10 h-2 rounded bg-white/10" />
                </div>
              </div>

              {/* Hero mockup */}
              <div className="mt-6 space-y-3">
                <div className="w-3/4 h-4 rounded bg-white/15" />
                <div className="w-1/2 h-4 rounded bg-gradient-to-r from-brand-primary/30 to-brand-secondary/30" />
                <div className="w-full h-2 rounded bg-white/5 mt-4" />
                <div className="w-5/6 h-2 rounded bg-white/5" />
              </div>

              {/* CTA mockup */}
              <div className="flex gap-2 mt-4">
                <div className="w-20 h-6 rounded-lg bg-gradient-to-r from-brand-primary/40 to-brand-secondary/40" />
                <div className="w-20 h-6 rounded-lg border border-white/10" />
              </div>

              {/* Cards mockup */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 + i * 0.15, duration: 0.4 }}
                    className="h-16 rounded-lg bg-white/[0.03] border border-white/5 p-2"
                  >
                    <div className="w-4 h-4 rounded bg-brand-primary/20 mb-2" />
                    <div className="w-full h-1.5 rounded bg-white/5" />
                    <div className="w-2/3 h-1.5 rounded bg-white/5 mt-1" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating metrics */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute -left-6 top-1/3 glass rounded-xl px-3 py-2 border border-white/10 hidden lg:flex items-center gap-2"
      >
        <Gauge size={14} className="text-green-400" />
        <div>
          <div className="text-[10px] text-gray-400">PageSpeed</div>
          <div className="text-xs font-bold text-green-400">98/100</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -right-6 top-1/4 glass rounded-xl px-3 py-2 border border-white/10 hidden lg:flex items-center gap-2"
      >
        <TrendingUp size={14} className="text-brand-primary" />
        <div>
          <div className="text-[10px] text-gray-400">Conversión</div>
          <div className="text-xs font-bold text-white">+240%</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Speed comparison component ─── */
function SpeedComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const metrics = [
    { label: "LCP", before: "4.8s", after: "1.2s", improvement: "75%", barBefore: 80, barAfter: 20 },
    { label: "FID", before: "250ms", after: "12ms", improvement: "95%", barBefore: 70, barAfter: 8 },
    { label: "CLS", before: "0.25", after: "0.02", improvement: "92%", barBefore: 60, barAfter: 5 },
    { label: "TTFB", before: "1.8s", after: "0.3s", improvement: "83%", barBefore: 65, barAfter: 12 },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {metrics.map((metric, i) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="glass-card rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="font-heading font-bold text-white">{metric.label}</span>
            <span className="text-xs text-green-400 font-medium">-{metric.improvement}</span>
          </div>

          {/* Before */}
          <div className="mb-2">
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="text-gray-500">Antes</span>
              <span className="text-red-400">{metric.before}</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${metric.barBefore}%` } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8 }}
                className="h-full rounded-full bg-gradient-to-r from-red-500/60 to-orange-500/60"
              />
            </div>
          </div>

          {/* After */}
          <div>
            <div className="flex items-center justify-between text-[10px] mb-1">
              <span className="text-gray-500">Después</span>
              <span className="text-green-400">{metric.after}</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${metric.barAfter}%` } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                className="h-full rounded-full bg-gradient-to-r from-green-500/60 to-emerald-500/60"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Tech stack floating grid ─── */
function TechStackGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const techs = [
    { name: "Next.js", color: "#000", bg: "bg-white/10" },
    { name: "React", color: "#61DAFB", bg: "bg-cyan-500/10" },
    { name: "TypeScript", color: "#3178C6", bg: "bg-blue-500/10" },
    { name: "Tailwind", color: "#06B6D4", bg: "bg-teal-500/10" },
    { name: "Node.js", color: "#339933", bg: "bg-green-500/10" },
    { name: "WordPress", color: "#21759B", bg: "bg-blue-600/10" },
    { name: "Shopify", color: "#96BF48", bg: "bg-lime-500/10" },
    { name: "Vercel", color: "#fff", bg: "bg-white/5" },
  ];

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-3">
      {techs.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          whileHover={{ scale: 1.1, y: -4 }}
          className={`${tech.bg} px-4 py-2.5 rounded-xl border border-white/5 cursor-default`}
        >
          <span className="text-sm font-medium text-gray-300">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Main page ─── */
export default function DesarrolloWebPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    { icon: Zap, title: "Ultra rápidas", desc: "Core Web Vitals en verde. Tu web carga en menos de 2 segundos.", color: "#F59E0B" },
    { icon: Smartphone, title: "Mobile-first", desc: "Diseño responsive perfecto. El 70%+ del tráfico es móvil.", color: "#EC4899" },
    { icon: Search, title: "SEO optimizado", desc: "Estructura técnica pensada para posicionar desde el día 1.", color: "#3B82F6" },
    { icon: Shield, title: "Seguridad total", desc: "HTTPS, headers seguros, protección contra ataques comunes.", color: "#10B981" },
    { icon: MousePointer, title: "Alta conversión", desc: "UX diseñada para guiar al usuario hacia la acción.", color: "#6C3AED" },
    { icon: Code2, title: "Código limpio", desc: "Mantenible, escalable y documentado. Sin deuda técnica.", color: "#06B6D4" },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Analizamos tu negocio, competencia y público objetivo para definir la estrategia web perfecta.", icon: Eye },
    { step: "02", title: "Diseño UX/UI", desc: "Wireframes, prototipos interactivos y diseño visual que refleja tu marca y maximiza conversiones.", icon: Palette },
    { step: "03", title: "Desarrollo", desc: "Código limpio con las últimas tecnologías. Cada componente optimizado para rendimiento.", icon: Code2 },
    { step: "04", title: "Lanzamiento", desc: "Testing exhaustivo, migración SEO, configuración de analytics y puesta en producción.", icon: TrendingUp },
  ];

  const projectTypes = [
    { icon: Globe, title: "Landing Pages", desc: "Páginas de aterrizaje optimizadas para campañas y conversión directa.", metric: "Desde 5 días" },
    { icon: ShoppingCart, title: "E-Commerce", desc: "Tiendas online completas con pasarelas de pago y gestión de inventario.", metric: "Desde 15 días" },
    { icon: Layers, title: "Web Corporativa", desc: "Presencia digital profesional que transmite confianza y autoridad.", metric: "Desde 10 días" },
    { icon: Database, title: "Web App", desc: "Aplicaciones web complejas con dashboards, CRM o plataformas SaaS.", metric: "Desde 20 días" },
  ];

  const testimonials = [
    {
      text: "Nuestra web anterior era lenta y no convertía. ScalifyLabs la rediseñó desde cero y en el primer mes duplicamos los leads. La velocidad de carga pasó de 6 a 1.5 segundos.",
      author: "María G.",
      role: "CEO, Marca de Moda",
      location: "Tenerife",
      metric: "+120% leads",
    },
    {
      text: "Necesitábamos un e-commerce que funcionara tan bien en móvil como en escritorio. El resultado superó expectativas: las ventas online crecieron un 85% en 3 meses.",
      author: "Javier P.",
      role: "Director, Tienda Online",
      location: "Barcelona",
      metric: "+85% ventas",
    },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} className="relative min-h-screen overflow-hidden flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(108,58,237,0.15),transparent_70%)]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-secondary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-pink/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-10 w-full">
          <div className="text-center">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-brand-primary mb-6">
                <Globe size={14} />
                DESARROLLO WEB
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5 sm:mb-6"
            >
              <span className="text-white">Webs que convierten</span>
              <br />
              <span className="text-gradient">visitas en clientes</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-400 leading-relaxed mb-10 px-2 sm:px-0"
            >
              Diseñamos y desarrollamos sitios web a medida, optimizados para velocidad,
              SEO y conversión. Desde landing pages hasta e-commerce complejos.
            </motion.p>

            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <ContactButton className="btn-primary text-base group">
                <span>Solicitar presupuesto</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </ContactButton>
              <Link href="/casos" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">
                Ver proyectos realizados
              </Link>
            </motion.div>
          </div>

          <BrowserMockup />
        </motion.div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,58,237,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="CARACTERÍSTICAS"
            title="Webs que trabajan"
            highlight="para ti"
            subtitle="Cada web que creamos está diseñada con un solo objetivo: hacer crecer tu negocio."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {features.map((f, i) => (
              <motion.div key={f.title} variants={fadeInUp} custom={i * 0.1} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-7 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                  style={{ background: `${f.color}15` }}
                >
                  <f.icon size={24} style={{ color: f.color }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ PROJECT TYPES ═══ */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(59,130,246,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="TIPOS DE PROYECTO"
            title="Desde landing pages hasta"
            highlight="plataformas complejas"
            subtitle="Adaptamos la tecnología y la estrategia al tipo de proyecto que necesitas."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {projectTypes.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 group flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center shrink-0 group-hover:bg-brand-primary/20 transition-colors">
                  <p.icon size={28} className="text-brand-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold text-xl text-white">{p.title}</h3>
                    <span className="text-xs text-brand-secondary font-medium glass px-2 py-1 rounded-full">{p.metric}</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(108,58,237,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="PROCESO"
            title="De la idea al"
            highlight="lanzamiento"
            subtitle="Un proceso probado que garantiza resultados. Sin sorpresas."
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary/30 via-brand-secondary/20 to-transparent" />

            <div className="space-y-12 md:space-y-0">
              {process.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={`md:grid md:grid-cols-2 md:gap-16 md:items-center md:py-12 ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
                >
                  <div className={`${i % 2 === 1 ? "md:order-2 md:text-left" : "md:text-right"}`}>
                    <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 1 ? "" : "md:flex-row-reverse"}`}>
                      <span className="font-heading font-bold text-5xl text-gradient opacity-30">{step.step}</span>
                      <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                        <step.icon size={24} className="text-brand-primary" />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Dot on timeline */}
                  <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2" style={{ top: `${12 + i * 25}%` }}>
                    <div className="w-4 h-4 rounded-full bg-gradient-brand border-4 border-[#050510]" />
                  </div>

                  <div className={`hidden md:block ${i % 2 === 1 ? "md:order-1" : ""}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PERFORMANCE SECTION ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(16,185,129,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={0}>
              <span className="inline-block px-3 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full mb-4">RENDIMIENTO</span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Velocidad que Google
                <br />
                <span className="text-gradient">premia y el usuario ama</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Cada milisegundo cuenta. Un sitio que tarda más de 3 segundos en cargar pierde el 53% de
                sus visitantes. Nuestras webs pasan todas las métricas Core Web Vitals en verde.
              </p>

              <div className="flex gap-6">
                {[
                  { value: "98", label: "PageSpeed" },
                  { value: "<1.5s", label: "Carga" },
                  { value: "0", label: "Errores" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-heading font-bold text-2xl text-green-400">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} custom={0.2}>
              <SpeedComparison />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="relative section-padding">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-secondary bg-brand-secondary/10 rounded-full mb-4">TECNOLOGÍAS</span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              Stack <span className="text-gradient">moderno y probado</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 mb-12">
              Usamos las tecnologías más avanzadas del mercado para garantizar rendimiento, escalabilidad y mantenibilidad.
            </p>
          </motion.div>
          <TechStackGrid />
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(236,72,153,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="RESULTADOS"
            title="Lo que dicen nuestros"
            highlight="clientes"
            subtitle="Resultados reales de proyectos web que hemos desarrollado."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 relative overflow-hidden"
              >
                <Quote size={40} className="absolute top-4 right-4 text-brand-primary/10" />

                {/* Metric badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-medium mb-5">
                  <TrendingUp size={12} />
                  {t.metric}
                </div>

                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center font-heading font-bold text-white text-sm">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white text-sm">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role} · {t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative section-padding">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative gradient-border rounded-2xl sm:rounded-3xl"
          >
            <div className="relative bg-[#0a0a1a] rounded-2xl sm:rounded-3xl p-6 sm:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(108,58,237,0.1),transparent_70%)]" />
              <div className="relative">
                <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
                  ¿Listo para tener una web que <span className="text-gradient">realmente venda</span>?
                </h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Cuéntanos tu proyecto y te enviamos una propuesta personalizada en menos de 48h. Sin compromiso.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto group">
                    <span>Solicitar presupuesto gratis</span>
                    <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                  </ContactButton>
                  <a href="https://wa.me/34600000000" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">
                    Hablar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ─── Reusable section header ─── */
function SectionHeader({ badge, title, highlight, subtitle }: { badge: string; title: string; highlight: string; subtitle: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 sm:mb-16"
    >
      <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-3 sm:mb-4">{badge}</span>
      <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      <p className="max-w-xl mx-auto text-gray-400">{subtitle}</p>
    </motion.div>
  );
}
