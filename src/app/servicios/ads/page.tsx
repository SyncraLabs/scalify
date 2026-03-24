"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Megaphone,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  DollarSign,
  Zap,
  RefreshCw,
  Eye,
  MousePointer,
  Users,
  ShoppingCart,
  Star,
  Quote,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Filter,
} from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

/* ─── Ad Performance Dashboard ─── */
function AdsDashboard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const campaigns = [
    { name: "Campaña Conversión", status: "Activa", spend: "€1,240", results: "847 leads", cpl: "€1.46", roas: "8.4x", trend: "+12%" },
    { name: "Retargeting Web", status: "Activa", spend: "€680", results: "234 ventas", cpl: "€2.90", roas: "12.1x", trend: "+28%" },
    { name: "Lookalike Audiences", status: "Activa", spend: "€920", results: "512 leads", cpl: "€1.79", roas: "6.7x", trend: "+8%" },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative max-w-5xl mx-auto mt-10 sm:mt-16"
    >
      <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-gradient-to-br from-purple-500/15 via-yellow-500/5 to-orange-500/10 rounded-3xl blur-[60px] opacity-40" />

      <div className="relative glass rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary flex items-center justify-center">
              <BarChart3 size={16} className="text-white" />
            </div>
            <div>
              <h3 className="text-sm font-heading font-semibold text-white">Ads Manager</h3>
              <p className="text-[10px] text-gray-500">Última actualización: hace 2 min</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              3 campañas activas
            </span>
          </div>
        </div>

        {/* KPIs row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5">
          {[
            { label: "Gasto total", value: "€2,840", change: "+15%", icon: DollarSign, color: "#F59E0B" },
            { label: "Leads generados", value: "1,593", change: "+32%", icon: Users, color: "#6C3AED" },
            { label: "Coste por lead", value: "€1.78", change: "-18%", icon: Target, color: "#3B82F6" },
            { label: "ROAS medio", value: "8.7x", change: "+24%", icon: TrendingUp, color: "#10B981" },
          ].map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
              className="bg-white/[0.02] p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-gray-500">{kpi.label}</span>
                <kpi.icon size={12} style={{ color: kpi.color }} />
              </div>
              <div className="font-heading font-bold text-lg text-white">{kpi.value}</div>
              <span className="text-[10px] text-green-400">
                {kpi.change}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Campaigns table */}
        <div className="p-4">
          <div className="grid grid-cols-6 gap-4 text-[10px] text-gray-500 font-medium px-3 py-2 border-b border-white/5">
            <span className="col-span-2">Campaña</span>
            <span>Gasto</span>
            <span>Resultados</span>
            <span>CPL</span>
            <span>ROAS</span>
          </div>
          {campaigns.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.2 + i * 0.15, duration: 0.4 }}
              className="grid grid-cols-6 gap-4 text-xs px-3 py-3 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors"
            >
              <div className="col-span-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-white font-medium truncate">{c.name}</span>
              </div>
              <span className="text-gray-400">{c.spend}</span>
              <span className="text-gray-300">{c.results}</span>
              <span className="text-gray-400">{c.cpl}</span>
              <div className="flex items-center gap-1">
                <span className="text-green-400 font-medium">{c.roas}</span>
                <span className="text-[10px] text-green-400">{c.trend}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -right-6 lg:-right-14 top-1/3 glass rounded-xl px-3 py-2 border border-green-500/20 hidden sm:flex items-center gap-2"
      >
        <ArrowUpRight size={14} className="text-green-400" />
        <div>
          <div className="text-[10px] text-gray-400">ROI total</div>
          <div className="text-xs font-bold text-green-400">+870%</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Funnel visualization ─── */
function AdsFunnel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stages = [
    { label: "Alcance", value: "100K", width: "100%", color: "from-brand-primary/40 to-brand-secondary/30", icon: Eye },
    { label: "Clics", value: "8.2K", width: "65%", color: "from-brand-secondary/40 to-cyan-500/30", icon: MousePointer },
    { label: "Leads", value: "1.6K", width: "40%", color: "from-cyan-500/40 to-green-500/30", icon: Users },
    { label: "Ventas", value: "234", width: "20%", color: "from-green-500/40 to-emerald-500/30", icon: ShoppingCart },
  ];

  return (
    <div ref={ref} className="space-y-4">
      {stages.map((stage, i) => (
        <motion.div
          key={stage.label}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
            <stage.icon size={18} className="text-gray-400" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-white">{stage.label}</span>
              <span className="text-sm font-heading font-bold text-white">{stage.value}</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: stage.width } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${stage.color}`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Main page ─── */
export default function AdsPage() {
  const method = [
    { icon: Target, number: "01", title: "Testing", desc: "Lanzamos múltiples variaciones de anuncios, audiencias y creatividades para encontrar la combinación ganadora.", color: "#6C3AED" },
    { icon: BarChart3, number: "02", title: "Análisis", desc: "Identificamos qué funciona y por qué. Métricas en tiempo real para tomar decisiones basadas en datos.", color: "#3B82F6" },
    { icon: Zap, number: "03", title: "Scaling", desc: "Escalamos las campañas ganadoras gradualmente para maximizar resultados sin disparar el coste.", color: "#F59E0B" },
    { icon: RefreshCw, number: "04", title: "Retargeting", desc: "Recuperamos visitantes que no convirtieron con campañas específicas de remarketing multi-canal.", color: "#EC4899" },
  ];

  const features = [
    "Segmentación avanzada por intereses y comportamiento",
    "Creatividades A/B testadas para máximo rendimiento",
    "Reporting semanal con métricas de negocio",
    "Optimización diaria del presupuesto",
    "Retargeting dinámico multi-plataforma",
    "Attribution modeling para medir el ROI real",
  ];

  const testimonials = [
    {
      text: "Con una inversión de €2.000/mes en Meta Ads, estamos generando más de €18.000 en ventas. ScalifyLabs optimiza cada euro como si fuera suyo.",
      author: "Carlos R.",
      role: "Director, Agencia de Viajes",
      location: "Canarias",
      metric: "ROAS 9x",
    },
    {
      text: "Antes gestionábamos las campañas internamente y el coste por lead era de €15. Con ScalifyLabs bajó a €2.30 y la calidad de los leads mejoró significativamente.",
      author: "Patricia L.",
      role: "CMO, Clínica Estética",
      location: "Madrid",
      metric: "-85% coste/lead",
    },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(139,92,246,0.15),transparent_70%)]" />
          <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/3 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-10 w-full">
          <div className="text-center">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-yellow-400 mb-6">
                <Megaphone size={14} />
                CAMPAÑAS ADS
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0.1} className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5 sm:mb-6">
              <span className="text-white">Publicidad digital con</span>
              <br />
              <span className="text-gradient">retorno garantizado</span>
            </motion.h1>

            <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.2} className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-400 leading-relaxed mb-10 px-2 sm:px-0">
              Diseñamos, lanzamos y optimizamos campañas en Facebook, Instagram y TikTok Ads.
              Cada euro invertido se rastrea y optimiza para maximizar tu ROI.
            </motion.p>

            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <ContactButton className="btn-primary text-base group">
                <span>Lanzar mis campañas</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </ContactButton>
              <Link href="/casos" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">Ver métricas reales</Link>
            </motion.div>
          </div>

          <AdsDashboard />
        </div>
      </section>

      {/* ═══ METHOD ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-4">MÉTODO</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Testing, scaling, <span className="text-gradient">retargeting</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400">Nuestro método en 4 pasos para maximizar cada euro de tu inversión publicitaria.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {method.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-7 text-center group relative overflow-hidden"
              >
                <span className="absolute -top-2 -right-1 font-heading font-bold text-[70px] leading-none opacity-[0.04] group-hover:opacity-[0.08] transition-opacity" style={{ color: step.color }}>
                  {step.number}
                </span>
                <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110" style={{ background: `${step.color}15` }}>
                  <step.icon size={26} style={{ color: step.color }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FUNNEL + FEATURES ═══ */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_50%,rgba(59,130,246,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <span className="inline-block px-3 py-1 text-xs font-medium text-brand-secondary bg-brand-secondary/10 rounded-full mb-4">EMBUDO DE CONVERSIÓN</span>
              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-6">
                De impresión a <span className="text-gradient">venta</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Optimizamos cada etapa del embudo publicitario para que el máximo número de personas
                que ven tu anuncio terminen comprando.
              </p>

              <AdsFunnel />
            </motion.div>

            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              <h3 className="font-heading font-bold text-2xl text-white mb-6">Qué incluyen nuestras campañas</h3>
              <div className="space-y-4">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 glass-card rounded-xl px-5 py-3"
                  >
                    <CheckCircle2 size={16} className="text-green-400 shrink-0" />
                    <span className="text-sm text-gray-300">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="relative section-padding">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded-full mb-4">PLATAFORMAS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Publicidad en todas las <span className="text-gradient">plataformas</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              { name: "Meta Ads", platforms: "Facebook + Instagram", desc: "La mayor red publicitaria. Segmentación por intereses, comportamiento y datos demográficos.", color: "from-blue-600 to-purple-600", budget: "Desde €500/mes" },
              { name: "TikTok Ads", platforms: "TikTok", desc: "El formato de vídeo corto más adictivo. CPMs más bajos y audiencias jóvenes de alto engagement.", color: "from-cyan-400 to-pink-500", budget: "Desde €400/mes" },
              { name: "Google Ads", platforms: "Search + Display + YouTube", desc: "Captura demanda existente con anuncios de búsqueda y expande alcance con display y vídeo.", color: "from-yellow-400 to-red-500", budget: "Desde €600/mes" },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 group relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${p.color} mx-auto mb-5 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110 duration-500`}>
                  <Megaphone size={28} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-1">{p.name}</h3>
                <p className="text-xs text-brand-secondary mb-3">{p.platforms}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.desc}</p>
                <span className="text-xs text-gray-500 font-medium">{p.budget}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,rgba(236,72,153,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">TESTIMONIOS ADS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              ROI que habla <span className="text-gradient">por sí solo</span>
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
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 relative overflow-hidden"
              >
                <Quote size={40} className="absolute top-4 right-4 text-yellow-400/10" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-medium mb-5">
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center font-heading font-bold text-white text-sm">
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
              <div className="relative">
                <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
                  ¿Listo para multiplicar tu <span className="text-gradient">inversión publicitaria</span>?
                </h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Analizamos tu negocio y te proponemos una estrategia de campañas con proyección de resultados.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto group">
                    <span>Análisis gratuito de campañas</span>
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
