import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contacto | ScalifyLabs - Agencia de Marketing Digital",
  description:
    "Hablemos de tu proyecto. Respondemos en menos de 24h. Llámanos al +34 604 56 15 92, escríbenos a info@scalifylabs.es o usa el formulario.",
  alternates: {
    canonical: "https://scalifylabs.es/contacto",
  },
  openGraph: {
    title: "Contacta con ScalifyLabs | Agencia de Marketing Digital",
    description:
      "Cuéntanos tu proyecto y te respondemos en menos de 24h. WhatsApp, email o formulario directo.",
    url: "https://scalifylabs.es/contacto",
    type: "website",
  },
};

export default function ContactoPage() {
  return <ContactPageClient />;
}
