import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // El sitio se sirve como export estático con Apache (Plesk): `next build`
  // genera la carpeta `out/` lista para subir al docroot.
  output: "export",
  // Genera `casos/index.html` en lugar de `casos.html`, de modo que las URLs
  // con barra final (que Apache añade a los directorios) resuelven bien y
  // dejan de dar 403 Forbidden.
  trailingSlash: true,
  // En export estático no hay servidor que optimice imágenes en runtime.
  images: { unoptimized: true },
};

export default nextConfig;
