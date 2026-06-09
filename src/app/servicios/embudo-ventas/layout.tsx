import type { Metadata } from "next";
import { canonical, absoluteUrl, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

const NAME = "Embudos de Venta y Automatización";
const PATH = "/servicios/embudo-ventas";
const DESCRIPTION =
  "Diseñamos y automatizamos embudos de venta que captan, nutren y cierran clientes en piloto automático. Landing pages, email marketing y CRM conectados.";

export const metadata: Metadata = {
  title: "Embudos de Venta y Automatización",
  description: DESCRIPTION,
  alternates: canonical(PATH),
  openGraph: {
    title: `${NAME} | ScalifyLabs`,
    description: DESCRIPTION,
    url: absoluteUrl(PATH),
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: NAME, description: DESCRIPTION, path: PATH }),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: NAME, path: PATH },
          ]),
        ]}
      />
      {children}
    </>
  );
}
