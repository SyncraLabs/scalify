"use client";

import { useContactForm } from "@/components/ContactFormModal";
import { ReactNode } from "react";

interface ContactButtonProps {
  className?: string;
  children: ReactNode;
}

export function ContactButton({ className, children }: ContactButtonProps) {
  const { open } = useContactForm();
  return (
    <button onClick={open} className={className}>
      {children}
    </button>
  );
}
