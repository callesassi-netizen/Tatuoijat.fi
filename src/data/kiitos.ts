import type { Locale } from '../i18n/ui';
import type { PaidTier } from './pricing';

/**
 * Tack-sidorna efter Stripe-betalning (betalflode-och-kiitos.md). En sida
 * per nivå (delar KiitosPage.astro) så checklistan blir skräddarsydd:
 * /kiitos-pro, /kiitos-premium (fi) — /tack-pro, /tack-premium (sv).
 * Statiska, noindex — ingen betalningsdata/PII i URL:er eller innehåll.
 *
 * SIDANS ENDA JOBB (analys 2026-08-09, docs/betalflode-analys-2026-08-09.md):
 * få köparen att förstå att (1) beställningen är registrerad, (2) Stripes
 * kvittomejl är kvittot — sajten kan inte verifiera betalningen utan backend,
 * och (3) INGET publiceras förrän formuläret nedan är ifyllt. Punkt 3 är den
 * som saknades: den gamla texten ("profiilisi päivitetään 48 tunnin sisällä")
 * lät som att uppdateringen skedde av sig själv efter betalningen.
 *
 * H1 säger medvetet "tilauksestasi"/"din beställning", inte "maksusta"/
 * "betalningen": med kokeilujakso (Pro 10 pv, Premium 30 pv) debiteras kortet
 * INTE vid kassan, så "kiitos maksusta" vore direkt osant för de flesta som
 * landar här under kampanjen.
 */
export interface KiitosContent {
  metaTitle: Record<PaidTier, string>;
  metaDescription: string;
  h1: string;
  intro: string;

  /** Bekräftelsekort överst: nivå, kvitto, nästa steg. */
  receiptTitle: string;
  receiptTierLabel: string;
  receiptReceiptLabel: string;
  receiptReceiptValue: string;
  receiptNextLabel: string;
  receiptNextValue: string;

  /** Stegraden — samma fyra steg som /hinnasto, steg 3 markerat. */
  stepsTitle: string;
  stepsStatus: string; // "Olet vaiheessa 3/4"
  steps: string[];
  /** 1-indexerat aktivt steg (3 = "täytä tiedot"). */
  stepCurrent: number;

  /** Varningsruta: betalningen ensam publicerar ingenting. */
  warningTitle: string;
  warningText: string;

  nextStepTitle: string;
  checklistIntro: Record<PaidTier, string>;
  checklist: Record<PaidTier, string[]>;
  formTitle: string;
  formIntro: string;

  /** "Hinner du inte nu?" — sidan går att komma tillbaka till. */
  laterTitle: string;
  laterText: string;

  lateNoteText: string;
  lateNoteCta: string;
  backHome: string;

  /** Egen kvittosida dit formuläret postar (Netlify-redirect). */
  submitted: {
    metaTitle: string;
    metaDescription: string;
    h1: string;
    intro: string;
    listTitle: string;
    list: string[];
    contactText: string;
    contactCta: string;
    backHome: string;
  };
}

export const kiitos: Record<Locale, KiitosContent> = {
  fi: {
    metaTitle: {
      pro: 'Kiitos tilauksestasi — Pro | Tatuoijat.fi',
      premium: 'Kiitos tilauksestasi — Premium | Tatuoijat.fi',
    },
    metaDescription:
      'Tilauksesi on vastaanotettu. Täytä studiosi tiedot, niin julkaisemme päivitetyn profiilin kahden arkipäivän kuluessa.',
    h1: 'Kiitos tilauksestasi!',
    intro:
      'Tilauksesi on kirjattu Stripessä. Enää yksi vaihe: täytä studiosi tiedot alla olevalla lomakkeella, niin julkaisemme päivitetyn profiilin kahden arkipäivän kuluessa.',

    receiptTitle: 'Tilauksesi',
    receiptTierLabel: 'Taso',
    receiptReceiptLabel: 'Kuitti',
    receiptReceiptValue:
      'Stripe lähettää kuitin sähköpostiisi — se on virallinen tosite tilauksestasi. Tarkista myös roskaposti.',
    receiptNextLabel: 'Seuraavaksi',
    receiptNextValue: 'Täytä studiosi tiedot tällä sivulla. Se vie noin 5 minuuttia.',

    stepsTitle: 'Missä mennään',
    stepsStatus: 'Olet vaiheessa 3/4',
    steps: ['Taso valittu', 'Maksu tehty', 'Täytä tiedot', 'Julkaisemme profiilin'],
    stepCurrent: 3,

    warningTitle: 'Tärkeää',
    warningText:
      'Profiilisi ei päivity pelkällä maksulla. Emme voi julkaista kuvia tai tietoja, joita emme ole saaneet sinulta — täytä siis lomake alla. Jos lomake jää lähettämättä, tilauksesi jää odottamaan eikä profiilissa näy muutosta.',

    nextStepTitle: 'Seuraava askel',
    checklistIntro: {
      pro: 'Pro-profiili tarvitsee vielä nämä tiedot sinulta:',
      premium: 'Premium-profiili tarvitsee vielä nämä tiedot sinulta:',
    },
    checklist: {
      pro: [
        '3–5 kuvaa parhaista töistäsi',
        'Kuvaus studiostasi (suomeksi ja mielellään ruotsiksi)',
        'Yhteystiedot: puhelin, aukioloajat ja varauslinkki',
        'Vahvistettu-merkki ja galleria näkyvät profiilissasi heti kun tiedot on lisätty',
      ],
      premium: [
        'Laajempi valikoima kuvia töistäsi',
        'Kuvaus studiostasi (suomeksi ja mielellään ruotsiksi)',
        'Yhteystiedot: puhelin, aukioloajat ja varauslinkki',
        'Kaikkien studiosi artistien nimet ja Instagram-tilit',
        'Profiilisi nostetaan kärkeen hauissa ja esille etusivulle heti kun tiedot on lisätty',
      ],
    },
    formTitle: 'Täytä tiedot alla',
    formIntro:
      'Kaikki kentät eivät ole pakollisia — lähetä se mitä sinulla on nyt, voimme täydentää loput myöhemmin.',

    laterTitle: 'Etkö ehdi nyt?',
    laterText:
      'Lisää tämä sivu kirjanmerkkeihin, niin voit palata täyttämään tiedot myöhemmin — sivu ei vanhene. Voit myös lähettää tiedot yhteydenottolomakkeella.',

    lateNoteText: 'Jos jokin meni pieleen tai et saanut kuittia sähköpostiisi,',
    lateNoteCta: 'ota yhteyttä',
    backHome: 'Takaisin etusivulle',

    submitted: {
      metaTitle: 'Tiedot vastaanotettu | Tatuoijat.fi',
      metaDescription: 'Kiitos — studiosi tiedot on vastaanotettu ja profiili päivitetään pian.',
      h1: 'Tiedot vastaanotettu!',
      intro:
        'Kiitos — lomakkeesi tuli perille. Sinun ei tarvitse tehdä enää mitään. Jos jokin on epäselvää, otamme sinuun yhteyttä ilmoittamallasi sähköpostilla.',
      listTitle: 'Mitä tapahtuu seuraavaksi',
      list: [
        'Käymme tiedot ja kuvat läpi kahden arkipäivän kuluessa.',
        'Nostamme profiilisi tasollesi ja lisäämme lähettämäsi tiedot ja kuvat.',
        'Saat sähköpostiisi viestin, kun päivitetty profiili on julkaistu.',
        'Haluatko korjata tai täydentää jotain? Lähetä lomake uudelleen tai ota yhteyttä.',
      ],
      contactText: 'Jos et kuule meistä kahden arkipäivän kuluessa,',
      contactCta: 'ota yhteyttä',
      backHome: 'Takaisin etusivulle',
    },
  },
  sv: {
    metaTitle: {
      pro: 'Tack för din beställning — Pro | Tatuoijat.fi',
      premium: 'Tack för din beställning — Premium | Tatuoijat.fi',
    },
    metaDescription:
      'Din beställning har mottagits. Fyll i studions uppgifter så publicerar vi den uppdaterade profilen inom två vardagar.',
    h1: 'Tack för din beställning!',
    intro:
      'Din beställning är registrerad hos Stripe. Bara ett steg kvar: fyll i studions uppgifter i formuläret nedan, så publicerar vi den uppdaterade profilen inom två vardagar.',

    receiptTitle: 'Din beställning',
    receiptTierLabel: 'Nivå',
    receiptReceiptLabel: 'Kvitto',
    receiptReceiptValue:
      'Stripe skickar kvittot till din e-post — det är det officiella underlaget för beställningen. Kolla även skräpposten.',
    receiptNextLabel: 'Härnäst',
    receiptNextValue: 'Fyll i studions uppgifter på den här sidan. Det tar ungefär 5 minuter.',

    stepsTitle: 'Var i flödet du är',
    stepsStatus: 'Du är i steg 3/4',
    steps: ['Nivå vald', 'Betalning gjord', 'Fyll i uppgifter', 'Vi publicerar profilen'],
    stepCurrent: 3,

    warningTitle: 'Viktigt',
    warningText:
      'Profilen uppdateras inte av betalningen ensam. Vi kan inte publicera bilder eller uppgifter vi inte fått av dig — fyll därför i formuläret nedan. Skickas det aldrig in blir beställningen liggande och ingenting syns på profilen.',

    nextStepTitle: 'Nästa steg',
    checklistIntro: {
      pro: 'Din Pro-profil behöver fortfarande dessa uppgifter från dig:',
      premium: 'Din Premium-profil behöver fortfarande dessa uppgifter från dig:',
    },
    checklist: {
      pro: [
        '3–5 bilder på dina bästa arbeten',
        'Beskrivning av din studio (på finska och gärna svenska)',
        'Kontaktuppgifter: telefon, öppettider och bokningslänk',
        'Verifierad-märket och galleriet syns på din profil så snart uppgifterna är tillagda',
      ],
      premium: [
        'Ett bredare urval bilder på dina arbeten',
        'Beskrivning av din studio (på finska och gärna svenska)',
        'Kontaktuppgifter: telefon, öppettider och bokningslänk',
        'Namn och Instagram för alla artister på din studio',
        'Din profil lyfts till toppen i sökningar och visas på startsidan så snart uppgifterna är tillagda',
      ],
    },
    formTitle: 'Fyll i uppgifterna nedan',
    formIntro:
      'Alla fält är inte obligatoriska — skicka det du har nu, resten kan vi komplettera senare.',

    laterTitle: 'Hinner du inte nu?',
    laterText:
      'Spara den här sidan som bokmärke så kan du återvända och fylla i uppgifterna senare — sidan går inte ut. Du kan också skicka uppgifterna via kontaktformuläret.',

    lateNoteText: 'Om något gick fel eller du inte fick något kvitto till din e-post,',
    lateNoteCta: 'kontakta oss',
    backHome: 'Tillbaka till startsidan',

    submitted: {
      metaTitle: 'Uppgifterna mottagna | Tatuoijat.fi',
      metaDescription: 'Tack — studions uppgifter har mottagits och profilen uppdateras snart.',
      h1: 'Uppgifterna är mottagna!',
      intro:
        'Tack — formuläret kom fram. Du behöver inte göra något mer. Är något oklart hör vi av oss till e-postadressen du angav.',
      listTitle: 'Det här händer härnäst',
      list: [
        'Vi går igenom uppgifterna och bilderna inom två vardagar.',
        'Vi lyfter profilen till din nivå och lägger in uppgifterna och bilderna du skickat.',
        'Du får ett mejl när den uppdaterade profilen är publicerad.',
        'Vill du rätta eller komplettera något? Skicka formuläret igen eller kontakta oss.',
      ],
      contactText: 'Om du inte hör från oss inom två vardagar,',
      contactCta: 'kontakta oss',
      backHome: 'Tillbaka till startsidan',
    },
  },
};

/** Tack-sidornas paths per språk och nivå (fi: kiitos-, sv: tack-). */
export const KIITOS_PATHS: Record<Locale, Record<PaidTier, string>> = {
  fi: { pro: '/kiitos-pro/', premium: '/kiitos-premium/' },
  sv: { pro: '/tack-pro/', premium: '/tack-premium/' },
};

/**
 * Kvittosidan som intag-formuläret postar till (Netlify-redirect efter
 * lyckad submit). Tidigare postade formuläret till tack-sidan SJÄLV, vilket
 * innebar att köparen efter submit landade på en identisk sida med ett tomt
 * formulär — inget synligt hände. Egna paths per språk.
 */
export const SUBMITTED_PATHS: Record<Locale, string> = {
  fi: '/tiedot-vastaanotettu/',
  sv: '/uppgifter-mottagna/',
};
