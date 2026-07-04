import type { CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';
import { svCitySlug } from './indexing.mjs';

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
