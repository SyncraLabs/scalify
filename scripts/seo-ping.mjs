#!/usr/bin/env node
/**
 * Re-indexación automática (IndexNow).
 *
 * Lee el sitemap publicado en producción, extrae todas las URLs y las
 * envía a IndexNow para que Bing, Yandex y Seznam reindexen rápido.
 *
 * Nota sobre Google: Google NO usa IndexNow ni el antiguo endpoint de
 * "ping" de sitemap (deprecado en 2023). Para Google, la indexación
 * depende del sitemap declarado en robots.txt + Google Search Console.
 *
 * Uso:
 *   node scripts/seo-ping.mjs
 * Variables de entorno:
 *   SITE_URL       (por defecto https://scalifylabs.es)
 *   INDEXNOW_KEY   (por defecto la clave del repo)
 */

const SITE_URL = (process.env.SITE_URL || "https://scalifylabs.es").replace(/\/$/, "");
const KEY = process.env.INDEXNOW_KEY || "b1247c64c000b647acd6f964ccd3d040";
const HOST = new URL(SITE_URL).host;
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

async function getSitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`, {
    headers: { "User-Agent": "ScalifyLabs-SEO-Ping" },
  });
  if (!res.ok) throw new Error(`No se pudo leer el sitemap (${res.status})`);
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
  return [...new Set(urls)];
}

async function submitIndexNow(urlList) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });
  return res.status;
}

(async () => {
  try {
    const urls = await getSitemapUrls();
    if (urls.length === 0) {
      console.error("⚠️  El sitemap no devolvió URLs. Abortando.");
      process.exit(1);
    }
    console.log(`📄 ${urls.length} URLs encontradas en el sitemap.`);
    const status = await submitIndexNow(urls);
    // IndexNow responde 200 o 202 cuando acepta el envío.
    if (status === 200 || status === 202) {
      console.log(`✅ IndexNow aceptó el envío (HTTP ${status}). Bing/Yandex reindexarán.`);
    } else {
      console.error(`❌ IndexNow respondió HTTP ${status}.`);
      process.exit(1);
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
    process.exit(1);
  }
})();
