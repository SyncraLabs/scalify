/**
 * Inyecta datos estructurados (Schema.org) como <script type="application/ld+json">.
 * Acepta un objeto o un array de objetos schema.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const json = Array.isArray(data) ? data : [data];
  return (
    <>
      {json.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // El contenido es controlado por nosotros (no input de usuario), seguro.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
