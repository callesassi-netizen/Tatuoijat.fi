// Hero-plattor för oppaat/guider (sajtens egna ytor — Bildpolicy §4).
// Nyckeln är guidens `key` i src/lib/guides.mjs. Saknas nyckeln används
// FALLBACK, så en ny guide aldrig renderas utan bild.
import type { ImageMetadata } from 'astro';
import jalkihoito from '../assets/bilder/jalkihoito.png';
import studioVaalea from '../assets/bilder/studio-vaalea.png';
import japanilainenHiha from '../assets/bilder/japanilainen-hiha.png';
import kasivarsiMotiivi from '../assets/bilder/kasivarsi-motiivi.png';
import jalkihoitoPyyhe from '../assets/bilder/jalkihoito-pyyhe.png';

export const guideImages: Record<string, ImageMetadata> = {
  'tatuoinnin-jalkihoito': jalkihoito,
  // Paraneminen: hud i närbild — guiden handlar om vad som händer i huden.
  'tatuoinnin-paraneminen': japanilainenHiha,
  // Aurinko: arm i dagsljus, den enda ljusa hero-bilden i uppsättningen.
  'tatuointi-ja-aurinko': kasivarsiMotiivi,
  // Hoitotuotteet: eftervårdsmotivet, skilt från jälkihoito-guidens egen bild.
  'tatuoinnin-hoitotuotteet': jalkihoitoPyyhe,
};

export const guideImageFallback: ImageMetadata = studioVaalea;

export function guideImage(key: string): ImageMetadata {
  return guideImages[key] ?? guideImageFallback;
}
