"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Share2,
  ArrowRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  TrendingUp,
  Users,
  Eye,
  Star,
  Quote,
  Camera,
  Video,
  PenTool,
  BarChart3,
  Calendar,
  CheckCircle2,
  Repeat2,
} from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

/* ─── Instagram Post Mockup ─── */
function InstagramMockup() {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -5 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative max-w-sm mx-auto mt-10 sm:mt-16"
    >
      <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-gradient-to-br from-pink-500/15 via-purple-500/10 to-orange-500/10 rounded-3xl blur-[60px] opacity-50" />

      <div className="relative glass rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl max-w-[340px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 p-3 border-b border-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
            <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
              <span className="text-[8px] font-bold text-white">SL</span>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold text-white">tunegocio</span>
            <span className="text-[10px] text-gray-500 block">Patrocinado</span>
          </div>
        </div>

        {/* Image area */}
        <div className="aspect-square bg-gradient-to-br from-brand-primary/20 via-brand-pink/15 to-brand-secondary/20 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-pink mx-auto mb-4 flex items-center justify-center">
                <Camera size={32} className="text-white" />
              </div>
              <p className="text-sm font-heading font-bold text-white">Tu contenido aquí</p>
              <p className="text-xs text-gray-400 mt-1">Diseñado para convertir</p>
            </motion.div>
          </div>

          {/* Engagement overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.3 }}
            className="absolute top-3 right-3 glass rounded-lg px-2 py-1 flex items-center gap-1"
          >
            <Eye size={10} className="text-white" />
            <span className="text-[10px] text-white font-medium">24.5K</span>
          </motion.div>
        </div>

        {/* Actions */}
        <div className="p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <motion.button
                whileTap={{ scale: 1.3 }}
                onClick={() => setLiked(!liked)}
                className="transition-colors"
              >
                <Heart
                  size={22}
                  className={liked ? "fill-red-500 text-red-500" : "text-white"}
                />
              </motion.button>
              <MessageCircle size={22} className="text-white" />
              <Send size={20} className="text-white" />
            </div>
            <Bookmark size={22} className="text-white" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="text-xs text-white font-semibold"
          >
            2.847 Me gusta
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-xs text-gray-400 mt-1"
          >
            <span className="font-semibold text-white">tunegocio</span>{" "}
            Contenido estratégico que genera resultados reales...
            <span className="text-gray-500"> más</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="text-[10px] text-gray-600 mt-1"
          >
            Ver los 184 comentarios
          </motion.p>
        </div>
      </div>

      {/* Floating metrics */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className="absolute -right-8 lg:-right-24 top-1/4 space-y-3 hidden sm:block"
      >
        {[
          { icon: Heart, label: "Engagement", value: "8.4%", color: "text-red-400" },
          { icon: Users, label: "Followers", value: "+2.3K/mes", color: "text-blue-400" },
          { icon: TrendingUp, label: "Alcance", value: "+180%", color: "text-green-400" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 + i * 0.2 }}
            className="glass rounded-xl px-3 py-2 border border-white/10 flex items-center gap-2"
          >
            <m.icon size={14} className={m.color} />
            <div>
              <div className="text-[10px] text-gray-400">{m.label}</div>
              <div className="text-xs font-bold text-white">{m.value}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stories row */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="absolute -left-8 lg:-left-24 top-1/3 hidden sm:block"
      >
        <div className="flex flex-col gap-2">
          {["Reels", "Stories", "Posts"].map((type, i) => (
            <motion.div
              key={type}
              whileHover={{ scale: 1.05 }}
              className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] cursor-pointer"
            >
              <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
                <span className="text-[8px] font-medium text-gray-300">{type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Content calendar mockup ─── */
function ContentCalendar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const days = ["L", "M", "X", "J", "V", "S", "D"];
  const calendar = [
    [null, null, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
  ];

  const contentDays: Record<number, { type: string; color: string }> = {
    1: { type: "Reel", color: "bg-pink-500/30" },
    3: { type: "Post", color: "bg-purple-500/30" },
    5: { type: "Story", color: "bg-blue-500/30" },
    7: { type: "Carrusel", color: "bg-green-500/30" },
    9: { type: "Reel", color: "bg-pink-500/30" },
    11: { type: "Post", color: "bg-purple-500/30" },
    14: { type: "Story", color: "bg-blue-500/30" },
    15: { type: "Reel", color: "bg-pink-500/30" },
    17: { type: "Post", color: "bg-purple-500/30" },
    19: { type: "Carrusel", color: "bg-green-500/30" },
    21: { type: "Reel", color: "bg-pink-500/30" },
    23: { type: "Post", color: "bg-purple-500/30" },
    25: { type: "Story", color: "bg-blue-500/30" },
  };

  return (
    <div ref={ref} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading font-semibold text-white flex items-center gap-2">
          <Calendar size={16} className="text-brand-primary" />
          Calendario de contenidos
        </h3>
        <span className="text-xs text-gray-500">Marzo 2026</span>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((d) => (
          <div key={d} className="text-center text-[10px] text-gray-500 font-medium py-1">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      {calendar.map((week, wi) => (
        <div key={wi} className="grid grid-cols-7 gap-1 mb-1">
          {week.map((day, di) => (
            <motion.div
              key={`${wi}-${di}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: wi * 0.1 + di * 0.03, duration: 0.3 }}
              className={`aspect-square rounded-lg flex flex-col items-center justify-center relative ${
                day && contentDays[day] ? contentDays[day].color : "bg-white/[0.02]"
              } ${day ? "border border-white/5" : ""}`}
            >
              {day && (
                <>
                  <span className="text-[10px] text-gray-400">{day}</span>
                  {contentDays[day] && (
                    <span className="text-[7px] text-gray-300 font-medium mt-0.5">{contentDays[day].type}</span>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>
      ))}

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mt-4 justify-center">
        {[
          { label: "Reel", color: "bg-pink-500/30" },
          { label: "Post", color: "bg-purple-500/30" },
          { label: "Story", color: "bg-blue-500/30" },
          { label: "Carrusel", color: "bg-green-500/30" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-sm ${l.color}`} />
            <span className="text-[10px] text-gray-500">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main page ─── */
export default function RedesSocialesPage() {
  const platforms = [
    { name: "Instagram", users: "2B+", color: "from-yellow-400 via-pink-500 to-purple-600", desc: "Contenido visual, Reels, Stories y comunidad" },
    { name: "Facebook", users: "3B+", color: "from-blue-600 to-blue-400", desc: "Campañas, grupos y marketplace" },
    { name: "TikTok", users: "1.5B+", color: "from-cyan-400 via-pink-500 to-red-500", desc: "Vídeos virales y tendencias" },
    { name: "LinkedIn", users: "900M+", color: "from-blue-700 to-blue-500", desc: "B2B, networking y liderazgo" },
  ];

  const services = [
    { icon: PenTool, title: "Estrategia de contenidos", desc: "Plan editorial mensual alineado con tus objetivos de negocio y el comportamiento de tu audiencia.", color: "#6C3AED" },
    { icon: Camera, title: "Creación de contenido", desc: "Diseño gráfico, copywriting, edición de vídeo y producción de Reels/TikToks profesionales.", color: "#EC4899" },
    { icon: Calendar, title: "Gestión y publicación", desc: "Programación estratégica, publicación en horarios óptimos y gestión de comunidad.", color: "#3B82F6" },
    { icon: BarChart3, title: "Análisis y reporting", desc: "Informes mensuales con métricas clave, insights accionables y plan de mejora.", color: "#10B981" },
    { icon: Users, title: "Community management", desc: "Respuesta a comentarios y DMs, gestión de crisis y construcción de comunidad.", color: "#F59E0B" },
    { icon: Repeat2, title: "Growth hacking", desc: "Colaboraciones, sorteos, UGC y estrategias de crecimiento orgánico acelerado.", color: "#8B5CF6" },
  ];

  const testimonials = [
    {
      text: "Pasamos de 800 seguidores a 15.000 en 6 meses. Pero lo más importante: las reservas desde Instagram se triplicaron. Contenido de calidad que convierte.",
      author: "Ana M.",
      role: "Propietaria, Restaurante",
      location: "Las Palmas",
      metric: "+15K seguidores",
    },
    {
      text: "No solo gestionan nuestras redes, entienden nuestro negocio. Cada publicación tiene un propósito estratégico y se nota en los resultados.",
      author: "Elena V.",
      role: "Fundadora, Marca de Moda",
      location: "Barcelona",
      metric: "+320% engagement",
    },
  ];

  const contentExamples = [
    { type: "Reels", desc: "Vídeos cortos virales", count: "12-16/mes", color: "#EC4899" },
    { type: "Carruseles", desc: "Contenido educativo", count: "8-12/mes", color: "#6C3AED" },
    { type: "Stories", desc: "Conexión diaria", count: "30-60/mes", color: "#3B82F6" },
    { type: "Posts estáticos", desc: "Branding y CTA", count: "8-12/mes", color: "#F59E0B" },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(236,72,153,0.12),transparent_70%)]" />
          <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-pink-500/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 left-1/4 w-[300px] h-[300px] bg-purple-500/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-brand-pink mb-6">
                  <Share2 size={14} />
                  REDES SOCIALES
                </span>
              </motion.div>

              <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0.1} className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl leading-[1.05] tracking-tight mb-5 sm:mb-6">
                <span className="text-white">Redes sociales que</span>
                <br />
                <span className="text-gradient">trabajan para tu negocio</span>
              </motion.h1>

              <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.2} className="text-sm sm:text-lg text-gray-400 leading-relaxed mb-8 px-2 sm:px-0">
                Estrategia, creación de contenido, publicación y análisis.
                Construimos comunidades que compran y recomiendan.
              </motion.p>

              <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.3} className="flex flex-col sm:flex-row gap-4">
                <ContactButton className="btn-primary text-base group">
                  <span>Gestionar mis redes</span>
                  <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                </ContactButton>
                <Link href="/casos" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">Ver resultados</Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.5} className="flex gap-8 mt-10">
                {[
                  { value: "+50M", label: "Alcance generado" },
                  { value: "8.4%", label: "Engagement medio" },
                  { value: "+200", label: "Cuentas gestionadas" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-heading font-bold text-xl text-gradient">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <InstagramMockup />
          </div>
        </div>
      </section>

      {/* ═══ PLATFORMS ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(236,72,153,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">PLATAFORMAS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Dominamos <span className="text-gradient">todas las plataformas</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6 text-center group relative overflow-hidden"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${p.color} mx-auto mb-4 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110 duration-500`}>
                  <span className="text-white font-heading font-bold text-lg">{p.name[0]}</span>
                </div>
                <h3 className="font-heading font-semibold text-white text-lg mb-1">{p.name}</h3>
                <p className="text-xs text-brand-secondary mb-2">{p.users} usuarios</p>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES GRID ═══ */}
      <section className="relative section-padding">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-4">QUÉ HACEMOS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Gestión integral de <span className="text-gradient">redes sociales</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400">No solo publicamos. Diseñamos una estrategia completa para convertir seguidores en clientes.</p>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} variants={fadeInUp} custom={i * 0.1} className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-7 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110" style={{ background: `${s.color}15` }}>
                  <s.icon size={24} style={{ color: s.color }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ CONTENT CALENDAR + TYPES ═══ */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(108,58,237,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
              <span className="inline-block px-3 py-1 text-xs font-medium text-brand-secondary bg-brand-secondary/10 rounded-full mb-4">PLANIFICACIÓN</span>
              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-6">
                Contenido <span className="text-gradient">planificado al detalle</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Cada publicación responde a una estrategia. Planificamos un calendario mensual
                con variedad de formatos para maximizar alcance y engagement.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {contentExamples.map((c, i) => (
                  <motion.div
                    key={c.type}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: c.color }} />
                    <div>
                      <p className="text-sm font-medium text-white">{c.type}</p>
                      <p className="text-xs text-gray-500">{c.desc}</p>
                      <p className="text-xs text-brand-primary mt-0.5">{c.count}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              <ContentCalendar />
            </motion.div>
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
              Comunidades que <span className="text-gradient">compran y recomiendan</span>
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center font-heading font-bold text-white text-sm">
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(236,72,153,0.1),transparent_70%)]" />
              <div className="relative">
                <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
                  ¿Quieres redes sociales que <span className="text-gradient">generen ventas</span>?
                </h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Cuéntanos sobre tu negocio y diseñamos una estrategia de contenidos a tu medida.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto group">
                    <span>Quiero una estrategia</span>
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
