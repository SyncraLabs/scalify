"use client";

import { useEffect, useRef } from "react";
import { useContactForm } from "./ContactFormModal";

const TIME_TRIGGER_MS = 30_000;
const SCROLL_TRIGGER = 0.6;

export function AutoContactPopup() {
  const { open } = useContactForm();
  const triggered = useRef(false);

  useEffect(() => {
    const fire = () => {
      if (triggered.current) return;
      triggered.current = true;
      open();
    };

    const timer = window.setTimeout(fire, TIME_TRIGGER_MS);

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const ratio = window.scrollY / scrollable;
      if (ratio >= SCROLL_TRIGGER) fire();
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [open]);

  return null;
}
