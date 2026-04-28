import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactFormProvider } from "@/components/ContactFormModal";
import { AutoContactPopup } from "@/components/AutoContactPopup";

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

export const metadata: Metadata = {
  title: "ScalifyLabs | Agencia de Marketing Digital en España",
  description:
    "Escalamos tu negocio con desarrollo web, SEO, redes sociales y publicidad digital. 7+ años, 100+ empresas. Resultados reales.",
  keywords: [
    "agencia marketing digital",
    "SEO España",
    "desarrollo web",
    "publicidad digital",
    "ScalifyLabs",
  ],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "ScalifyLabs | Agencia de Marketing Digital en España",
    description:
      "Escalamos tu negocio con desarrollo web, SEO, redes sociales y publicidad digital.",
    url: "https://scalifylabs.es",
    siteName: "ScalifyLabs",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased noise">
        <ContactFormProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AutoContactPopup />
        </ContactFormProvider>
      </body>
    </html>
  );
}
