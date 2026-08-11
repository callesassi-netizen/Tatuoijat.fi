// Stilgalleriets bildplattor (sajtens egna ytor — Bildpolicy §4: egna/
// licensierade bilder, aldrig något som ser ut som en listad artists verk).
// Delas av HomePage och StylesIndexPage.
import type { ImageMetadata } from 'astro';
import { brandImage } from './brandImages';
import realismi from '../assets/bilder/enkeli-realismi.png';
import fineline from '../assets/bilder/studio-vaalea.png';
import blackwork from '../assets/bilder/jalkihoito.png';
import traditional from '../assets/bilder/flash-traditional.png';
import japanilainen from '../assets/bilder/japanilainen-hiha.png';
import geometrinen from '../assets/bilder/geometrinen-kone.png';
// De fyra nyaste stilarna saknade bildplatta sedan de lades till (6/7 2026).
// anime-manga har nast hogst CTR av alla stilsidor (18 %) och visades anda utan bild.
import neotraditional from '../assets/bilder/neotraditional.png';
import ornamental from '../assets/bilder/ornamental.png';
import animeManga from '../assets/bilder/anime-manga.png';
import lettering from '../assets/bilder/lettering.png';

export const styleImages: Record<string, ImageMetadata> = {
  // Realismi och Blackwork delade tidigare bild med premiumbannern respektive
  // jälkihoito-guiden. Nu har de egna (11/8 2026).
  realismi: brandImage('realismi-patsas', realismi),
  fineline,
  blackwork: brandImage('blackwork-hiha', blackwork),
  traditional,
  japanilainen,
  geometrinen,
  neotraditional,
  ornamental,
  'anime-manga': animeManga,
  lettering,
};
