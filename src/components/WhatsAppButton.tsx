"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/34600000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 group"
      aria-label="WhatsApp"
    >
      <MessageCircle size={20} className="text-white sm:hidden" />
      <MessageCircle size={24} className="text-white hidden sm:block" />

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-[#0a0a1a] border border-white/10 text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        ¿Hablamos? ¡Escríbenos!
      </span>
    </motion.a>
  );
}
