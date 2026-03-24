"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, Eye, MousePointer } from "lucide-react";
import { HeroBackground } from "./BackgroundEffects";
import { fadeInUp, fadeIn } from "@/lib/motion";
import Link from "next/link";
import { ContactButton } from "@/components/ContactButton";
import { useEffect, useState, useRef } from "react";

/* ─── Typing effect hook ─── */
function useTypingEffect(words: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[wordIndex];
    if (!current) return;
    let pauseTimeout: ReturnType<typeof setTimeout>;
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            pauseTimeout = setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => {
      clearTimeout(timeout);
      clearTimeout(pauseTimeout);
    };
  }, [text, isDeleting, wordIndex, words, speed, pause]);

  return text;
}

/* ─── Mini dashboard mockup ─── */
function DashboardMockup() {
  const barHeights = [40, 65, 50, 80, 60, 90, 75];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: 0.6, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative mx-auto mt-10 sm:mt-16 max-w-4xl perspective-[1200px]"
    >
      {/* Glow behind */}
      <div className="absolute inset-0 -inset-x-8 -inset-y-8 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-pink/15 rounded-3xl blur-[60px] opacity-60" />

      <div
        className="relative glass rounded-2xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-black/40 animate-float-slow"
      >
        {/* Top bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          </div>
          <div className="flex-1 mx-4">
            <div className="max-w-xs mx-auto h-5 rounded-md bg-white/5 flex items-center justify-center">
              <span className="text-[10px] text-gray-500">scalifylabs.es/dashboard</span>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-3 sm:p-6 grid grid-cols-12 gap-2 sm:gap-4">
          {/* KPI Cards */}
          <div className="col-span-12 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {[
              { label: "Visitas", value: "24.5K", change: "+32%", icon: Eye, color: "#6C3AED" },
              { label: "Leads", value: "1,847", change: "+28%", icon: Users, color: "#3B82F6" },
              { label: "Conversión", value: "4.2%", change: "+0.8%", icon: MousePointer, color: "#EC4899" },
              { label: "Revenue", value: "€47.2K", change: "+41%", icon: TrendingUp, color: "#10B981" },
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                className="bg-white/[0.03] rounded-lg sm:rounded-xl p-2 sm:p-3 border border-white/[0.06]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-gray-500">{kpi.label}</span>
                  <kpi.icon size={12} style={{ color: kpi.color }} />
                </div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white">{kpi.value}</div>
                <div className="text-[10px] text-green-400 mt-0.5">{kpi.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart area */}
          <div className="col-span-12 sm:col-span-8 bg-white/[0.02] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/[0.06]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-gray-400 font-medium">Rendimiento mensual</span>
              <span className="text-[10px] text-brand-primary">Últimos 7 meses</span>
            </div>
            <div className="flex items-end justify-between gap-2 h-24">
              {barHeights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1.2 + i * 0.08, duration: 0.6, ease: "easeOut" }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand-primary/60 to-brand-secondary/40"
                />
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {["Sep", "Oct", "Nov", "Dic", "Ene", "Feb", "Mar"].map((m) => (
                <span key={m} className="text-[8px] text-gray-600 flex-1 text-center">{m}</span>
              ))}
            </div>
          </div>

          {/* Side panel */}
          <div className="col-span-12 sm:col-span-4 bg-white/[0.02] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/[0.06]">
            <span className="text-xs text-gray-400 font-medium">Top canales</span>
            <div className="mt-3 flex flex-col gap-2.5">
              {[
                { name: "Google Ads", pct: 38, color: "#6C3AED" },
                { name: "SEO", pct: 29, color: "#3B82F6" },
                { name: "Social Media", pct: 21, color: "#EC4899" },
                { name: "Email", pct: 12, color: "#F59E0B" },
              ].map((ch, i) => (
                <div key={ch.name}>
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="text-gray-400">{ch.name}</span>
                    <span className="text-gray-500">{ch.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${ch.pct}%` }}
                      transition={{ delay: 1.4 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: ch.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges around mockup */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        className="absolute -left-4 sm:-left-12 top-1/3 glass rounded-xl px-3 py-2 border border-white/10 hidden sm:flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
          <TrendingUp size={12} className="text-green-400" />
        </div>
        <div>
          <div className="text-[10px] text-gray-400">ROI</div>
          <div className="text-xs font-bold text-green-400">+340%</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute -right-4 sm:-right-12 top-1/4 glass rounded-xl px-3 py-2 border border-white/10 hidden sm:flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
          <Users size={12} className="text-brand-primary" />
        </div>
        <div>
          <div className="text-[10px] text-gray-400">Leads/mes</div>
          <div className="text-xs font-bold text-white">+1.2K</div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Hero ─── */
export function HeroSection() {
  const typedWord = useTypingEffect(
    ["escalar", "facturar", "crecer", "dominar", "convertir"],
    90,
    2200
  );

  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-8 sm:pb-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-medium text-gray-300">
              Aceptando nuevos proyectos para Q2 2026
            </span>
          </motion.div>

          {/* Headline with typing */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.08] tracking-tight mb-5 sm:mb-6"
          >
            <span className="text-white">Estrategia digital</span>
            <br />
            <span className="text-white">para </span>
            <span className="text-gradient inline-block min-w-[120px] sm:min-w-[260px] text-left">
              {typedWord}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-[3px] h-[0.85em] bg-brand-primary ml-1 align-middle rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0"
          >
            Combinamos datos, creatividad y tecnología para convertir tu inversión
            digital en clientes reales. Sin humo, sin métricas vanidosas.{" "}
            <span className="text-gray-300">Solo resultados.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <ContactButton className="btn-primary text-sm sm:text-base group w-full sm:w-auto">
              <span>Agenda tu consulta gratis</span>
              <ArrowRight
                size={18}
                className="relative z-10 transition-transform group-hover:translate-x-1"
              />
            </ContactButton>
            <Link href="/casos" className="btn-secondary text-sm sm:text-base group w-full sm:w-auto">
              <Play size={16} className="transition-transform group-hover:scale-110" />
              Ver resultados reales
            </Link>
          </motion.div>
        </div>

        {/* Dashboard mockup */}
        <DashboardMockup />

        {/* Trust bar */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mt-10 sm:mt-16 text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-6">
            Empresas que ya escalan con nosotros
          </p>
          <div className="flex items-center justify-center flex-wrap gap-x-6 sm:gap-x-14 gap-y-3 sm:gap-y-4">
            {[
              { name: "MasifyLabs", w: "w-20" },
              { name: "OnixMusic", w: "w-20" },
              { name: "TechFlow", w: "w-16" },
              { name: "NovaBrand", w: "w-20" },
              { name: "UrbanEats", w: "w-20" },
            ].map((brand) => (
              <div
                key={brand.name}
                className="group relative font-heading font-semibold text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300 cursor-default"
              >
                {brand.name}
                <div className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-brand group-hover:w-full transition-all duration-300" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/15 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{
              height: ["4px", "12px", "4px"],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-0.5 bg-gradient-to-b from-brand-primary to-brand-secondary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
