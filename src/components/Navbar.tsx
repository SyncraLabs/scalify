"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useContactForm } from "@/components/ContactFormModal";

const services = [
  { name: "Desarrollo Web", href: "/servicios/desarrollo-web" },
  { name: "Posicionamiento SEO", href: "/servicios/seo" },
  { name: "Redes Sociales", href: "/servicios/redes-sociales" },
  { name: "Campañas Ads", href: "/servicios/ads" },
  { name: "Programación a Medida", href: "/servicios/programacion" },
  { name: "Diseño Gráfico", href: "/servicios/diseno-grafico" },
  { name: "Embudo de Ventas", href: "/servicios/embudo-ventas" },
];

const navLinks = [
  { name: "Servicios", href: "/servicios", dropdown: services },
  { name: "Casos de Éxito", href: "/casos" },
  { name: "Sobre Nosotros", href: "/nosotros" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { open: openContactForm } = useContactForm();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#0a0a1a]/70 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <img src="/logo-icon.svg" alt="ScalifyLabs" className="w-9 h-9" />
              <div className="absolute inset-0 rounded-lg bg-gradient-brand opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500" />
            </div>
            <span className="font-heading font-bold text-xl text-white">
              Scalify<span className="text-gradient">Labs</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setDropdownOpen(link.name)
                }
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        dropdownOpen === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {link.dropdown && dropdownOpen === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 rounded-xl p-2 bg-[#0a0a1a]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 group/item"
                        >
                          <span>{item.name}</span>
                          <ArrowRight
                            size={14}
                            className="ml-auto opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"
                          />
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={openContactForm}
              className="hidden lg:inline-flex btn-primary text-sm"
            >
              <span>Hablemos</span>
              <ArrowRight size={16} className="relative z-10" />
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#0a0a1a] border-l border-white/5 p-5 sm:p-6 pt-20 sm:pt-24 overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3.5 rounded-lg text-base sm:text-lg font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <button
                  onClick={() => { setMobileOpen(false); openContactForm(); }}
                  className="btn-primary w-full justify-center text-sm"
                >
                  <span>Hablemos</span>
                  <ArrowRight size={16} className="relative z-10" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
