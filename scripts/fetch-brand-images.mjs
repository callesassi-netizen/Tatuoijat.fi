/**
 * Hämtar de genererade brand-bilderna till src/assets/bilder/uudet/.
 *
 * VARFÖR ETT SKRIPT OCH INTE BARA FILER I REPOT: bilderna genereras i en
 * miljö som inte når CDN:et de hamnar på, så de kan inte committas direkt
 * därifrån. Manifestet nedan är resultatet av en generering; kör kommandot
 * en gång så ligger filerna lokalt och committas som vilka assets som helst.
 * Efter det behövs skriptet inte igen förrän nya bilder genereras.
 *
 *   npm run images:brand          hämtar bara det som saknas
 *   npm run images:brand -- --force   hämtar om allt
 *
 * BAKGRUND (Calle 11/8): sajten återanvände samma bild på två till tre
 * ställen — enkeli-realismi var både Realismi-platta och bakgrund i
 * premiumbannern, jalkihoito var både Blackwork-platta och guidehjälte,
 * studio-vaalea var Fineline-platta, premiumexempel OCH fallback. Efter den
 * här omgången har varje yta en egen bild.
 *
 * Filerna får svenska/finska beskrivande namn, inte jobb-id:n, så att den som
 * öppnar mappen om ett år ser vad bilden föreställer. De sparas komprimerade
 * som webp — se scripts/lib/optimize-image.mjs för varför.
 */
import { mkdir, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { writeOptimized, sizeNote, hasSharp } from './lib/optimize-image.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'src/assets/bilder/uudet');
const FORCE = process.argv.includes('--force');
const TIMEOUT_MS = 30_000;

/**
 * Bredaste yta bilden kan hamna på. Hjältebilden går full bredd på en stor
 * skärm, sektionsbilden är låst till textkolumnens 720 px men hämtas i 2x för
 * skärmar med hög pixeltäthet. Astro skalar sedan ned per breakpoint.
 */
const MAX_WIDTH = { hero: 1920, section: 1440 };

/**
 * Genereringsomgångar. Varje omgång har sitt eget URL-prefix — jobb-id räcker
 * inte, tidsstämpeln i sökvägen skiljer omgångarna åt.
 */
const BATCHES = [
  {
    base: 'https://d8j0ntlcm91z4.cloudfront.net/user_3Dto4zDpeXg598XhBAhP53pvrPp/hf_20260811_162600_',
    kind: 'hero',
    images: {
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
    },
  },
  {
    // Omgång 2: ultrabreda sektionsbilder (21:9). Formatet är valt så att en
    // bild kan bryta texten utan att lägga på mer än ~240 px höjd — guiderna
    // ska bli luftigare, inte längre.
    base: 'https://d8j0ntlcm91z4.cloudfront.net/user_3Dto4zDpeXg598XhBAhP53pvrPp/hf_20260811_164346_',
    kind: 'section',
    images: {
      'iho-makro': '4456ab0e-8a08-40fa-837d-97476d3c4943',
      'olkapaa-varjo': '9bfa6e96-92de-4b17-9aa5-307f7dd4b443',
      'sauna-kivet': 'ed7921ad-d76b-4afb-92b6-0521814aa571',
      'jarvi-pinta': 'ca1ee520-174e-4f5d-b4cf-a7eefaf33cdc',
      'kadet-tuubi': '4107374f-79f5-4cbc-b99b-2dad432646d6',
      'pyyhe-lasi': '322f70a0-efeb-4c78-b012-22ffac74db35',
    },
  },
];

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

  if (!(await hasSharp())) {
    console.warn(
      '[brandkuvat] sharp kunde inte laddas — bilderna sparas okomprimerade.\n' +
        '[brandkuvat] Kör `npm install` och sedan `npm run images:brand -- --force` för att krympa dem.',
    );
  }

  let fetched = 0;
  let skipped = 0;
  let failed = 0;

  for (const batch of BATCHES) {
    for (const [name, jobId] of Object.entries(batch.images)) {
      if (!FORCE && existing.has(name)) {
        skipped += 1;
        continue;
      }
      try {
        const res = await fetchWithTimeout(`${batch.base}${jobId}.png`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const buffer = Buffer.from(await res.arrayBuffer());
        if (buffer.byteLength < 10_000) throw new Error('misstänkt liten fil');
        const result = await writeOptimized({
          dir: OUT_DIR,
          base: name,
          buffer,
          maxWidth: MAX_WIDTH[batch.kind],
        });
        console.log(`[brandkuvat] ✓ ${result.file} (${sizeNote(result)})`);
        fetched += 1;
      } catch (error) {
        console.warn(`[brandkuvat] ⚠ ${name}: ${error.message}`);
        failed += 1;
      }
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
