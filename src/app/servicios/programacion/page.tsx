"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Code2,
  ArrowRight,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Shield,
  Cpu,
  Terminal,
  Layers,
  Star,
  Quote,
  TrendingUp,
  CheckCircle2,
  Boxes,
  Wrench,
  Rocket,
  GitBranch,
  Server,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { fadeInUp, fadeIn, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

/* ─── Terminal animation ─── */
function TerminalAnimation() {
  const [lines, setLines] = useState<string[]>([]);
  const allLines = [
    "$ npx create-next-app@latest tu-proyecto",
    "  Creating a new Next.js app...",
    "  Installing dependencies...",
    "  ✓ next@16.2.1",
    "  ✓ react@19.2.4",
    "  ✓ tailwindcss@4.2.2",
    "  ✓ typescript@6.0.2",
    "$ npm run dev",
    "  ▲ Next.js 16.2.1",
    "  - Local:    http://localhost:3000",
    "  ✓ Ready in 1.2s",
    "  ✓ Compiled successfully",
    "",
    "  Tu proyecto está listo. ¡A escalar! 🚀",
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < allLines.length) {
        const currentLine = allLines[i];
        setLines((prev) => [...prev, currentLine]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="relative max-w-4xl mx-auto mt-10 sm:mt-16"
    >
      <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-gradient-to-br from-cyan-500/10 via-brand-primary/10 to-green-500/5 rounded-3xl blur-[60px] opacity-50" />

      <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl bg-[#0c0c1d]">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[10px] text-gray-500 font-mono">Terminal — scalifylabs</span>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-5 font-mono text-xs leading-relaxed min-h-[300px]">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`${
                !line ? "text-gray-400" :
                line.startsWith("$") ? "text-green-400" :
                line.includes("✓") ? "text-cyan-400" :
                line.includes("▲") ? "text-white" :
                line.includes("🚀") ? "text-yellow-400 font-bold" :
                "text-gray-400"
              }`}
            >
              {line}
            </motion.div>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-2 h-4 bg-green-400 mt-1"
          />
        </div>
      </div>

      {/* Floating tech badges */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -left-6 lg:-left-14 top-1/3 glass rounded-xl px-3 py-2 border border-white/10 hidden sm:flex items-center gap-2"
      >
        <Shield size={14} className="text-green-400" />
        <div>
          <div className="text-[10px] text-gray-400">Seguridad</div>
          <div className="text-xs font-bold text-green-400">A+</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="absolute -right-6 lg:-right-14 top-1/4 glass rounded-xl px-3 py-2 border border-white/10 hidden sm:flex items-center gap-2"
      >
        <Cpu size={14} className="text-cyan-400" />
        <div>
          <div className="text-[10px] text-gray-400">Uptime</div>
          <div className="text-xs font-bold text-white">99.99%</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main page ─── */
export default function ProgramacionPage() {
  const services = [
    {
      icon: Globe,
      title: "Desarrollo de Plataformas",
      desc: "Plataformas web complejas: marketplaces, SaaS, dashboards, portales de gestión. Arquitectura escalable y mantenible.",
      features: ["React/Next.js", "APIs REST/GraphQL", "Base de datos", "Panel admin"],
      color: "#6C3AED",
    },
    {
      icon: Smartphone,
      title: "Desarrollo de Apps",
      desc: "Apps móviles nativas y cross-platform para iOS y Android. Experiencia de usuario fluida y rendimiento nativo.",
      features: ["React Native", "Flutter", "Push notifications", "Offline-first"],
      color: "#3B82F6",
    },
    {
      icon: Boxes,
      title: "Desarrollo Blockchain",
      desc: "Smart contracts, dApps, integración con Web3, NFTs y tokenización. La nueva economía digital.",
      features: ["Smart contracts", "dApps", "Web3 integration", "NFTs"],
      color: "#EC4899",
    },
    {
      icon: Wrench,
      title: "Mantenimiento Web",
      desc: "Actualizaciones, optimización, seguridad, backups y soporte técnico continuo para tu web o plataforma.",
      features: ["Updates 24/7", "Backups diarios", "Monitoreo", "Soporte técnico"],
      color: "#10B981",
    },
  ];

  const techStack = [
    { category: "Frontend", techs: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"], color: "#6C3AED" },
    { category: "Backend", techs: ["Node.js", "Python", "Go", "Rust", "GraphQL"], color: "#3B82F6" },
    { category: "Mobile", techs: ["React Native", "Flutter", "Swift", "Kotlin"], color: "#EC4899" },
    { category: "Cloud", techs: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"], color: "#10B981" },
    { category: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase"], color: "#F59E0B" },
    { category: "Blockchain", techs: ["Solidity", "Ethereum", "Hardhat", "Web3.js"], color: "#8B5CF6" },
  ];

  const process = [
    { icon: Terminal, title: "Requisitos", desc: "Definimos alcance, funcionalidades y arquitectura técnica del proyecto.", number: "01" },
    { icon: GitBranch, title: "Desarrollo ágil", desc: "Sprints de 2 semanas con entregas incrementales y demos frecuentes.", number: "02" },
    { icon: Shield, title: "Testing QA", desc: "Tests automatizados, revisión de código y auditoría de seguridad.", number: "03" },
    { icon: Rocket, title: "Deploy y soporte", desc: "Despliegue en producción, monitoreo y soporte técnico continuo.", number: "04" },
  ];

  const testimonials = [
    {
      text: "Necesitábamos una plataforma SaaS compleja con multi-tenancy y facturación. ScalifyLabs la desarrolló en 3 meses y ya tiene +200 usuarios activos.",
      author: "Miguel A.",
      role: "CTO, Startup SaaS",
      location: "Barcelona",
      metric: "+200 usuarios en producción",
    },
    {
      text: "La app móvil que desarrollaron tiene un rendimiento increíble. 4.8 estrellas en la App Store y los usuarios la adoran. Equipo técnico de primer nivel.",
      author: "Lucía P.",
      role: "Product Manager, App de Fitness",
      location: "Madrid",
      metric: "4.8★ en App Store",
    },
  ];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(6,182,212,0.12),transparent_70%)]" />
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-10 w-full">
          <div className="text-center">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-cyan-400 mb-6">
                <Code2 size={14} />
                PROGRAMACIÓN A MEDIDA
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0.1} className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5 sm:mb-6">
              <span className="text-white">Tecnología a la medida</span>
              <br />
              <span className="text-gradient">de tu ambición</span>
            </motion.h1>

            <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.2} className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-400 leading-relaxed mb-10 px-2 sm:px-0">
              Desarrollamos plataformas, apps móviles, soluciones blockchain y software personalizado.
              Tu idea, nuestra ejecución.
            </motion.p>

            <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <ContactButton className="btn-primary text-base group">
                <span>Cuéntanos tu proyecto</span>
                <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </ContactButton>
              <Link href="/casos" className="btn-secondary text-sm sm:text-base w-full sm:w-auto">Ver proyectos</Link>
            </motion.div>
          </div>

          <TerminalAnimation />
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(6,182,212,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full mb-4">SERVICIOS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Si lo puedes imaginar, <span className="text-gradient">lo podemos construir</span>
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
                      {s.features.map((f) => (
                        <span key={f} className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded-md">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="relative section-padding">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-4">TECH STACK</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Las mejores <span className="text-gradient">tecnologías del mercado</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {techStack.map((category, i) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full" style={{ background: category.color }} />
                  <h3 className="font-heading font-semibold text-white">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.techs.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-xs text-gray-300 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 cursor-default transition-colors hover:border-white/10"
                    >
                      {tech}
                    </motion.span>
                  ))}
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
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-secondary bg-brand-secondary/10 rounded-full mb-4">METODOLOGÍA</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Desarrollo ágil y <span className="text-gradient">transparente</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {process.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-card rounded-xl sm:rounded-2xl p-5 sm:p-7 text-center group"
              >
                <span className="font-heading font-bold text-4xl text-gradient opacity-30 group-hover:opacity-50 transition-opacity">{step.number}</span>
                <div className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-4 bg-brand-primary/10 mt-2">
                  <step.icon size={24} className="text-brand-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="relative section-padding">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_50%,rgba(6,182,212,0.06),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">PROYECTOS</span>
            <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
              Software que <span className="text-gradient">marca la diferencia</span>
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
                <Quote size={40} className="absolute top-4 right-4 text-cyan-400/10" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium mb-5">
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
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-brand-primary flex items-center justify-center font-heading font-bold text-white text-sm">
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
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(6,182,212,0.08),transparent_70%)]" />
              <div className="relative">
                <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
                  ¿Tienes un proyecto en mente? <span className="text-gradient">Hagámoslo realidad</span>
                </h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Cuéntanos tu idea y te enviamos una propuesta técnica con alcance, tecnologías y timeline.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto group">
                    <span>Solicitar propuesta técnica</span>
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
