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

/**
 * PARTNERREGISTER — ansökt 2026-08-10 via Adtraction, kanal tatuoijat.fi
 * (kanal-ID 2101505499). `brandId` är Adtractions Brand ID, samma nummer som
 * hamnar i spårningslänkens `a=`-parameter. Det står här för spårbarhet: när
 * en länk beter sig konstigt är första frågan alltid "vilket program?".
 *
 * `status` är en ANTECKNING, inte en spärr. Spärren är att `affiliateUrl`
 * saknas — se renderingsregeln ovan. Uppdatera status när Adtraction svarar,
 * så att den som läser filen om ett halvår vet var saker står.
 */
export type PartnerKey =
  | 'olo-apteekki'
  | 'apteekki-360'
  | 'dermosil'
  | 'cocopanda'
  | 'nordicfeel'
  | 'lyko'
  | 'bearel';

export interface AffiliatePartner {
  name: string;
  /** Adtraction Brand ID (= spårningslänkens `a=`). */
  brandId: string;
  status: 'pending' | 'approved' | 'declined';
  /** Provision och EPC vid ansökningstillfället — för senare jämförelse. */
  note: string;
}

export const affiliatePartners: Record<PartnerKey, AffiliatePartner> = {
  'olo-apteekki': {
    name: 'Olo-apteekki',
    brandId: '1665046581',
    status: 'pending',
    note: '7,5 % · EPC 0,73 GBP · konv. 16,1 % · spårning 14 dagar',
  },
  'apteekki-360': {
    name: 'Apteekki 360',
    brandId: '1869094917',
    status: 'pending',
    note: '9 % · EPC 0,21 GBP · konv. 12,5 %',
  },
  dermosil: {
    name: 'Dermosil',
    brandId: '1666118743',
    status: 'pending',
    note: '3,9 % · EPC 0,44 GBP · konv. 31,7 %',
  },
  cocopanda: {
    name: 'Cocopanda FI',
    brandId: '1786468186',
    status: 'pending',
    note: '6 % · EPC 0,30 GBP · konv. 13,8 %',
  },
  nordicfeel: {
    name: 'Nordicfeel FI',
    brandId: '997227792',
    status: 'pending',
    note: '6 % · EPC 0,23 GBP · konv. 10,6 %',
  },
  lyko: {
    name: 'Lyko FI',
    brandId: '1278344847',
    status: 'pending',
    note: '8 % · EPC 0,17 GBP · konv. 3,2 %',
  },
  bearel: {
    name: 'Bearel',
    brandId: '1747599574',
    status: 'pending',
    note: '10 % · EPC 0,91 GBP · konv. 11,1 %',
  },
};

/**
 * EPI = Adtractions sub-id. Utan den syns bara "något på tatuoijat.fi sålde";
 * med den syns VILKEN guide och VILKET block. Konventionen är
 * `{guide-key}-{kategori}`, t.ex. `hoitotuotteet-spf`.
 *
 * FALLGROP: `epi` måste ligga FÖRE `url=` i länken, annars räknas den som en
 * del av destinations-URL:en och försvinner. Därför sköts inflätningen här i
 * stället för att klistras ihop för hand i produktlistan.
 */
export function withEpi(trackingUrl: string, epi: string): string {
  const safe = epi
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
  if (!safe) return trackingUrl;

  const urlAt = trackingUrl.search(/[?&]url=/);
  const epiMatch = /[?&]epi=([^&]*)/.exec(trackingUrl);

  // Redan satt för hand: värdet respekteras, men positionen rättas. En epi som
  // klistrats in EFTER url= räknas av Adtraction som en del av destinationen
  // och försvinner ur rapporten — det är just den tysta buggen den här
  // funktionen finns för att stoppa, också när någon skrivit länken själv.
  if (epiMatch) {
    if (urlAt === -1 || epiMatch.index < urlAt) return trackingUrl;
    const cleaned = trackingUrl.replace(/[?&]epi=[^&]*/, '');
    const cleanedUrlAt = cleaned.search(/[?&]url=/);
    return `${cleaned.slice(0, cleanedUrlAt)}&epi=${epiMatch[1]}${cleaned.slice(cleanedUrlAt)}`;
  }

  const separator = trackingUrl.includes('?') ? '&' : '?';
  if (urlAt === -1) return `${trackingUrl}${separator}epi=${safe}`;
  return `${trackingUrl.slice(0, urlAt)}&epi=${safe}${trackingUrl.slice(urlAt)}`;
}

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
