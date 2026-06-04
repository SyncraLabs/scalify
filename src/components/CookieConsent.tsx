"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const CONSENT_KEY = "scalify_cookie_consent";
const PIXEL_ID = "832902779577705";

type Consent = "accepted" | "declined";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    // Permite reabrir el banner desde el footer ("Configurar cookies").
    scalifyOpenCookieSettings?: () => void;
  }
}

/**
 * Gestiona el consentimiento de cookies (RGPD / LSSI-CE) y carga el Meta Pixel
 * SOLO si el usuario lo acepta. Sin consentimiento, fbq nunca se inicializa.
 */
export function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const pathname = usePathname();
  const firstPageView = useRef(true);

  // Lee el estado guardado en el primer render (cliente).
  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    } else {
      setShowBanner(true);
    }

    // Permite reabrir el banner para cambiar la decisión.
    window.scalifyOpenCookieSettings = () => setShowBanner(true);
    return () => {
      delete window.scalifyOpenCookieSettings;
    };
  }, []);

  // Registra PageView en navegaciones de cliente (SPA), tras el consentimiento.
  // El primer PageView ya lo dispara el snippet del <Script> al cargar la página.
  useEffect(() => {
    if (consent !== "accepted") return;
    if (firstPageView.current) {
      firstPageView.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname, consent]);

  const accept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setShowBanner(false);
  }, []);

  const decline = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsent("declined");
    setShowBanner(false);
  }, []);

  return (
    <>
      {consent === "accepted" && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed inset-x-0 bottom-0 z-[9999] border-t border-white/10 bg-[#0a0a0f]/95 backdrop-blur-md px-4 py-4 sm:px-6"
        >
          <div className="max-w-5xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-400 leading-relaxed flex-1">
              Usamos cookies propias y de terceros (Meta Pixel) para analítica y
              publicidad. Puedes aceptarlas, rechazarlas o leer más en nuestra{" "}
              <a
                href="/legal/cookies"
                className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
              >
                Política de Cookies
              </a>
              .
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-300 hover:text-white hover:border-white/20 transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ background: "rgb(108,58,237)" }}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
