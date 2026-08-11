/**
 * Hämtar produktbilder för affiliate-korten till src/assets/tuotteet/.
 *
 * VARFÖR INTE HOTLÄNKA. Feeden ger bild-URL:er just för att publicister ska
 * visa produkterna, och att länka dem direkt är fullt legitimt. Vi cachar ändå
 * lokalt av tre skäl som alla gäller EN LÅNGLIVAD GUIDE snarare än en
 * dynamisk prisjämförelse: en utgången produkt lämnar annars en tom ruta som
 * ingen upptäcker, Astros bildpipeline ger webp och reserverad höjd (CLS är en
 * Core Web Vitals-post och sajten lever på organisk trafik), och besökaren
 * slipper ett tredjepartsanrop innan hen klickat på något.
 *
 * VARIFRÅN BILDEN KOMMER. Vi har ingen feed-API-nyckel, och vi behöver ingen:
 * varje produkt har redan sin destinations-URL inbakad i spårningslänken
 * (`url=`-parametern). Skriptet plockar ut den, hämtar sidan och läser
 * og:image — den taggen finns för att sidan ska kunna delas, och den pekar
 * per definition på produktbilden. Ett manuellt `imageUrl` på produkten
 * vinner över og:image för de fall där butiken satt en logotyp där.
 *
 * KÖRLÄGEN
 *   node scripts/fetch-product-images.mjs          hämtar bara det som saknas
 *   node scripts/fetch-product-images.mjs --force  hämtar om allt
 *
 * Skriptet kastar ALDRIG. Ett CDN som strular ska inte kunna fälla ett bygge —
 * en produkt utan bild renderas utan bild, vilket är exakt vad komponenten
 * redan hanterar. Kör därför gärna lokalt och committa resultatet, så är
 * bygget dessutom oberoende av butikernas upptid.
 */
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'src/assets/tuotteet');
const SOURCE = path.join(ROOT, 'src/data/affiliate.ts');
const FORCE = process.argv.includes('--force');
const TIMEOUT_MS = 12_000;
const UA =
  'Mozilla/5.0 (compatible; TatuoijatBot/1.0; +https://tatuoijat.fi/) product-image-fetcher';

/**
 * Läser id, ev. imageUrl och destinations-URL ur affiliate.ts.
 * Regex och inte import: skriptet ska kunna köras utan att TypeScript-
 * kompilering eller Astro-kontexten finns på plats.
 */
async function readProducts() {
  const src = await import('node:fs/promises').then((fs) => fs.readFile(SOURCE, 'utf8'));
  const blocks = src.split(/\n  \{\n/).slice(1);
  const products = [];
  for (const block of blocks) {
    const id = /id: '([^']+)'/.exec(block)?.[1];
    const affiliateUrl = /affiliateUrl:\s*\n?\s*'([^']+)'/.exec(block)?.[1];
    const imageUrl = /imageUrl:\s*'([^']+)'/.exec(block)?.[1];
    if (!id || !affiliateUrl) continue;
    const target = /[?&]url=([^&]+)/.exec(affiliateUrl)?.[1];
    if (!target) continue;
    products.push({
      id,
      imageUrl,
      // `url=` är oenkodad i Adtractions länkar, men decode är ofarligt om den
      // någon gång skulle vara enkodad.
      productPage: decodeURIComponent(target),
    });
  }
  return products;
}

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, {
      signal: controller.signal,
      headers: { 'user-agent': UA, accept: '*/*' },
      redirect: 'follow',
    });
  } finally {
    clearTimeout(timer);
  }
}

/** Plockar og:image (eller twitter:image) ur en produktsida. */
async function findImageUrl(productPage) {
  const res = await fetchWithTimeout(productPage);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
  ];
  for (const re of patterns) {
    const hit = re.exec(html)?.[1];
    if (hit) return new URL(hit, productPage).href;
  }
  throw new Error('ingen og:image');
}

const EXT_BY_TYPE = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
  'image/avif': '.avif',
};

async function download(id, imageUrl) {
  const res = await fetchWithTimeout(imageUrl);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const type = (res.headers.get('content-type') || '').split(';')[0].trim();
  const ext = EXT_BY_TYPE[type] ?? path.extname(new URL(imageUrl).pathname) ?? '.jpg';
  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.byteLength < 1024) throw new Error('för liten fil, troligen platshållare');
  const file = path.join(OUT_DIR, `${id}${ext}`);
  await writeFile(file, buffer);
  return { file: path.basename(file), bytes: buffer.byteLength };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const existing = new Set(
    (await readdir(OUT_DIR).catch(() => [])).map((name) => name.replace(/\.[^.]+$/, '')),
  );
  const products = await readProducts();
  if (products.length === 0) {
    console.log('[tuotekuvat] inga produkter med affiliateUrl — hoppar över');
    return;
  }

  let fetched = 0;
  let skipped = 0;
  let failed = 0;

  for (const product of products) {
    if (!FORCE && existing.has(product.id)) {
      skipped += 1;
      continue;
    }
    try {
      const imageUrl = product.imageUrl ?? (await findImageUrl(product.productPage));
      const { file, bytes } = await download(product.id, imageUrl);
      console.log(`[tuotekuvat] ✓ ${file} (${Math.round(bytes / 1024)} kB)`);
      fetched += 1;
    } catch (error) {
      // Medvetet bara en varning. Se filhuvudet: ett bygge ska inte falla på
      // att en butiks CDN har en dålig dag.
      console.warn(`[tuotekuvat] ⚠ ${product.id}: ${error.message} — kortet renderas utan bild`);
      failed += 1;
    }
  }

  console.log(
    `[tuotekuvat] klart: ${fetched} hämtade, ${skipped} fanns redan, ${failed} misslyckades`,
  );
}

main().catch((error) => {
  console.warn(`[tuotekuvat] ⚠ oväntat fel, fortsätter utan bilder: ${error.message}`);
});
