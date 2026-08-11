import type { Locale } from '../../i18n/ui';
import type { GuideCardByLocale, GuideContentByLocale } from './types';
import { tatuoinninJalkihoito, tatuoinninJalkihoitoCard } from './tatuoinnin-jalkihoito';
import { tatuoinninParaneminen, tatuoinninParaneminenCard } from './tatuoinnin-paraneminen';
import { tatuointiJaAurinko, tatuointiJaAurinkoCard } from './tatuointi-ja-aurinko';
import {
  tatuoinninHoitotuotteet,
  tatuoinninHoitotuotteetCard,
} from './tatuoinnin-hoitotuotteet';
import { tatuointiJaSauna, tatuointiJaSaunaCard } from './tatuointi-ja-sauna';
import { tatuointiJaUiminen, tatuointiJaUiminenCard } from './tatuointi-ja-uiminen';

/**
 * Kopplingen mellan routing-registret (src/lib/guides.mjs) och innehållet.
 * En ny guide = ny innehållsmodul + en rad här + en rad i guides.mjs.
 * Ingen sid-fil behöver röras: /oppaat/[slug].astro genererar allt.
 */
export const guideContent: Record<string, GuideContentByLocale> = {
  'tatuoinnin-jalkihoito': tatuoinninJalkihoito,
  'tatuoinnin-paraneminen': tatuoinninParaneminen,
  'tatuointi-ja-aurinko': tatuointiJaAurinko,
  'tatuoinnin-hoitotuotteet': tatuoinninHoitotuotteet,
  'tatuointi-ja-sauna': tatuointiJaSauna,
  'tatuointi-ja-uiminen': tatuointiJaUiminen,
};

/** Kort-texterna på hubben. Samma nycklar som guideContent. */
export const guideCards: Record<string, GuideCardByLocale> = {
  'tatuoinnin-jalkihoito': tatuoinninJalkihoitoCard,
  'tatuoinnin-paraneminen': tatuoinninParaneminenCard,
  'tatuointi-ja-aurinko': tatuointiJaAurinkoCard,
  'tatuoinnin-hoitotuotteet': tatuoinninHoitotuotteetCard,
  'tatuointi-ja-sauna': tatuointiJaSaunaCard,
  'tatuointi-ja-uiminen': tatuointiJaUiminenCard,
};

/**
 * Rubriker för PLANERADE guider (status 'planned' i src/lib/guides.mjs).
 * De har ingen URL — de listas som ren text på hubben och i "tulossa"-blocket
 * så att läsaren (och vi själva) ser vart ytan är på väg. Lägg till innehåll
 * + flytta status till 'published' när en guide skrivs.
 */
export const plannedGuideTitles: Record<string, Record<Locale, string>> = {
  // Tom sedan 2026-08-11: alla planerade guider är skrivna. Prisguiden per
  // kroppsdel ströks i stället för att skrivas — se noten i src/lib/guides.mjs.
};

export function getGuideContent(key: string, locale: Locale) {
  const entry = guideContent[key];
  return entry ? entry[locale] : undefined;
}
