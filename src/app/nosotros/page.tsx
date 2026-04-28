"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  Heart,
  Target,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Lightbulb,
  Globe,
  Award,
  Calendar,
  BarChart3,
  Code2,
  Palette,
  Megaphone,
  Search,
  MousePointerClick,
  Smartphone,
} from "lucide-react";
import { fadeInUp, fadeIn, scaleIn, slideInLeft, slideInRight, staggerContainer } from "@/lib/motion";
import { HeroBackground, SectionBackground } from "@/components/BackgroundEffects";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";

/* ───────── Animated counter ───────── */
function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ───────── Seeded random for SSR match ───────── */
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/* ───────── Data ───────── */
const teamMembers = [
  {
    name: "Carlos Méndez",
    role: "CEO & Estrategia Digital",
    bio: "Más de 10 años liderando estrategias de crecimiento para empresas en toda España. Apasionado por la innovación y los resultados medibles.",
    icon: Rocket,
    color: "#6C3AED",
    skills: ["Estrategia", "Liderazgo", "Growth"],
  },
  {
    name: "Lucía Fernández",
    role: "Directora Creativa",
    bio: "Diseñadora y directora creativa con ojo para el detalle. Transforma ideas en experiencias visuales que conectan con tu audiencia.",
    icon: Palette,
    color: "#EC4899",
    skills: ["Branding", "UI/UX", "Dirección de Arte"],
  },
  {
    name: "Alejandro Torres",
    role: "Lead Developer",
    bio: "Full-stack developer especializado en Next.js, React y arquitecturas escalables. Cada línea de código está orientada al rendimiento.",
    icon: Code2,
    color: "#3B82F6",
    skills: ["React", "Next.js", "Node.js"],
  },
  {
    name: "Marina López",
    role: "Social Media Manager",
    bio: "Experta en crear comunidades y estrategias de contenido que generan engagement real. Tu marca, su voz, nuestra estrategia.",
    icon: Megaphone,
    color: "#F59E0B",
    skills: ["Instagram", "TikTok", "Content"],
  },
  {
    name: "David Ruiz",
    role: "SEO & Analytics",
    bio: "Especialista en posicionamiento orgánico y análisis de datos. Convierte el tráfico en oportunidades reales de negocio.",
    icon: Search,
    color: "#10B981",
    skills: ["SEO", "Analytics", "SEM"],
  },
  {
    name: "Sara Martín",
    role: "Ads & Performance",
    bio: "Gestora de campañas publicitarias con un track record de ROI excepcional. Cada euro invertido, optimizado al máximo.",
    icon: MousePointerClick,
    color: "#8B5CF6",
    skills: ["Google Ads", "Meta Ads", "CRO"],
  },
];

const values = [
  {
    icon: Target,
    title: "Resultados Reales",
    description: "No vendemos humo. Cada estrategia está orientada a KPIs medibles y resultados tangibles para tu negocio.",
    color: "#6C3AED",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description: "El marketing digital evoluciona cada día. Nos mantenemos a la vanguardia para que tu marca siempre esté un paso adelante.",
    color: "#3B82F6",
  },
  {
    icon: Heart,
    title: "Pasión por lo que Hacemos",
    description: "Amamos nuestro trabajo y eso se nota. Cada proyecto lo tratamos como si fuera nuestro propio negocio.",
    color: "#EC4899",
  },
  {
    icon: Shield,
    title: "Transparencia Total",
    description: "Sin letra pequeña, sin sorpresas. Reportes claros, comunicación directa y honestidad en cada paso.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Equipo Multidisciplinar",
    description: "Diseñadores, developers, estrategas y analistas trabajando juntos para cubrir todas las necesidades de tu marca.",
    color: "#F59E0B",
  },
  {
    icon: Zap,
    title: "Agilidad y Adaptación",
    description: "Nos adaptamos rápido a los cambios del mercado. Estrategias flexibles que evolucionan contigo.",
    color: "#8B5CF6",
  },
];

const milestones = [
  { year: "2018", title: "El Comienzo", description: "Nacimos como un pequeño equipo con grandes ambiciones. Nuestro primer cliente confió en nosotros y eso lo cambió todo.", icon: Rocket },
  { year: "2019", title: "Crecimiento Orgánico", description: "Pasamos de 5 a 20 clientes activos. El boca a boca fue nuestro mejor aliado. Cada resultado hablaba por sí solo.", icon: TrendingUp },
  { year: "2020", title: "Digitalización Express", description: "La pandemia aceleró todo. Ayudamos a decenas de empresas a dar el salto digital y mantener sus negocios a flote.", icon: Globe },
  { year: "2021", title: "Equipo de 10+", description: "Ampliamos el equipo con talento especializado. Developers, diseñadores y estrategas se unieron a la misión.", icon: Users },
  { year: "2023", title: "Primer Premio", description: "Reconocidos como una de las agencias emergentes más innovadoras de España. Validación de años de trabajo duro.", icon: Award },
  { year: "2025", title: "100+ Empresas", description: "Superamos el hito de 100 empresas escaladas. Hoy trabajamos con PYMEs y startups de toda España y Latinoamérica.", icon: BarChart3 },
];

const stats = [
  { value: 7, suffix: "+", label: "Años de Experiencia" },
  { value: 100, suffix: "+", label: "Empresas Escaladas" },
  { value: 15, suffix: "+", label: "Profesionales" },
  { value: 98, suffix: "%", label: "Clientes Satisfechos" },
];

/* ───────── HERO ───────── */
function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden" ref={ref}>
      <HeroBackground />

      {/* Team illustration - abstract */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.07]">
          <div className="absolute inset-0 rounded-full border-2 border-brand-primary/40 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-8 rounded-full border border-brand-secondary/30 animate-[spin_45s_linear_infinite_reverse]" />
          <div className="absolute inset-20 rounded-full border border-brand-pink/20 animate-[spin_30s_linear_infinite]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-14 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8"
          >
            <Users size={16} className="text-brand-primary" />
            <span className="text-xs sm:text-sm text-gray-300 font-medium">Conoce al equipo detrás de tu crecimiento</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            className="font-heading font-bold text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5 sm:mb-6 leading-tight"
          >
            Detrás de cada estrategia hay{" "}
            <span className="text-gradient">personas que lo dan todo</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            className="text-sm sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
          >
            Somos un equipo multidisciplinar apasionado por el marketing digital
            y la tecnología. Llevamos <strong className="text-white">7+ años</strong> ayudando
            a empresas a crecer online con estrategias que{" "}
            <strong className="text-white">realmente funcionan</strong>.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto">
              <span>Trabaja con nosotros</span>
              <ArrowRight size={18} className="relative z-10" />
            </ContactButton>
            <Link href="/servicios" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">
              <span>Ver nuestros servicios</span>
            </Link>
          </motion.div>
        </div>

        {/* Floating team avatars - abstract representations */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.5}
          className="mt-16 flex justify-center"
        >
          <div className="flex -space-x-4">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className="relative w-14 h-14 rounded-full border-2 border-[#0D0D0D] flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${member.color}40, ${member.color}20)`,
                  zIndex: teamMembers.length - i,
                }}
              >
                <member.icon size={20} style={{ color: member.color }} />
              </div>
            ))}
            <div className="relative w-14 h-14 rounded-full border-2 border-[#0D0D0D] bg-white/5 flex items-center justify-center text-gray-400 text-sm font-heading font-bold z-0">
              +9
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050510] to-transparent" />
    </section>
  );
}

/* ───────── STORY / MISSION ───────── */
function StorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <SectionBackground variant="alt" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - text */}
          <div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6"
            >
              <Sparkles size={14} className="text-brand-primary" />
              <span className="text-xs text-brand-primary font-medium">Nuestra Historia</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6"
            >
              De una idea a{" "}
              <span className="text-gradient">escalar negocios</span>{" "}
              en toda España
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
              className="space-y-4 text-gray-400 leading-relaxed"
            >
              <p>
                ScalifyLabs nació en 2018 con una misión clara:{" "}
                <strong className="text-white">democratizar el marketing digital de calidad</strong>{" "}
                para PYMEs y startups que merecen competir con las grandes marcas.
              </p>
              <p>
                Empezamos siendo un equipo de 3 personas con un portátil, una conexión a
                internet y muchas ganas de demostrar que el marketing digital bien hecho
                puede transformar cualquier negocio, sin importar su tamaño.
              </p>
              <p>
                Hoy, más de <strong className="text-white">100 empresas después</strong>,
                seguimos con la misma energía del primer día. Cada cliente no es un número
                más — es un partner al que nos comprometemos a hacer crecer.
              </p>
            </motion.div>
          </div>

          {/* Right - visual mockup (office/workspace illustration) */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.2}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card p-1">
              {/* Simulated workspace/dashboard image */}
              <div className="relative rounded-xl overflow-hidden bg-[#0a0a1a] aspect-[4/3]">
                {/* Header bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="px-4 py-1 rounded-md bg-white/5 text-xs text-gray-500">scalifylabs.com/dashboard</div>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-6 space-y-4">
                  {/* Top metrics row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Clientes Activos", value: "47", change: "+12%", color: "#6C3AED" },
                      { label: "Proyectos Completados", value: "103", change: "+28%", color: "#3B82F6" },
                      { label: "Satisfacción", value: "98%", change: "+3%", color: "#10B981" },
                    ].map((metric) => (
                      <div key={metric.label} className="rounded-lg bg-white/5 p-3 border border-white/5">
                        <p className="text-[10px] text-gray-500 mb-1">{metric.label}</p>
                        <p className="font-heading font-bold text-lg text-white">{metric.value}</p>
                        <p className="text-[10px] mt-1" style={{ color: metric.color }}>{metric.change}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="rounded-lg bg-white/5 p-4 border border-white/5">
                    <p className="text-xs text-gray-500 mb-3">Crecimiento de Clientes</p>
                    <div className="flex items-end gap-2 h-24">
                      {[35, 45, 40, 55, 60, 52, 70, 80, 75, 90, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t" style={{
                          height: `${h}%`,
                          background: `linear-gradient(to top, rgba(108,58,237,0.6), rgba(59,130,246,0.3))`,
                          opacity: 0.4 + (i / 12) * 0.6,
                        }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-[9px] text-gray-600">2018</span>
                      <span className="text-[9px] text-gray-600">2025</span>
                    </div>
                  </div>

                  {/* Team activity */}
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["#6C3AED", "#EC4899", "#3B82F6", "#10B981"].map((c, i) => (
                        <div key={i} className="w-7 h-7 rounded-full border-2 border-[#0a0a1a]" style={{ background: `${c}40` }} />
                      ))}
                    </div>
                    <p className="text-[10px] text-gray-500">15+ profesionales trabajando en tus proyectos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-brand-primary/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────── MISSION & VISION ───────── */
function MissionVisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(108,58,237,0.15)" }}>
                <Target size={28} className="text-brand-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Nuestra Misión</h3>
              <p className="text-gray-400 leading-relaxed">
                Empoderar a PYMEs y startups con estrategias de marketing digital que
                generen <strong className="text-white">crecimiento real y sostenible</strong>.
                Creemos que toda empresa, sin importar su tamaño, merece acceso a herramientas
                y tácticas que antes solo estaban al alcance de las grandes corporaciones.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.1}
            className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-10 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: "rgba(59,130,246,0.15)" }}>
                <Globe size={28} className="text-brand-secondary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-4">Nuestra Visión</h3>
              <p className="text-gray-400 leading-relaxed">
                Ser la agencia referente en España y Latinoamérica para negocios que quieren{" "}
                <strong className="text-white">escalar de verdad</strong>. Un ecosistema donde
                la tecnología, la creatividad y los datos se unen para crear estrategias
                que transforman industrias enteras.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ───────── VALUES ───────── */
function ValuesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <SectionBackground variant="alt" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 mb-6">
            <Heart size={14} className="text-brand-pink" />
            <span className="text-xs text-brand-pink font-medium">Lo que nos define</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Nuestros <span className="text-gradient">valores</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Más que una agencia, somos un equipo con principios claros que guían cada decisión,
            cada estrategia y cada interacción con nuestros clientes.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              custom={i * 0.08}
              className="glass-card rounded-2xl p-7 group relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 30% 30%, ${value.color}10, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${value.color}20` }}
                >
                  <value.icon size={24} style={{ color: value.color }} />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── TIMELINE ───────── */
function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 mb-6">
            <Calendar size={14} className="text-brand-secondary" />
            <span className="text-xs text-brand-secondary font-medium">Nuestro recorrido</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            7+ años de <span className="text-gradient">crecimiento</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada año ha sido un nuevo capítulo. Aquí los hitos que nos han convertido en lo que somos hoy.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary/40 via-brand-secondary/30 to-brand-pink/20 md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={milestone.year}
                  variants={isLeft ? slideInLeft : slideInRight}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={i * 0.1}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-4 sm:left-6 md:left-1/2 w-3 h-3 rounded-full bg-brand-primary border-2 border-[#050510] -translate-x-1.5 mt-6 z-10" />

                  {/* Spacer for mobile */}
                  <div className="w-10 sm:w-12 shrink-0 md:hidden" />

                  {/* Content card */}
                  <div className={`md:w-1/2 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="glass-card rounded-xl p-6 group hover:border-brand-primary/30 transition-colors duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                          <milestone.icon size={20} className="text-brand-primary" />
                        </div>
                        <span className="font-heading font-bold text-brand-primary text-lg">{milestone.year}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-white text-lg mb-2">{milestone.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── TEAM ───────── */
function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <SectionBackground variant="dark" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-6">
            <Users size={14} className="text-brand-primary" />
            <span className="text-xs text-brand-primary font-medium">El talento que hace la magia</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Conoce a nuestro <span className="text-gradient">equipo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada miembro aporta una perspectiva única. Juntos, formamos una máquina imparable
            de creatividad, estrategia y ejecución.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              custom={i * 0.08}
              className="glass-card rounded-xl sm:rounded-2xl overflow-hidden group"
            >
              {/* Avatar area */}
              <div className="relative h-36 sm:h-48 overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${member.color}20, ${member.color}05)`,
                  }}
                />
                {/* Decorative circles */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle, ${member.color}60, transparent 70%)` }}
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 opacity-30 group-hover:scale-110 transition-transform duration-500"
                  style={{ borderColor: `${member.color}50` }}
                />
                {/* Icon as avatar */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${member.color}25` }}
                  >
                    <member.icon size={36} style={{ color: member.color }} />
                  </div>
                </div>
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[rgba(13,13,26,1)] to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 pt-2">
                <h3 className="font-heading font-bold text-white text-lg">{member.name}</h3>
                <p className="text-sm font-medium mb-3" style={{ color: member.color }}>{member.role}</p>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-full border font-medium"
                      style={{
                        borderColor: `${member.color}30`,
                        color: `${member.color}`,
                        background: `${member.color}10`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── STATS ───────── */
function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-16" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="text-center group"
            >
              <div className="relative inline-block mb-3">
                <span className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-gradient">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
              </div>
              <h3 className="font-heading font-semibold text-white text-sm sm:text-base">{stat.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />
    </section>
  );
}

/* ───────── OFFICE / CULTURE IMAGE SECTION ───────── */
function CultureSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Phone mockup showing team culture */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="relative flex justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-[240px] sm:w-[280px]">
              <div className="rounded-[2.5rem] overflow-hidden border-2 border-white/10 bg-[#0a0a1a] shadow-2xl">
                {/* Notch */}
                <div className="flex justify-center pt-3 pb-2 bg-[#0a0a1a]">
                  <div className="w-24 h-5 rounded-full bg-black border border-white/5" />
                </div>

                {/* Screen content - Instagram-style feed */}
                <div className="px-4 pb-6 space-y-4">
                  {/* Story header */}
                  <div className="flex gap-3 py-2">
                    {["#6C3AED", "#EC4899", "#3B82F6", "#10B981", "#F59E0B"].map((c, i) => (
                      <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-12 h-12 rounded-full p-0.5" style={{ background: `linear-gradient(135deg, ${c}, ${c}80)` }}>
                          <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full" style={{ background: `${c}30` }} />
                          </div>
                        </div>
                        <span className="text-[8px] text-gray-500">{["Equipo", "Oficina", "Clientes", "Eventos", "Fun"][i]}</span>
                      </div>
                    ))}
                  </div>

                  {/* Post 1 */}
                  <div className="rounded-xl overflow-hidden border border-white/5">
                    <div className="aspect-square relative" style={{ background: "linear-gradient(135deg, #6C3AED20, #3B82F620, #EC489920)" }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="flex justify-center gap-2 mb-3">
                            {["#6C3AED", "#3B82F6", "#EC4899"].map((c, i) => (
                              <div key={i} className="w-10 h-10 rounded-full" style={{ background: `${c}40` }} />
                            ))}
                          </div>
                          <p className="text-xs text-white/80 font-heading font-bold">Team Day</p>
                          <p className="text-[10px] text-gray-500">ScalifyLabs 2025</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-white/5">
                      <p className="text-[10px] text-gray-400">
                        <span className="text-white font-semibold">scalifylabs</span> El equipo que escala tu negocio 🚀
                      </p>
                    </div>
                  </div>

                  {/* Post 2 preview */}
                  <div className="rounded-xl overflow-hidden border border-white/5">
                    <div className="aspect-[16/9] relative" style={{ background: "linear-gradient(135deg, #10B98120, #3B82F620)" }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BarChart3 size={32} className="text-white/30" />
                      </div>
                    </div>
                    <div className="p-3 bg-white/5">
                      <p className="text-[10px] text-gray-400">
                        <span className="text-white font-semibold">scalifylabs</span> Resultados de otro nivel 📈
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow behind phone */}
              <div className="absolute -inset-8 bg-brand-primary/10 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

          {/* Right - Culture text */}
          <div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-pink/10 border border-brand-pink/20 mb-6"
            >
              <Heart size={14} className="text-brand-pink" />
              <span className="text-xs text-brand-pink font-medium">Nuestra cultura</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
              className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6"
            >
              Más que compañeros,{" "}
              <span className="text-gradient">un equipo de verdad</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              className="space-y-4 text-gray-400 leading-relaxed mb-8"
            >
              <p>
                Trabajamos con la filosofía de que los mejores resultados nacen de
                equipos que <strong className="text-white">disfrutan lo que hacen</strong>.
                Por eso fomentamos un ambiente de trabajo flexible, colaborativo y lleno
                de energía.
              </p>
              <p>
                Sesiones de brainstorming, team buildings mensuales, formación continua
                y la libertad de proponer ideas locas que a veces resultan ser las mejores.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.4}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Trabajo remoto", icon: Smartphone },
                { label: "Formación continua", icon: Lightbulb },
                { label: "Team buildings", icon: Users },
                { label: "Horario flexible", icon: Calendar },
              ].map((perk) => (
                <div key={perk.label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/5">
                  <perk.icon size={18} className="text-brand-primary shrink-0" />
                  <span className="text-sm text-gray-300">{perk.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── CTA ───────── */
function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-pink/10" />
          <div className="absolute inset-0 glass" />

          {/* Animated orbs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-brand-primary/20 blur-[80px] animate-cta-orb-1" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-brand-secondary/20 blur-[80px] animate-cta-orb-2" />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-16 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Sparkles size={14} className="text-yellow-400" />
              <span className="text-xs text-gray-300">Consulta gratuita</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4"
            >
              ¿Quieres ser parte de{" "}
              <span className="text-gradient">nuestra historia?</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              className="max-w-lg mx-auto text-gray-400 mb-8"
            >
              Cada empresa que confía en nosotros se convierte en parte de nuestra familia.
              Hablemos de cómo podemos escalar tu negocio juntos.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.4}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto">
                <span>Empecemos ahora</span>
                <ArrowRight size={18} className="relative z-10" />
              </ContactButton>
              <a
                href="https://wa.me/34604561592"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm sm:text-base w-full sm:w-auto"
              >
                💬 WhatsApp directo
              </a>
            </motion.div>
          </div>

          {/* Animated gradient border */}
          <div className="absolute inset-0 rounded-3xl gradient-border pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}

/* ───────── PAGE ───────── */
export default function NosotrosPage() {
  return (
    <main className="relative bg-[#050510] min-h-screen overflow-hidden">
      <HeroSection />
      <StatsBar />
      <StorySection />
      <MissionVisionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CultureSection />
      <AboutCTA />
    </main>
  );
}
