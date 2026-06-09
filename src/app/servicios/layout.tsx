import type { Metadata } from "next";
import { canonical, absoluteUrl, breadcrumbSchema, itemListSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

const SERVICES = [
  { name: "Desarrollo Web a Medida", path: "/servicios/desarrollo-web" },
  { name: "Posicionamiento SEO", path: "/servicios/seo" },
  { name: "Gestión de Redes Sociales", path: "/servicios/redes-sociales" },
  { name: "Campañas Ads (Meta y TikTok)", path: "/servicios/ads" },
  { name: "Programación a Medida", path: "/servicios/programacion" },
  { name: "Diseño Gráfico y Branding", path: "/servicios/diseno-grafico" },
  { name: "Embudos de Venta y Automatización", path: "/servicios/embudo-ventas" },
];

export const metadata: Metadata = {
  title: "Servicios de Marketing Digital y Desarrollo",
  description:
    "Desarrollo web, SEO, redes sociales, publicidad, programación a medida, diseño gráfico y embudos de venta. Todas las soluciones digitales de ScalifyLabs en un solo sitio.",
  alternates: canonical("/servicios"),
  openGraph: {
    title: "Servicios de Marketing Digital y Desarrollo | ScalifyLabs",
    description:
      "Desarrollo web, SEO, redes sociales, publicidad, programación, diseño y embudos de venta.",
    url: absoluteUrl("/servicios"),
    type: "website",
  },
};

export default function ServiciosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
          ]),
          itemListSchema(SERVICES),
        ]}
      />
      {children}
    </>
  );
}
