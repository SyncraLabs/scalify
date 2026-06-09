import type { Metadata } from "next";
import { canonical, absoluteUrl, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

const NAME = "Gestión de Redes Sociales";
const PATH = "/servicios/redes-sociales";
const DESCRIPTION =
  "Estrategia, contenido y gestión de tus redes sociales. Convertimos seguidores en clientes con contenido que conecta y métricas que importan.";

export const metadata: Metadata = {
  title: "Gestión de Redes Sociales para Empresas",
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
