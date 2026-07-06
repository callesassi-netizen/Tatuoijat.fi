// Import: docs/ig-posts.json → instagram_posts-fältet i
//   src/content/studios/{slug}.md OCH src/content/artists/{slug}.md
//
// Kör:  node scripts/import-ig-posts.mjs
//
// docs/ig-posts.json: { handle: { artist, posts: [0–2 URL:er], note,
//   tattoo_verified } }.
// Matchning: handle (case-insensitive) mot `instagram:`-fältet i EN md-fils
// frontmatter — inte mot artistInstagrams-arrayen (handle-only-artister utan
// egen fil kan alltså inte matchas; de loggas som ej hittade, se handoff §8).
//
// Regler:
// - Bara handles med tattoo_verified: true OCH minst 1 post importeras.
//   Övriga (idag alltid samma 16 som har tom posts-lista) hoppas HELT
//   över — rör ingenting, skriver aldrig instagram_posts: [] över dem.
// - Handle som inte matchar någon fils instagram:-fält → logga och hoppa
//   över, rör ingenting.
// - Idempotent: kör man om scriptet ersätts ett redan skrivet
//   instagram_posts-fält istället för att dupliceras.
// - notes-fältet i JSON:en är bara för mänsklig kontext, skrivs aldrig till
//   content (grid-collabs/reels-only-noteringar ändrar inget i importen).

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const igPosts = JSON.parse(readFileSync(join(root, 'docs', 'ig-posts.json'), 'utf8'));

const collectionDirs = [
  join(root, 'src', 'content', 'studios'),
  join(root, 'src', 'content', 'artists'),
];

/** lowercased handle → lista med filsökvägar vars instagram:-fält matchar. */
const filesByHandle = new Map();
for (const dir of collectionDirs) {
  for (const file of readdirSync(dir)) {
    if (!file.endsWith('.md')) continue;
    const full = join(dir, file);
    const content = readFileSync(full, 'utf8');
    const match = content.match(/^instagram:\s*"?([^"\n]+?)"?\s*$/m);
    if (!match) continue;
    const handle = match[1].trim().toLowerCase();
    const existing = filesByHandle.get(handle) ?? [];
    existing.push(full);
    filesByHandle.set(handle, existing);
  }
}

/** Skriver/ersätter instagram_posts: i en md-fils frontmatter. */
function writeInstagramPosts(file, posts) {
  const content = readFileSync(file, 'utf8');
  const newBlock =
    posts.length === 0
      ? 'instagram_posts: []'
      : `instagram_posts:\n${posts.map((url) => `  - "${url}"`).join('\n')}`;

  // OBS: matchar INTE den avslutande radbrytningen efter sista posten —
  // annars äter replace() upp den och "---"-avgränsaren hamnar på samma
  // rad som senaste url:en (trasig frontmatter). Se reparation 2026-07-06.
  const existingFieldRe = /^instagram_posts:(?:[ \t]*\[\]|(?:\n[ \t]*-[ \t].*)+)/m;
  let next;
  if (existingFieldRe.test(content)) {
    next = content.replace(existingFieldRe, newBlock);
  } else {
    const parts = content.split(/^---[ \t]*$/m);
    if (parts.length < 3) {
      console.warn(`  VARNING: kunde inte tolka frontmatter i ${file} — hoppar över`);
      return false;
    }
    parts[1] = `${parts[1]}${newBlock}\n`;
    next = parts.join('---');
  }
  writeFileSync(file, next);
  return true;
}

let updatedFiles = 0;
let updatedHandles = 0;
let notFoundHandles = 0;
let notVerifiedOrEmpty = 0;
const notFoundList = [];

for (const [handle, entry] of Object.entries(igPosts)) {
  if (!entry.tattoo_verified || !entry.posts || entry.posts.length === 0) {
    notVerifiedOrEmpty++;
    continue;
  }
  const files = filesByHandle.get(handle.toLowerCase());
  if (!files || files.length === 0) {
    notFoundHandles++;
    notFoundList.push(`${handle} (${entry.artist})`);
    continue;
  }
  let touchedAny = false;
  for (const file of files) {
    if (writeInstagramPosts(file, entry.posts)) {
      updatedFiles++;
      touchedAny = true;
    }
  }
  if (touchedAny) updatedHandles++;
}

console.log(
  `Klart: ${updatedHandles} handles skrivna till ${updatedFiles} filer · ` +
    `${notVerifiedOrEmpty} hoppade (ej tattoo_verified/tomma) · ` +
    `${notFoundHandles} hittades inte i content/ (av ${Object.keys(igPosts).length} totalt).`,
);
if (notFoundList.length > 0) {
  console.log('\nEj hittade handles:');
  for (const line of notFoundList) console.log(`  - ${line}`);
}
