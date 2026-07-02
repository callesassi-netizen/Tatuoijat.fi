// Import: docs/artists-seed.json (FTAA:s publika medlemslista) →
// src/content/artists/{studio-slug}.md enligt content-modellen i CLAUDE.md.
//
// Kör:  node scripts/import-artists.mjs
//
// Regler (från seed-README + CLAUDE.md):
// - En md-fil per studio (studios_grouped); artisterna listas i frontmatter
//   `artists:` och visas på studions profil.
// - `ftaa_member: true` → `ftaaMember: true` (badge i förtroende-sektionen).
// - website/instagram skrivs ENDAST när de inte är null — gissa aldrig domäner.
// - `styles: []` lämnas tomma (fylls via claim-flödet/kuratering).
// - Stad utan stadssida i src/content/cities/ (inkl. city: null) →
//   `city:` utelämnas och visningsplatsen läggs i `place:` — profilen
//   hamnar utanför stadssidorna tills en riktig stadssida (unik intro) finns.
// - Brödtexten lämnas tom: beskrivningar fabriceras inte, de fylls via claim.
//
// Scriptet är idempotent: det tömmer src/content/artists/ och genererar om.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const seedPath = join(root, 'docs', 'artists-seed.json');
const citiesDir = join(root, 'src', 'content', 'cities');
const artistsDir = join(root, 'src', 'content', 'artists');

const seed = JSON.parse(readFileSync(seedPath, 'utf8'));

/** Slugify med finska/svenska tecken (ä→a, ö→o, å→a). */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[äå]/g, 'a')
    .replace(/ö/g, 'o')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** YAML-säker citerad sträng. */
function yamlString(value) {
  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

// Städer med riktiga stadssidor (unika intro-texter) i content collections
const knownCitySlugs = new Set(
  readdirSync(citiesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, '')),
);

// Joina studio-info från artistposterna (studios_grouped saknar
// address/instagram/region_raw)
const artistsByStudio = new Map();
for (const artist of seed.artists) {
  const key = artist.studio ?? artist.artist;
  if (!artistsByStudio.has(key)) artistsByStudio.set(key, []);
  artistsByStudio.get(key).push(artist);
}
const firstNonNull = (records, field) =>
  records.map((record) => record[field]).find((value) => value != null && value !== '');

// Töm katalogen (ersätter fejkdatan) och generera om
rmSync(artistsDir, { recursive: true, force: true });
mkdirSync(artistsDir, { recursive: true });

const usedSlugs = new Set();
const stats = {
  total: 0,
  withCityPage: new Map(),
  withoutCityPage: new Map(),
  nullCity: 0,
  withWebsite: 0,
  withInstagram: 0,
};

for (const studio of seed.studios_grouped) {
  const records = artistsByStudio.get(studio.studio) ?? [];

  let slug = slugify(studio.studio) || 'studio';
  let unique = slug;
  for (let i = 2; usedSlugs.has(unique); i++) unique = `${slug}-${i}`;
  usedSlugs.add(unique);

  const cityRaw = studio.city ?? null;
  const citySlug = cityRaw && knownCitySlugs.has(slugify(cityRaw)) ? slugify(cityRaw) : null;
  // Visningsplats när stadssida saknas: rå stad, annars region ur seed
  const place = citySlug ? null : (cityRaw ?? firstNonNull(records, 'region_raw') ?? null);

  const website = studio.website ?? firstNonNull(records, 'website') ?? null;
  const instagram = firstNonNull(records, 'instagram') ?? null;
  const address = firstNonNull(records, 'address') ?? null;
  const ftaaMember = records.some((record) => record.ftaa_member) || records.length === 0;
  const artistNames = studio.artists ?? [];

  const lines = ['---', `name: ${yamlString(studio.studio)}`];
  if (citySlug) lines.push(`city: ${citySlug}`);
  if (place) lines.push(`place: ${yamlString(place)}`);
  lines.push('styles: []');
  lines.push('premium: false');
  if (website) lines.push(`website: ${yamlString(website)}`);
  if (instagram) lines.push(`instagram: ${yamlString(String(instagram).replace(/^@/, ''))}`);
  if (address) lines.push(`address: ${yamlString(address)}`);
  lines.push('images: []');
  lines.push('verified: false');
  if (ftaaMember) lines.push('ftaaMember: true');
  if (artistNames.length > 0) {
    lines.push('artists:');
    for (const artistName of artistNames) lines.push(`  - ${yamlString(artistName)}`);
  }
  lines.push('---', '');

  writeFileSync(join(artistsDir, `${unique}.md`), lines.join('\n'), 'utf8');

  stats.total++;
  if (citySlug) {
    stats.withCityPage.set(citySlug, (stats.withCityPage.get(citySlug) ?? 0) + 1);
  } else if (cityRaw) {
    stats.withoutCityPage.set(cityRaw, (stats.withoutCityPage.get(cityRaw) ?? 0) + 1);
  } else {
    stats.nullCity++;
  }
  if (website) stats.withWebsite++;
  if (instagram) stats.withInstagram++;
}

const sortDesc = (map) => [...map.entries()].sort((a, b) => b[1] - a[1]);
console.log(`Genererade ${stats.total} studio-md-filer i src/content/artists/`);
console.log(`  website: ${stats.withWebsite} st · instagram: ${stats.withInstagram} st`);
console.log('\nPå stadssidor (stadssida finns):');
for (const [city, count] of sortDesc(stats.withCityPage)) console.log(`  ${city}: ${count}`);
console.log('\nUtanför stadssidor — stad utan stadssida (skriv intro + md-fil för att aktivera):');
for (const [city, count] of sortDesc(stats.withoutCityPage)) console.log(`  ${city}: ${count}`);
console.log(`\ncity: null (visas under region): ${stats.nullCity} st`);
