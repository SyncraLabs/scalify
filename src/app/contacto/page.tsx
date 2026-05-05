import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contacto | ScalifyLabs - Software y Marketing Digital",
  description:
    "Tú pones la visión, nosotros el código y la estrategia. Cuéntanos tu proyecto y te respondemos en menos de 24h. Email: info@scalifylabs.es · Tel: +34 604 56 15 92.",
  alternates: {
    canonical: "https://scalifylabs.es/contacto",
  },
  openGraph: {
    title: "Contacta con ScalifyLabs | Software y Marketing Digital",
    description:
      "Tú pones la visión, nosotros el código y la estrategia. Te respondemos en menos de 24h.",
    url: "https://scalifylabs.es/contacto",
    type: "website",
  },
};

export default function ContactoPage() {
  return <ContactPageClient />;
}
