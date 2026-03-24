"use client";

import { useMemo } from "react";

/* ───── Stable random seed for SSR/CSR match ───── */
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function HeroBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        top: seededRandom(i * 7 + 1) * 100,
        left: seededRandom(i * 13 + 3) * 100,
        size: 1 + seededRandom(i * 3 + 5) * 2,
        yDrift: -(30 + seededRandom(i * 11 + 7) * 50),
        dur: 4 + seededRandom(i * 17 + 9) * 5,
        delay: seededRandom(i * 19 + 11) * 4,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* ── Static aurora gradient layers ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-10%,rgba(108,58,237,0.30),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(236,72,153,0.10),transparent_50%)]" />

      {/* ── Aurora ribbons — CSS animation instead of framer-motion ── */}
      <div
        className="absolute -top-[40%] left-[10%] w-[80%] h-[60%] rounded-full opacity-20 animate-aurora-slow"
        style={{
          background:
            "conic-gradient(from 180deg, rgba(108,58,237,0.3), rgba(59,130,246,0.2), rgba(236,72,153,0.15), rgba(108,58,237,0.3))",
          filter: "blur(100px)",
          willChange: "transform",
        }}
      />

      <div
        className="absolute -bottom-[30%] right-[5%] w-[60%] h-[50%] rounded-full opacity-15 animate-aurora-reverse"
        style={{
          background:
            "conic-gradient(from 90deg, rgba(236,72,153,0.25), rgba(108,58,237,0.2), rgba(59,130,246,0.15), rgba(236,72,153,0.25))",
          filter: "blur(120px)",
          willChange: "transform",
        }}
      />

      {/* ── Orbs — CSS animation ── */}
      <div className="orb orb-purple w-[500px] h-[500px] -top-40 -right-40 animate-orb-drift-1" />
      <div className="orb orb-blue w-[400px] h-[400px] top-1/3 -left-60 animate-orb-drift-2" />
      <div className="orb orb-pink w-[350px] h-[350px] bottom-20 right-1/4 opacity-25 animate-orb-drift-3" />

      {/* ── Grid ── */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* ── Floating particles — pure CSS ── */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-brand-primary/40 animate-particle-float"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            // @ts-expect-error CSS custom property
            "--y-drift": `${p.yDrift}px`,
          }}
        />
      ))}

      {/* ── Light beams — CSS only ── */}
      <div
        className="absolute top-[40%] left-0 w-full h-px animate-beam-pulse"
        style={{
          background:
            "linear-gradient(90deg, transparent 10%, rgba(108,58,237,0.2) 40%, rgba(59,130,246,0.2) 60%, transparent 90%)",
        }}
      />
      <div
        className="absolute top-[60%] left-0 w-full h-px animate-beam-pulse-slow"
        style={{
          background:
            "linear-gradient(90deg, transparent 20%, rgba(236,72,153,0.15) 50%, transparent 80%)",
        }}
      />

      {/* ── Vignette ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,transparent_30%,rgba(5,5,16,0.6)_100%)]" />
    </div>
  );
}

export function SectionBackground({
  variant = "default",
}: {
  variant?: "default" | "alt" | "dark";
}) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variant === "alt" && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(108,58,237,0.08),transparent_70%)]" />
      )}
      {variant === "dark" && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(59,130,246,0.1),transparent_60%)]" />
      )}
      <div className="absolute inset-0 bg-grid opacity-20" />
    </div>
  );
}
