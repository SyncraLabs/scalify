"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Loader2,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import confetti from "canvas-confetti";

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+34 604 56 15 92",
    desc: "Respuesta inmediata en horario laboral",
    href: "https://wa.me/34604561592",
    external: true,
    accent: "#25D366",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 604 56 15 92",
    desc: "Lun · Vie  ·  9:00 - 19:00",
    href: "tel:+34604561592",
    accent: "#6C3AED",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@scalifylabs.es",
    desc: "Te respondemos en menos de 24h",
    href: "mailto:info@scalifylabs.es",
    accent: "#3B82F6",
  },
];

const trustBadges = [
  { icon: Clock, label: "Respuesta < 24h" },
  { icon: Shield, label: "Datos protegidos (RGPD)" },
  { icon: Zap, label: "Primera consulta gratis" },
];

const faqs = [
  {
    q: "¿Cuánto tarda en responder vuestro equipo?",
    a: "Respondemos cualquier mensaje del formulario o email en menos de 24h laborables. Por WhatsApp solemos contestar en minutos durante horario de oficina.",
  },
  {
    q: "¿La primera consulta es gratuita?",
    a: "Sí. Programamos una llamada de 30 minutos sin coste para entender tu proyecto y proponer la mejor estrategia. Solo si encajamos seguimos adelante.",
  },
  {
    q: "¿Trabajáis con empresas fuera de España?",
    a: "Sí. Aunque tenemos sede en Canarias, Barcelona y Madrid, trabajamos en remoto con clientes en toda Europa y Latinoamérica.",
  },
  {
    q: "¿Qué información debo incluir en el mensaje?",
    a: "Cuéntanos brevemente a qué se dedica tu negocio, qué objetivo tienes (más leads, ventas, branding...) y, si los conoces, tu presupuesto y plazos. Cuanto más sepamos, mejor podemos ayudarte.",
  },
];

export function ContactPageClient() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    presupuesto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  return (
    <div className="relative overflow-hidden">
      {/* Ambient gradient backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(108,58,237,0.18),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.12),transparent_60%)] blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6">
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
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-[1.05]"
          >
            Hablemos de tu{" "}
            <span className="text-gradient">próximo proyecto</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Cuéntanos qué tienes en mente y te respondemos en menos de 24h con
            una propuesta clara. Sin compromisos, sin letra pequeña.
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

      {/* CHANNELS */}
      <section className="relative px-4 sm:px-6 mb-12 sm:mb-20">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((ch, i) => (
            <motion.a
              key={ch.label}
              href={ch.href}
              target={ch.external ? "_blank" : undefined}
              rel={ch.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all overflow-hidden"
            >
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"
                style={{ background: ch.accent }}
              />
              <div
                className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4 border border-white/10"
                style={{ background: `${ch.accent}1a` }}
              >
                <ch.icon size={20} style={{ color: ch.accent }} />
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                {ch.label}
              </p>
              <p className="font-heading font-semibold text-white mb-1 break-all">
                {ch.value}
              </p>
              <p className="text-sm text-gray-400">{ch.desc}</p>
              <ArrowRight
                size={16}
                className="absolute top-6 right-6 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all"
              />
            </motion.a>
          ))}
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="relative px-4 sm:px-6 mb-20 sm:mb-28">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 relative rounded-3xl overflow-hidden"
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
                  className="text-center py-12"
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
                    Hemos recibido tu mensaje correctamente. Nuestro equipo te
                    contactará en menos de 24h laborables.
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
                  <p className="text-sm text-gray-400 mb-8">
                    Cuanta más información nos des, más concreta será nuestra
                    propuesta.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field
                        id="nombre"
                        name="nombre"
                        label="Nombre completo *"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                      <Field
                        id="empresa"
                        name="empresa"
                        label="Empresa"
                        value={form.empresa}
                        onChange={handleChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        label="Email *"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                      <Field
                        id="telefono"
                        name="telefono"
                        type="tel"
                        label="Teléfono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+34 ..."
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <SelectField
                        id="servicio"
                        name="servicio"
                        label="Servicio de interés"
                        value={form.servicio}
                        onChange={handleChange}
                        options={[
                          "Desarrollo Web",
                          "Posicionamiento SEO",
                          "Redes Sociales",
                          "Campañas Ads",
                          "Diseño Gráfico",
                          "Embudo de Ventas",
                          "Programación a Medida",
                          "Otro / Aún no lo sé",
                        ]}
                      />
                      <SelectField
                        id="presupuesto"
                        name="presupuesto"
                        label="Presupuesto orientativo"
                        value={form.presupuesto}
                        onChange={handleChange}
                        options={[
                          "Menos de 1.000€",
                          "1.000€ - 3.000€",
                          "3.000€ - 6.000€",
                          "6.000€ - 12.000€",
                          "Más de 12.000€",
                          "Aún no lo sé",
                        ]}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block text-xs font-medium text-gray-300 mb-1.5"
                      >
                        Cuéntanos qué necesitas *
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={5}
                        value={form.mensaje}
                        onChange={handleChange}
                        placeholder="Describe brevemente tu proyecto, objetivos y plazos..."
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

          {/* Side info */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10">
              <h3 className="font-heading font-semibold text-xl text-white mb-5">
                ¿Prefieres llamar?
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+34604561592"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-brand-primary transition-colors">
                      +34 604 56 15 92
                    </p>
                    <p className="text-xs text-gray-500">Lun-Vie · 9:00-19:00</p>
                  </div>
                </a>
                <a
                  href="mailto:info@scalifylabs.es"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-secondary/10 border border-brand-secondary/20 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white group-hover:text-brand-secondary transition-colors break-all">
                      info@scalifylabs.es
                    </p>
                    <p className="text-xs text-gray-500">Respuesta en &lt; 24h</p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Canarias · Barcelona · Madrid
                    </p>
                    <p className="text-xs text-gray-500">
                      Trabajamos 100% en remoto
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/34604561592"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-6 sm:p-8 rounded-2xl overflow-hidden border border-[#25D366]/30 bg-gradient-to-br from-[#25D366]/10 to-transparent group"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#25D366]/20 blur-3xl group-hover:bg-[#25D366]/30 transition-colors" />
              <div className="relative">
                <MessageCircle
                  size={28}
                  className="text-[#25D366] mb-3"
                />
                <h3 className="font-heading font-semibold text-lg text-white mb-2">
                  ¿Quieres respuesta inmediata?
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Escríbenos por WhatsApp. Solemos contestar en minutos.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#25D366] group-hover:gap-3 transition-all">
                  Abrir WhatsApp
                  <ArrowRight size={16} />
                </span>
              </div>
            </a>
          </motion.aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 sm:px-6 pb-24 sm:pb-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-3">
              Preguntas frecuentes
            </h2>
            <p className="text-gray-400">
              Lo que más nos preguntan antes de empezar a trabajar juntos.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.details
                key={f.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer list-none">
                  <span className="font-heading font-medium text-white text-base sm:text-lg">
                    {f.q}
                  </span>
                  <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-open:rotate-45 transition-transform">
                    <span className="block w-3 h-px bg-white" />
                    <span className="block w-px h-3 bg-white -ml-[7px]" />
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-gray-400 leading-relaxed">
                  {f.a}
                </div>
              </motion.details>
            ))}
          </div>
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
        className="block text-xs font-medium text-gray-300 mb-1.5"
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

function SelectField({
  id,
  name,
  label,
  value,
  onChange,
  options,
}: {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-gray-300 mb-1.5"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/30 transition-colors appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2212%22%20height=%2212%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%23999%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22><polyline%20points=%226%209%2012%2015%2018%209%22></polyline></svg>')] bg-no-repeat bg-[right_1rem_center]"
      >
        <option value="" className="bg-[#0d0d1a]">
          Selecciona una opción
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#0d0d1a]">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
