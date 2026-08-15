// Sektionsbilder i oppaat/guider — de breda bilderna som bryter texten mitt i
// en guide. Nyckeln är guidens `key` i src/lib/guides.mjs.
import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n/ui';
import { optionalBrandImage } from './brandImages';

/**
 * VARFÖR BILDERNA LIGGER HÄR OCH INTE I GUIDETEXTEN. Innehållsmodulerna i
 * src/data/guides/ är rena textmoduler med en komplett kopia per språk. Lägger
 * man bilden där måste samma filnamn skrivas två gånger per guide, och den dag
 * en bild byts ut är det tolv ställen att hålla i takt. Här står filnamnet en
 * gång och alt-texten en gång per språk, vilket är det enda som FAKTISKT
 * skiljer sig mellan språken.
 *
 * VARFÖR EFTER-ID OCH INTE ETT INDEX. `after` är sektionens ankar-id. Ett
 * index (”efter sektion 3”) hade tyst glidit fel den dag någon lägger till en
 * sektion i mitten — id:t pekar på samma innehåll oavsett ordning, och om
 * sektionen försvinner renderas bilden inte alls i stället för att hamna på
 * ett slumpmässigt ställe.
 *
 * ALT-TEXTEN beskriver bilden, inte ämnet. Bilderna är stämning, inte
 * information: ingen läsare går miste om något faktum genom att bara höra
 * alt-texten, och därför ska den vara kort och konkret.
 */
export interface GuideSectionImage {
  /** Ankar-id på sektionen bilden läggs EFTER. */
  after: string;
  /** Filnamn (utan ändelse) i src/assets/bilder/uudet/. */
  name: string;
  alt: Record<Locale, string>;
}

export const guideSectionImages: Record<string, GuideSectionImage[]> = {
  'tatuoinnin-jalkihoito': [
    {
      after: 'pesu',
      name: 'pesu-hana',
      alt: {
        fi: 'Käsi huuhtelee ihoa haalean vesihanan alla.',
        sv: 'En hand sköljer huden under en ljummen vattenkran.',
      },
    },
    {
      after: 'valta',
      name: 'pyyhe-lasi',
      alt: {
        fi: 'Puhdas taiteltu pyyhe ja lasi vettä kylpyhuoneen tasolla.',
        sv: 'En ren vikt handduk och ett glas vatten på en badrumsbänk.',
      },
    },
  ],
  'tatuoinnin-paraneminen': [
    {
      after: 'kuoriutuminen',
      name: 'iho-makro',
      alt: {
        fi: 'Lähikuva parantuneesta tatuoinnista, jossa ihon pinta on tasainen ja matta.',
        sv: 'Närbild på en läkt tatuering där hudytan är slät och matt.',
      },
    },
  ],
  'tatuointi-ja-sauna': [
    {
      after: 'miksi-ei',
      name: 'sauna-kivet',
      alt: {
        fi: 'Kiuas ja kuumat kivet, joista nousee höyryä.',
        sv: 'En bastuugn med heta stenar och stigande ånga.',
      },
    },
  ],
  'tatuointi-ja-uiminen': [
    {
      after: 'vedet',
      name: 'jarvi-pinta',
      alt: {
        fi: 'Tyyni järvenpinta ja sumuinen metsänreuna.',
        sv: 'En stilla sjöyta och en disig skogsbryn.',
      },
    },
  ],
  'tatuointi-ja-aurinko': [
    {
      after: 'aurinkosuoja',
      name: 'olkapaa-varjo',
      alt: {
        fi: 'Olkapää auringossa, jossa lehvästön varjo piirtyy iholle.',
        sv: 'En axel i solen där lövverkets skugga tecknar sig på huden.',
      },
    },
  ],
  'tatuoinnin-kipu': [
    {
      after: 'mihin-sattuu-eniten',
      name: 'kipu-olkapaa',
      alt: {
        fi: 'Lähikuva olkapäästä ja yläselästä pehmeässä ikkunavalossa.',
        sv: 'Närbild på en axel och övre rygg i mjukt fönsterljus.',
      },
    },
  ],
  'ensimmainen-tatuointi': [
    {
      after: 'kuka-saa-tatuoida',
      name: 'ensimmainen-steriili',
      alt: {
        fi: 'Avaamattomat steriilipakatut neulat, saippua ja kertakäyttökäsineet työtasolla.',
        sv: 'Oöppnade sterilförpackade nålar, tvål och engångshandskar på en arbetsbänk.',
      },
    },
  ],
  'tatuoinnin-hoitotuotteet': [
    {
      after: 'rasva',
      name: 'kadet-tuubi',
      alt: {
        fi: 'Kädet pitelevät merkitöntä valkoista voidetuubia.',
        sv: 'Händer som håller en omärkt vit krämtub.',
      },
    },
  ],
};

export interface ResolvedSectionImage {
  src: ImageMetadata;
  alt: string;
}

/**
 * Bilden som ska ligga efter en viss sektion, eller undefined.
 *
 * Returnerar undefined också när filen ännu inte hämtats med
 * `npm run images:brand` — se optionalBrandImage(). Guiden renderas då exakt
 * som förut, utan hål i layouten.
 */
export function sectionImageAfter(
  guideKey: string,
  sectionId: string,
  locale: Locale,
): ResolvedSectionImage | undefined {
  const entry = guideSectionImages[guideKey]?.find((image) => image.after === sectionId);
  if (!entry) return undefined;
  const src = optionalBrandImage(entry.name);
  return src ? { src, alt: entry.alt[locale] } : undefined;
}
