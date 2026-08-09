import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';
import type { Tier } from '../data/pricing';
import { CITY_INDEX_MIN_STUDIOS } from './indexing.mjs';

type Studio = CollectionEntry<'studios'>;

// Rank för tier-sortering: premium först, sedan pro, sedan perus.
const TIER_RANK: Record<Tier, number> = { premium: 0, pro: 1, perus: 2 };

/**
 * Studions effektiva nivå. `tier` är sanningskällan; en kvarvarande
 * legacy `premium: true` tolkas som premium (bakåtkompat — härledningen
 * som ersätter den gamla booleska flaggan). Se content.config.ts.
 */
export function studioTier(studio: Studio): Tier {
  if (studio.data.tier === 'premium' || studio.data.premium) return 'premium';
  return studio.data.tier;
}

/** Premium = guld Featured-badge, hero-collage, kärki/pinnad placering. */
export const isFeatured = (studio: Studio): boolean => studioTier(studio) === 'premium';

/** Betald nivå (pro|premium) = verifierad badge, boka-/kontaktknapp, full kontakt. */
export const isPaid = (studio: Studio): boolean => studioTier(studio) !== 'perus';

/**
 * Walk-in (handoff §3.4). Bara `true` är meningsfullt: undefined = okänt och
 * false sätts aldrig automatiskt — därför renderas ENDAST true i UI:t.
 */
export const isWalkIn = (studio: Studio): boolean => studio.data.walkIn === true;

/**
 * Verifierad badge (matris: Pro + Premium). Behåller dessutom befintliga
 * `verified: true`-studios (data verifierad mot studions egen webbplats)
 * så inget regredierar — betald nivå räknas alltid som verifierad.
 */
export const isVerified = (studio: Studio): boolean => studio.data.verified || isPaid(studio);

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

/** Premium → Pro → Perus, därefter alfabetiskt — samma ordning i alla listor. */
export function sortStudios(
  studios: CollectionEntry<'studios'>[],
): CollectionEntry<'studios'>[] {
  return [...studios].sort((a, b) => {
    const rank = TIER_RANK[studioTier(a)] - TIER_RANK[studioTier(b)];
    if (rank !== 0) return rank;
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

/**
 * Stil × stad-kombinationer som förtjänar en egen sida.
 *
 * Tröskeln är SAMMA som för tunna stadssidor (CITY_INDEX_MIN_STUDIOS):
 * under den genereras ingen sida alls — inte ens noindexad. 10 stilar ×
 * 19 städer vore 190 URL:er varav de flesta med 0–2 studios, dvs. precis
 * den doorway-matta seo-handoff §3.1 varnar för. Med tröskeln blir det
 * ~29 sidor som var och en listar minst tre riktiga studios.
 *
 * Att sidan inte finns är också varför korslänkarna (StylePage/CityPage)
 * måste slå upp i detta set innan de länkar hit.
 */
export async function getStyleCityPairs(): Promise<
  { styleId: string; cityId: string; count: number }[]
> {
  const studios = await getStudios();
  const counts = new Map<string, number>();
  for (const studio of studios) {
    if (!studio.data.city) continue;
    for (const styleId of studio.data.styles) {
      const key = `${styleId}|${studio.data.city}`;
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return [...counts.entries()]
    .filter(([, count]) => count >= CITY_INDEX_MIN_STUDIOS)
    .map(([key, count]) => {
      const [styleId, cityId] = key.split('|');
      return { styleId: styleId!, cityId: cityId!, count };
    })
    .sort((a, b) => b.count - a.count);
}

/** Snabb uppslagning: finns sidan /tyylit/{stil}/{stad}/? */
export async function styleCityPairSet(): Promise<Set<string>> {
  const pairs = await getStyleCityPairs();
  return new Set(pairs.map((pair) => `${pair.styleId}|${pair.cityId}`));
}

/**
 * Prefix som sätts direkt före ett substantiv ("…tatuointi"/"…tatuering").
 * Se kommentaren vid styles-collectionen i content.config.ts: adjektivstilar
 * (japanilainen, geometrinen) är egna ord, övriga bildar yhdyssana med
 * bindestreck. Utan fältet faller vi tillbaka på gemener + bindestreck,
 * vilket är rätt för alla substantiv-/lånordsstilar.
 */
export function styleAttr(style: CollectionEntry<'styles'>, locale: Locale): string {
  if (locale === 'sv') {
    return style.data.svAttr ?? `${styleDisplayName(style, 'sv').toLowerCase()}-`;
  }
  return style.data.fiAttr ?? `${style.data.name.toLowerCase()}-`;
}

/** Som styleAttr men för partitiv plural ("…tatuointeja"). Endast finska. */
export function stylePart(style: CollectionEntry<'styles'>): string {
  return style.data.fiPart ?? style.data.fiAttr ?? `${style.data.name.toLowerCase()}-`;
}

/** Versaliserar prefixet för satsinitial användning (H1, title). */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
