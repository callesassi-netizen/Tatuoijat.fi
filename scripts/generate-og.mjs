// Genererar sajtens delnings-/OG-banner (1200×630) ur egna brand-tillgångar
// (Bildpolicy §4): mörkad hero-miljöbild + bläck-gradient (mörk vänsterkant
// för läsbarhet) + vit Tatuoijat.fi-ordbild + guld-accent. Kör:
//   node scripts/generate-og.mjs
// Committa resultatet (src/assets/bilder/og-banner.png). BaseLayout kör den
// sedan genom getImage → 1200×630 JPEG för delnings-skrapor.
import sharp from 'sharp';

const W = 1200;
const H = 630;
const DIR = 'src/assets/bilder';
const INK = '#101014';
const GOLD = '#c9a227';

// Bakgrund: hero-miljöbild, cover, artisten åt höger (som startsidans hero)
const photo = await sharp(`${DIR}/hero-tatuoija.png`)
  .resize(W, H, { fit: 'cover', position: 'right top' })
  .modulate({ saturation: 0.9 })
  .toBuffer();

// Ordbilden (vit, transparent) nedskalad för banner-kontexten
const LOGO_W = 560;
const logo = await sharp(`${DIR}/tatuoijat-logo.png`).resize({ width: LOGO_W }).toBuffer();
const logoH = (await sharp(logo).metadata()).height;
const logoX = 88;
const logoY = Math.round((H - logoH) / 2) - 14;
const accentY = logoY + logoH + 30;

// Bläck-gradient (mörk vänster → genomskinlig höger) + botten-vinjett +
// guld-accentstreck under ordbilden
const overlay = Buffer.from(
  `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="h" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="${INK}" stop-opacity="0.95"/>
        <stop offset="0.52" stop-color="${INK}" stop-opacity="0.62"/>
        <stop offset="1" stop-color="${INK}" stop-opacity="0.2"/>
      </linearGradient>
      <linearGradient id="v" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0.5" stop-color="${INK}" stop-opacity="0"/>
        <stop offset="1" stop-color="${INK}" stop-opacity="0.5"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#h)"/>
    <rect width="${W}" height="${H}" fill="url(#v)"/>
    <rect x="${logoX + 4}" y="${accentY}" width="104" height="5" rx="2.5" fill="${GOLD}"/>
  </svg>`,
);

await sharp(photo)
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: logoY, left: logoX },
  ])
  .png()
  .toFile(`${DIR}/og-banner.png`);

console.log(`OG-banner skapad: ${DIR}/og-banner.png (${W}×${H})`);
