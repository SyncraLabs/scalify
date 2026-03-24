import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | ScalifyLabs",
  description:
    "Política de privacidad de ScalifyLabs. Cómo tratamos tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-invert prose-gray max-w-none space-y-6 text-gray-300 text-sm leading-relaxed">
          <h2 className="text-white text-xl font-heading font-semibold">
            1. Responsable del tratamiento
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Responsable:</strong> ScalifyLabs</li>
            <li><strong>Email:</strong> info@scalifylabs.es</li>
            <li><strong>Sitio web:</strong> scalifylabs.es</li>
          </ul>

          <h2 className="text-white text-xl font-heading font-semibold">
            2. Datos que recopilamos
          </h2>
          <p>
            A través de nuestro formulario de contacto, recopilamos los
            siguientes datos personales:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Nombre</li>
            <li>Dirección de correo electrónico</li>
            <li>Mensaje o consulta</li>
          </ul>

          <h2 className="text-white text-xl font-heading font-semibold">
            3. Finalidad del tratamiento
          </h2>
          <p>Los datos personales se recopilan con las siguientes finalidades:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gestionar y responder a las consultas recibidas.</li>
            <li>Enviar información comercial sobre nuestros servicios, solo si el usuario lo consiente expresamente.</li>
            <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
          </ul>

          <h2 className="text-white text-xl font-heading font-semibold">
            4. Base legal
          </h2>
          <p>
            El tratamiento de datos se basa en el consentimiento del usuario al
            enviar el formulario de contacto, de conformidad con el Reglamento
            General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de
            Protección de Datos Personales (LOPDGDD).
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            5. Conservación de datos
          </h2>
          <p>
            Los datos personales se conservarán durante el tiempo necesario para
            cumplir con la finalidad para la que fueron recogidos y para
            determinar las posibles responsabilidades derivadas de dicha
            finalidad.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            6. Derechos del usuario
          </h2>
          <p>El usuario tiene derecho a:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Acceso:</strong> Conocer qué datos personales tratamos.</li>
            <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos.</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
            <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
            <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento.</li>
          </ul>
          <p>
            Para ejercer estos derechos, puede contactar con nosotros en{" "}
            <a href="mailto:info@scalifylabs.es" className="text-purple-400 hover:text-purple-300">
              info@scalifylabs.es
            </a>.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            7. Seguridad
          </h2>
          <p>
            ScalifyLabs adopta las medidas técnicas y organizativas necesarias
            para garantizar la seguridad de los datos personales y evitar su
            alteración, pérdida, tratamiento o acceso no autorizado.
          </p>

          <h2 className="text-white text-xl font-heading font-semibold">
            8. Cesión de datos
          </h2>
          <p>
            Los datos personales no serán cedidos a terceros salvo obligación
            legal o cuando sea necesario para la prestación del servicio
            solicitado.
          </p>

          <p className="text-gray-500 text-xs mt-10">
            Última actualización: Marzo 2026
          </p>
        </div>
      </div>
    </section>
  );
}
