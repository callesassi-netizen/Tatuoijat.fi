import type { ImageMetadata } from 'astro';

import kasivarsi from '../assets/bilder/anime-manga.png';
import olkavarsi from '../assets/bilder/neotraditional.png';
import hiha from '../assets/bilder/japanilainen-hiha.png';
import selka from '../assets/bilder/selka-enkeli.png';
import solisluu from '../assets/bilder/ornamental.png';
import teksti from '../assets/bilder/lettering.png';

/**
 * Bilder till hintaesimerkit kehonosittain (/hinnat).
 *
 * VARFÖR sektionen finns: keyword-researchen 9/8 visade att den finska
 * prisefterfrågan är formulerad som KROPPSDEL + pris — käsivarsi, koko selkä,
 * puoli hiha, teksti, sormi, alaselkä — inte som den generiska "tatuoinnin
 * hinta". GSC bekräftade: "koko selän tatuointi hinta" låg på position 9,2
 * och "turku tatuointi hinnat" på 13,9, medan huvudtermen låg 26,5.
 *
 * Bilderna är sajtens egna ytor (Bildpolicyn) — samma uppsättning som
 * stilplattorna, återanvänd. Ingen ny bild behövde genereras.
 */
export const bodyPartImages: Record<string, ImageMetadata> = {
  kasivarsi,
  olkavarsi,
  hiha,
  selka,
  solisluu,
  teksti,
};
