// Stilgalleriets bildplattor (sajtens egna ytor — Bildpolicy §4: egna/
// licensierade bilder, aldrig något som ser ut som en listad artists verk).
// Delas av HomePage och StylesIndexPage.
import type { ImageMetadata } from 'astro';
import realismi from '../assets/bilder/enkeli-realismi.png';
import fineline from '../assets/bilder/studio-vaalea.png';
import blackwork from '../assets/bilder/jalkihoito.png';
import traditional from '../assets/bilder/flash-traditional.png';
import japanilainen from '../assets/bilder/japanilainen-hiha.png';
import geometrinen from '../assets/bilder/geometrinen-kone.png';

export const styleImages: Record<string, ImageMetadata> = {
  realismi,
  fineline,
  blackwork,
  traditional,
  japanilainen,
  geometrinen,
};
