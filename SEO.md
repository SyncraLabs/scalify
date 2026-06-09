# SEO de ScalifyLabs

Documento de referencia del SEO técnico de la web. Todo lo que se generó y cómo mantenerlo.

## Qué está montado

### Metadata
- **Global** (`src/app/layout.tsx`): `metadataBase`, título con plantilla `%s | ScalifyLabs`, descripción, keywords, Open Graph, Twitter Card, robots y verificación de Search Console (vía env).
- **Por página**: cada ruta tiene su `<title>`, descripción y `canonical` propios:
  - Home → `src/app/page.tsx`
  - Servicios y cada subservicio → `src/app/servicios/**/layout.tsx`
  - Casos, Nosotros, Blog → su `layout.tsx` / `page.tsx`
- La configuración central está en **`src/lib/seo.ts`** (dominio, datos de contacto, áreas, redes). Cambia ahí el dominio y se propaga a todo.

### Datos estructurados (Schema.org JSON-LD)
- `ProfessionalService` + `WebSite` en todo el sitio (layout raíz).
- `FAQPage` en la home (sección de preguntas frecuentes visible, datos en `src/lib/faq.ts`).
- `Service` + `BreadcrumbList` en cada página de servicio.
- `BreadcrumbList` + `ItemList` (catálogo de servicios) en `/servicios`.
- `BreadcrumbList` en casos, nosotros y blog.
- `BlogPosting` + `BreadcrumbList` + `FAQPage` en cada artículo del blog.
- Helpers en `src/lib/seo.ts`, inyectados con `src/components/JsonLd.tsx`.

### Ficheros de rastreo
- `src/app/robots.ts` → `/robots.txt`
- `src/app/sitemap.ts` → `/sitemap.xml` (estáticas + servicios + artículos de blog, automático)
- `src/app/manifest.ts` → `/manifest.webmanifest`

### Imágenes para compartir (Open Graph)
- `src/app/opengraph-image.tsx` → imagen OG por defecto del sitio.
- `src/app/blog/[slug]/opengraph-image.tsx` → imagen OG única por artículo.

### Blog
- Sistema en `src/lib/blog.ts`, contenido en `src/content/blog/*.ts`.
- Rutas: `/blog` (índice) y `/blog/[slug]` (artículo).
- 8 artículos pilares ya publicados (uno de apoyo por cada servicio principal).

## Cómo añadir un artículo nuevo
1. Duplica un fichero de `src/content/blog/` y cambia su contenido.
2. Impórtalo y añádelo al array `registry` en `src/lib/blog.ts`.
3. Listo: ruta, sitemap, metadata, OG y JSON-LD se generan solos.

## Re-indexación automática (el "cron")
`scripts/seo-ping.mjs` lee el sitemap publicado y envía todas las URLs a **IndexNow**
(Bing, Yandex, Seznam) para que reindexen rápido tras publicar contenido.

- **Manual:** `npm run seo:ping`
- **Automático (GitHub Actions):** `.github/workflows/seo-ping.yml` lo ejecuta cada lunes a las 06:00 UTC. También se puede lanzar a mano desde la pestaña *Actions → Run workflow*.
- Clave IndexNow pública: `public/b1247c64c000b647acd6f964ccd3d040.txt` (debe quedar accesible en `https://scalifylabs.es/b1247c64c000b647acd6f964ccd3d040.txt`).

> **Google** no usa IndexNow ni el antiguo "ping" de sitemap (deprecado en 2023).
> Para Google, la indexación depende del sitemap declarado en `robots.txt` + Google Search Console.

### Alternativa en Plesk (si no se usa GitHub Actions)
Como la web se compila y se sube a Plesk, puedes programar el ping desde **Plesk → Tareas programadas (cron)**:

```
# Cada lunes a las 06:00
0 6 * * 1   /usr/bin/node /ruta/al/proyecto/scripts/seo-ping.mjs
```

O, sin Node en el servidor, una tarea que haga el envío con `curl`:

```bash
curl -s "https://scalifylabs.es/sitemap.xml" \
  | grep -oP '(?<=<loc>)[^<]+' \
  | jq -R -s -c 'split("\n")[:-1]' \
  | xargs -I{} curl -s -X POST "https://api.indexnow.org/indexnow" \
      -H "Content-Type: application/json" \
      -d '{"host":"scalifylabs.es","key":"b1247c64c000b647acd6f964ccd3d040","keyLocation":"https://scalifylabs.es/b1247c64c000b647acd6f964ccd3d040.txt","urlList":{}}'
```

(La versión con `node scripts/seo-ping.mjs` es más robusta; usa esta solo si no hay Node.)

## Pendiente que requiere tu intervención (no se puede automatizar desde el código)
1. **Google Search Console**: verifica el dominio y sube el sitemap (`https://scalifylabs.es/sitemap.xml`).
   - Para la verificación por meta-etiqueta, define `NEXT_PUBLIC_GSC_VERIFICATION=<tu-token>` antes de compilar.
2. **Bing Webmaster Tools**: añade el sitio y vincula IndexNow (acelera aún más el reindexado).
3. **Imagen OG real (opcional)**: las imágenes OG se generan automáticamente; si quieres una de marca, sustituye `src/app/opengraph-image.tsx`.
4. **Dominio definitivo**: si cambia, edítalo solo en `src/lib/seo.ts` (o vía `NEXT_PUBLIC_SITE_URL`).
