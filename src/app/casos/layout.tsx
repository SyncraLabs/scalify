import type { Metadata } from "next";
import { canonical, absoluteUrl, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Casos de Éxito: Resultados Reales de Clientes",
  description:
    "Resultados medibles de negocios que han escalado con ScalifyLabs: más tráfico, más leads y más ventas. Casos reales en moda, viajes, restauración y más.",
  alternates: canonical("/casos"),
  openGraph: {
    title: "Casos de Éxito | ScalifyLabs",
    description:
      "Resultados medibles de negocios que han escalado con ScalifyLabs.",
    url: absoluteUrl("/casos"),
    type: "website",
  },
};

export default function CasosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Casos de Éxito", path: "/casos" },
        ])}
      />
      {children}
    </>
  );
}
