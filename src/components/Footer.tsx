"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Desarrollo Web", href: "/servicios/desarrollo-web" },
    { name: "Posicionamiento SEO", href: "/servicios/seo" },
    { name: "Redes Sociales", href: "/servicios/redes-sociales" },
    { name: "Campañas Ads", href: "/servicios/ads" },
    { name: "Embudo de Ventas", href: "/servicios/embudo-ventas" },
    { name: "Diseño Gráfico", href: "/servicios/diseno-grafico" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "/nosotros" },
    { name: "Casos de Éxito", href: "/casos" },
    { name: "Contacto", href: "/contacto" },
  ],
  legal: [
    { name: "Aviso Legal", href: "/legal/aviso-legal" },
    { name: "Política de Privacidad", href: "/legal/privacidad" },
    { name: "Política de Cookies", href: "/legal/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(108,58,237,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <img src="/logo-icon.svg" alt="ScalifyLabs" className="w-8 h-8" />
              <span className="font-heading font-bold text-lg text-white">
                Scalify<span className="text-gradient">Labs</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Tu aliado estratégico digital. Escalamos tu negocio con
              soluciones integrales que generan resultados reales.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="mailto:info@scalifylabs.es"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} /> info@scalifylabs.es
              </a>
              <a
                href="tel:+34604561592"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} /> +34 604 56 15 92
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Canarias · Barcelona · Madrid
              </span>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ScalifyLabs. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            {["Instagram", "Facebook", "TikTok"].map((social) => (
              <a
                key={social}
                href="https://www.instagram.com/scalifylabsmarketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-gray-500 hover:text-white transition-colors duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
