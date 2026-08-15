// Hero-plattor för oppaat/guider (sajtens egna ytor — Bildpolicy §4).
// Nyckeln är guidens `key` i src/lib/guides.mjs. Saknas nyckeln används
// FALLBACK, så en ny guide aldrig renderas utan bild.
import type { ImageMetadata } from 'astro';
import { brandImage } from './brandImages';
import jalkihoito from '../assets/bilder/jalkihoito.png';
import studioVaalea from '../assets/bilder/studio-vaalea.png';
import japanilainenHiha from '../assets/bilder/japanilainen-hiha.png';
import kasivarsiMotiivi from '../assets/bilder/kasivarsi-motiivi.png';
import jalkihoitoPyyhe from '../assets/bilder/jalkihoito-pyyhe.png';
import selkaEnkeli from '../assets/bilder/selka-enkeli.png';
import ornamental from '../assets/bilder/ornamental.png';

export const guideImages: Record<string, ImageMetadata> = {
  // Varje guide har nu en EGEN bild, genererad för sitt ämne (11/8 2026).
  // brandImage() faller tillbaka på den gamla bilden tills filerna hämtats
  // med `npm run images:brand`, så inget bygge blockeras på det.
  'tatuoinnin-jalkihoito': brandImage('jalkihoito-kalvo', jalkihoito),
  'tatuoinnin-paraneminen': brandImage('paraneminen-kuoriutuminen', japanilainenHiha),
  'tatuointi-ja-aurinko': brandImage('aurinko-kasivarsi', kasivarsiMotiivi),
  'tatuoinnin-hoitotuotteet': brandImage('hoitotuotteet-hylly', jalkihoitoPyyhe),
  'tatuointi-ja-sauna': brandImage('sauna-lauteet', selkaEnkeli),
  'tatuointi-ja-uiminen': brandImage('jarvi-laituri', ornamental),
  // Tillagda 12/8 2026. Fallbacken är medvetet en bild som redan används som
  // hero någon annanstans — den syns bara tills images:brand körts.
  'tatuoinnin-kipu': brandImage('kipu-kasivarsi', kasivarsiMotiivi),
  'ensimmainen-tatuointi': brandImage('ensimmainen-konsultaatio', studioVaalea),
};

export const guideImageFallback: ImageMetadata = studioVaalea;

export function guideImage(key: string): ImageMetadata {
  return guideImages[key] ?? guideImageFallback;
}
