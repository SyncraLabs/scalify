"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp } from "@/lib/motion";
import { ContactButton } from "@/components/ContactButton";

export function CTASection() {
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

          {/* Animated orbs inside — CSS animation */}
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
              className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4"
            >
              ¿Listo para escalar{" "}
              <span className="text-gradient">tu empresa?</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              className="max-w-lg mx-auto text-sm sm:text-base text-gray-400 mb-6 sm:mb-8"
            >
              Escríbenos hoy y descubre cómo podemos llevar tu negocio al
              siguiente nivel. Sin compromiso, sin letra pequeña.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.4}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
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
