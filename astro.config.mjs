// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { CITY_INDEX_MIN_STUDIOS, svCitySlug } from './src/lib/indexing.mjs';

// Domän KÖPT 2026-07-04: tatuoijat.fi (Hostingpalvelu, DNS ska pekas
// mot Netlify DNS). Allt (canonical, hreflang, sitemap, schema.org)
// läser från Astro.site — ändra aldrig domän någon annanstans.
const SITE_URL = 'https://tatuoijat.fi';

// ---------------------------------------------------------------------------
// Sitemap-filter (handoff §3.1): städer under CITY_INDEX_MIN_STUDIOS är
// noindex (sätts i CityPage) och får inte ligga i sitemap. Config körs
// utanför Astro-kontexten, så studioantalet räknas direkt ur content-
// filernas frontmatter (enradiga fält — ingen YAML-parser behövs).
// ---------------------------------------------------------------------------

/** @param {string} file @param {string} field */
function frontmatterField(file, field) {
  const match = readFileSync(file, 'utf8').match(
    new RegExp(`^${field}:\\s*"?([^"\\n]+?)"?\\s*$`, 'm'),
  );
  return match ? match[1].trim() : undefined;
}

/** @type {Map<string, number>} stads-slug → antal studios */
const studioCounts = new Map();
for (const file of readdirSync('./src/content/studios')) {
  if (!file.endsWith('.md')) continue;
  const city = frontmatterField(`./src/content/studios/${file}`, 'city');
  if (city) studioCounts.set(city, (studioCounts.get(city) ?? 0) + 1);
}

/** Pathnames (fi + sv) för städer som inte ska indexeras. */
const noindexedCityPaths = new Set();
for (const file of readdirSync('./src/content/cities')) {
  if (!file.endsWith('.md')) continue;
  const id = file.replace(/\.md$/, '');
  if ((studioCounts.get(id) ?? 0) >= CITY_INDEX_MIN_STUDIOS) continue;
  const nameSv = frontmatterField(`./src/content/cities/${file}`, 'nameSv');
  noindexedCityPaths.add(`/tatuoijat/${id}/`);
  noindexedCityPaths.add(`/sv/tatuerare/${nameSv ? svCitySlug(nameSv) : id}/`);
}

// /liity är den bantade ansökningssidan med noindex,follow (LiityPage) —
// håll den ur sitemap. /hinnasto är B2B-sidan som ska indexeras.
noindexedCityPaths.add('/liity/');
noindexedCityPaths.add('/sv/liity/');

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    // OBS: ingen i18n-konfig i sitemap — den genererar hreflang-alternates
    // genom ren prefix-substitution, vilket blir fel när sv-URL:erna har
    // egna slugs (/sv/tatuerare/helsingfors/). Korrekt hreflang ligger
    // i stället i BaseLayouts <head>.
    sitemap({
      filter: (page) => !noindexedCityPaths.has(new URL(page).pathname),
    }),
  ],
  i18n: {
    defaultLocale: 'fi',
    locales: ['fi', 'sv'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
