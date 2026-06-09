import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactFormProvider } from "@/components/ContactFormModal";
import { AutoContactPopup } from "@/components/AutoContactPopup";
import { CookieConsent } from "@/components/CookieConsent";
import { JsonLd } from "@/components/JsonLd";
import { SITE, organizationSchema, websiteSchema } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#6C3AED",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "ScalifyLabs | Agencia de Marketing Digital en España",
    template: "%s | ScalifyLabs",
  },
  description:
    "Escalamos tu negocio con desarrollo web, SEO, redes sociales y publicidad digital. 7+ años, 100+ empresas. Resultados reales.",
  applicationName: "ScalifyLabs",
  keywords: [
    "agencia marketing digital",
    "agencia marketing digital España",
    "SEO España",
    "posicionamiento web",
    "desarrollo web a medida",
    "publicidad digital",
    "campañas Meta Ads",
    "redes sociales empresas",
    "embudo de ventas",
    "ScalifyLabs",
  ],
  authors: [{ name: "ScalifyLabs", url: SITE.url }],
  creator: "ScalifyLabs",
  publisher: "ScalifyLabs",
  alternates: {
    canonical: "/",
  },
  category: "marketing",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "ScalifyLabs | Agencia de Marketing Digital en España",
    description:
      "Escalamos tu negocio con desarrollo web, SEO, redes sociales y publicidad digital.",
    url: SITE.url,
    siteName: "ScalifyLabs",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScalifyLabs | Agencia de Marketing Digital en España",
    description:
      "Escalamos tu negocio con desarrollo web, SEO, redes sociales y publicidad digital.",
    creator: SITE.twitter,
  },
  // Verificación de Google Search Console: pega tu token en NEXT_PUBLIC_GSC_VERIFICATION
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
      </head>
      <body className="antialiased noise">
        <ContactFormProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AutoContactPopup />
        </ContactFormProvider>
        {/* Meta Pixel con consentimiento previo (RGPD / LSSI-CE) */}
        <CookieConsent />
      </body>
    </html>
  );
}
