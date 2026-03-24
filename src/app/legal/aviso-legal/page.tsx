import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal | ScalifyLabs",
  description: "Aviso legal de ScalifyLabs, agencia de marketing digital.",
};

export default function AvisoLegalPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
          Aviso Legal
        </h1>

        <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-300 text-sm leading-relaxed">
          <h2 className="text-white text-xl font-heading font-semibold">
            1. Datos identificativos
          </h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y Comercio Electrónico
            (LSSI-CE), se informa al usuario que el titular de este sitio web es:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Denominación:</strong> ScalifyLabs</li>
            <li><strong>Dominio:</strong> scalifylabs.es</li>
            <li><strong>Email:</strong> info@scalifylabs.es</li>
            <li><strong>Ubicación:</strong> Canarias · Barcelona · Madrid, España</li>
          </ul>

          <h2 className="text-white text-xl font-heading font-semibold">
            2. Objeto
          </h2>
          <p>
            Este sitio web tiene como finalidad proporcionar información sobre
            los servicios de marketing digital, desarrollo web, SEO, gestión de
            redes sociales, publicidad digital, diseño gráfico y embudos de
            ventas ofrecidos por ScalifyLabs.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            3. Propiedad intelectual e industrial
          </h2>
          <p>
            Todos los contenidos de este sitio web, incluyendo textos, imágenes,
            diseños gráficos, logotipos, iconos, código fuente y software, son
            propiedad de ScalifyLabs o de sus legítimos titulares, y están
            protegidos por las leyes de propiedad intelectual e industrial.
          </p>
          <p>
            Queda prohibida la reproducción, distribución, comunicación pública o
            transformación de estos contenidos sin autorización expresa de
            ScalifyLabs.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            4. Condiciones de uso
          </h2>
          <p>
            El usuario se compromete a hacer un uso adecuado de los contenidos y
            servicios ofrecidos en este sitio web, absteniéndose de emplearlos
            para actividades ilícitas o contrarias a la buena fe.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            5. Exclusión de responsabilidad
          </h2>
          <p>
            ScalifyLabs no se hace responsable de los daños que pudieran derivarse
            del uso de este sitio web, ni de la información contenida en el mismo.
            Se reserva el derecho de modificar el contenido del sitio web sin
            previo aviso.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            6. Enlaces externos
          </h2>
          <p>
            Este sitio web puede contener enlaces a páginas de terceros.
            ScalifyLabs no asume responsabilidad alguna por el contenido de dichos
            enlaces externos.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            7. Legislación aplicable
          </h2>
          <p>
            El presente aviso legal se rige por la legislación española vigente.
            Para cualquier controversia que pudiera derivarse del acceso o uso de
            este sitio web, las partes se someten a los juzgados y tribunales
            competentes.
          </p>

          <p className="text-gray-500 text-xs mt-10">
            Última actualización: Marzo 2026
          </p>
        </div>
      </div>
    </section>
  );
}
