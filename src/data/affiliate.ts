import type { Locale } from '../i18n/ui';

/**
 * AFFILIATE — central konfiguration.
 * ===================================================================
 * STATUS 2026-08-09: Calle är ännu INTE godkänd i något affiliateprogram.
 * `affiliateProducts` är därför TOM med flit. Ingen extern länk, inget pris
 * och ingen produkt får läggas in här förrän ett program är godkänt och
 * länkarna är riktiga — påhittade produkter/priser bryter mot både
 * CLAUDE.md (ingen påhittad data) och konsumentskyddet.
 *
 * PLANERADE PARTNERS (intern anteckning — renderas ALDRIG på sidan):
 *   - Apteekki 360        (apotek: hajusteeton perusvoide, pesu, SPF)
 *   - Lyko Finland        (hudvård, brett sortiment)
 *   - Stories & Ink       (tattoo aftercare, egen produktlinje)
 *   - Monsters Ink        (proffssortiment — för framtida B2B-innehåll
 *                          riktat mot tatuerare, inte konsumentguiderna)
 *
 * RENDERINGSREGEL (beslut, se AffiliateSection.astro):
 * En produkt UTAN `affiliateUrl` renderas INTE ALLS — inget kort, ingen
 * gråad platshållare. Valet: en tom "kommer snart"-ruta läser som en trasig
 * butik och sänker sidans redaktionella trovärdighet, medan kategoriblocken
 * (kriterierna: vad man ska titta efter) står helt på egna ben som innehåll.
 * Sidan ser alltså komplett ut i dag och blir en produktsida först den dag
 * riktiga länkar finns.
 *
 * MÄRKNING: så fort en `affiliateUrl` finns renderas den finska
 * annonsmärkningen "Mainoslinkki" (sv "Annonslänk") FÖRST i sektionen,
 * före första produktkortet — inte som fotnot. Se AFFILIATE_DISCLOSURE.
 */

/** Produktkategorier på hoito-/jälkihoito-ytorna. */
export type AffiliateCategory =
  | 'aftercare' // tatuoinnin hoitovoiteet
  | 'fragrance-free' // hajusteeton perusvoide
  | 'cleansing' // pesu
  | 'moisturising' // kosteutus
  | 'spf'; // aurinkosuoja

export const affiliateCategories = [
  'aftercare',
  'fragrance-free',
  'cleansing',
  'moisturising',
  'spf',
] as const satisfies readonly AffiliateCategory[];

export interface AffiliateProduct {
  /** Stabilt id, används som React-/Astro-nyckel och i ev. klickstatistik. */
  id: string;
  name: string;
  category: AffiliateCategory;
  /** Vår EGEN redaktionella beskrivning (fi/sv) — aldrig kopierad marknadstext. */
  description: Record<Locale, string>;
  /**
   * Affiliatelänken. SAKNAS = produkten renderas inte (se filhuvudet).
   * Fylls först när programmet är godkänt och länken är verifierad.
   */
  affiliateUrl?: string;
  /** Programmets namn, för intern spårbarhet. Visas inte. */
  partner?: string;
}

/**
 * TOM tills ett affiliateprogram är godkänt. Lägg INTE in exempelprodukter
 * "för att se hur det ser ut" — de skulle gå live vid nästa deploy.
 */
export const affiliateProducts: AffiliateProduct[] = [];

/** Klickbar = har en riktig affiliatelänk. Enda porten till extern CTA. */
export function isLinkable(product: AffiliateProduct): boolean {
  return typeof product.affiliateUrl === 'string' && product.affiliateUrl.startsWith('https://');
}

/** Produkter som får renderas i en kategori (kan vara tom — då syns bara kriterierna). */
export function linkableProducts(category: AffiliateCategory): AffiliateProduct[] {
  return affiliateProducts.filter(
    (product) => product.category === category && isLinkable(product),
  );
}

/** Finns någon klickbar produkt alls? Styr om annonsmärkningen renderas. */
export function hasLinkableProducts(): boolean {
  return affiliateProducts.some(isLinkable);
}

/**
 * Annonsmärkning. Finsk praxis (KKV:s riktlinjer för mainonnan tunnistettavuus):
 * märkningen ska vara i BÖRJAN av innehållet och begriplig utan att man klickar.
 */
export const AFFILIATE_DISCLOSURE: Record<Locale, { label: string; text: string }> = {
  fi: {
    label: 'Mainoslinkki',
    text: 'Osa alla olevista linkeistä on kumppanuuslinkkejä. Jos ostat linkin kautta, saatamme saada pienen komission. Se ei vaikuta hintaan eikä siihen, mitä suosittelemme.',
  },
  sv: {
    label: 'Annonslänk',
    text: 'En del av länkarna nedan är partnerlänkar. Om du köper via dem kan vi få en liten provision. Det påverkar varken priset eller vad vi rekommenderar.',
  },
};

/** CTA-etikett på ett produktkort (renderas bara när affiliateUrl finns). */
export const AFFILIATE_CTA: Record<Locale, string> = {
  fi: 'Katso tuote',
  sv: 'Se produkten',
};
