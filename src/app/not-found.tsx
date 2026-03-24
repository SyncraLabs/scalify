"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function GlitchText({ text }: { text: string }) {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${glitch ? "animate-glitch" : ""}`}>
      {glitch && (
        <>
          <span className="absolute top-0 left-[2px] w-full text-brand-pink opacity-70 clip-glitch-top">
            {text}
          </span>
          <span className="absolute top-0 left-[-2px] w-full text-brand-secondary opacity-70 clip-glitch-bottom">
            {text}
          </span>
        </>
      )}
      {text}
    </span>
  );
}

function FloatingParticle({ delay, size, x }: { delay: number; size: number; x: number }) {
  return (
    <div
      className="absolute rounded-full opacity-20 animate-float-up"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        bottom: "-10%",
        animationDelay: `${delay}s`,
        background: `linear-gradient(135deg, #6C3AED, #3B82F6)`,
      }}
    />
  );
}

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    delay: i * 1.2,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
  }));

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Radial glow background */}
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          background:
            "radial-gradient(600px circle at 50% 40%, rgba(108,58,237,0.12), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(400px circle at 60% 60%, rgba(59,130,246,0.08), transparent 70%)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,58,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(108,58,237,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Big 404 */}
        <h1
          className="font-heading text-[8rem] sm:text-[12rem] md:text-[14rem] font-bold leading-none select-none"
          style={{
            background: "linear-gradient(135deg, #6C3AED 0%, #3B82F6 50%, #EC4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 0 60px rgba(108,58,237,0.3))",
          }}
        >
          <GlitchText text="404" />
        </h1>

        {/* Divider line */}
        <div className="mx-auto w-24 h-[2px] bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-pink rounded-full mb-6" />

        {/* Message */}
        <h2 className="font-heading text-2xl sm:text-3xl text-white font-semibold mb-3">
          Página no encontrada
        </h2>
        <p className="text-brand-gray text-base sm:text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Parece que esta página se ha perdido en el espacio digital.
          Volvamos a territorio conocido.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(108,58,237,0.4)]"
            style={{
              background: "linear-gradient(135deg, #6C3AED, #3B82F6)",
            }}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al inicio
          </Link>

          <Link
            href="/servicios"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-heading font-semibold text-white/80 border border-white/10 hover:border-brand-primary/50 hover:text-white transition-all duration-300 hover:bg-white/[0.03]"
          >
            Ver servicios
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.05;
          }
          100% {
            transform: translateY(-100vh) scale(0.5);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up 14s ease-in infinite;
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          25% { transform: translate(-2px, 2px); }
          50% { transform: translate(2px, -1px); }
          75% { transform: translate(-1px, -2px); }
          100% { transform: translate(0); }
        }
        .animate-glitch {
          animation: glitch 0.2s ease-in-out;
        }
        .clip-glitch-top {
          clip-path: inset(0 0 50% 0);
        }
        .clip-glitch-bottom {
          clip-path: inset(50% 0 0 0);
        }
      `}</style>
    </section>
  );
}
