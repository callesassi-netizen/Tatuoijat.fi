import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

/**
 * Innehållskonvention: fi-text överst i brödtexten, sv-översättning
 * under en `## sv`-rubrik i samma fil.
 */
export function splitLocales(body: string | undefined): Record<Locale, string> {
  const [fi = '', sv = ''] = (body ?? '').split(/^##\s+sv\s*$/im);
  return { fi: fi.trim(), sv: sv.trim() };
}

export function localizedBody(body: string | undefined, locale: Locale): string {
  const parts = splitLocales(body);
  return parts[locale] || parts.fi;
}

export async function getCitiesSorted(): Promise<CollectionEntry<'cities'>[]> {
  const cities = await getCollection('cities');
  return cities.sort((a, b) => a.data.order - b.data.order);
}

export async function getStylesSorted(): Promise<CollectionEntry<'styles'>[]> {
  const styles = await getCollection('styles');
  return styles.sort((a, b) => a.data.order - b.data.order);
}

export async function getStudios(): Promise<CollectionEntry<'studios'>[]> {
  return getCollection('studios');
}

/** Premium först, därefter alfabetiskt — samma ordning i alla listor. */
export function sortStudios(
  studios: CollectionEntry<'studios'>[],
): CollectionEntry<'studios'>[] {
  return [...studios].sort((a, b) => {
    if (a.data.premium !== b.data.premium) return a.data.premium ? -1 : 1;
    return a.data.name.localeCompare(b.data.name, 'fi');
  });
}

export async function studioCountByCity(): Promise<Map<string, number>> {
  const studios = await getStudios();
  const counts = new Map<string, number>();
  for (const studio of studios) {
    if (!studio.data.city) continue; // utanför stadssidorna tills staden fixats
    counts.set(studio.data.city, (counts.get(studio.data.city) ?? 0) + 1);
  }
  return counts;
}

/** Artisterna (personerna) på en studio, alfabetiskt. */
export async function getStudioArtists(
  studioId: string,
): Promise<CollectionEntry<'artists'>[]> {
  const artists = await getCollection('artists', (entry) => entry.data.studio === studioId);
  return artists.sort((a, b) => a.data.name.localeCompare(b.data.name, 'fi'));
}

export function cityDisplayName(city: CollectionEntry<'cities'>, locale: Locale): string {
  return locale === 'sv' ? (city.data.nameSv ?? city.data.name) : city.data.name;
}

export function styleDisplayName(style: CollectionEntry<'styles'>, locale: Locale): string {
  return locale === 'sv' ? (style.data.nameSv ?? style.data.name) : style.data.name;
}
