"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Palette,
  ArrowRight,
  Layers,
  PenTool,
  Video,
  Eye,
  Star,
  Quote,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Frame,
  Monitor,
  Smartphone,
  MousePointer,
  Brush,
  Image,
  Type,
  Droplets,
} from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

/* ─── Color palette showcase ─── */
function ColorPaletteShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const palettes = [
    {
      name: "Brand Primary",
      colors: [
        { hex: "#6C3AED", name: "Purple 600" },
        { hex: "#8B5CF6", name: "Purple 500" },
        { hex: "#A78BFA", name: "Purple 400" },
        { hex: "#C4B5FD", name: "Purple 300" },
        { hex: "#DDD6FE", name: "Purple 200" },
      ],
    },
    {
      name: "Accent",
      colors: [
        { hex: "#3B82F6", name: "Blue 500" },
        { hex: "#EC4899", name: "Pink 500" },
        { hex: "#10B981", name: "Green 500" },
        { hex: "#F59E0B", name: "Amber 500" },
        { hex: "#06B6D4", name: "Cyan 500" },
      ],
    },
  ];

  return (
    <div ref={ref} className="space-y-6">
      {palettes.map((palette, pi) => (
        <div key={palette.name}>
          <p className="text-xs text-gray-500 mb-3 font-medium">{palette.name}</p>
          <div className="flex gap-2">
            {palette.colors.map((color, ci) => (
              <motion.div
                key={color.hex}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: pi * 0.3 + ci * 0.08, duration: 0.4, type: "spring" }}
                whileHover={{ scale: 1.15, y: -8 }}
                className="flex-1 group cursor-pointer"
              >
                <div
                  className="aspect-square rounded-xl mb-2 shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
                  style={{ background: color.hex, boxShadow: `0 4px 20px ${color.hex}30` }}
                />
                <p className="text-[9px] text-gray-500 text-center">{color.hex}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Design mockup with layers ─── */
function DesignLayersMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative max-w-4xl mx-auto mt-10 sm:mt-16"
    >
      <div className="absolute inset-0 -inset-x-10 -inset-y-10 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-3xl blur-[60px] opacity-50" />

      <div className="relative perspective-[1200px]">
        {/* Layer 3 - Background */}
        <motion.div
          initial={{ opacity: 0, rotateX: 30, y: 60 }}
          animate={isInView ? { opacity: 0.4, rotateX: 15, y: 20 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute inset-0 glass rounded-2xl border border-white/5 transform-gpu"
          style={{ transformOrigin: "center bottom" }}
        >
          <div className="p-8 opacity-30">
            <div className="h-4 w-1/3 rounded bg-white/10 mb-4" />
            <div className="h-3 w-2/3 rounded bg-white/5 mb-2" />
            <div className="h-3 w-1/2 rounded bg-white/5" />
          </div>
        </motion.div>

        {/* Layer 2 - Middle */}
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 40 }}
          animate={isInView ? { opacity: 0.6, rotateX: 8, y: 10 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute inset-0 glass rounded-2xl border border-white/8 transform-gpu"
          style={{ transformOrigin: "center bottom" }}
        >
          <div className="p-8 opacity-40">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-brand-primary/30 to-brand-secondary/20" />
              <div className="flex-1 space-y-2 pt-2">
                <div className="h-3 w-1/2 rounded bg-white/10" />
                <div className="h-2 w-3/4 rounded bg-white/5" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Layer 1 - Front (main design) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative glass rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl"
        >
          {/* Figma-like toolbar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border-b border-white/5">
            <div className="flex gap-2">
              {[MousePointer, Frame, PenTool, Type, Droplets].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className={`w-7 h-7 rounded-md flex items-center justify-center ${i === 0 ? "bg-brand-primary/20" : "hover:bg-white/5"} transition-colors cursor-pointer`}
                >
                  <Icon size={14} className={i === 0 ? "text-brand-primary" : "text-gray-500"} />
                </motion.div>
              ))}
            </div>
            <div className="flex-1 flex justify-center">
              <span className="text-[10px] text-gray-500">Diseño Homepage — ScalifyLabs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-brand-primary/30 border-2 border-brand-primary/50" />
              <div className="w-5 h-5 rounded-full bg-green-500/30 border-2 border-green-500/50 -ml-1" />
            </div>
          </div>

          {/* Canvas */}
          <div className="p-8 min-h-[320px] bg-[#0a0a1a] relative">
            {/* Artboard */}
            <div className="max-w-lg mx-auto bg-white/[0.02] rounded-xl border border-white/5 p-6 space-y-4">
              {/* Logo area */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-primary to-brand-secondary" />
                <div className="w-20 h-3 rounded bg-white/15" />
              </div>

              {/* Hero section */}
              <div className="pt-4">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "80%" } : {}}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="h-5 rounded bg-white/15 mb-2"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "60%" } : {}}
                  transition={{ delay: 1.7, duration: 0.8 }}
                  className="h-5 rounded bg-gradient-to-r from-brand-primary/40 to-brand-secondary/30"
                />
              </div>

              {/* Cards row */}
              <div className="flex gap-3 pt-4">
                {[
                  "from-brand-primary/20 to-brand-primary/5",
                  "from-brand-secondary/20 to-brand-secondary/5",
                  "from-brand-pink/20 to-brand-pink/5",
                ].map((grad, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 2 + i * 0.15, duration: 0.4 }}
                    className={`flex-1 h-20 rounded-lg bg-gradient-to-br ${grad} border border-white/5`}
                  />
                ))}
              </div>
            </div>

            {/* Selection handles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2.5, duration: 0.3 }}
              className="absolute top-20 left-16 right-16 bottom-16 border-2 border-brand-primary/40 rounded-xl pointer-events-none"
            >
              {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map((pos) => (
                <div key={pos} className={`absolute ${pos} w-2.5 h-2.5 rounded-sm bg-brand-primary border border-white/50`} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Side panel - Properties */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -right-4 lg:-right-20 top-1/4 glass rounded-xl p-3 border border-white/10 hidden lg:block w-36"
      >
        <p className="text-[10px] text-gray-500 font-medium mb-2">Propiedades</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-gray-500">W</span>
            <span className="text-[10px] text-white font-mono">1440</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-gray-500">H</span>
            <span className="text-[10px] text-white font-mono">900</span>
          </div>
          <div className="h-px bg-white/5" />
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-sm bg-brand-primary" />
            <span className="text-[9px] text-gray-400">#6C3AED</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main page ─── */
export default function DisenoGraficoPage() {
  const services = [
    {
      icon: Monitor,
      title: "Diseño UI/UX",
      desc: "Interfaces intuitivas que guían al usuario hacia la conversión. Research, wireframes, prototipos y diseño final.",
      details: ["User research", "Wireframing", "Prototipado interactivo", "Design system"],
      color: "#6C3AED",
    },
    {
      icon: Brush,
      title: "Branding & Identidad",
      desc: "Logo, paleta de colores, tipografía, guidelines y todos los elementos que definen tu marca visual.",
      details: ["Logo design", "Guía de estilo", "Papelería", "Social media kit"],
      color: "#EC4899",
    },
    {
      icon: Video,
      title: "Creación de Vídeos",
      desc: "Motion graphics, Reels, vídeos corporativos y contenido audiovisual para redes y web.",
      details: ["Motion graphics", "Reels & TikToks", "Vídeo corporativo", "Animaciones"],
      color: "#3B82F6",
    },
    {
      icon: Image,
      title: "Diseño Gráfico",
      desc: "Piezas gráficas para redes sociales, ads, presentaciones y material corporativo.",
      details: ["Social media", "Ads creativos", "Presentaciones", "Infografías"],
      color: "#F59E0B",
    },
  ];

  const processSteps = [
    { icon: Eye, title: "Brief & Research", desc: "Entendemos tu marca, audiencia y objetivos para definir la dirección creativa.", number: "01" },
    { icon: PenTool, title: "Conceptualización", desc: "Moodboards, bocetos y propuestas de dirección visual para tu aprobación.", number: "02" },
    { icon: Layers, title: "Diseño & Iteración", desc: "Desarrollo del diseño final con rondas de feedback y refinamiento.", number: "03" },
    { icon: Sparkles, title: "Entrega & Guidelines", desc: "Archivos en todos los formatos + guía de uso para mantener la coherencia.", number: "04" },
  ];

  const portfolioItems = [
    { title: "Rebrand startup tech", category: "Branding", gradient: "from-purple-600/30 via-blue-600/20 to-cyan-500/30" },
    { title: "App fitness UI/UX", category: "UI/UX", gradient: "from-pink-600/30 via-red-600/20 to-orange-500/30" },
    { title: "E-commerce de moda", category: "Web Design", gradient: "from-blue-600/30 via-indigo-600/20 to-purple-500/30" },
    { title: "Campaña digital verano", category: "Social Media", gradient: "from-yellow-600/30 via-orange-600/20 to-red-500/30" },
    { title: "Dashboard analytics", category: "UI/UX", gradient: "from-cyan-600/30 via-blue-600/20 to-indigo-500/30" },
    { title: "Video corporativo SaaS", category: "Vídeo", gradient: "from-green-600/30 via-emerald-600/20 to-teal-500/30" },
  ];

  const testimonials = [
    {
      text: "El rebrand que hicieron transformó por completo la percepción de nuestra marca. Pasamos de parecer una startup amateur a una empresa seria. Los clientes empezaron a confiar más en nosotros.",
      author: "Sofía R.",
      role: "Fundadora, Startup EdTech",
      location: "Barcelona",
      metric: "+60% percepción de marca",
    },
    {
      text: "El diseño UI/UX de nuestra app es excepcional. La tasa de retención subió un 40% después del rediseño. Los usuarios dicen que es una delicia usarla.",
      author: "Alberto G.",
      role: "Product Manager, App de Salud",
      location: "Valencia",
      metric: "+40% retención usuarios",
    },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(236,72,153,0.12),transparent_70%)]" />
          <div className="absolute top-40 left-1/3 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-pink-500/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-10 w-full">
          <div className="text-center">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-brand-pink mb-6">
                <Palette size={14} />
                DISEÑO GRÁFICO
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0.1} className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5 sm:mb-6">
              <span className="text-white">Diseño que comunica</span>
              <br />
              <span className="text-gradient">y convierte</span>
            </motion.h1>

            <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.2} className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-400 leading-relaxed mb-10 px-2 sm:px-0">
              UI/UX, identidad visual, branding y producción de vídeo.
              Creatividad con propósito estratégico.
            </motion.p>

            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <ContactButton className="btn-primary text-base group">
                <span>Empezar un proyecto de diseño</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </ContactButton>
              <Link href="/casos" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">Ver portfolio</Link>
            </motion.div>
          </div>

          <DesignLayersMockup />
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(236,72,153,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">SERVICIOS DE DISEÑO</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Creatividad con <span className="text-gradient">propósito estratégico</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 group relative overflow-hidden"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110" style={{ background: `${s.color}15` }}>
                    <s.icon size={28} style={{ color: s.color }} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {s.details.map((d) => (
                        <span key={d} className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded-md">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COLOR PALETTE + PROCESS ═══ */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(108,58,237,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-4">IDENTIDAD VISUAL</span>
              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-6">
                Colores que <span className="text-gradient">cuentan tu historia</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Cada color, tipografía y elemento visual se elige con intención.
                Creamos sistemas de diseño coherentes que refuerzan la identidad de tu marca.
              </p>

              <ColorPaletteShowcase />
            </motion.div>

            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              <h3 className="font-heading font-bold text-2xl text-white mb-8">Nuestro proceso creativo</h3>
              <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                        <step.icon size={18} className="text-brand-primary" />
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="w-px h-8 bg-gradient-to-b from-brand-primary/20 to-transparent mt-2" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-brand-primary font-mono">{step.number}</span>
                        <h4 className="font-heading font-semibold text-white">{step.title}</h4>
                      </div>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO GRID ═══ */}
      <section className="relative section-padding">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-secondary bg-brand-secondary/10 rounded-full mb-4">PORTFOLIO</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Proyectos <span className="text-gradient">que nos enorgullecen</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/5 overflow-hidden relative mb-3`}>
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Sparkles size={32} className="text-white/30 mx-auto mb-2 group-hover:text-white/50 transition-colors" />
                      <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors">Vista previa</p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <Eye size={24} className="text-white mx-auto mb-2" />
                      <span className="text-xs text-white font-medium">Ver proyecto</span>
                    </div>
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-white text-sm group-hover:text-gradient transition-all">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.category}</p>
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
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">RESULTADOS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Diseño que <span className="text-gradient">impacta en los resultados</span>
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
                <Quote size={40} className="absolute top-4 right-4 text-brand-pink/10" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-medium mb-5">
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center font-heading font-bold text-white text-sm">
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(236,72,153,0.08),transparent_70%)]" />
              <div className="relative">
                <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
                  ¿Listo para una marca que <span className="text-gradient">destaque y convierta</span>?
                </h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Cuéntanos tu visión y la transformamos en un diseño que represente lo mejor de tu marca.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto group">
                    <span>Empezar proyecto de diseño</span>
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
