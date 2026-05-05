"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  Loader2,
  CheckCircle,
  MessageCircle,
  Clock,
  Shield,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

const trustBadges = [
  { icon: Clock, label: "Respuesta en menos de 24h" },
  { icon: Shield, label: "Datos protegidos (RGPD)" },
  { icon: Zap, label: "Primera consulta gratis" },
];

export function ContactPageClient() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fireConfetti = () => {
    const end = Date.now() + 1500;
    const colors = ["#6C3AED", "#3B82F6", "#EC4899", "#A78BFA"];
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

  return (
    <div className="relative overflow-hidden">
      {/* Ambient gradient backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(108,58,237,0.18),transparent_60%)] blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.14),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.10),transparent_60%)] blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-10 sm:pb-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-gray-300">
              Disponibles para nuevos proyectos
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.1] tracking-tight"
          >
            Tú Pones la Visión,
            <br />
            <span className="text-gradient">
              Nosotros el Código y la Estrategia
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Transforma tu visión en resultados reales. Somos tu partner experto
            en desarrollo de software y marketing digital. Impulsa tu negocio
            con tecnología y estrategia.{" "}
            <span className="text-white font-medium">¡Contáctanos!</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-500"
          >
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2">
                <b.icon size={14} className="text-brand-primary" />
                <span>{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FORM */}
      <section className="relative px-4 sm:px-6 mb-16 sm:mb-20">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d1a] via-[#111127] to-[#0d0d1a]" />
            <div className="absolute inset-0 bg-white/[0.02]" />
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand-primary/15 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-brand-secondary/15 blur-[100px]" />

            <div className="relative z-10 p-6 sm:p-10">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 10, delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center"
                  >
                    <CheckCircle size={40} className="text-green-400" />
                  </motion.div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
                    ¡Mensaje recibido!
                  </h3>
                  <p className="text-gray-400 max-w-md mx-auto mb-6">
                    Hemos recibido tu mensaje correctamente. Te contactamos en
                    menos de 24h laborables.
                  </p>
                  <a
                    href="https://wa.me/34604561592"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm inline-flex"
                  >
                    <MessageCircle size={16} />
                    <span>O escríbenos por WhatsApp</span>
                  </a>
                </motion.div>
              ) : (
                <>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-2">
                    Cuéntanos tu proyecto
                  </h2>
                  <p className="text-sm text-gray-400 mb-7">
                    Rellena el formulario y te respondemos en menos de 24h.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <Field
                      id="nombre"
                      name="nombre"
                      label="Nombre completo"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                    />

                    <Field
                      id="email"
                      name="email"
                      type="email"
                      label="Email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                    />

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-xs font-semibold text-gray-300 mb-1.5"
                      >
                        Cuéntanos qué proyecto tienes en mente
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={5}
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder="Describe brevemente tu proyecto, objetivos o lo que necesitas..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                        Hubo un error enviando el formulario. Inténtalo de
                        nuevo o escríbenos por WhatsApp.
                      </p>
                    )}

                    <p className="text-xs text-gray-500 leading-relaxed">
                      Al enviar, aceptas nuestra{" "}
                      <a
                        href="/legal/privacidad"
                        className="text-gray-300 hover:text-white underline underline-offset-2"
                      >
                        Política de Privacidad
                      </a>
                      . Tus datos solo se usan para responderte.
                    </p>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-primary w-full justify-center text-sm sm:text-base disabled:opacity-60 disabled:cursor-not-allowed"
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

            <div className="absolute inset-0 rounded-3xl gradient-border pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* CONTACT METHODS */}
      <section className="relative px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          >
            <ContactMethod
              icon={Mail}
              label="Email"
              value="info@scalifylabs.es"
              href="mailto:info@scalifylabs.es"
              gradient="from-brand-primary to-brand-secondary"
            />
            <ContactMethod
              icon={Phone}
              label="Teléfono"
              value="+34 604 56 15 92"
              href="tel:+34604561592"
              gradient="from-brand-secondary to-brand-pink"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function Field({
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-gray-300 mb-1.5"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors"
      />
    </div>
  );
}

function ContactMethod({
  icon: Icon,
  label,
  value,
  href,
  gradient,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
  gradient: string;
}) {
  return (
    <a
      href={href}
      className="group relative flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all overflow-hidden"
    >
      <div
        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-gradient-to-br ${gradient} shadow-lg shadow-brand-primary/20 group-hover:scale-105 transition-transform`}
      >
        <Icon size={22} className="text-white" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-0.5">
          {label}
        </p>
        <p className="font-heading font-semibold text-white text-base sm:text-lg break-all group-hover:text-gradient transition-colors">
          {value}
        </p>
      </div>
    </a>
  );
}
