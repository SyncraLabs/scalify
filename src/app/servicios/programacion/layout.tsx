import type { Metadata } from "next";
import { canonical, absoluteUrl, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

const NAME = "Programación a Medida";
const PATH = "/servicios/programacion";
const DESCRIPTION =
  "Desarrollo de software, aplicaciones web, plataformas e integraciones a medida. Cuando ninguna plantilla sirve, lo programamos desde cero.";

export const metadata: Metadata = {
  title: "Programación a Medida: Apps, Plataformas y Software",
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
