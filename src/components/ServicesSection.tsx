"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Search,
  Share2,
  Megaphone,
  Code2,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Webs que convierten visitas en clientes. Rápidas, responsive y diseñadas para vender.",
    color: "#6C3AED",
    href: "/servicios/desarrollo-web",
    preview: {
      bars: [70, 90, 55, 85],
      label: "Core Web Vitals: 98/100",
    },
  },
  {
    icon: Search,
    title: "Posicionamiento SEO",
    description:
      "Escalamos tu visibilidad en Google hasta que seas la primera opción de tu cliente ideal.",
    color: "#3B82F6",
    href: "/servicios/seo",
    preview: {
      bars: [30, 50, 70, 90],
      label: "Posiciones TOP 3: +240%",
    },
  },
  {
    icon: Share2,
    title: "Redes Sociales",
    description:
      "Estrategia, contenido y comunidad. Convertimos seguidores en clientes que repiten.",
    color: "#EC4899",
    href: "/servicios/redes-sociales",
    preview: {
      bars: [45, 60, 75, 95],
      label: "Engagement: 8.4%",
    },
  },
  {
    icon: Megaphone,
    title: "Campañas Ads",
    description:
      "Facebook, Instagram, TikTok y Google Ads. Cada euro rastreado, cada campaña optimizada al céntimo.",
    color: "#8B5CF6",
    href: "/servicios/ads",
    preview: {
      bars: [50, 65, 80, 92],
      label: "ROAS medio: 5.2x",
    },
  },
  {
    icon: Code2,
    title: "Programación a Medida",
    description:
      "Apps, plataformas SaaS, blockchain. Si puedes soñarlo, lo construimos.",
    color: "#06B6D4",
    href: "/servicios/programacion",
    preview: {
      bars: [85, 70, 90, 80],
      label: "99.9% uptime",
    },
  },
  {
    icon: TrendingUp,
    title: "Embudo de Ventas",
    description:
      "Automatización completa: de desconocido a cliente fiel. Funciona mientras duermes.",
    color: "#F59E0B",
    href: "/servicios/embudo-ventas",
    preview: {
      bars: [90, 70, 50, 30],
      label: "Funnel → Conversión: 4.2%",
    },
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(108,58,237,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-4">
            SERVICIOS
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
            Todo lo que tu negocio necesita,{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">bajo un mismo techo</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400">
            Estrategia + ejecución + medición. Sin subcontratas, sin sorpresas.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {services.map((service, i) => (
            <motion.a
              key={service.title}
              href={service.href}
              variants={fadeInUp}
              custom={i * 0.08}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer relative"
            >
              {/* Mini chart preview */}
              <div className="px-6 pt-6 pb-3">
                <div className="flex items-end justify-between gap-1.5 h-12 mb-1">
                  {service.preview.bars.map((h, j) => (
                    <motion.div
                      key={j}
                      className="flex-1 rounded-t-sm transition-all duration-500 group-hover:opacity-100 opacity-60"
                      style={{
                        height: `${h}%`,
                        background: `linear-gradient(to top, ${service.color}50, ${service.color}20)`,
                      }}
                    />
                  ))}
                </div>
                <div
                  className="text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: service.color }}
                >
                  {service.preview.label}
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px mx-6 opacity-20"
                style={{ background: service.color }}
              />

              {/* Content */}
              <div className="p-6 pt-5">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background: `${service.color}15` }}
                  >
                    <service.icon
                      size={22}
                      style={{ color: service.color }}
                    />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-gray-600 opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"
                  />
                </div>

                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom glow */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.color}60, transparent)`,
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
