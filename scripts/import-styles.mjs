// Import: docs/styles-classification.json → styles-fältet i
//   src/content/studios/{slug}.md
//
// Kör:  node scripts/import-styles.mjs
//
// docs/styles-classification.json: { handle: { artist, styles, suggested_new,
//   confidence, note } }. Klassificeringen är per ARTIST/handle, men styles
//   är ett studio-fält (StylePage.astro filtrerar allStudios på
//   studio.data.styles — artists-collectionen har inget styles-fält).
//   Flera artister på samma studio slås därför ihop (union) till en post.
//
// Matchning (case-insensitive mot instagram:-fältet), i prioritetsordning:
//   1. Handle = en artist-fils instagram: → dess studio:-fält pekar ut studion.
//   2. Handle = en studio-fils egna instagram:-fält → studion direkt.
//   3. Handle finns i en studios artistInstagrams-array (handle-only-artist
//      utan egen fil) → studion den listas under.
// Ingen av träffarna → logga och hoppa över.
//
// Regler:
// - Bara confidence "hög" eller "medel" importeras. "låg" hoppas medvetet
//   över (för osäkert för en publik stil-tagg).
// - suggested_new tas bara med om stilen godkänts i NEW_TAXONOMY nedan
//   (produktbeslut 2026-07-06: neotraditional, ornamental, anime-manga,
//   lettering). OBS: dessa saknar egna src/content/styles/{slug}.md-sidor
//   ännu — /tyylit/{slug}/ finns inte förrän Morpheus levererar fi/sv-intro
//   (CLAUDE.md: stilintro-texter levereras separat, aldrig mallgenererade).
// - Tom effektiv styles-lista (efter confidence/suggested_new-filter) →
//   hoppa, rör ingenting.
// - Merge = union med studions befintliga styles; befintlig ordning bevaras,
//   nya stilar läggs till sist. Redan komplett (inget nytt) → filen rörs inte.
// - notes-fältet är bara mänsklig kontext, skrivs aldrig till content.
// - Idempotent: köra om scriptet lägger inte till dubbletter.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const classification = JSON.parse(
  readFileSync(join(root, 'docs', 'styles-classification.json'), 'utf8'),
);

const studiosDir = join(root, 'src', 'content', 'studios');
const artistsDir = join(root, 'src', 'content', 'artists');

const CONFIDENCE_ALLOWED = new Set(['hög', 'medel']);
const NEW_TAXONOMY = new Set(['neotraditional', 'ornamental', 'anime-manga', 'lettering']);

function readField(content, key) {
  const m = content.match(new RegExp(`^${key}:\\s*"?([^"\\n]+?)"?\\s*$`, 'm'));
  return m ? m[1].trim() : undefined;
}
function readArtistInstagrams(content) {
  const m = content.match(/^artistInstagrams:\n((?:[ \t]*-.*\n?)*)/m);
  if (!m) return [];
  return [...m[1].matchAll(/-\s*"?([^"\n]+?)"?\s*$/gm)].map((x) => x[1].trim());
}

// ---------- 1. Bygg uppslagstabeller ----------

const artistByHandle = new Map(); // handle → { studioSlug }
for (const file of readdirSync(artistsDir)) {
  if (!file.endsWith('.md')) continue;
  const content = readFileSync(join(artistsDir, file), 'utf8');
  const ig = readField(content, 'instagram');
  const studioSlug = readField(content, 'studio');
  if (ig && studioSlug) artistByHandle.set(ig.toLowerCase(), { studioSlug, file });
}

const studioByHandle = new Map(); // handle → slug
const studioByChip = new Map(); // handle → slug (artistInstagrams-chip, ingen egen fil)
const studioSlugs = new Set();
for (const file of readdirSync(studiosDir)) {
  if (!file.endsWith('.md')) continue;
  const slug = file.replace(/\.md$/, '');
  studioSlugs.add(slug);
  const content = readFileSync(join(studiosDir, file), 'utf8');
  const ig = readField(content, 'instagram');
  if (ig) studioByHandle.set(ig.toLowerCase(), slug);
  for (const chip of readArtistInstagrams(content)) {
    if (!studioByChip.has(chip.toLowerCase())) studioByChip.set(chip.toLowerCase(), slug);
  }
}

// ---------- 2. Klassificera & ackumulera per studio ----------

const newStylesByStudio = new Map(); // slug → Set<style>
const contributorsByStudio = new Map(); // slug → antal handles som bidrog
let skippedLowConfidence = 0;
let skippedEmptyAfterFilter = 0;
let notFoundHandles = 0;
const notFoundList = [];
const matchTierCounts = { artist: 0, studio: 0, chip: 0 };

for (const [handle, entry] of Object.entries(classification)) {
  if (!CONFIDENCE_ALLOWED.has(entry.confidence)) {
    skippedLowConfidence++;
    continue;
  }
  const effective = new Set([
    ...(entry.styles ?? []),
    ...(entry.suggested_new ?? []).filter((style) => NEW_TAXONOMY.has(style)),
  ]);
  if (effective.size === 0) {
    skippedEmptyAfterFilter++;
    continue;
  }

  const h = handle.toLowerCase();
  let slug;
  if (artistByHandle.has(h)) {
    slug = artistByHandle.get(h).studioSlug;
    matchTierCounts.artist++;
  } else if (studioByHandle.has(h)) {
    slug = studioByHandle.get(h);
    matchTierCounts.studio++;
  } else if (studioByChip.has(h)) {
    slug = studioByChip.get(h);
    matchTierCounts.chip++;
  } else {
    notFoundHandles++;
    notFoundList.push(`${handle} (${entry.artist})`);
    continue;
  }

  if (!studioSlugs.has(slug)) {
    notFoundHandles++;
    notFoundList.push(`${handle} (${entry.artist}) — studio-slug "${slug}" saknar fil`);
    continue;
  }

  if (!newStylesByStudio.has(slug)) newStylesByStudio.set(slug, new Set());
  for (const style of effective) newStylesByStudio.get(slug).add(style);
  contributorsByStudio.set(slug, (contributorsByStudio.get(slug) ?? 0) + 1);
}

// ---------- 3. Skriv styles: [...] i respektive studio-fil ----------

function currentStyles(content) {
  const m = content.match(/^styles:\s*\[([^\]]*)\]/m);
  if (!m) return null;
  return m[1]
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

let updatedStudios = 0;
let addedStyleTags = 0;

for (const [slug, incoming] of newStylesByStudio) {
  const file = join(studiosDir, `${slug}.md`);
  const content = readFileSync(file, 'utf8');
  const existing = currentStyles(content);
  if (existing === null) {
    console.warn(`  VARNING: kunde inte tolka styles: i ${slug}.md — hoppar över`);
    continue;
  }
  const merged = [...existing];
  let addedHere = 0;
  for (const style of incoming) {
    if (!merged.includes(style)) {
      merged.push(style);
      addedHere++;
    }
  }
  if (addedHere === 0) continue; // redan komplett, rör inte filen

  const next = content.replace(/^styles:\s*\[[^\]]*\]/m, `styles: [${merged.join(', ')}]`);
  writeFileSync(file, next);
  updatedStudios++;
  addedStyleTags += addedHere;
}

console.log(
  `Klart: ${updatedStudios} studio-filer uppdaterade (${addedStyleTags} nya stil-taggar totalt, ` +
    `från ${contributorsByStudio.size} unika studior).`,
);
console.log(
  `Matchning: ${matchTierCounts.artist} via artist-fil · ${matchTierCounts.studio} via studions egna instagram: · ` +
    `${matchTierCounts.chip} via artistInstagrams-chip (ingen egen fil).`,
);
console.log(
  `Hoppade: ${skippedLowConfidence} låg confidence · ${skippedEmptyAfterFilter} tom styles-lista (efter filter) · ` +
    `${notFoundHandles} hittades inte i content/.`,
);
if (notFoundList.length > 0) {
  console.log('\nEj hittade handles:');
  for (const line of notFoundList) console.log(`  - ${line}`);
}
