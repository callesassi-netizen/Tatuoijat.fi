import { getCollection } from 'astro:content';
import { localePath, type Locale } from '../i18n/ui';
import {
  getCitiesSorted,
  getStylesSorted,
  getStudios,
  cityDisplayName,
  styleDisplayName,
  studioTier,
  isVerified,
} from './content';
import { citySlug } from './routes';

/**
 * Förgenererat sökindex (fi + sv) — sajten är statisk, så sökningen sker
 * i webbläsaren mot den här JSON-filen. Serveras av
 * `src/pages/haku-index.json.ts` resp. `src/pages/sv/haku-index.json.ts`.
 *
 * VARFÖR ETT EGET FORMAT OCH INTE Lunr/Fuse/MiniSearch:
 * korpusen är ~420 korta strängar (190 studios + 219 artister + 46 städer +
 * 10 stilar). Ett sökbibliotek skulle kosta 12–30 kB minifierad JS — mer än
 * hela sajtens JS-budget (CLAUDE.md: "ingen JS över ~30 kB totalt") — för att
 * lösa ett problem som inverterade index är byggda för: tiotusentals
 * dokument med långa brödtexter. Med 420 poster är ett linjärt svep med
 * prefix-/substring-matchning och bunden Levenshtein snabbare att ladda och
 * fullt tillräckligt snabbt att köra (< 2 ms i praktiken).
 *
 * FORMATET är arrayer, inte objekt, av storleksskäl: nycklarna skulle
 * upprepas 420 gånger. Positionerna dokumenteras nedan; 0 = tomt fält.
 */

/** Bumpas när fältordningen ändras, så en cachead JSON aldrig misstolkas. */
export const SEARCH_INDEX_VERSION = 1;

/** [slug, namn, antal studios, alias (andra språkets namn eller 0)] */
type CityRow = [string, string, number, string | 0];
/** [slug, namn, alias (andra språkets namn eller 0)] */
type StyleRow = [string, string, string | 0];
/**
 * [namn, slug, stadsindex (-1 = saknar city), place, stadsdel, stilindex[], boost]
 * `place` fylls bara när stadsindex är -1 (studios utan `city` i frontmatter).
 */
type StudioRow = [string, string, number, string | 0, string | 0, number[], number];
/** [namn, studioindex] — artister har ingen egen sida, de leder till studion. */
type ArtistRow = [string, number];

export interface SearchIndex {
  v: number;
  /** URL-baser så klienten kan bygga länkar utan att känna till i18n-reglerna. */
  base: { studio: string; city: string; style: string };
  c: CityRow[];
  y: StyleRow[];
  s: StudioRow[];
  a: ArtistRow[];
}

/**
 * Rankningsvikt ur paketnivån. Premium/Pro har betalat för synlighet och
 * ska ligga överst vid likvärdig textträff — men vikten är liten (8/4 mot
 * textpoäng i 40–100-spannet), så en exakt namnträff slår alltid en betald
 * listning med sämre matchning. Att köpa sig förbi rätt svar vore att
 * förstöra själva funktionen.
 */
function boostFor(studio: Awaited<ReturnType<typeof getStudios>>[number]): number {
  const tier = studioTier(studio);
  if (tier === 'premium') return 8;
  if (tier === 'pro') return 4;
  return isVerified(studio) ? 2 : 0;
}

export async function buildSearchIndex(locale: Locale): Promise<SearchIndex> {
  const cities = await getCitiesSorted();
  const styles = await getStylesSorted();
  const studios = await getStudios();
  const artists = await getCollection('artists');

  const cityIndexById = new Map(cities.map((city, i) => [city.id, i]));
  const styleIndexById = new Map(styles.map((style, i) => [style.id, i]));

  const studioCounts = new Map<string, number>();
  for (const studio of studios) {
    if (studio.data.city) {
      studioCounts.set(studio.data.city, (studioCounts.get(studio.data.city) ?? 0) + 1);
    }
  }

  // Alias = ortnamnet på det ANDRA språket, så "Åbo" hittar Turku på den
  // finska sidan och tvärtom. Kostar ~15 tecken per stad och tar bort den
  // vanligaste "hittar inget"-fällan för finlandssvenskar.
  const c: CityRow[] = cities.map((city) => {
    const name = cityDisplayName(city, locale);
    const other = locale === 'sv' ? city.data.name : (city.data.nameSv ?? '');
    return [
      citySlug(city, locale),
      name,
      studioCounts.get(city.id) ?? 0,
      other && other !== name ? other : 0,
    ];
  });

  const y: StyleRow[] = styles.map((style) => {
    const name = styleDisplayName(style, locale);
    const other = locale === 'sv' ? style.data.name : (style.data.nameSv ?? '');
    return [style.id, name, other && other !== name ? other : 0];
  });

  const studioIndexById = new Map(studios.map((studio, i) => [studio.id, i]));
  const s: StudioRow[] = studios.map((studio) => {
    const cityIdx = studio.data.city ? (cityIndexById.get(studio.data.city) ?? -1) : -1;
    return [
      studio.data.name,
      studio.id,
      cityIdx,
      cityIdx === -1 ? (studio.data.place ?? 0) : 0,
      studio.data.district ?? 0,
      studio.data.styles
        .map((slug) => styleIndexById.get(slug))
        .filter((i): i is number => i !== undefined),
      boostFor(studio),
    ];
  });

  const a: ArtistRow[] = artists
    .map((artist): ArtistRow | null => {
      const si = studioIndexById.get(artist.data.studio);
      return si === undefined ? null : [artist.data.name, si];
    })
    .filter((row): row is ArtistRow => row !== null)
    .sort((x, y2) => x[0].localeCompare(y2[0], locale));

  return {
    v: SEARCH_INDEX_VERSION,
    base: {
      studio: localePath(locale, '/artistit/'),
      city: localePath(locale, locale === 'sv' ? '/tatuerare/' : '/tatuoijat/'),
      style: localePath(locale, '/tyylit/'),
    },
    c,
    y,
    s,
    a,
  };
}
