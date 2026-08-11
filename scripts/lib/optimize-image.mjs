/**
 * Komprimering av hämtade bilder — delas av fetch-brand-images.mjs och
 * fetch-product-images.mjs.
 *
 * VARFÖR KOMPRIMERA NÄR ASTRO REDAN OPTIMERAR. Astro optimerar det som
 * RENDERAS, men källfilen ligger kvar i repot i original. En 21:9-PNG från
 * bildgeneratorn är 3–6 MB; tio sådana är trettio megabyte git-historik som
 * aldrig krymper, och varje `astro build` får dessutom dekoda dem på nytt.
 * Vi lagrar därför källan i den storlek sajten faktiskt kan visa.
 *
 * VARFÖR WEBP OCH INTE AVIF. Astro bygger ändå om till det format sidan
 * begär, så källformatet ska bara vara litet och snabbt att avkoda. WebP är
 * båda; AVIF är mindre men märkbart långsammare att avkoda vid varje bygge.
 *
 * VARFÖR DET FÅR MISSLYCKAS. sharp följer med Astro, men den som klonar repot
 * och kör skriptet innan `npm install` — eller på en plattform där sharps
 * binär saknas — ska få bilden ändå. Kan sharp inte laddas skrivs originalet
 * ned oförändrat och det står i loggen varför. En okomprimerad bild är ett
 * mindre problem än ingen bild.
 */
import { readdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';

let sharpModule;
let sharpTried = false;

async function loadSharp() {
  if (sharpTried) return sharpModule;
  sharpTried = true;
  try {
    sharpModule = (await import('sharp')).default;
  } catch {
    sharpModule = null;
  }
  return sharpModule;
}

/**
 * Tar bort samma basnamn med ANNAN ändelse i mappen.
 *
 * Utan detta blir `--force` en fälla: första omgången skrev
 * `jalkihoito-kalvo.png`, den här skriver `jalkihoito-kalvo.webp`, och båda
 * matchar globben i src/lib/brandImages.ts. Två filer på samma nyckel gör att
 * vilken av dem som vinner beror på filordningen — precis den sortens bugg som
 * ser slumpmässig ut. Rensningen sker BARA efter en lyckad skrivning, så en
 * bild som handsparats och inte kunde hämtas om aldrig raderas.
 */
async function removeSiblings(dir, base, keepFile) {
  const entries = await readdir(dir).catch(() => []);
  await Promise.all(
    entries
      .filter((name) => name !== keepFile && name.replace(/\.[^.]+$/, '') === base)
      .map((name) => unlink(path.join(dir, name)).catch(() => {})),
  );
}

/**
 * Skriver en nedladdad bildbuffer till disk, komprimerad när det går.
 *
 * @param {object} options
 * @param {string} options.dir      målmapp
 * @param {string} options.base     filnamn utan ändelse
 * @param {Buffer} options.buffer   rådata från hämtningen
 * @param {number} options.maxWidth största bredd bilden kan visas i på sajten
 * @param {number} [options.quality] webp-kvalitet, default 80
 * @param {string} [options.fallbackExt] ändelse om sharp saknas, default '.png'
 * @returns {Promise<{file: string, bytes: number, before: number, optimized: boolean}>}
 */
export async function writeOptimized({
  dir,
  base,
  buffer,
  maxWidth,
  quality = 80,
  fallbackExt = '.png',
}) {
  const sharp = await loadSharp();
  const before = buffer.byteLength;

  if (!sharp) {
    const file = `${base}${fallbackExt}`;
    await writeFile(path.join(dir, file), buffer);
    await removeSiblings(dir, base, file);
    return { file, bytes: before, before, optimized: false };
  }

  // withoutEnlargement: en butiksbild som redan är mindre än maxWidth ska inte
  // skalas UPP till den — det ger bara en större fil av samma pixlar.
  const out = await sharp(buffer)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, effort: 5 })
    .toBuffer();

  const file = `${base}.webp`;
  await writeFile(path.join(dir, file), out);
  await removeSiblings(dir, base, file);
  return { file, bytes: out.byteLength, before, optimized: true };
}

/** Loggrad: "12 kB (från 3.4 MB)" — visar att komprimeringen faktiskt gjorde något. */
export function sizeNote({ bytes, before, optimized }) {
  const kb = (value) =>
    value >= 1_000_000 ? `${(value / 1_048_576).toFixed(1)} MB` : `${Math.round(value / 1024)} kB`;
  return optimized ? `${kb(bytes)}, från ${kb(before)}` : `${kb(bytes)}, okomprimerad`;
}

/** Sant om sharp gick att ladda. Används för en engångsvarning i loggen. */
export async function hasSharp() {
  return Boolean(await loadSharp());
}
