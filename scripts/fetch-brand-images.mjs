/**
 * Hämtar de genererade brand-bilderna till src/assets/bilder/uudet/.
 *
 * VARFÖR ETT SKRIPT OCH INTE BARA FILER I REPOT: bilderna genereras i en
 * miljö som inte når CDN:et de hamnar på, så de kan inte committas direkt
 * därifrån. Manifestet nedan är resultatet av en generering; kör kommandot
 * en gång så ligger filerna lokalt och committas som vilka assets som helst.
 * Efter det behövs skriptet inte igen förrän nya bilder genereras.
 *
 *   npm run images:brand
 *
 * BAKGRUND (Calle 11/8): sajten återanvände samma bild på två till tre
 * ställen — enkeli-realismi var både Realismi-platta och bakgrund i
 * premiumbannern, jalkihoito var både Blackwork-platta och guidehjälte,
 * studio-vaalea var Fineline-platta, premiumexempel OCH fallback. Efter den
 * här omgången har varje yta en egen bild.
 *
 * Filerna får svenska/finska beskrivande namn, inte jobb-id:n, så att den som
 * öppnar mappen om ett år ser vad bilden föreställer.
 */
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'src/assets/bilder/uudet');
const FORCE = process.argv.includes('--force');
const TIMEOUT_MS = 30_000;

const BASE =
  'https://d8j0ntlcm91z4.cloudfront.net/user_3Dto4zDpeXg598XhBAhP53pvrPp/hf_20260811_162600_';

/** namn → jobb-id. Namnet blir filnamnet. */
const IMAGES = {
  // Guidehjältar
  'jalkihoito-kalvo': 'ebfc8b05-933a-4e7c-ae74-1dcfd04c21d4',
  'paraneminen-kuoriutuminen': '2b4a00b5-cc51-4aef-a353-1dfd58a44ad3',
  'sauna-lauteet': 'e0b82170-4981-4bb7-a41e-1a2be110f733',
  'jarvi-laituri': '7757f383-0a83-4826-8b1c-696818787806',
  'aurinko-kasivarsi': '2bc2afe2-3e48-4fb1-812c-014e2b1bd9a2',
  'hoitotuotteet-hylly': '13aa5c96-da8e-4816-88b3-73b908c4add3',
  // Sektionsbild i guiderna
  'pesu-hana': 'ad3b2325-c30b-4472-a963-96d9dc7a71bf',
  // Premiumbannerns bakgrund — ersätter Realismi-plattans bild
  'studio-yolla': '4dfe4d18-dc87-4441-84d4-c218c29438d9',
  // Stilplattor som tidigare delade bild med andra ytor
  'realismi-patsas': '5252b819-a34b-4d0c-a39e-ce0a66de0d7a',
  'blackwork-hiha': '56c95d94-5af4-4e49-8a70-05aca8f09b28',
};

async function fetchWithTimeout(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    return await fetch(url, { signal: controller.signal, redirect: 'follow' });
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const existing = new Set(
    (await readdir(OUT_DIR).catch(() => [])).map((name) => name.replace(/\.[^.]+$/, '')),
  );

  let fetched = 0;
  let skipped = 0;
  let failed = 0;

  for (const [name, jobId] of Object.entries(IMAGES)) {
    if (!FORCE && existing.has(name)) {
      skipped += 1;
      continue;
    }
    try {
      const res = await fetchWithTimeout(`${BASE}${jobId}.png`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      if (buffer.byteLength < 10_000) throw new Error('misstänkt liten fil');
      await writeFile(path.join(OUT_DIR, `${name}.png`), buffer);
      console.log(`[brandkuvat] ✓ ${name}.png (${Math.round(buffer.byteLength / 1024)} kB)`);
      fetched += 1;
    } catch (error) {
      console.warn(`[brandkuvat] ⚠ ${name}: ${error.message}`);
      failed += 1;
    }
  }

  console.log(
    `[brandkuvat] klart: ${fetched} hämtade, ${skipped} fanns redan, ${failed} misslyckades`,
  );
  if (failed > 0) {
    console.warn(
      '[brandkuvat] Sajten faller tillbaka på de gamla bilderna för det som saknas —\n' +
        '[brandkuvat] inget går sönder, men dubbletterna finns kvar tills filerna är på plats.',
    );
  }
}

main().catch((error) => {
  console.warn(`[brandkuvat] ⚠ oväntat fel: ${error.message}`);
});
