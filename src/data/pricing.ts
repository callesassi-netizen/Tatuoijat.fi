import type { Locale } from '../i18n/ui';

/**
 * ENDA sanningskällan för paketnivåer, priser, Stripe-länkar och
 * feature-matrisen. BÅDE /hinnasto (säljsidan) och det bantade /liity
 * (ansökningsformuläret) läser härifrån — de kan aldrig divergera igen.
 *
 * Nivå-sluggen (tier) är ett stabilt kod-id och matchar frontmatter-fältet
 * `tier` i studios-collectionen. Det USER-FACING namnet på gratisnivån är
 * "Ilmainen" (fi) / "Gratis" (sv) — aldrig "Perus" i UI:t (Calles beslut
 * 2026-07-06: gratis = tydligare). Sluggen förblir `perus` internt.
 */

export type Tier = 'perus' | 'pro' | 'premium';
export type PaidTier = 'pro' | 'premium';

/** Visnings-/sorteringsordning: gratis → betald → topp. */
export const TIER_ORDER: readonly Tier[] = ['perus', 'pro', 'premium'] as const;

// ── PRISER: PLATSHÅLLARE (Calle justerar). Ändra HÄR — enda stället. ──
// Årsvis, recurring. Pro blir "det rimliga valet", Premium ankrar uppåt.
export const TIER_PRICE: Record<Tier, number> = { perus: 0, pro: 129, premium: 279 };

// En Stripe Payment Link per betald nivå. Byt platshållarna mot Calles
// riktiga länkar när de kommer — inget annat behöver röras. Nivån sätts
// manuellt i studions frontmatter (`tier:`) efter betalning.
export const STRIPE_LINKS: Record<PaidTier, string> = {
  pro: 'https://buy.stripe.com/PLACEHOLDER_PRO',
  premium: 'https://buy.stripe.com/PLACEHOLDER_PREMIUM',
};

/**
 * Betalning är MANUELL i MVP (faktura/Payment Link — CLAUDE.md). Tills Calle
 * har riktiga Stripe-länkar leder ALLA nivåer till ansökningsformuläret
 * (/liity), så inga döda buy.stripe.com-länkar syns i produktion. När Stripe
 * är skarpt: byt STRIPE_LINKS ovan och sätt denna till true — då går de
 * betalda korten direkt till Stripe. Inget annat behöver röras.
 */
export const PAYMENTS_LIVE = false;

/** Formaterat pris, t.ex. "0 €" / "129 €". Samma format fi/sv. */
export function priceLabel(tier: Tier): string {
  return `${TIER_PRICE[tier]} €`;
}

/** En matrisrad: ✓ (true) / — (false) / fritext per nivå. */
export interface MatrixRow {
  label: string;
  perus: boolean | string;
  pro: boolean | string;
  premium: boolean | string;
}

interface TierCard {
  name: string; // Ilmainen / Pro / Premium
  tagline: string; // värdeaxeln, en mening
  period: string; // "/vuosi" resp "/år" (tom för gratis om man vill)
  features: string[]; // kortlista på priskortet
  cta: string; // knapptext
  ctaNote?: string; // liten rad under CTA (t.ex. gratisnivåns "ingen betalning")
}

/**
 * Ett benefit-/teaser-kort under priskorten ("Näin studiosi erottuu").
 * `tier` kopplar diskret nyttan till rätt nivå (galleria/hinta/varaus = Pro,
 * kärki/etusivu/raportti = Premium); utelämnas för nyttor som gäller alla
 * nivåer (t.ex. walk-in-merkki, som är gratis datafält oavsett nivå — får
 * ALDRIG taggas Pro/Premium, det vore osant).
 *
 * OBS (kommande schema-uppgift): teasern "hinta-alue / alkaen-hinta"
 * förutsätter ett FRAMTIDA studios-fält (t.ex. priceFrom/priceRange) som
 * INTE finns ännu. Detta är enbart sälj-copy mot studios — bygg fältet
 * separat senare (liten content.config.ts-utökning + rendering på profilen).
 */
interface BenefitCard {
  title: string; // slagkraftig nytto-rubrik (aldrig obelagt superlativ)
  text: string; // en mening som konkretiserar
  tier?: PaidTier; // diskret nivåkoppling; utelämnas = gäller alla
}

export interface PricingContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  popularLabel: string; // "Suosituin" ovanpå Pro-kortet
  tiers: Record<Tier, TierCard>;
  matrixTitle: string;
  matrixFeatureHead: string; // kolumnrubrik för feature-kolumnen
  yes: string; // a11y-text för ✓
  no: string; // a11y-text för —
  matrix: MatrixRow[];
  // Benefit-/teaser-sektion under priskorten (säljande mot studios).
  benefits: { title: string; items: BenefitCard[] };
  faqTitle: string;
  faq: { q: string; a: string }[];
  // Diskret claim-CTA på GRATISprofiler → /hinnasto. `unlock` listar vad
  // man låser upp; `locks` = ett par gråtonade 🔒-etiketter på profilen.
  claim: { question: string; unlock: string; cta: string; locks: string[] };
}

export const pricing: Record<Locale, PricingContent> = {
  fi: {
    metaTitle: 'Hinnasto studioille — Perus, Pro ja Premium | Tatuoijat.fi',
    metaDescription:
      'Listaa studiosi Suomen tatuoijakatalogiin. Ilmainen perusprofiili, Pro (129 €/v) galleria ja yhteydenotto, Premium (279 €/v) kärkisijoitus ja etusivunäkyvyys.',
    eyebrow: 'Studioille ja tatuoijille',
    h1: 'Valitse tasosi.',
    intro:
      'Perusprofiili on ilmainen ja tuo sinut mukaan kaupunki- ja tyylihakuun. Pro tekee profiilistasi täyden ja tavoitettavan. Premium nostaa sinut kärkeen ja etusivulle.',
    popularLabel: 'Suosituin',
    tiers: {
      perus: {
        name: 'Ilmainen',
        tagline: 'Sinut löydetään.',
        period: '/vuosi',
        features: [
          'Listaus kaupunki- ja tyylihauissa',
          'Indeksoituva profiilisivu (schema.org)',
          'Linkki Instagramiin',
          'Monogrammilaatta profiilikuvana',
        ],
        cta: 'Aloita ilmaiseksi',
        ctaNote: 'Ei korttia, ei sitoutumista.',
      },
      pro: {
        name: 'Pro',
        tagline: 'Näytät täydeltä ja sinut tavoittaa.',
        period: '/vuosi',
        features: [
          'Kaikki Ilmaisen ominaisuudet',
          'Galleria: 3–5 omaa kuvaa',
          'Vahvistettu-merkki profiilissa',
          'Varaa aika / ota yhteyttä -painike',
          'Täydet yhteystiedot ja kuvaus (fi + sv)',
          'Sijoitus ilmaislistausten yläpuolella',
        ],
        cta: 'Valitse Pro',
      },
      premium: {
        name: 'Premium',
        tagline: 'Olet ensimmäisenä ja näyt kaikkialla.',
        period: '/vuosi',
        features: [
          'Kaikki Pron ominaisuudet',
          'Kärki-/pinnattu sijoitus hauissa',
          'Kultainen Featured-merkki',
          'Esillä etusivulla ja kaupungin kärjessä',
          'Useita artistiprofiileja studiolle',
          'Suositukset naapurisivuilla + kuukausiraportti',
        ],
        cta: 'Valitse Premium',
      },
    },
    matrixTitle: 'Vertaile tasoja',
    matrixFeatureHead: 'Ominaisuus',
    yes: 'Sisältyy',
    no: 'Ei sisälly',
    matrix: [
      { label: 'Listaus katalogissa (kaupunki + tyyli)', perus: true, pro: true, premium: true },
      { label: 'Indeksoituva profiilisivu + schema.org', perus: true, pro: true, premium: true },
      { label: 'Linkki Instagramiin', perus: true, pro: true, premium: true },
      {
        label: 'Kuva profiilissa',
        perus: 'Monogrammilaatta',
        pro: 'Galleria 3–5 kuvaa',
        premium: 'Laajennettu galleria + video',
      },
      { label: 'Vahvistettu-merkki', perus: false, pro: true, premium: true },
      {
        label: 'Profiilin hallinta',
        perus: 'Oikaisupyyntö',
        pro: 'Muokkaus',
        premium: 'Muokkaus',
      },
      {
        label: 'Kuvaus (fi + sv)',
        perus: 'Lyhyt autoteksti',
        pro: 'Täysi teksti',
        premium: 'Täysi teksti',
      },
      {
        label: 'Yhteystiedot (verkko, puhelin, osoite, aukiolot)',
        perus: 'Minimi',
        pro: 'Täydet',
        premium: 'Täydet',
      },
      { label: 'Varaa aika / ota yhteyttä -painike', perus: false, pro: true, premium: true },
      {
        label: 'Sijoitus kaupunki- ja tyylilistoissa',
        perus: 'Vakio (aakkoset)',
        pro: 'Gratislistausten yllä',
        premium: 'Kärki / pinnattu',
      },
      { label: 'Kultainen Featured-merkki', perus: false, pro: false, premium: true },
      { label: 'Esillä etusivulla + kaupungin kärjessä', perus: false, pro: false, premium: true },
      {
        label: 'Artistiprofiilit studion alla',
        perus: false,
        pro: '1',
        premium: 'Useita',
      },
      { label: 'Suositukset naapurisivuilla', perus: false, pro: false, premium: true },
      {
        label: 'Kävijä-/liidiraportti',
        perus: false,
        pro: false,
        premium: 'Kuukausimail',
      },
      { label: 'Toimituksellinen spotlight (lisä-SEO-sivu)', perus: false, pro: false, premium: 'Valinnainen' },
      { label: 'Priorisoitu tuki', perus: false, pro: false, premium: true },
    ],
    benefits: {
      title: 'Näin studiosi erottuu',
      items: [
        {
          title: 'Näytä työsi, älä vain nimeäsi.',
          text: 'Ilmainen näyttää monogrammin; Pro tuo galleriasi esiin.',
          tier: 'pro',
        },
        {
          title: 'Kerro hintasi ennen kuin asiakas ehtii kysyä.',
          text: 'Lisää hinta-alue tai alkaen-hinta profiiliisi.',
          tier: 'pro',
        },
        {
          title: 'Näy ensimmäisenä kaupungissasi.',
          text: 'Premium nostaa sinut kärkeen ja etusivulle.',
          tier: 'premium',
        },
        {
          title: 'Ota walk-in-asiakkaat kiinni.',
          text: 'Walk-in-merkki ja näkyvyys walk-in-haussa.',
        },
        {
          title: 'Anna asiakkaan varata suoraan.',
          text: 'Ajanvaraus- ja yhteydenottonappi profiilissasi.',
          tier: 'pro',
        },
        {
          title: 'Näe kuinka moni löysi sinut.',
          text: 'Kuukausiraportti profiilisi näyttökerroista.',
          tier: 'premium',
        },
      ],
    },
    faqTitle: 'Usein kysyttyä',
    faq: [
      {
        q: 'Mitä paketti sisältää?',
        a: 'Ilmainen perusprofiili tuo sinut kaupunki- ja tyylihakuun monogrammilaatalla ja Instagram-linkillä. Pro lisää oman gallerian, täydet yhteystiedot, yhteydenottopainikkeen ja vahvistetun profiilin. Premium tuo lisäksi kärkisijoituksen, etusivunäkyvyyden ja kultaisen Featured-merkin.',
      },
      {
        q: 'Miten otan profiilini haltuun?',
        a: 'Studiosi voi jo olla listattu ilmaisena perusprofiilina. Valitse Pro tai Premium, niin vahvistamme että olet studion edustaja ja avaamme muokkausoikeudet — sen jälkeen voit lisätä kuvat, kuvauksen ja yhteystiedot.',
      },
      {
        q: 'Miten maksu toimii?',
        a: 'Jokaisella maksullisella tasolla on oma turvallinen Stripe-maksulinkki. Hinta on vuosimaksu ilman automaattista uusiutumista — saat muistutuksen ennen kauden päättymistä.',
      },
      {
        q: 'Voinko vaihtaa tasoa myöhemmin?',
        a: 'Kyllä. Voit nostaa tason Prosta Premiumiin milloin tahansa, ja ilmainen profiilisi säilyy vaikka et jatkaisi maksullisella tasolla.',
      },
      {
        q: 'Kuka omistaa kuvat?',
        a: 'Sinä. Julkaisemme portfoliokuvia vain sinun luvallasi emmekä koskaan kopioi niitä Instagramista ilman lupaa. Voit pyytää kuvien poistoa milloin tahansa.',
      },
    ],
    claim: {
      question: 'Onko tämä sinun studiosi?',
      unlock: 'Lisää galleria, hinta-alue, walk-in ja ajanvarausnappi.',
      cta: 'Ota profiili haltuun',
      locks: ['Hinta-alue', 'Galleria'],
    },
  },
  sv: {
    metaTitle: 'Prislista för studios — Gratis, Pro och Premium | Tatuoijat.fi',
    metaDescription:
      'Lista din studio i Finlands tatuerarkatalog. Gratis basprofil, Pro (129 €/år) med galleri och kontaktknapp, Premium (279 €/år) med topplacering och startsidesplats.',
    eyebrow: 'För studios och tatuerare',
    h1: 'Välj din nivå.',
    intro:
      'Basprofilen är gratis och tar med dig i stads- och stilsökningen. Pro gör din profil komplett och nåbar. Premium lyfter dig till toppen och till startsidan.',
    popularLabel: 'Populärast',
    tiers: {
      perus: {
        name: 'Gratis',
        tagline: 'Du blir hittad.',
        period: '/år',
        features: [
          'Listning i stads- och stilsökningar',
          'Indexerbar profilsida (schema.org)',
          'Länk till Instagram',
          'Monogramplatta som profilbild',
        ],
        cta: 'Börja gratis',
        ctaNote: 'Inget kort, ingen bindning.',
      },
      pro: {
        name: 'Pro',
        tagline: 'Du ser komplett ut och går att nå.',
        period: '/år',
        features: [
          'Allt i Gratis',
          'Galleri: 3–5 egna bilder',
          'Verifierad-märke på profilen',
          'Boka tid / kontakta-knapp',
          'Fulla kontaktuppgifter och beskrivning (fi + sv)',
          'Placering ovanför gratislistningar',
        ],
        cta: 'Välj Pro',
      },
      premium: {
        name: 'Premium',
        tagline: 'Du är först och syns överallt.',
        period: '/år',
        features: [
          'Allt i Pro',
          'Topp-/pinnad placering i sökningar',
          'Guld Featured-märke',
          'Visas på startsidan och i stadens topp',
          'Flera artistprofiler under studion',
          'Rekommendationer på närliggande sidor + månadsrapport',
        ],
        cta: 'Välj Premium',
      },
    },
    matrixTitle: 'Jämför nivåerna',
    matrixFeatureHead: 'Funktion',
    yes: 'Ingår',
    no: 'Ingår inte',
    matrix: [
      { label: 'Listning i katalogen (stad + stil)', perus: true, pro: true, premium: true },
      { label: 'Indexerbar profilsida + schema.org', perus: true, pro: true, premium: true },
      { label: 'Länk till Instagram', perus: true, pro: true, premium: true },
      {
        label: 'Bild på profilen',
        perus: 'Monogramplatta',
        pro: 'Galleri 3–5 bilder',
        premium: 'Utökat galleri + video',
      },
      { label: 'Verifierad-märke', perus: false, pro: true, premium: true },
      {
        label: 'Hantera profilen',
        perus: 'Begära rättelse',
        pro: 'Redigera',
        premium: 'Redigera',
      },
      {
        label: 'Beskrivning (fi + sv)',
        perus: 'Kort autotext',
        pro: 'Full text',
        premium: 'Full text',
      },
      {
        label: 'Kontaktuppgifter (webb, telefon, adress, öppettider)',
        perus: 'Minimal',
        pro: 'Fulla',
        premium: 'Fulla',
      },
      { label: 'Boka tid / kontakta-knapp', perus: false, pro: true, premium: true },
      {
        label: 'Placering i stads- och stillistor',
        perus: 'Standard (alfabetisk)',
        pro: 'Ovanför gratislistningar',
        premium: 'Topp / pinnad',
      },
      { label: 'Guld Featured-märke', perus: false, pro: false, premium: true },
      { label: 'Visas på startsidan + stadens topp', perus: false, pro: false, premium: true },
      {
        label: 'Artistprofiler under studion',
        perus: false,
        pro: '1',
        premium: 'Flera',
      },
      { label: 'Rekommendationer på närliggande sidor', perus: false, pro: false, premium: true },
      {
        label: 'Besöks-/leadsrapport',
        perus: false,
        pro: false,
        premium: 'Månadsmail',
      },
      { label: 'Redaktionellt spotlight (extra SEO-sida)', perus: false, pro: false, premium: 'Tillval' },
      { label: 'Prioriterad support', perus: false, pro: false, premium: true },
    ],
    benefits: {
      title: 'Så sticker din studio ut',
      items: [
        {
          title: 'Visa dina verk, inte bara ditt namn.',
          text: 'Gratis visar ett monogram; Pro lyfter fram ditt galleri.',
          tier: 'pro',
        },
        {
          title: 'Berätta ditt pris innan kunden hinner fråga.',
          text: 'Lägg till ett prisintervall eller från-pris i din profil.',
          tier: 'pro',
        },
        {
          title: 'Synas först i din stad.',
          text: 'Premium lyfter dig till toppen och startsidan.',
          tier: 'premium',
        },
        {
          title: 'Fånga upp walk-in-kunderna.',
          text: 'Walk-in-märke och synlighet i walk-in-sökningen.',
        },
        {
          title: 'Låt kunden boka direkt.',
          text: 'Boknings- och kontaktknapp på din profil.',
          tier: 'pro',
        },
        {
          title: 'Se hur många som hittade dig.',
          text: 'Månadsrapport över visningar av din profil.',
          tier: 'premium',
        },
      ],
    },
    faqTitle: 'Vanliga frågor',
    faq: [
      {
        q: 'Vad ingår i paketen?',
        a: 'Den gratis basprofilen tar med dig i stads- och stilsökningen med monogramplatta och Instagram-länk. Pro lägger till eget galleri, fulla kontaktuppgifter, en kontaktknapp och en verifierad profil. Premium ger dessutom topplacering, synlighet på startsidan och guld Featured-märket.',
      },
      {
        q: 'Hur tar jag över min profil?',
        a: 'Din studio kan redan vara listad som en gratis basprofil. Välj Pro eller Premium, så bekräftar vi att du representerar studion och öppnar redigeringsrätt — sedan kan du lägga till bilder, beskrivning och kontaktuppgifter.',
      },
      {
        q: 'Hur fungerar betalningen?',
        a: 'Varje betald nivå har en egen säker Stripe-betalningslänk. Priset är en årsavgift utan automatisk förnyelse — du får en påminnelse innan perioden löper ut.',
      },
      {
        q: 'Kan jag byta nivå senare?',
        a: 'Ja. Du kan uppgradera från Pro till Premium när som helst, och din gratisprofil finns kvar även om du inte fortsätter på en betald nivå.',
      },
      {
        q: 'Vem äger bilderna?',
        a: 'Du. Vi publicerar portfoliobilder endast med ditt tillstånd och kopierar dem aldrig från Instagram utan lov. Du kan begära att de tas bort när som helst.',
      },
    ],
    claim: {
      question: 'Är det här din studio?',
      unlock: 'Lägg till galleri, prisintervall, walk-in och bokningsknapp.',
      cta: 'Ta över profilen',
      locks: ['Prisintervall', 'Galleri'],
    },
  },
};
