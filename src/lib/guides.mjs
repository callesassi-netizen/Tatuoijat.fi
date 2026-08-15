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
 * KANNIBALISERING — LÖST 2026-08-11 genom att INTE skriva sidan.
 * Registret hade en planerad guide `tatuoinnin-hinta-kehonosittain` som
 * skulle ta kroppsdels-modifierarna ("käsivarsi", "koko selkä", "puoli
 * hiha") utan att röra huvudfrasen "tatuoinnin hinta", som `/hinnat/` äger.
 *
 * Vid genomgången visade sig `/hinnat/` redan täcka exakt de raderna i sin
 * bodyParts-sektion: käsivarsi, olkavarsi, kokohiha, selkä, olkapää ja
 * solisluu, teksti — plus storleksbaserad prissättning i huvudtabellen. En
 * egen guide hade alltså inte fyllt en lucka utan konkurrerat med sajtens
 * starkaste konsumentsida om samma sökningar. Posten är därför borttagen.
 * Ska kroppsdelspriserna byggas ut sker det i `/hinnat/`, inte bredvid.
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
    status: 'published',
    order: 3,
    slug: { fi: 'tatuointi-ja-sauna', sv: 'tatuering-och-bastu' },
    targetPhrase: 'tatuointi ja sauna, milloin saunaan tatuoinnin jälkeen',
  },
  {
    key: 'tatuointi-ja-uiminen',
    status: 'published',
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
  // Tillagda 12/8 2026 ur sökordsanalysen. Båda klustren saknade täckning helt
  // och ställs FÖRE studioval — alltså av besökaren katalogen vill nå, till
  // skillnad från vårdguiderna som läses efter att tatueringen redan är gjord.
  {
    key: 'tatuoinnin-kipu',
    status: 'published',
    order: 7,
    slug: { fi: 'tatuoinnin-kipu', sv: 'hur-ont-gor-en-tatuering' },
    targetPhrase: 'mihin tatuointi sattuu vähiten, kuinka paljon tatuointi sattuu',
  },
  {
    key: 'ensimmainen-tatuointi',
    status: 'published',
    order: 8,
    slug: { fi: 'ensimmainen-tatuointi', sv: 'din-forsta-tatuering' },
    targetPhrase: 'ensimmäinen tatuointi, tatuointi alaikäiselle, kuka saa tatuoida',
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
