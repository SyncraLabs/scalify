"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  ArrowRight,
  ArrowDown,
  Users,
  Mail,
  Zap,
  Target,
  Heart,
  ShoppingCart,
  Star,
  Quote,
  CheckCircle2,
  MessageSquare,
  Bot,
  Repeat,
  Gift,
  Eye,
  MousePointer,
  Filter,
  BarChart3,
} from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

/* ─── Interactive Funnel Diagram ─── */
function FunnelDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stages = [
    {
      icon: Eye,
      label: "ATRACCIÓN",
      desc: "Captamos tráfico cualificado a tu web mediante SEO, Ads y redes sociales.",
      width: "100%",
      color: "#6C3AED",
      gradient: "from-brand-primary/30 to-brand-primary/10",
      visitors: "10.000 visitantes",
    },
    {
      icon: MousePointer,
      label: "CAPTACIÓN",
      desc: "Lead magnets, landing pages optimizadas y formularios que convierten visitantes en leads.",
      width: "75%",
      color: "#3B82F6",
      gradient: "from-brand-secondary/30 to-brand-secondary/10",
      visitors: "2.500 leads",
    },
    {
      icon: Mail,
      label: "NURTURING",
      desc: "Secuencias de email automatizadas que educan, generan confianza y calientan al lead.",
      width: "50%",
      color: "#EC4899",
      gradient: "from-brand-pink/30 to-brand-pink/10",
      visitors: "800 leads calientes",
    },
    {
      icon: ShoppingCart,
      label: "CONVERSIÓN",
      desc: "Ofertas irresistibles, urgencia real y un proceso de compra sin fricciones.",
      width: "30%",
      color: "#10B981",
      gradient: "from-green-500/30 to-green-500/10",
      visitors: "320 clientes",
    },
    {
      icon: Heart,
      label: "FIDELIZACIÓN",
      desc: "Onboarding, upsells, cross-sells y programa de referidos para maximizar el LTV.",
      width: "20%",
      color: "#F59E0B",
      gradient: "from-yellow-500/30 to-yellow-500/10",
      visitors: "200 fans",
    },
  ];

  return (
    <div ref={ref} className="max-w-3xl mx-auto">
      <div className="space-y-3">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: stage.width } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
              className={`relative bg-gradient-to-r ${stage.gradient} rounded-xl border border-white/5 p-4 sm:p-5 overflow-hidden group hover:border-white/10 transition-colors cursor-default`}
              style={{ maxWidth: stage.width }}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${stage.color}20` }}>
                  <stage.icon size={20} style={{ color: stage.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading font-bold text-sm text-white">{stage.label}</h3>
                    <span className="text-[10px] font-medium text-gray-400 shrink-0 hidden sm:inline">{stage.visitors}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed mt-1 hidden sm:block">{stage.desc}</p>
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>

            {/* Arrow between stages */}
            {i < stages.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.3 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <ArrowDown size={16} className="text-gray-500 my-1" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Automation flow ─── */
function AutomationFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const nodes = [
    { icon: Users, label: "Visitante entra", color: "#6C3AED", type: "trigger" },
    { icon: Gift, label: "Lead magnet", color: "#3B82F6", type: "action" },
    { icon: Mail, label: "Email bienvenida", color: "#EC4899", type: "action" },
    { icon: MessageSquare, label: "Secuencia 3 emails", color: "#8B5CF6", type: "action" },
    { icon: Filter, label: "¿Abrió emails?", color: "#F59E0B", type: "condition" },
    { icon: Target, label: "Oferta personal.", color: "#10B981", type: "action" },
    { icon: Bot, label: "CRM automático", color: "#06B6D4", type: "action" },
    { icon: ShoppingCart, label: "Venta cerrada", color: "#10B981", type: "result" },
  ];

  return (
    <div ref={ref} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8">
      <div className="flex items-center gap-2 mb-6">
        <Bot size={18} className="text-brand-primary" />
        <h3 className="font-heading font-semibold text-white">Flujo de automatización</h3>
        <span className="text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Activo 24/7
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {nodes.map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="relative"
          >
            <div className={`rounded-xl p-3 text-center border ${
              node.type === "trigger" ? "border-brand-primary/30 bg-brand-primary/5" :
              node.type === "condition" ? "border-yellow-500/30 bg-yellow-500/5 rounded-[50%/30%]" :
              node.type === "result" ? "border-green-500/30 bg-green-500/5" :
              "border-white/5 bg-white/[0.02]"
            }`}>
              <node.icon size={18} style={{ color: node.color }} className="mx-auto mb-2" />
              <span className="text-[10px] text-gray-300 font-medium leading-tight block">{node.label}</span>
            </div>

            {/* Connector arrow */}
            {i < nodes.length - 1 && i % 4 !== 3 && (
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 text-gray-600 hidden sm:block">
                <ArrowRight size={10} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function EmbudoVentasPage() {
  const tools = [
    { name: "ActiveCampaign", desc: "Email marketing y automatización", color: "bg-blue-500/10" },
    { name: "ClickFunnels", desc: "Landing pages y funnels", color: "bg-orange-500/10" },
    { name: "Zapier", desc: "Integraciones entre herramientas", color: "bg-yellow-500/10" },
    { name: "HubSpot", desc: "CRM y gestión de leads", color: "bg-orange-600/10" },
    { name: "Make", desc: "Automatizaciones avanzadas", color: "bg-purple-500/10" },
    { name: "Calendly", desc: "Agendar llamadas", color: "bg-blue-600/10" },
    { name: "Stripe", desc: "Procesamiento de pagos", color: "bg-indigo-500/10" },
    { name: "WhatsApp API", desc: "Mensajería automatizada", color: "bg-green-500/10" },
  ];

  const benefits = [
    { icon: Bot, title: "Trabaja 24/7", desc: "Tu embudo vende mientras duermes. Automatización que no descansa.", color: "#6C3AED" },
    { icon: Target, title: "Leads cualificados", desc: "Solo llegan a ventas los contactos que han demostrado interés real.", color: "#3B82F6" },
    { icon: BarChart3, title: "100% medible", desc: "Dashboard en tiempo real con cada métrica del embudo.", color: "#EC4899" },
    { icon: Repeat, title: "Escalable", desc: "Una vez funciona, escalar es cuestión de aumentar tráfico.", color: "#10B981" },
  ];

  const testimonials = [
    {
      text: "El embudo que diseñaron genera 40+ leads cualificados por semana de forma automática. Lo que antes me llevaba 20 horas semanales ahora funciona solo.",
      author: "David L.",
      role: "Emprendedor Digital",
      location: "Barcelona",
      metric: "+40 leads/semana automáticos",
    },
    {
      text: "Implementaron un sistema completo: captación, nurturing por email, cualificación y cierre. En 3 meses recuperamos la inversión x5.",
      author: "Sandra T.",
      role: "Directora, Academia Online",
      location: "Madrid",
      metric: "ROI 5x en 3 meses",
    },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(245,158,11,0.1),transparent_70%)]" />
          <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-dots opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-10 w-full">
          <div className="text-center">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-yellow-400 mb-6">
                <TrendingUp size={14} />
                EMBUDO DE VENTAS
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0.1} className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5 sm:mb-6">
              <span className="text-white">Convierte desconocidos en</span>
              <br />
              <span className="text-gradient">clientes de forma automática</span>
            </motion.h1>

            <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.2} className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-400 leading-relaxed mb-10 px-2 sm:px-0">
              Diseñamos embudos de ventas completos: captación, nurturing, conversión y fidelización.
              Automatización que trabaja para ti 24/7.
            </motion.p>

            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <ContactButton className="btn-primary text-base group">
                <span>Diseñar mi embudo</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </ContactButton>
              <Link href="/casos" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">Ver embudos en acción</Link>
            </motion.div>
          </div>

          {/* Funnel Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20"
          >
            <FunnelDiagram />
          </motion.div>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,58,237,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-4">VENTAJAS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              ¿Por qué necesitas un <span className="text-gradient">embudo de ventas</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-7 group text-center"
              >
                <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110" style={{ background: `${b.color}15` }}>
                  <b.icon size={26} style={{ color: b.color }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AUTOMATION FLOW ═══ */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(59,130,246,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-secondary bg-brand-secondary/10 rounded-full mb-4">AUTOMATIZACIÓN</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Todo <span className="text-gradient">automatizado</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400">
              Desde que un visitante entra en tu web hasta que se convierte en cliente. Todo el proceso funciona automáticamente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AutomationFlow />
          </motion.div>
        </div>
      </section>

      {/* ═══ TOOLS ═══ */}
      <section className="relative section-padding">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-3 py-1 text-xs font-medium text-yellow-400 bg-yellow-400/10 rounded-full mb-4">HERRAMIENTAS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-3 sm:mb-4">
              Integramos las mejores <span className="text-gradient">herramientas</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 mb-12">
              Trabajamos con las plataformas líderes del mercado para construir embudos robustos y escalables.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`${tool.color} px-4 py-3 rounded-xl border border-white/5 cursor-default`}
              >
                <span className="text-sm font-medium text-gray-300">{tool.name}</span>
                <span className="text-[10px] text-gray-500 block mt-0.5">{tool.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(236,72,153,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">RESULTADOS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Embudos que <span className="text-gradient">generan ventas reales</span>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-brand-primary flex items-center justify-center font-heading font-bold text-white text-sm">
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(245,158,11,0.08),transparent_70%)]" />
              <div className="relative">
                <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
                  ¿Quieres un sistema que <span className="text-gradient">venda por ti 24/7</span>?
                </h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Diseñamos tu embudo de ventas completo. Desde la captación hasta la fidelización.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto group">
                    <span>Diseñar mi embudo</span>
                    <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                  </ContactButton>
                  <a href="https://wa.me/34604561592" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">
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
