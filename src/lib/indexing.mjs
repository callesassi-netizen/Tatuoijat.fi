// Indexeringsregler — .mjs för att delas av BÅDE astro.config.mjs
// (sitemap-filtret körs utanför Astro-kontexten) och sidkomponenterna
// (noindex-metan). Handoff §3.1: tunna stadssidor är doorway-risk som
// kan dra ner hela den nya domänen.

/**
 * Städer med färre studios än så här får noindex,follow och utesluts
 * ur sitemap tills inventoriet växer. Höj/sänk vid behov — allt annat
 * (robots-meta, sitemap) följer med automatiskt.
 */
export const CITY_INDEX_MIN_STUDIOS = 3;

/**
 * Slugga ett svenskt ortnamn: "Åbo" → "abo", "S:t Michel" → "st-michel".
 * Används för sv-stadssidornas URL:er (/sv/tatuerare/{slug}/).
 * @param {string} name
 * @returns {string}
 */
export function svCitySlug(name) {
  return name
    .toLowerCase()
    .replaceAll('å', 'a')
    .replaceAll('ä', 'a')
    .replaceAll('ö', 'o')
    .replace(/['’:]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
