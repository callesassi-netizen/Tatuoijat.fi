import type { Locale } from '../i18n/ui';

/**
 * AFFILIATE — central konfiguration.
 * ===================================================================
 * STATUS 2026-08-11: alla sju ansökta program godkända. Produkterna nedan
 * är hämtade ur annonsörernas EGNA product feeds via Adtraction, så namn,
 * SKU och URL är verifierade — inget är påhittat.
 *
 * INGA PRISER. Feeden hade dem, men ett pris i vår HTML är fruset vid
 * bygget medan butikens pris rör sig. Ett för lågt pris på sajten är i
 * praktiken vilseledande marknadsföring, och ett för högt kostar klick.
 * Priset står där det hör hemma: hos butiken, en klick bort.
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
    status: 'approved',
    note: '7,5 % · EPC 0,73 GBP · konv. 16,1 % · spårning 14 dagar',
  },
  'apteekki-360': {
    name: 'Apteekki 360',
    brandId: '1869094917',
    status: 'approved',
    note: '9 % · EPC 0,21 GBP · konv. 12,5 %',
  },
  dermosil: {
    name: 'Dermosil',
    brandId: '1666118743',
    status: 'approved',
    note: '3,9 % · EPC 0,44 GBP · konv. 31,7 %',
  },
  cocopanda: {
    name: 'Cocopanda FI',
    brandId: '1786468186',
    status: 'approved',
    note: '6 % · EPC 0,30 GBP · konv. 13,8 %',
  },
  nordicfeel: {
    name: 'Nordicfeel FI',
    brandId: '997227792',
    status: 'approved',
    note: '6 % · EPC 0,23 GBP · konv. 10,6 %',
  },
  lyko: {
    name: 'Lyko FI',
    brandId: '1278344847',
    status: 'approved',
    note: '8 % · EPC 0,17 GBP · konv. 3,2 %',
  },
  bearel: {
    name: 'Bearel',
    brandId: '1747599574',
    status: 'approved',
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
  /**
   * Vilket program länken går till. Visas numera OCKSÅ på kortet: läsaren ska
   * se vart klicket leder innan hen klickar. En länk som bara säger "Katso
   * tuote" och landar på en okänd butik är sämre för både förtroendet och
   * konverteringen än en som säger "Olo-apteekki".
   */
  partner: PartnerKey;
}

/**
 * LÄNKFORMAT. Adtraction ger varje annonsör en EGEN spårningsdomän
 * (at.oloapteekki.fi, id.apteekki360.fi) — det finns ingen gemensam
 * track.adtraction.com att gissa sig till. Länkarna nedan är därför
 * kopierade rakt av ur plattformen, inte konstruerade för hand.
 *
 * `a=`   annonsörens spårnings-id (INTE samma som Brand ID i partnerregistret)
 * `as=`  vår kanal, 2101505499 = tatuoijat.fi
 * `cupa_sku=` produktens SKU i feeden — ger produktnivå i rapporten
 * `url=` destinationen, oenkodad
 *
 * Feedens `?channable=`-parameter är medvetet borttagen: den är butikens
 * egen feed-klick-id, tillför inget för oss och är en ren
 * avskrivningsrisk. Apteekki 360:s `?variant=` är däremot KVAR — den
 * väljer produktvarianten och utan den landar man på fel storlek.
 *
 * `epi` sätts INTE här. Den flätas in per guide och kategori av withEpi()
 * när kortet renderas, så samma produkt kan ligga i flera guider och ändå
 * rapporteras separat.
 */
export const affiliateProducts: AffiliateProduct[] = [
  {
    id: 'sebamed-hydrating-body-wash',
    name: 'Sebamed Hydrating Body Wash 300 ml, hajusteeton',
    category: 'cleansing',
    partner: 'olo-apteekki',
    description: {
      fi: 'Hajusteeton nestesaippua, pH 5,5 — sama luku, joka mainitaan kriteereissä yllä. Mieto, ei antibakteerinen eikä kuoriva, ja 300 ml riittää koko paranemisen ajan.',
      sv: 'Oparfymerad flytande tvål, pH 5,5 — samma värde som står i kriterierna ovan. Mild, varken antibakteriell eller skrubbande, och 300 ml räcker hela läkningen.',
    },
    affiliateUrl:
      'https://at.oloapteekki.fi/t/t?a=1665046586&as=2101505499&t=2&tk=1&cupa_sku=9260215&url=https://www.oloapteekki.fi/sebamed-hydrating-body-wash-pesuneste-300-ml-hajusteeton',
  },
  {
    id: 'purito-panthenol-cleanser',
    name: 'Purito Mighty Bamboo Panthenol Cleanser 150 ml',
    category: 'cleansing',
    partner: 'cocopanda',
    description: {
      fi: 'Matalan pH:n puhdistusaine, jossa on panteenolia. Kalliimpi kuin apteekin perussaippua, ja ero on siinä että tämä ei kiristä lainkaan — jos iho reagoi herkästi, se on tuntuva ero kolmen viikon aikana.',
      sv: 'Rengöring med lågt pH och panthenol. Dyrare än apotekets basstvål, och skillnaden är att den inte stramar alls — reagerar din hud lätt märks det över tre veckor.',
    },
    affiliateUrl:
      'https://do.cocopanda.fi/t/t?a=1786468191&as=2101505499&t=2&tk=1&cupa_sku=3315248&url=https://cocopanda.fi/product/3315248',
  },
  {
    id: 'apobase-creme-440',
    name: 'Apobase Creme 30 % 440 g, pumppupullo',
    category: 'aftercare',
    partner: 'olo-apteekki',
    description: {
      fi: 'Keskirasvainen, nopeasti imeytyvä perusvoide ilman hajustetta. Pumppupullo on käytännöllinen tuoreen tatuoinnin kanssa: purkkiin ei tarvitse työntää sormia.',
      sv: 'Medelfet baskräm utan parfym som drar in snabbt. Pumpflaskan är praktisk med en ny tatuering — du behöver inte stoppa fingrarna i burken.',
    },
    affiliateUrl:
      'https://at.oloapteekki.fi/t/t?a=1665046586&as=2101505499&t=2&tk=1&cupa_sku=2206654&url=https://www.oloapteekki.fi/apobase-creme-440-g-emulsiovoide-30',
  },
  {
    id: 'aqualan-200',
    name: 'Aqualan 200 g emulsiovoide',
    category: 'fragrance-free',
    partner: 'olo-apteekki',
    description: {
      fi: 'Suomalainen perusvoiteiden peruskauppatavara: hajusteeton, väriaineeton ja halpa. Juuri se tuote, jota tarkoitetaan kun sanotaan ettei tatuointivoidetta tarvitse ostaa erikseen.',
      sv: 'Den finska baskrämens standardval: oparfymerad, utan färgämnen och billig. Precis den produkt som avses när vi säger att du inte behöver köpa en särskild tatueringssalva.',
    },
    affiliateUrl:
      'https://at.oloapteekki.fi/t/t?a=1665046586&as=2101505499&t=2&tk=1&cupa_sku=9251855&url=https://www.oloapteekki.fi/aqualan-200-g-emulsiovoide',
  },
  {
    id: 'lrp-lipikar-balm-ap-max',
    name: 'La Roche-Posay Lipikar Balm AP+M 400 ml',
    category: 'aftercare',
    partner: 'olo-apteekki',
    description: {
      fi: 'Dermatologinen hoitovoide herkälle ja kutisevalle iholle, hajusteeton. Tämä on se taso, jolle kannattaa maksaa enemmän: 400 ml pumppupullo riittää koko paranemisen yli, eikä kutina yleensä ole ongelma sen kanssa.',
      sv: 'Dermatologisk vårdkräm för känslig och kliande hud, oparfymerad. Det här är nivån där det är värt att betala mer: 400 ml pumpflaska räcker långt förbi läkningen, och klådan brukar inte bli ett problem med den.',
    },
    affiliateUrl:
      'https://at.oloapteekki.fi/t/t?a=1665046586&as=2101505499&t=2&tk=1&cupa_sku=9553725&url=https://www.oloapteekki.fi/lrp-lipikar-balm-ap-max-vartalovoide-400-ml',
  },
  {
    id: 'apobase-carbamide-5',
    name: 'Apobase Carbamide 5 % 250 g',
    category: 'moisturising',
    partner: 'apteekki-360',
    description: {
      fi: 'Ureaa sisältävä perusvoide parantuneen tatuoinnin ylläpitoon. Urea kirvelee avoimella iholla, joten tämä otetaan käyttöön vasta kun kuoriutuminen on kokonaan ohi.',
      sv: 'Baskräm med urea för underhåll av en läkt tatuering. Urea svider på öppen hud, så den här tas i bruk först när fjällningen är helt över.',
    },
    affiliateUrl:
      'https://id.apteekki360.fi/t/t?a=1869094923&as=2101505499&t=2&tk=1&cupa_sku=7541907095804&url=https://apteekki360.fi/products/apobase-carbamide-5-percent-emulsiovoide?variant=42453239595260',
  },
  {
    id: 'cerave-invisible-spf50',
    name: 'CeraVe Invisible Hydrating Sunscreen SPF 50+, 177 ml',
    category: 'spf',
    partner: 'olo-apteekki',
    description: {
      fi: 'SPF 50+ vartalolle, 177 ml. Iso pakkaus on tässä pointti: aurinkosuojaa kuluu paljon, ja liian pieni pullo johtaa liian ohueen kerrokseen. Hajusteeton.',
      sv: 'SPF 50+ för kroppen, 177 ml. Storleken är hela poängen: solskydd går åt fort, och en för liten flaska leder till ett för tunt lager. Oparfymerad.',
    },
    affiliateUrl:
      'https://at.oloapteekki.fi/t/t?a=1665046586&as=2101505499&t=2&tk=1&cupa_sku=9553813&url=https://www.oloapteekki.fi/cerave-invisible-hydrating-sunscreen-spf50-aurinkosuojavoide-177-ml',
  },
];

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
