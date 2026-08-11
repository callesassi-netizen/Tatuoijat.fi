// @ts-check
import { readFileSync, readdirSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { CITY_INDEX_MIN_STUDIOS, svCitySlug } from './src/lib/indexing.mjs';
import { guidesIndexPath, guidesIndexIsThin } from './src/lib/guides.mjs';
import { lastmodFor } from './src/lib/content-dates.mjs';

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

// Fritextsökningen (SearchPage) är noindex,follow: sökresultatsidor hör
// inte hemma i index, men A–Ö-hakemistot på sidan ska crawlas så alla 190
// profiler nås på ett klicks djup från startsidan.
noindexedCityPaths.add('/haku/');
noindexedCityPaths.add('/sv/sok/');

// Tack-sidorna efter Stripe-betalning (betalflode-och-kiitos.md) — statiska,
// noindex,follow (KiitosPage), ingen anledning att ligga i sitemap.
noindexedCityPaths.add('/kiitos-pro/');
noindexedCityPaths.add('/kiitos-premium/');
noindexedCityPaths.add('/sv/tack-pro/');
noindexedCityPaths.add('/sv/tack-premium/');

// Kvittosidan efter intag-formuläret (LahetettyPage) — nås bara via Netlifys
// form-redirect, noindex,follow och utanför sitemap.
noindexedCityPaths.add('/tiedot-vastaanotettu/');
noindexedCityPaths.add('/sv/uppgifter-mottagna/');

// /walk-in samlingssida (handoff §3.4): datan fylls senare av Morpheus.
// Tills antalet walk-in-studios når CITY_INDEX_MIN_STUDIOS är sidan
// noindex,follow (WalkInPage) och hålls ur sitemap — samma tröskel och
// doorway-skydd som tunna stadssidor (§3.1). Räkna direkt ur frontmatter.
let walkInCount = 0;
for (const file of readdirSync('./src/content/studios')) {
  if (!file.endsWith('.md')) continue;
  if (frontmatterField(`./src/content/studios/${file}`, 'walkIn') === 'true') walkInCount++;
}
if (walkInCount < CITY_INDEX_MIN_STUDIOS) {
  noindexedCityPaths.add('/walk-in/');
  noindexedCityPaths.add('/sv/walk-in/');
}

// Opashubben /oppaat/ (sv /sv/guider/) är noindex,follow tills tillräckligt
// många guider är publicerade — en hubb med en enda guide är tunn på precis
// samma sätt som en stadssida med en studio (§3.1). Tröskeln bor i
// src/lib/guides.mjs, så meta-roboten (GuidesIndexPage) och sitemap-filtret
// kan aldrig glida isär. Publicerade GUIDESIDOR indexeras alltid.
if (guidesIndexIsThin()) {
  noindexedCityPaths.add(guidesIndexPath('fi'));
  noindexedCityPaths.add(`/sv${guidesIndexPath('sv')}`);
}

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
      // <lastmod> per sidtyp (11/8 2026). Utan den har Google ingen signal om
      // att guiderna och prissidan skrivits om — crawlern får upptäcka det
      // genom att råka besöka sidan igen, vilket på en ny sajt kan ta veckor.
      //
      // Datumen kommer ur src/lib/content-dates.mjs, INTE ur byggtidpunkten:
      // ett lastmod som ändras vid varje deploy påstår att hela katalogen
      // skrivits om varje gång, och då slutar Google läsa fältet. Se filen
      // för hela resonemanget.
      serialize: (item) => ({ ...item, lastmod: lastmodFor(item.url) }),
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
