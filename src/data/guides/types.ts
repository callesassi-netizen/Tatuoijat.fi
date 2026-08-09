import type { Locale } from '../../i18n/ui';
import type { AffiliateCategory } from '../affiliate';

/**
 * Innehållsformat för oppaat/guider (/oppaat/{slug}/, sv /sv/guider/{slug}/).
 *
 * Medvetet BREDARE än /hinnat/-guidens format (src/data/hinnat.ts): en guide
 * består av valfritt många sektioner som var för sig kan vara text, numrerade
 * steg, en tabell eller en varningsruta. Det gör att kommande guider
 * (tatuoinnin paraneminen, tatuointi ja sauna, …) inte behöver egna
 * komponenter — bara en ny innehållsmodul + en rad i src/lib/guides.mjs.
 *
 * Rubrikerna skrivs som RIKTIGA SÖKFRÅGOR (GEO.md §2) och varje guide inleds
 * med ett svara-först-stycke på 40–60 ord (GEO.md §1).
 */

/** Numrerat steg — matas också in i HowTo-schemat när guiden har ett. */
export interface GuideStep {
  title: string;
  text: string;
}

/** Riktig HTML-<table> (GEO.md §4: hårda siffror i tabellform citeras oftare). */
export interface GuideTable {
  columns: string[];
  rows: string[][];
  note?: string;
}

/** Varnings-/noteringsruta. `tone: 'warning'` används för hälsosignaler. */
export interface GuideCallout {
  title: string;
  text?: string;
  bullets?: string[];
  tone?: 'note' | 'warning';
}

export interface GuideSection {
  /** Ankar-id, används som id på H2 (och för aria-labelledby). */
  id: string;
  /** H2 — formuleras som en sökfråga när det går. */
  title: string;
  /** Svara-först för sektionen (valfritt). */
  lead?: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: GuideStep[];
  table?: GuideTable;
  callout?: GuideCallout;
}

/**
 * Ett kategoriblock i produktsektionen. Kriterierna är VÅR redaktionella text
 * och står på egna ben — produktkort tillkommer först när affiliate.ts har en
 * produkt med `affiliateUrl` i samma kategori (se AffiliateSection.astro).
 */
export interface GuideProductCategory {
  category: AffiliateCategory;
  title: string;
  text: string;
}

export interface GuideContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  /** GEO.md §1 — fristående svar på H1:s fråga, 40–60 ord. */
  answer: string;
  intro: string[];
  sections: GuideSection[];
  /** Valfritt HowTo-schema (GEO.md §3). Stegen renderas i sin egen sektion. */
  howTo?: {
    name: string;
    description: string;
    stepsFromSection: string;
  };
  faqTitle: string;
  faq: { q: string; a: string }[];
  productsTitle: string;
  productsIntro: string;
  productCategories: GuideProductCategory[];
  relatedTitle: string;
  relatedIntro: string;
  /** Rubrik ovanför listan med kommande guider (kannibaliseringssäkrade). */
  upcomingTitle: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
  /** Kort ansvarsfriskrivning — hälsonära innehåll. */
  disclaimer: string;
}

export type GuideContentByLocale = Record<Locale, GuideContent>;

/** Kort kort-text på hubben (/oppaat/). */
export interface GuideCard {
  title: string;
  summary: string;
}

export type GuideCardByLocale = Record<Locale, GuideCard>;
