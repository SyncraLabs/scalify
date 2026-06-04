import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies | ScalifyLabs",
  description:
    "Política de cookies de ScalifyLabs. Información sobre el uso de cookies en nuestro sitio web.",
};

export default function CookiesPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
          Política de Cookies
        </h1>

        <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-300 text-sm leading-relaxed">
          <h2 className="text-white text-xl font-heading font-semibold">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el
            dispositivo del usuario al visitar un sitio web. Permiten que el
            sitio recuerde información sobre la visita, como preferencias de
            idioma y otras opciones, para facilitar la próxima visita y hacer
            que el sitio sea más útil.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            2. Tipos de cookies que utilizamos
          </h2>

          <h3 className="text-white text-lg font-heading font-medium">
            Cookies técnicas (necesarias)
          </h3>
          <p>
            Son imprescindibles para el funcionamiento del sitio web. Permiten
            la navegación y el uso de las diferentes opciones y servicios.
          </p>

          <h3 className="text-white text-lg font-heading font-medium">
            Cookies analíticas
          </h3>
          <p>
            Nos permiten cuantificar el número de usuarios y realizar la
            medición y análisis estadístico de la utilización del sitio web.
            Para ello se analiza la navegación con el fin de mejorar la oferta
            de productos o servicios.
          </p>

          <h3 className="text-white text-lg font-heading font-medium">
            Cookies de marketing y publicidad
          </h3>
          <p>
            Se utilizan para mostrar publicidad relevante y medir la eficacia de
            nuestras campañas. En concreto, este sitio utiliza el{" "}
            <strong>Píxel de Meta (Facebook)</strong>, una tecnología de{" "}
            <strong>Meta Platforms Ireland Limited</strong>, que registra
            eventos como la visita a páginas (PageView) para optimizar y medir
            nuestros anuncios en Facebook e Instagram. Estas cookies{" "}
            <strong>solo se activan si el usuario presta su consentimiento</strong>{" "}
            a través del banner de cookies. Puedes consultar más información en
            la{" "}
            <a
              href="https://www.facebook.com/privacy/policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Política de Privacidad de Meta
            </a>
            .
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            3. Consentimiento y retirada
          </h2>
          <p>
            Al acceder por primera vez a nuestro sitio web se muestra un banner
            donde puedes <strong>aceptar</strong> o <strong>rechazar</strong> el
            uso de cookies no esenciales (analíticas y de publicidad). Las
            cookies de publicidad, incluido el Píxel de Meta, no se cargan hasta
            que aceptas. Puedes cambiar o retirar tu decisión en cualquier
            momento desde el enlace{" "}
            <strong>«Configurar Cookies»</strong> situado en el pie de página.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            4. Gestión de cookies desde el navegador
          </h2>
          <p>
            El usuario puede configurar su navegador para aceptar o rechazar
            todas las cookies, o para recibir un aviso cuando se envía una
            cookie. Los procedimientos para bloquear y eliminar cookies pueden
            diferir de un navegador a otro. A continuación, se proporcionan
            enlaces a las instrucciones de los navegadores más comunes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Chrome:</strong> Configuración → Privacidad y seguridad →
              Cookies
            </li>
            <li>
              <strong>Firefox:</strong> Opciones → Privacidad y seguridad →
              Cookies
            </li>
            <li>
              <strong>Safari:</strong> Preferencias → Privacidad → Cookies
            </li>
            <li>
              <strong>Edge:</strong> Configuración → Cookies y permisos del sitio
            </li>
          </ul>

          <h2 className="text-white text-xl font-heading font-semibold">
            5. Actualización de la política
          </h2>
          <p>
            ScalifyLabs se reserva el derecho de modificar esta política de
            cookies para adaptarla a novedades legislativas o cambios en
            nuestras actividades. Se recomienda al usuario revisarla
            periódicamente.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            6. Más información
          </h2>
          <p>
            Si tiene dudas sobre esta política de cookies, puede contactarnos
            en{" "}
            <a href="mailto:info@scalifylabs.es" className="text-purple-400 hover:text-purple-300">
              info@scalifylabs.es
            </a>.
          </p>

          <p className="text-gray-500 text-xs mt-10">
            Última actualización: Junio 2026
          </p>
        </div>
      </div>
    </section>
  );
}
