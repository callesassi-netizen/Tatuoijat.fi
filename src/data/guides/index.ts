import type { Locale } from '../../i18n/ui';
import type { GuideCardByLocale, GuideContentByLocale } from './types';
import { tatuoinninJalkihoito, tatuoinninJalkihoitoCard } from './tatuoinnin-jalkihoito';

/**
 * Kopplingen mellan routing-registret (src/lib/guides.mjs) och innehållet.
 * En ny guide = ny innehållsmodul + en rad här + en rad i guides.mjs.
 * Ingen sid-fil behöver röras: /oppaat/[slug].astro genererar allt.
 */
export const guideContent: Record<string, GuideContentByLocale> = {
  'tatuoinnin-jalkihoito': tatuoinninJalkihoito,
};

/** Kort-texterna på hubben. Samma nycklar som guideContent. */
export const guideCards: Record<string, GuideCardByLocale> = {
  'tatuoinnin-jalkihoito': tatuoinninJalkihoitoCard,
};

/**
 * Rubriker för PLANERADE guider (status 'planned' i src/lib/guides.mjs).
 * De har ingen URL — de listas som ren text på hubben och i "tulossa"-blocket
 * så att läsaren (och vi själva) ser vart ytan är på väg. Lägg till innehåll
 * + flytta status till 'published' när en guide skrivs.
 */
export const plannedGuideTitles: Record<string, Record<Locale, string>> = {
  'tatuoinnin-paraneminen': {
    fi: 'Tatuoinnin paraneminen vaihe vaiheelta',
    sv: 'Tatueringens läkning steg för steg',
  },
  'tatuointi-ja-sauna': {
    fi: 'Tatuointi ja sauna',
    sv: 'Tatuering och bastu',
  },
  'tatuointi-ja-uiminen': {
    fi: 'Tatuointi ja uiminen',
    sv: 'Tatuering och bad',
  },
  'tatuointi-ja-aurinko': {
    fi: 'Tatuointi ja aurinko',
    sv: 'Tatuering och sol',
  },
  'tatuoinnin-hoitotuotteet': {
    fi: 'Tatuoinnin hoitotuotteet',
    sv: 'Produkter för tatueringsvård',
  },
  'tatuoinnin-hinta-kehonosittain': {
    fi: 'Tatuoinnin hinta kehonosittain',
    sv: 'Tatueringspris per kroppsdel',
  },
};

export function getGuideContent(key: string, locale: Locale) {
  const entry = guideContent[key];
  return entry ? entry[locale] : undefined;
}
