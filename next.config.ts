import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // El sitio se sirve como export estático con Apache (Plesk). Con esto el
  // build genera `casos/index.html` en lugar de `casos.html`, de modo que las
  // URLs con barra final (que Apache añade a los directorios) resuelven bien y
  // dejan de dar 403 Forbidden.
  trailingSlash: true,
};

export default nextConfig;
