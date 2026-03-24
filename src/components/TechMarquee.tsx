"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeIn } from "@/lib/motion";

const tools = [
  "Next.js", "React", "Node.js", "Tailwind CSS", "Figma",
  "Google Ads", "Meta Ads", "TikTok Ads", "Semrush", "Ahrefs",
  "Google Analytics", "Vercel", "Shopify", "WordPress", "Framer",
  "Notion", "Slack", "HubSpot", "Mailchimp", "Stripe",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...tools, ...tools];

  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((tool, i) => (
          <div
            key={`${tool}-${i}`}
            className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-brand-primary/30 hover:bg-white/[0.06] transition-all duration-300 cursor-default whitespace-nowrap"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-gradient-brand" />
            <span className="text-xs sm:text-sm text-gray-400 font-medium">{tool}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function TechMarquee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-16 overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0}
      >
        <p className="text-center text-[11px] uppercase tracking-[0.2em] text-gray-500 mb-6">
          Herramientas y tecnologías que dominamos
        </p>
        <MarqueeRow />
        <MarqueeRow reverse />
      </motion.div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-32 bg-gradient-to-r from-[#050510] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-32 bg-gradient-to-l from-[#050510] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
