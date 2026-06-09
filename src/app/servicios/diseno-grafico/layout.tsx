import type { Metadata } from "next";
import { canonical, absoluteUrl, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

const NAME = "Diseño Gráfico y Branding";
const PATH = "/servicios/diseno-grafico";
const DESCRIPTION =
  "Identidad de marca, diseño UI/UX, creatividades y vídeo. Una imagen profesional que transmite confianza y diferencia tu negocio de la competencia.";

export const metadata: Metadata = {
  title: "Diseño Gráfico, Branding y UI/UX",
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
