"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  BarChart3,
  Users,
  MessageCircle,
  Zap,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

const points = [
  {
    icon: Target,
    title: "Estrategia primero",
    description:
      "Cada euro que inviertes responde a un plan con KPIs claros. Nada al azar.",
    color: "#6C3AED",
  },
  {
    icon: BarChart3,
    title: "Resultados medibles",
    description:
      "Reporting mensual transparente. Ves exactamente dónde va tu inversión.",
    color: "#3B82F6",
  },
  {
    icon: Users,
    title: "Equipo dedicado",
    description:
      "Diseñadores, devs, marketers y analistas. Un equipo completo a tu servicio.",
    color: "#EC4899",
  },
  {
    icon: MessageCircle,
    title: "Comunicación directa",
    description:
      "Hablas con quien ejecuta. Sin comerciales, sin call centers, sin esperas.",
    color: "#8B5CF6",
  },
];

/* ─── Phone mockup with social feed ─── */
function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mx-auto w-[240px] sm:w-[280px]"
    >
      {/* Glow */}
      <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-gradient-to-br from-brand-primary/20 to-brand-pink/15 rounded-[60px] blur-[50px] opacity-50" />

      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-2 border-white/10 bg-[#0a0a1a] overflow-hidden shadow-2xl shadow-black/50">
        {/* Notch */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-20 h-5 rounded-full bg-black border border-white/5" />
        </div>

        {/* Screen content - Instagram-like feed */}
        <div className="px-3 pb-4 space-y-3">
          {/* Story circles */}
          <div className="flex gap-2 overflow-hidden">
            {["S", "M", "O", "T", "N"].map((l, i) => (
              <div key={l} className="flex flex-col items-center gap-1">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${
                      ["#6C3AED", "#3B82F6", "#EC4899", "#F59E0B", "#10B981"][i]
                    }, ${
                      ["#3B82F6", "#EC4899", "#6C3AED", "#EF4444", "#3B82F6"][i]
                    })`,
                    padding: "2px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#0a0a1a] flex items-center justify-center">
                    {l}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Post */}
          <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="w-6 h-6 rounded-full bg-gradient-brand" />
              <span className="text-[10px] font-semibold text-white">scalifylabs</span>
              <CheckCircle2 size={10} className="text-brand-primary" />
            </div>
            <div className="aspect-square bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-pink/20 flex items-center justify-center">
              <div className="text-center">
                <Zap size={24} className="text-brand-primary mx-auto mb-2" />
                <div className="text-xs font-heading font-bold text-white">+340% ROI</div>
                <div className="text-[9px] text-gray-400">en 90 días</div>
              </div>
            </div>
            <div className="px-3 py-2">
              <div className="flex gap-3 mb-1.5">
                {["♥", "💬", "📤"].map((e) => (
                  <span key={e} className="text-xs cursor-pointer">{e}</span>
                ))}
              </div>
              <div className="text-[9px] text-gray-400">
                <span className="text-white font-semibold">2,847 likes</span>
              </div>
            </div>
          </div>

          {/* Engagement notification */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06]"
          >
            <div className="w-7 h-7 rounded-full bg-green-500/20 flex items-center justify-center">
              <BarChart3 size={12} className="text-green-400" />
            </div>
            <div>
              <div className="text-[9px] text-gray-400">Engagement rate</div>
              <div className="text-[11px] font-bold text-green-400">8.4% (+2.1%)</div>
            </div>
          </motion.div>
        </div>

        {/* Home bar */}
        <div className="flex justify-center pb-2">
          <div className="w-24 h-1 rounded-full bg-white/20" />
        </div>
      </div>
    </motion.div>
  );
}

export function WhySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgba(59,130,246,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left - text + cards */}
          <div className="lg:col-span-7">
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
            >
              <span className="inline-block px-3 py-1 text-xs font-medium text-brand-secondary bg-brand-secondary/10 rounded-full mb-4">
                POR QUÉ SCALIFYLABS
              </span>
              <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 leading-tight">
                Tu negocio necesita un{" "}
                <span className="text-gradient">socio digital,</span>
                <br className="hidden sm:block" />
                {" "}no otro proveedor.
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 sm:mb-10 max-w-lg">
                Nos metemos de lleno en tu negocio. Entendemos tus números,
                tu cliente y tu mercado antes de tocar una sola campaña.
                Por eso nuestros resultados no son casualidad.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {points.map((point, i) => (
                <motion.div
                  key={point.title}
                  variants={slideInLeft}
                  custom={i * 0.1}
                  className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 group"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${point.color}15` }}
                  >
                    <point.icon size={18} style={{ color: point.color }} />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-1.5">
                    {point.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - phone mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
