import type { Metadata } from "next";
import { canonical, absoluteUrl, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Sobre Nosotros: Tu Aliado Estratégico Digital",
  description:
    "Somos ScalifyLabs: 7+ años escalando negocios, 100+ empresas y un equipo que une estrategia, ejecución y resultados. Conoce nuestra historia y valores.",
  alternates: canonical("/nosotros"),
  openGraph: {
    title: "Sobre Nosotros | ScalifyLabs",
    description:
      "7+ años escalando negocios. Estrategia, ejecución y resultados medibles.",
    url: absoluteUrl("/nosotros"),
    type: "website",
  },
};

export default function NosotrosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Sobre Nosotros", path: "/nosotros" },
        ])}
      />
      {children}
    </>
  );
}
