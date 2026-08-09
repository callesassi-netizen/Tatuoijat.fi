// Hero-plattor för oppaat/guider (sajtens egna ytor — Bildpolicy §4).
// Nyckeln är guidens `key` i src/lib/guides.mjs. Saknas nyckeln används
// FALLBACK, så en ny guide aldrig renderas utan bild.
import type { ImageMetadata } from 'astro';
import jalkihoito from '../assets/bilder/jalkihoito.png';
import studioVaalea from '../assets/bilder/studio-vaalea.png';

export const guideImages: Record<string, ImageMetadata> = {
  'tatuoinnin-jalkihoito': jalkihoito,
};

export const guideImageFallback: ImageMetadata = studioVaalea;

export function guideImage(key: string): ImageMetadata {
  return guideImages[key] ?? guideImageFallback;
}
