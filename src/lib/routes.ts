import type { CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';
import { svCitySlug } from './indexing.mjs';
import { guidesIndexPath, guidePath } from './guides.mjs';

// Oppaat/guider (/oppaat/{slug}/, sv /sv/guider/{slug}/). Routing-logiken bor
// i guides.mjs eftersom astro.config.mjs behöver den för sitemap-filtret —
// re-exporteras här så att sidkomponenterna har EN plats att importera
// URL-byggare från, precis som för städer och stil × stad.
export { guidesIndexPath, guidePath };

/**
 * Stadskatalogens URL:er är språkiga (handoff §4): /tatuoijat/helsinki/
 * resp. /sv/tatuerare/helsingfors/ med svensk exonym när nameSv finns.
 * ALLA länkar till städer-index och stadssidor byggs härifrån — paths
 * returneras utan locale-prefix och skickas genom localePath().
 */
export function citiesIndexPath(locale: Locale): string {
  return locale === 'sv' ? '/tatuerare/' : '/tatuoijat/';
}

/** Stads-slug per språk: fi = filnamnet (city.id), sv = sluggad exonym. */
export function citySlug(city: CollectionEntry<'cities'>, locale: Locale): string {
  return locale === 'sv' && city.data.nameSv ? svCitySlug(city.data.nameSv) : city.id;
}

/** Path (utan locale-prefix) till en stadssida. */
export function cityPath(city: CollectionEntry<'cities'>, locale: Locale): string {
  return `${citiesIndexPath(locale)}${citySlug(city, locale)}/`;
}

/**
 * Stil × stad (`/tyylit/{stil}/{stad}/`, sv `/sv/tyylit/{stil}/{stad}/`).
 * Sidtypen byggd 2026-08-09 efter GSC-månad 1: "fine line tattoo turku" gav
 * 21 % CTR på position 7 och stilsidorna har sajtens högsta CTR (9 % mot
 * 3 % snitt) — men det fanns ingen sida som matchade stil+stad-frasen.
 * Stads-slugen är språkig precis som cityPath(); stil-sluggen är gemensam.
 */
export function styleCityPath(
  styleId: string,
  city: CollectionEntry<'cities'>,
  locale: Locale,
): string {
  return `/tyylit/${styleId}/${citySlug(city, locale)}/`;
}
