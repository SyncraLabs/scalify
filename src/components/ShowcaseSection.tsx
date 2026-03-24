"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const projects = [
  {
    title: "MasifyLabs",
    category: "Desarrollo Web + SEO",
    description: "Rediseño completo con estrategia SEO. Visitas duplicadas en 3 meses.",
    metrics: [
      { label: "Tráfico", value: "+120%" },
      { label: "Leads", value: "+85%" },
      { label: "Velocidad", value: "98/100" },
    ],
    gradient: "from-brand-primary/30 via-brand-secondary/20 to-transparent",
    mockupColor: "#6C3AED",
  },
  {
    title: "OnixMusic",
    category: "Branding + Web + RRSS",
    description: "Plataforma e-commerce y estrategia de redes con comunidad activa.",
    metrics: [
      { label: "Ventas", value: "+210%" },
      { label: "Seguidores", value: "+15K" },
      { label: "ROAS", value: "5.2x" },
    ],
    gradient: "from-brand-secondary/30 via-brand-pink/20 to-transparent",
    mockupColor: "#3B82F6",
  },
  {
    title: "FreshBites",
    category: "Ads + Embudo de Ventas",
    description: "Campaña de captación de reservas para cadena de restaurantes.",
    metrics: [
      { label: "Reservas", value: "+340%" },
      { label: "CPA", value: "-62%" },
      { label: "ROI", value: "7.8x" },
    ],
    gradient: "from-brand-pink/30 via-brand-primary/20 to-transparent",
    mockupColor: "#EC4899",
  },
];

/* ─── Browser Mockup ─── */
function BrowserMockup({ color, title }: { color: string; title: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02] shadow-xl">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-3">
          <div className="max-w-[180px] mx-auto h-4 rounded bg-white/5 flex items-center justify-center">
            <span className="text-[8px] text-gray-600">{title.toLowerCase()}.es</span>
          </div>
        </div>
      </div>

      {/* Content area - abstract layout mockup */}
      <div className="p-5 space-y-3 aspect-[16/10]">
        {/* Nav mockup */}
        <div className="flex items-center justify-between">
          <div className="w-16 h-3 rounded" style={{ background: `${color}40` }} />
          <div className="flex gap-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="w-10 h-2 rounded bg-white/10" />
            ))}
          </div>
        </div>

        {/* Hero mockup */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div className="w-3/4 h-4 rounded" style={{ background: `${color}30` }} />
          <div className="w-1/2 h-4 rounded" style={{ background: `${color}20` }} />
          <div className="w-2/3 h-2 rounded bg-white/5 mt-2" />
          <div className="w-1/2 h-2 rounded bg-white/5" />
          <div
            className="w-24 h-6 rounded-lg mt-3"
            style={{ background: `${color}50` }}
          />
        </div>

        {/* Cards mockup */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="aspect-[4/3] rounded-lg border border-white/5"
              style={{ background: `${color}08` }}
            >
              <div className="p-2 flex flex-col gap-1">
                <div className="w-4 h-4 rounded" style={{ background: `${color}20` }} />
                <div className="w-full h-1.5 rounded bg-white/5 mt-1" />
                <div className="w-2/3 h-1.5 rounded bg-white/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ShowcaseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,rgba(108,58,237,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">
            PORTFOLIO
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
            Proyectos que{" "}
            <span className="text-gradient">hablan por sí solos</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400">
            Cada proyecto es un caso de éxito con métricas reales. Así trabajamos, así entregamos.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col gap-14 sm:gap-20"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeInUp}
              custom={i * 0.15}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Mockup */}
              <div className={`relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className={`absolute inset-0 -inset-x-4 -inset-y-4 bg-gradient-to-br ${project.gradient} rounded-3xl blur-[40px] opacity-40`} />
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className="relative"
                >
                  <BrowserMockup color={project.mockupColor} title={project.title} />
                </motion.div>
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span
                  className="inline-block text-xs font-medium px-3 py-1 rounded-full mb-4"
                  style={{
                    color: project.mockupColor,
                    background: `${project.mockupColor}15`,
                  }}
                >
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-3xl md:text-4xl text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="glass-card rounded-lg sm:rounded-xl p-2.5 sm:p-4 text-center">
                      <div
                        className="font-heading font-bold text-base sm:text-2xl"
                        style={{ color: project.mockupColor }}
                      >
                        {m.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-gray-500 mt-0.5 sm:mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <a
                  href="/casos"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
                >
                  Ver caso completo
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
