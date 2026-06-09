import type { Metadata } from "next";
import { canonical, absoluteUrl, serviceSchema, breadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

const NAME = "Campañas Ads (Meta y TikTok)";
const PATH = "/servicios/ads";
const DESCRIPTION =
  "Publicidad en Facebook, Instagram y TikTok con ROI medible. Testeamos, optimizamos y escalamos cada euro invertido para que vuelva multiplicado.";

export const metadata: Metadata = {
  title: "Campañas de Publicidad: Meta Ads y TikTok Ads",
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
