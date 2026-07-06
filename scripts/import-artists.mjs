// Import: docs/artists-seed.json (FTAA) + docs/studios-nonftaa.json →
//   src/content/studios/{slug}.md  (en fil per studio — äger profilsidan)
//   src/content/artists/{slug}.md  (en fil per artist/person — renderas
//                                   på studions profil, ingen egen sida)
//
// Kör:  node scripts/import-artists.mjs
//
// Regler (docs/claude-code-handoff-data.md + CLAUDE.md):
// - Dedupe på studionamn (case-insensitive) mellan filerna; FTAA vinner,
//   non-FTAA kompletterar fält som saknas.
// - Satu Tattoo (The Clinic) hör till FTAA-studion The Clinic (Lahti) —
//   kopplas, ingen dubblettstudio skapas.
// - ftaa_member: false → INGEN FTAA-badge.
// - website/instagram skrivs ENDAST när de finns i seed — gissa aldrig.
// - Studio utan egen IG men med exakt en artist med IG ärver artistens
//   handle som kontaktväg (visas ändå som personens IG på profilen).
// - notes-fältet är internt och skrivs ALDRIG till content.
// - Stad utan stadssida i src/content/cities/ (inkl. null) → city utelämnas,
//   visningsplats i `place:` — utanför stadssidorna tills fixat.
// - styles från non-FTAA mappas konservativt till våra slugs; omappbara
//   (black-and-grey, illustrative, dotwork ...) hoppas över och rapporteras.
//
// Scriptet är idempotent: tömmer båda katalogerna och genererar om.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const seed = JSON.parse(readFileSync(join(root, 'docs', 'artists-seed.json'), 'utf8'));
const nonFtaa = JSON.parse(readFileSync(join(root, 'docs', 'studios-nonftaa.json'), 'utf8'));
const citiesDir = join(root, 'src', 'content', 'cities');
const studiosDir = join(root, 'src', 'content', 'studios');
const artistsDir = join(root, 'src', 'content', 'artists');

// Riktiga premiumkunder — TOM tills en studio faktiskt betalat. Ingen
// "exempel-premium" längre: att visa obetalande studios som Featured på
// startsidan är missvisande. Tom lista → Hem visar sälj-platshållarna
// istället (se HomePage.astro).
const PREMIUM_EXAMPLES = new Set();

// Namnkorrigeringar — verifierade uppgifter ur handoff-underlaget
// (FTAA-listans råa visningsnamn är inte alltid personnamn).
const NAME_FIXES = new Map([
  ['Satu The Clinic', 'Satu Virkkunen Carvalho'],
  ['Riikka (Tattoo Clinic)', 'Riikka'],
]);

// Non-FTAA-stilar → våra stil-slugs. Endast säkra mappningar; resten skippas.
const STYLE_MAP = new Map([
  ['japanese', 'japanilainen'],
  ['realism', 'realismi'],
  ['blackwork', 'blackwork'],
  ['fineline', 'fineline'],
  ['traditional', 'traditional'],
  ['geometric', 'geometrinen'],
]);

// "centrum" i seed är svenska — finska sajten visar Keskusta
const DISTRICT_FIXES = new Map([['centrum', 'Keskusta']]);

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
const yamlString = (value) =>
  `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

const knownCitySlugs = new Set(
  readdirSync(citiesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, '')),
);

// ---------- 1. Bygg studio-poster ----------

const artistsByStudio = new Map();
for (const artist of seed.artists) {
  const key = (artist.studio ?? artist.artist).toLowerCase();
  if (!artistsByStudio.has(key)) artistsByStudio.set(key, []);
  artistsByStudio.get(key).push(artist);
}
const firstNonNull = (records, field) =>
  records.map((record) => record[field]).find((value) => value != null && value !== '');

/** Härled stad ur adressen när city saknas ("… , 00500 Helsinki"). */
function cityFromAddress(address) {
  if (!address) return null;
  const match = address.match(/([A-ZÅÄÖ][a-zåäö-]+)\s*$/u);
  return match && knownCitySlugs.has(slugify(match[1])) ? match[1] : null;
}

const studios = new Map(); // key: lowercase studionamn

for (const group of seed.studios_grouped) {
  const records = artistsByStudio.get(group.studio.toLowerCase()) ?? [];
  studios.set(group.studio.toLowerCase(), {
    name: group.studio,
    cityRaw: group.city ?? cityFromAddress(firstNonNull(records, 'address')) ?? null,
    district: null,
    styles: [],
    website: group.website ?? firstNonNull(records, 'website') ?? null,
    instagram: null, // FTAA har inga studio-handles; ev. arv från ensam artist nedan
    artistInstagrams: [],
    address: firstNonNull(records, 'address') ?? null,
    region: firstNonNull(records, 'region_raw') ?? null,
    verified: false,
    ftaaMember: records.some((record) => record.ftaa_member) || records.length === 0,
  });
}

// Non-FTAA: dedupe mot FTAA (FTAA vinner, komplettera luckor)
const SATU_ALIAS = 'satu tattoo (the clinic)'; // hör till The Clinic (Lahti)
let mergedCount = 0;
let skippedStyles = new Set();

for (const entry of nonFtaa.studios) {
  const key = entry.studio.toLowerCase() === SATU_ALIAS ? 'the clinic' : entry.studio.toLowerCase();
  const mappedStyles = (entry.styles ?? [])
    .map((style) => {
      if (STYLE_MAP.has(style)) return STYLE_MAP.get(style);
      skippedStyles.add(style);
      return null;
    })
    .filter(Boolean);

  const existing = studios.get(key);
  if (existing) {
    // Komplettera endast fält som saknas — FTAA-datan vinner
    existing.district ??= entry.district
      ? (DISTRICT_FIXES.get(entry.district) ?? entry.district)
      : null;
    existing.website ??= entry.website ?? null;
    existing.instagram ??= entry.instagram ?? null;
    existing.address ??= entry.address ?? null;
    if (existing.styles.length === 0) existing.styles = mappedStyles;
    existing.artistInstagrams.push(
      ...(entry.artists_instagram ?? []).filter(
        (handle) => !existing.artistInstagrams.includes(handle),
      ),
    );
    mergedCount++;
    continue;
  }
  studios.set(key, {
    name: entry.studio,
    cityRaw: entry.city ?? null,
    district: entry.district ? (DISTRICT_FIXES.get(entry.district) ?? entry.district) : null,
    styles: mappedStyles,
    website: entry.website ?? null,
    instagram: entry.instagram ?? null,
    artistInstagrams: entry.artists_instagram ?? [],
    address: entry.address ?? null,
    region: null,
    verified: entry.verified === true,
    ftaaMember: false, // regel 3: ingen FTAA-badge för non-FTAA
  });
}

// ---------- 2. Skriv studio-md ----------

rmSync(studiosDir, { recursive: true, force: true });
mkdirSync(studiosDir, { recursive: true });
rmSync(artistsDir, { recursive: true, force: true });
mkdirSync(artistsDir, { recursive: true });

const usedStudioSlugs = new Set();
const studioSlugByKey = new Map();
const stats = { studios: 0, artists: 0, withCity: 0, nullCity: 0, website: 0, instagram: 0 };

for (const [key, studio] of studios) {
  let base = slugify(studio.name) || 'studio';
  let slug = base;
  for (let i = 2; usedStudioSlugs.has(slug); i++) slug = `${base}-${i}`;
  usedStudioSlugs.add(slug);
  studioSlugByKey.set(key, slug);

  const citySlug =
    studio.cityRaw && knownCitySlugs.has(slugify(studio.cityRaw)) ? slugify(studio.cityRaw) : null;
  const place = citySlug ? null : (studio.cityRaw ?? studio.region ?? null);

  // Ensam artist med IG och studion saknar egen → ärv som kontaktväg
  const persons = artistsByStudio.get(key) ?? [];
  let instagram = studio.instagram;
  if (!instagram) {
    const withIg = persons.filter((person) => person.instagram);
    if (withIg.length === 1) instagram = withIg[0].instagram;
  }

  const lines = ['---', `name: ${yamlString(studio.name)}`];
  if (citySlug) lines.push(`city: ${citySlug}`);
  if (place) lines.push(`place: ${yamlString(place)}`);
  if (studio.district) lines.push(`district: ${yamlString(studio.district)}`);
  lines.push(
    studio.styles.length > 0
      ? `styles: [${studio.styles.join(', ')}]`
      : 'styles: []',
  );
  lines.push(`premium: ${PREMIUM_EXAMPLES.has(slug)}`);
  if (studio.website) lines.push(`website: ${yamlString(studio.website)}`);
  if (instagram) lines.push(`instagram: ${yamlString(String(instagram).replace(/^@/, ''))}`);
  if (studio.artistInstagrams.length > 0) {
    lines.push('artistInstagrams:');
    for (const handle of studio.artistInstagrams)
      lines.push(`  - ${yamlString(String(handle).replace(/^@/, ''))}`);
  }
  if (studio.address) lines.push(`address: ${yamlString(studio.address)}`);
  lines.push('images: []');
  lines.push(`verified: ${studio.verified}`);
  if (studio.ftaaMember) lines.push('ftaaMember: true');
  lines.push('---', '');

  writeFileSync(join(studiosDir, `${slug}.md`), lines.join('\n'), 'utf8');
  stats.studios++;
  citySlug ? stats.withCity++ : stats.nullCity++;
  if (studio.website) stats.website++;
  if (instagram) stats.instagram++;
}

// ---------- 3. Skriv artist-md (personer) ----------

const usedArtistSlugs = new Set();
for (const record of seed.artists) {
  const studioKey = (record.studio ?? record.artist).toLowerCase();
  const studioSlug = studioSlugByKey.get(studioKey);
  if (!studioSlug) continue;

  const name = NAME_FIXES.get(record.artist) ?? record.artist;
  let base = slugify(name) || 'artisti';
  let slug = base;
  for (let i = 2; usedArtistSlugs.has(slug); i++) slug = `${base}-${i}`;
  usedArtistSlugs.add(slug);

  const lines = ['---', `name: ${yamlString(name)}`, `studio: ${studioSlug}`];
  if (record.instagram)
    lines.push(`instagram: ${yamlString(String(record.instagram).replace(/^@/, ''))}`);
  if (record.ftaa_member) lines.push('ftaaMember: true');
  lines.push('---', '');

  writeFileSync(join(artistsDir, `${slug}.md`), lines.join('\n'), 'utf8');
  stats.artists++;
}

console.log(
  `Studios: ${stats.studios} (${stats.withCity} på stadssidor, ${stats.nullCity} utanför) · sammanslagna dubbletter: ${mergedCount}`,
);
console.log(`Artister (personer): ${stats.artists}`);
console.log(`Studio-kontakt: website ${stats.website} st · instagram ${stats.instagram} st`);
if (skippedStyles.size > 0)
  console.log(`Omappade stilar (skippade medvetet): ${[...skippedStyles].join(', ')}`);
