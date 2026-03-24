"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { fadeInUp } from "@/lib/motion";

const testimonials = [
  {
    text: "Nos rediseñaron la web y gestionaron el SEO. En 3 meses duplicamos las visitas. Equipo cercano y siempre disponible.",
    author: "María G.",
    role: "CEO, Marca de Moda",
    location: "Tenerife",
    stars: 5,
  },
  {
    text: "El enfoque estratégico de ScalifyLabs marcó la diferencia. Todo el contenido alineado con nuestros objetivos. Conversiones arriba significativamente.",
    author: "Carlos R.",
    role: "Director, Agencia de Viajes",
    location: "Canarias",
    stars: 5,
  },
  {
    text: "Pasamos de no tener presencia en redes a tener una comunidad activa con reservas semanales directas desde Instagram.",
    author: "Ana M.",
    role: "Propietaria, Restaurante",
    location: "Las Palmas",
    stars: 5,
  },
  {
    text: "Solución integral: web, redes, SEO y soporte técnico. Un acompañamiento real que se nota en los resultados.",
    author: "David L.",
    role: "Emprendedor Digital",
    location: "Barcelona",
    stars: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) =>
      dir === 1
        ? (prev + 1) % testimonials.length
        : (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,rgba(236,72,153,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">
            TESTIMONIOS
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4">
            Lo que dicen{" "}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="text-gray-400">
            Los resultados hablan por sí solos
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-12 relative overflow-hidden min-h-[260px] sm:min-h-[280px]">
            {/* Quote icon */}
            <Quote
              size={48}
              className="absolute top-6 right-6 text-brand-primary/10"
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].stars }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    )
                  )}
                </div>

                {/* Text */}
                <p className="text-base sm:text-xl text-gray-200 leading-relaxed mb-6 sm:mb-8 italic">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center font-heading font-bold text-white text-sm">
                    {testimonials[current].author[0]}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-white">
                      {testimonials[current].author}
                    </p>
                    <p className="text-sm text-gray-400">
                      {testimonials[current].role} · {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-8 bg-gradient-brand"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(-1)}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => navigate(1)}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
