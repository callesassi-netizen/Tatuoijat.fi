// Opasrekisteri / guide-register — .mjs av SAMMA skäl som indexing.mjs:
// filen läses av BÅDE astro.config.mjs (sitemap-filtret kör utanför
// Astro-kontexten) och av sidkomponenterna (routing + noindex-metan).
//
// Registret innehåller BARA routing-metadata. Själva innehållet ligger i
// src/data/guides/{key}.ts och kopplas ihop via `key` i src/data/guides/index.ts.
// Det gör att en ny guide är två steg: lägg till innehållsmodulen, lägg till
// raden här. Inga sid-filer behöver röras.

/**
 * @typedef {Object} GuideRoute
 * @property {string} key            Nyckel mot innehållsmodulen (src/data/guides/index.ts)
 * @property {'published'|'planned'} status  planned = ingen URL genereras alls
 * @property {number} order          Sorteringsordning på hubben
 * @property {{ fi: string, sv: string }} slug  Språkiga slugs
 * @property {string} [targetPhrase] Intern anteckning: vilken fras sidan riktar sig mot
 */

/**
 * Doorway-skydd (seo-handoff §3.1, samma logik som CITY_INDEX_MIN_STUDIOS):
 * en hubbsida som listar EN guide är tunn. `/oppaat/` (och `/sv/guider/`)
 * hålls noindex,follow och utanför sitemap tills så här många guider är
 * publicerade. De publicerade guidesidorna själva indexeras alltid — de är
 * long-form med unikt innehåll.
 */
export const GUIDES_INDEX_MIN_GUIDES = 3;

/**
 * Alla guider, publicerade och planerade.
 *
 * KANNIBALISERING: `/hinnat/` äger prisintentionen ("tatuoinnin hinta",
 * "tatuointi hinta esimerkki"). En framtida prisguide får därför INTE rikta
 * mot huvudfrasen utan mot kroppsdels-/stads-modifierarna som seo-analysen
 * 2026-08-09 (§11.3, P3) pekade ut: "käsivarsi", "koko selkä", "pieni
 * tatuointi", "puoli hiha". Därav slug/targetPhrase nedan.
 *
 * @type {GuideRoute[]}
 */
export const guides = [
  {
    key: 'tatuoinnin-jalkihoito',
    status: 'published',
    order: 1,
    slug: { fi: 'tatuoinnin-jalkihoito', sv: 'eftervard-av-tatuering' },
    targetPhrase: 'tatuoinnin jälkihoito / uuden tatuoinnin hoito',
  },
  {
    key: 'tatuoinnin-paraneminen',
    status: 'published',
    order: 2,
    slug: { fi: 'tatuoinnin-paraneminen', sv: 'sa-laker-en-tatuering' },
    targetPhrase: 'tatuoinnin paraneminen, kuinka kauan tatuointi paranee',
  },
  {
    key: 'tatuointi-ja-sauna',
    status: 'planned',
    order: 3,
    slug: { fi: 'tatuointi-ja-sauna', sv: 'tatuering-och-bastu' },
    targetPhrase: 'tatuointi ja sauna, milloin saunaan tatuoinnin jälkeen',
  },
  {
    key: 'tatuointi-ja-uiminen',
    status: 'planned',
    order: 4,
    slug: { fi: 'tatuointi-ja-uiminen', sv: 'tatuering-och-bad' },
    targetPhrase: 'tatuointi ja uiminen, uimahalli tatuoinnin jälkeen',
  },
  {
    key: 'tatuointi-ja-aurinko',
    status: 'published',
    order: 5,
    slug: { fi: 'tatuointi-ja-aurinko', sv: 'tatuering-och-sol' },
    targetPhrase: 'tatuointi ja aurinko, tatuointi aurinkorasva',
  },
  {
    key: 'tatuoinnin-hoitotuotteet',
    status: 'published',
    order: 6,
    slug: { fi: 'tatuoinnin-hoitotuotteet', sv: 'produkter-for-tatueringsvard' },
    targetPhrase: 'tatuoinnin hoitotuotteet, tatuointivoide',
  },
  {
    key: 'tatuoinnin-hinta-kehonosittain',
    status: 'planned',
    order: 7,
    slug: { fi: 'tatuoinnin-hinta-kehonosittain', sv: 'tatueringspris-per-kroppsdel' },
    // EJ "tatuoinnin hinta" — se kannibaliseringsnoten ovan.
    targetPhrase: 'käsivarsi / koko selkä / pieni tatuointi hinta (P3)',
  },
];

/** @type {GuideRoute[]} */
export const publishedGuides = guides
  .filter((guide) => guide.status === 'published')
  .sort((a, b) => a.order - b.order);

/** @type {GuideRoute[]} */
export const plannedGuides = guides
  .filter((guide) => guide.status === 'planned')
  .sort((a, b) => a.order - b.order);

/**
 * Hubbens path per språk (utan locale-prefix). Segmentet är språkigt precis
 * som stadskatalogens (/tatuoijat/ vs /tatuerare/) — en svensk läsare ska
 * inte behöva läsa "oppaat".
 * @param {'fi'|'sv'} locale
 */
export function guidesIndexPath(locale) {
  return locale === 'sv' ? '/guider/' : '/oppaat/';
}

/**
 * @param {GuideRoute} guide
 * @param {'fi'|'sv'} locale
 */
export function guideSlug(guide, locale) {
  return guide.slug[locale] ?? guide.slug.fi;
}

/**
 * Path (utan locale-prefix) till en guidesida.
 * @param {GuideRoute} guide
 * @param {'fi'|'sv'} locale
 */
export function guidePath(guide, locale) {
  return `${guidesIndexPath(locale)}${guideSlug(guide, locale)}/`;
}

/** Ska hubben indexeras ännu? Se GUIDES_INDEX_MIN_GUIDES. */
export function guidesIndexIsThin() {
  return publishedGuides.length < GUIDES_INDEX_MIN_GUIDES;
}
