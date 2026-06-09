"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { homeFaqs } from "@/lib/faq";

export function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(108,58,237,0.07),transparent_60%)]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative max-w-3xl mx-auto px-4 sm:px-6"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-secondary mb-4">
            Preguntas frecuentes
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Resolvemos tus <span className="text-gradient">dudas</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:gap-4">
          {homeFaqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-white text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-brand-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 sm:px-7 pb-6 text-sm sm:text-base text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
