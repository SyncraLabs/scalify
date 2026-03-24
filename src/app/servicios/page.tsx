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
  Palette,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { fadeInUp, fadeIn, staggerContainer } from "@/lib/motion";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "Webs que venden, no solo que se ven bonitas. Diseño a medida, velocidad y conversión. Desde landing pages hasta e-commerce complejos.",
    color: "#6C3AED",
    href: "/servicios/desarrollo-web",
    features: ["Next.js & React", "Mobile-first", "PageSpeed 98+", "SEO técnico"],
  },
  {
    icon: Search,
    title: "Posicionamiento SEO",
    description: "Que te encuentren los que te buscan. Escalamos tu visibilidad en Google de forma orgánica con resultados medibles.",
    color: "#3B82F6",
    href: "/servicios/seo",
    features: ["Auditoría técnica", "On-Page SEO", "Link building", "Reporting mensual"],
  },
  {
    icon: Share2,
    title: "Redes Sociales",
    description: "Gestión estratégica de tus redes. Contenido que conecta y convierte. Comunidades que compran y recomiendan.",
    color: "#EC4899",
    href: "/servicios/redes-sociales",
    features: ["Instagram & TikTok", "Estrategia contenidos", "Community manager", "Análisis"],
  },
  {
    icon: Megaphone,
    title: "Campañas Ads",
    description: "Publicidad en Facebook, Instagram y TikTok con ROI medible. Cada euro invertido, rastreado y optimizado.",
    color: "#8B5CF6",
    href: "/servicios/ads",
    features: ["Meta Ads", "TikTok Ads", "Google Ads", "Retargeting"],
  },
  {
    icon: Code2,
    title: "Programación a Medida",
    description: "Apps, plataformas, blockchain. Si lo puedes imaginar, lo podemos construir. Desarrollo ágil y escalable.",
    color: "#06B6D4",
    href: "/servicios/programacion",
    features: ["Apps móviles", "Plataformas SaaS", "APIs", "Blockchain"],
  },
  {
    icon: TrendingUp,
    title: "Embudo de Ventas",
    description: "Automatizamos tu captación de clientes. De lead frío a cliente fiel sin esfuerzo manual. 24/7.",
    color: "#F59E0B",
    href: "/servicios/embudo-ventas",
    features: ["Automatización", "Email marketing", "Lead scoring", "CRM"],
  },
  {
    icon: Palette,
    title: "Diseño Gráfico",
    description: "UI/UX, identidad visual, branding y producción de vídeo. Creatividad con propósito estratégico.",
    color: "#EC4899",
    href: "/servicios/diseno-grafico",
    features: ["UI/UX Design", "Branding", "Motion graphics", "Vídeo"],
  },
];

export default function ServiciosPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(108,58,237,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-brand-primary mb-6">
              SERVICIOS
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} initial="hidden" animate="visible" custom={0.1} className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight mb-5 sm:mb-6">
            <span className="text-white">Soluciones digitales que</span>
            <br />
            <span className="text-gradient">generan resultados reales</span>
          </motion.h1>

          <motion.p variants={fadeInUp} initial="hidden" animate="visible" custom={0.2} className="max-w-2xl mx-auto text-sm sm:text-lg text-gray-400 leading-relaxed px-2 sm:px-0">
            No vendemos humo. Diseñamos estrategias a medida que convierten visitas en clientes.
            Todo bajo un mismo techo.
          </motion.p>
        </div>
      </section>

      {/* Services grid */}
      <section className="relative section-padding" ref={ref}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                custom={i * 0.1}
                className={`${i === services.length - 1 && services.length % 3 === 1 ? "lg:col-start-2" : ""}`}
              >
                <Link
                  href={service.href}
                  className="block glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 group h-full relative overflow-hidden"
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110"
                    style={{ background: `${service.color}15` }}
                  >
                    <service.icon size={24} style={{ color: service.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((f) => (
                      <span key={f} className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded-md">{f}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-brand-primary opacity-0 translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Descubrir más
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Corner glow */}
                  <div
                    className="absolute -top-px -right-px w-24 h-24 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at top right, ${service.color}20, transparent 70%)` }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
                  ¿No sabes por dónde empezar?
                </h2>
                <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-400 mb-6 sm:mb-8">
                  Cuéntanos tu situación y te recomendamos la estrategia ideal para tu negocio. Sin compromiso.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <ContactButton className="btn-primary text-sm sm:text-base group w-full sm:w-auto">
                    <span>Hablemos de tu proyecto</span>
                    <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                  </ContactButton>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
