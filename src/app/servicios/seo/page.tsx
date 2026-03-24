"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Search,
  ArrowRight,
  TrendingUp,
  BarChart3,
  Target,
  FileText,
  Link2,
  Globe,
  Eye,
  CheckCircle2,
  Star,
  Quote,
  Zap,
  Award,
  ArrowUp,
  ChevronUp,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

/* ─── Google Search Mockup ─── */
function GoogleSearchMockup() {
  const results = [
    { position: 1, title: "Tu Empresa - Solución líder en tu sector", url: "tunegocio.es", desc: "Descubre la mejor solución del mercado. +500 clientes satisfechos. Solicita tu presupuesto gratuito.", highlighted: true },
    { position: 2, title: "Competidor A - Servicios similares", url: "competidor-a.es", desc: "Ofrecemos servicios de calidad para empresas...", highlighted: false },
    { position: 3, title: "Competidor B - Tu alternativa", url: "competidor-b.com", desc: "Contamos con años de experiencia en el sector...", highlighted: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative max-w-4xl mx-auto mt-10 sm:mt-16"
    >
      <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-gradient-to-br from-brand-secondary/15 via-brand-primary/10 to-transparent rounded-3xl blur-[60px] opacity-50" />

      <div className="relative glass rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* Google-style search bar */}
        <div className="p-6 border-b border-white/5">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 bg-white/5 rounded-full px-5 py-3 border border-white/10">
              <Search size={18} className="text-gray-500" />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="overflow-hidden"
              >
                <span className="text-sm text-gray-300 whitespace-nowrap">tu servicio en tu ciudad</span>
              </motion.div>
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-0.5 h-5 bg-brand-secondary rounded-full"
              />
            </div>
            <div className="flex gap-4 mt-3 ml-5">
              <span className="text-[11px] text-gray-500">Aproximadamente 2.450.000 resultados (0,42 s)</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-6 space-y-6 max-w-2xl mx-auto">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + i * 0.3, duration: 0.5 }}
              className={`relative ${result.highlighted ? "glass rounded-xl p-4 border border-brand-primary/20" : "p-2"}`}
            >
              {result.highlighted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                  className="absolute -left-2 top-1/2 -translate-y-1/2 flex items-center gap-1"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ArrowUp size={12} className="text-green-400" />
                  </div>
                </motion.div>
              )}
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-5 h-5 rounded-full ${result.highlighted ? "bg-brand-primary/30" : "bg-white/10"} flex items-center justify-center`}>
                  <span className="text-[8px] font-bold text-white">{result.position}</span>
                </div>
                <span className="text-xs text-green-400">{result.url}</span>
              </div>
              <h3 className={`text-base font-medium mb-1 ${result.highlighted ? "text-brand-secondary" : "text-blue-400/70"}`}>
                {result.title}
              </h3>
              <p className="text-xs text-gray-500">{result.desc}</p>
              {result.highlighted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.8, duration: 0.4 }}
                  className="mt-2 inline-flex items-center gap-1 text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full"
                >
                  <TrendingUp size={10} />
                  Posición #1 con ScalifyLabs
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="absolute -right-4 lg:-right-10 top-1/4 glass rounded-xl px-3 py-2 border border-white/10 hidden sm:flex items-center gap-2"
      >
        <ChevronUp size={14} className="text-green-400" />
        <div>
          <div className="text-[10px] text-gray-400">Visibilidad</div>
          <div className="text-xs font-bold text-green-400">+340%</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.4, duration: 0.5 }}
        className="absolute -left-4 lg:-left-10 bottom-1/4 glass rounded-xl px-3 py-2 border border-white/10 hidden sm:flex items-center gap-2"
      >
        <Eye size={14} className="text-brand-secondary" />
        <div>
          <div className="text-[10px] text-gray-400">Tráfico org.</div>
          <div className="text-xs font-bold text-white">+12.4K/mes</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Ranking chart component ─── */
function RankingChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const months = ["Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6"];
  const positions = [45, 28, 15, 8, 4, 1];

  return (
    <div ref={ref} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-semibold text-white">Evolución de posición</h3>
        <span className="text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full">Keyword principal</span>
      </div>

      <div className="relative h-48 flex items-end justify-between gap-2">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-600 -ml-1">
          <span>50</span>
          <span>25</span>
          <span>1</span>
        </div>

        <div className="flex-1 flex items-end justify-between gap-3 ml-6">
          {positions.map((pos, i) => {
            const height = ((50 - pos) / 50) * 100;
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
                  className="text-[10px] font-bold text-white"
                >
                  #{pos}
                </motion.div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={isInView ? { height: `${height}%` } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                  className={`w-full rounded-t-md ${
                    pos <= 3
                      ? "bg-gradient-to-t from-green-500/60 to-emerald-400/40"
                      : pos <= 10
                      ? "bg-gradient-to-t from-brand-secondary/60 to-cyan-400/40"
                      : "bg-gradient-to-t from-brand-primary/40 to-brand-secondary/30"
                  }`}
                  style={{ maxHeight: "100%" }}
                />
                <span className="text-[10px] text-gray-500">{months[i]}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Keyword cloud ─── */
function KeywordCloud() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const keywords = [
    { text: "marketing digital", size: "text-lg", opacity: "opacity-90" },
    { text: "SEO local", size: "text-base", opacity: "opacity-80" },
    { text: "diseño web", size: "text-xl", opacity: "opacity-100" },
    { text: "agencia publicidad", size: "text-sm", opacity: "opacity-60" },
    { text: "posicionamiento Google", size: "text-lg", opacity: "opacity-85" },
    { text: "tienda online", size: "text-base", opacity: "opacity-70" },
    { text: "redes sociales empresa", size: "text-sm", opacity: "opacity-55" },
    { text: "consultoría digital", size: "text-base", opacity: "opacity-75" },
    { text: "campañas ads", size: "text-lg", opacity: "opacity-80" },
    { text: "automatización marketing", size: "text-sm", opacity: "opacity-65" },
    { text: "web corporativa", size: "text-base", opacity: "opacity-70" },
    { text: "ecommerce", size: "text-xl", opacity: "opacity-90" },
  ];

  return (
    <div ref={ref} className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
      {keywords.map((kw, i) => (
        <motion.span
          key={kw.text}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          whileHover={{ scale: 1.15, color: "#6C3AED" }}
          className={`${kw.size} ${kw.opacity} font-heading font-medium text-gray-400 cursor-default transition-colors duration-300 px-2`}
        >
          {kw.text}
        </motion.span>
      ))}
    </div>
  );
}

/* ─── Main page ─── */
export default function SEOPage() {
  const phases = [
    {
      icon: Search,
      number: "01",
      title: "Auditoría Técnica",
      desc: "Análisis exhaustivo de tu web: velocidad, rastreabilidad, errores, estructura de URLs, mobile-friendliness y Core Web Vitals.",
      details: ["Crawl completo del sitio", "Análisis de errores 4xx/5xx", "Revisión de indexación", "Test de velocidad"],
      color: "#6C3AED",
    },
    {
      icon: FileText,
      number: "02",
      title: "On-Page SEO",
      desc: "Optimización de títulos, metas, estructura de contenido, headings, imágenes, schema markup y enlazado interno.",
      details: ["Keyword research", "Optimización de metas", "Schema markup", "Contenido optimizado"],
      color: "#3B82F6",
    },
    {
      icon: Link2,
      number: "03",
      title: "Link Building",
      desc: "Estrategia de autoridad de dominio con enlaces de calidad desde sitios relevantes de tu sector.",
      details: ["Guest posting", "Digital PR", "Directorios de calidad", "Menciones de marca"],
      color: "#EC4899",
    },
    {
      icon: BarChart3,
      number: "04",
      title: "Reporting Mensual",
      desc: "Dashboard en tiempo real con posiciones, tráfico, conversiones y ROI. Reporting transparente cada mes.",
      details: ["Dashboard personalizado", "Informe mensual detallado", "KPIs de negocio", "Plan de acción"],
      color: "#10B981",
    },
  ];

  const results = [
    { value: "+340%", label: "Tráfico orgánico", desc: "Media de incremento en 6 meses" },
    { value: "Top 3", label: "Posiciones Google", desc: "Para keywords principales" },
    { value: "+180%", label: "Leads orgánicos", desc: "Sin pagar por cada clic" },
    { value: "6 meses", label: "Primeros resultados", desc: "ROI visible en medio año" },
  ];

  const testimonials = [
    {
      text: "Pasamos de la página 5 a la primera posición en Google para nuestra keyword principal. El tráfico orgánico se triplicó y las llamadas de potenciales clientes se dispararon.",
      author: "Roberto S.",
      role: "Director, Clínica Dental",
      location: "Madrid",
      metric: "Posición #1 en Google",
    },
    {
      text: "Después de 6 meses con ScalifyLabs, el SEO nos trae más clientes que la publicidad pagada. Y lo mejor: es tráfico gratuito que sigue creciendo mes a mes.",
      author: "Laura M.",
      role: "CEO, Consultoría Legal",
      location: "Valencia",
      metric: "+420% tráfico orgánico",
    },
  ];

  const beforeAfter = [
    { metric: "Visitas/mes", before: "1.200", after: "8.500", change: "+608%" },
    { metric: "Keywords Top 10", before: "3", after: "47", change: "+1.467%" },
    { metric: "Domain Authority", before: "12", after: "38", change: "+217%" },
    { metric: "Leads orgánicos", before: "8/mes", after: "52/mes", change: "+550%" },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(59,130,246,0.15),transparent_70%)]" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-secondary/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-dots opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-10 w-full">
          <div className="text-center">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-brand-secondary mb-6">
                <Search size={14} />
                POSICIONAMIENTO SEO
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0.1} className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5 sm:mb-6">
              <span className="text-white">Aparece en Google</span>
              <br />
              <span className="text-gradient">cuando te buscan</span>
            </motion.h1>

            <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.2} className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-400 leading-relaxed mb-10 px-2 sm:px-0">
              Estrategia SEO integral: auditoría técnica, optimización on-page, link building y contenido.
              Resultados en 3-6 meses con reporting mensual transparente.
            </motion.p>

            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <ContactButton className="btn-primary text-base group">
                <span>Auditoría SEO gratuita</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </ContactButton>
              <Link href="/casos" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">
                Ver resultados SEO
              </Link>
            </motion.div>
          </div>

          <GoogleSearchMockup />
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(59,130,246,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-green-400 bg-green-400/10 rounded-full mb-4">ANTES / DESPUÉS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Resultados <span className="text-gradient">reales de SEO</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400">Caso real de uno de nuestros clientes tras 6 meses de trabajo SEO.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {beforeAfter.map((item, i) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">{item.metric}</h4>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div>
                    <span className="text-sm text-red-400/70 line-through">{item.before}</span>
                  </div>
                  <ArrowRight size={16} className="text-gray-600" />
                  <div>
                    <span className="text-xl font-heading font-bold text-white">{item.after}</span>
                  </div>
                </div>
                <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">{item.change}</span>
              </motion.div>
            ))}
          </div>

          {/* Ranking Chart */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <RankingChart />
            </motion.div>
            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Del puesto 45 al #1 en 6 meses</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Mediante una estrategia combinada de optimización técnica, contenido de calidad y link building
                estratégico, escalamos posiciones de forma consistente hasta dominar la primera página.
              </p>
              <div className="space-y-3">
                {["Auditoría técnica y corrección de errores", "Contenido optimizado para intención de búsqueda", "Link building con sitios de autoridad", "Monitorización y ajuste continuo"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SEO METHOD (4 Phases) ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(108,58,237,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-4">MÉTODO</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Nuestro método SEO <span className="text-gradient">en 4 fases</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400">Un enfoque sistemático y probado para escalar tu visibilidad en Google.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 group relative overflow-hidden"
              >
                {/* Number watermark */}
                <span className="absolute -top-4 -right-2 font-heading font-bold text-[80px] leading-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity" style={{ color: phase.color }}>
                  {phase.number}
                </span>

                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110"
                    style={{ background: `${phase.color}15` }}
                  >
                    <phase.icon size={26} style={{ color: phase.color }} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-white mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{phase.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full" style={{ background: phase.color }} />
                          <span className="text-xs text-gray-500">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ KEYWORD CLOUD ═══ */}
      <section className="relative section-padding">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-secondary bg-brand-secondary/10 rounded-full mb-4">KEYWORDS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-3 sm:mb-4">
              Encontramos las palabras clave que <span className="text-gradient">tu público busca</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 mb-12">
              Investigación de keywords basada en datos reales de búsqueda, competencia y potencial de conversión.
            </p>
          </motion.div>
          <KeywordCloud />
        </div>
      </section>

      {/* ═══ RESULTS STATS ═══ */}
      <section className="relative section-padding">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="relative inline-block mb-3">
                  <span className="font-heading font-bold text-4xl sm:text-5xl text-gradient">{stat.value}</span>
                  <div className="absolute inset-0 bg-brand-secondary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity scale-150" />
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-1">{stat.label}</h3>
                <p className="text-xs text-gray-500">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,rgba(236,72,153,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">TESTIMONIOS SEO</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Clientes que ya <span className="text-gradient">dominan Google</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
              >
                <Quote size={40} className="absolute top-4 right-4 text-brand-secondary/10" />
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary flex items-center justify-center font-heading font-bold text-white text-sm">
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
              <div className="relative">
                <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
                  ¿Quieres aparecer en la <span className="text-gradient">primera página de Google</span>?
                </h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Solicita tu auditoría SEO gratuita y descubre el potencial oculto de tu web.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto group">
                    <span>Auditoría SEO gratuita</span>
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
