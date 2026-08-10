import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

import studioInterior from '../assets/bilder/studio-interior.png';
import tatuoijaTyossa from '../assets/bilder/tatuoija-tyossa.png';
import kasivarsiMotiivi from '../assets/bilder/kasivarsi-motiivi.png';
import heroLaaja from '../assets/bilder/hero-laaja.png';
import jalkihoitoPyyhe from '../assets/bilder/jalkihoito-pyyhe.png';
import tatuoijaStudiossa from '../assets/bilder/tatuoija-studiossa.png';
import muotokuva from '../assets/bilder/tatuoija-muotokuva.png';
import flashTraditional from '../assets/bilder/flash-traditional.png';

/**
 * Hero-bilder per sidtyp. Calles beslut 10/8: stora hero-bilder på ALLA
 * sidor, inte de små sidoplattorna — mockupen har ett fotoband bakom varje
 * sidrubrik.
 *
 * Bilderna är sajtens EGNA ytor (Bildpolicyn, CLAUDE.md §1). Studioprofiler
 * får medvetet INGEN fotohero: ett generiskt studiofoto bakom en namngiven
 * studios rubrik läser som ett foto av just den studion, vilket vore precis
 * det påståendet policyn förbjuder. Profilsidan bär i stället sin
 * monogramplatta.
 */
export const heroSources = {
  cities: studioInterior,
  city: tatuoijaStudiossa,
  styles: flashTraditional,
  guides: jalkihoitoPyyhe,
  prices: kasivarsiMotiivi,
  pricing: tatuoijaTyossa,
  contact: muotokuva,
  join: heroLaaja,
  search: studioInterior,
  walkin: tatuoijaTyossa,
} as const;

export type HeroKey = keyof typeof heroSources;

/**
 * Optimerad bakgrunds-URL. Vi använder CSS background-image i stället för
 * <Image>, eftersom heron är rent dekorativ och ska täcka hela bandet —
 * men vi går via getImage() så Astro ändå levererar webp i stället för en
 * 600 kB PNG. Det spelar roll: 83 % av besökarna är på mobil.
 */
export async function heroBg(source: ImageMetadata, width = 1600): Promise<string> {
  const img = await getImage({ src: source, width, format: 'webp', quality: 70 });
  return img.src;
}

export async function heroBgFor(key: HeroKey, width = 1600): Promise<string> {
  return heroBg(heroSources[key], width);
}
