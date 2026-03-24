"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Lightbulb, Rocket, BarChart3 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Análisis",
    description:
      "Estudiamos tu negocio, mercado y competencia para entender dónde estás y a dónde quieres llegar.",
    color: "#6C3AED",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Estrategia",
    description:
      "Diseñamos un plan de acción personalizado con objetivos claros, KPIs y calendario de ejecución.",
    color: "#3B82F6",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Ejecución",
    description:
      "Implementamos cada acción con precisión: desarrollo, contenido, campañas y optimización continua.",
    color: "#EC4899",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Resultados",
    description:
      "Medimos, analizamos y escalamos. Reporting transparente y mejora constante basada en datos.",
    color: "#8B5CF6",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,58,237,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-4">
            PROCESO
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
            Cómo trabajamos{" "}
            <span className="text-gradient">contigo</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400">
            Un método probado en 100+ proyectos. Sin improvisaciones.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                custom={i * 0.15}
                className="relative group"
              >
                <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center h-full">
                  {/* Number */}
                  <div
                    className="font-heading font-bold text-4xl sm:text-5xl mb-3 sm:mb-4 opacity-10 group-hover:opacity-20 transition-opacity"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                    style={{
                      background: `${step.color}15`,
                      boxShadow: `0 0 0px ${step.color}00`,
                    }}
                  >
                    <step.icon size={24} style={{ color: step.color }} />
                  </div>

                  <h3 className="font-heading font-semibold text-white text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between cards (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 lg:-right-5 -translate-y-1/2 text-white/10 z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
