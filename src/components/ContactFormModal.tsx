"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

/* ── Context ── */
interface ContactFormCtx {
  open: () => void;
  close: () => void;
}
const Ctx = createContext<ContactFormCtx>({ open: () => {}, close: () => {} });
export const useContactForm = () => useContext(Ctx);

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>{isOpen && <ContactModal onClose={close} />}</AnimatePresence>
    </Ctx.Provider>
  );
}

/* ── Modal ── */
function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const fireConfetti = () => {
    const end = Date.now() + 1500;
    const colors = ["#6C3AED", "#06B6D4", "#F472B6", "#FACC15"];
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(
        "https://n8n.srv1256702.hstgr.cloud/webhook/scalifyformweb1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (!res.ok) throw new Error("Error");
      setStatus("success");
      fireConfetti();
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
      >
        {/* Glass bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a] via-[#111127] to-[#0d0d1a]" />
        <div className="absolute inset-0 bg-white/[0.03]" />
        <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-brand-primary/20 blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-brand-secondary/20 blur-[80px]" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <X size={18} />
          </button>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 flex items-center justify-center"
              >
                <CheckCircle size={40} className="text-green-400" />
              </motion.div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                ¡Mensaje enviado!
              </h3>
              <p className="text-gray-400 mb-6">
                Nos pondremos en contacto contigo muy pronto.
              </p>
              <button onClick={onClose} className="btn-primary text-sm">
                <span>Cerrar</span>
              </button>
            </motion.div>
          ) : (
            <>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                Cuéntanos tu proyecto
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Rellena el formulario y te respondemos en menos de 24h.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                  <label htmlFor="cf-nombre" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Nombre completo
                  </label>
                  <input
                    id="cf-nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="cf-email" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Email
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="cf-mensaje" className="block text-xs font-medium text-gray-300 mb-1.5">
                    Cuéntanos qué proyecto tienes en mente
                  </label>
                  <textarea
                    id="cf-mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Describe brevemente tu proyecto, objetivos o lo que necesitas..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Hubo un error. Inténtalo de nuevo o escríbenos por WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="relative z-10" />
                      <span>Enviar mensaje</span>
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Border glow */}
        <div className="absolute inset-0 rounded-2xl gradient-border pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}
