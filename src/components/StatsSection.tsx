"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeInUp } from "@/lib/motion";

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

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const stats = [
  { value: 7, suffix: "+", label: "Años de Experiencia", description: "Escalando negocios en España" },
  { value: 100, suffix: "+", label: "Negocios Escalados", description: "PYMEs y startups transformadas" },
  { value: 3, suffix: "+", label: "Premios como Agencia", description: "Reconocimiento del sector" },
  { value: 98, suffix: "%", label: "Clientes Satisfechos", description: "Retención y resultados" },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      {/* Gradient line separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="text-center group"
            >
              <div className="relative inline-block mb-2 sm:mb-4">
                <span className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-gradient">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                {/* Glow behind number */}
                <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" />
              </div>
              <h3 className="font-heading font-semibold text-white text-sm sm:text-base mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />
    </section>
  );
}
