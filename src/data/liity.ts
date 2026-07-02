import type { Locale } from '../i18n/ui';

/** Säljsidan /liity (wireframe 3b/3f): gratis vs premium, FAQ, formulär. */
export interface LiityContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  plans: {
    free: { name: string; price: string; period: string; features: string[]; cta: string };
    premium: { name: string; price: string; period: string; features: string[]; cta: string };
  };
  faqTitle: string;
  faq: { q: string; a: string }[];
  formTitle: string;
  form: {
    name: string;
    city: string;
    cityPlaceholder: string;
    email: string;
    instagram: string;
    instagramOptional: string;
    submit: string;
    note: string;
  };
}

export const liity: Record<Locale, LiityContent> = {
  fi: {
    metaTitle: 'Liity mukaan — studioille ja tatuoijille | MUSTE',
    metaDescription:
      'Listaa studiosi ilmaiseksi Suomen tatuoijien katalogiin. Premium (190–290 €/v) tuo featured-paikan, isomman gallerian ja kärkisijoituksen hauissa.',
    eyebrow: 'Studioille ja tatuoijille',
    h1: 'Liity mukaan.',
    intro:
      'Asiakkaasi etsivät tekijää kaupungin ja tyylin mukaan. Ilmainen profiili tuo sinut mukaan hakuun — Premium nostaa sinut kärkeen.',
    plans: {
      free: {
        name: 'Ilmainen',
        price: '0 €',
        period: '/vuosi',
        features: [
          'Profiili yhteystiedoilla ja tyylitageilla',
          'Enintään 5 kuvaa portfoliossa',
          'Näkyvyys kaupunki- ja tyylihauissa',
          'Linkki Instagramiin ja verkkosivuille',
        ],
        cta: 'Luo ilmainen profiili',
      },
      premium: {
        name: 'Premium',
        price: '190–290 €',
        period: '/vuosi',
        features: [
          'Featured-paikka etusivulla ja kaupunkisivun kärjessä',
          'Enintään 24 kuvaa portfoliossa',
          'Kärkisijoitus kaikissa hauissa',
          'Kaikki ilmaisen profiilin ominaisuudet',
        ],
        cta: 'Aloita Premium',
      },
    },
    faqTitle: 'Usein kysyttyä',
    faq: [
      {
        q: 'Kuka voi liittyä?',
        a: 'Suomessa toimivat ammattitatuoijat ja studiot. Edellytämme hygieniapassia ja omavalvontasuunnitelmaa — katalogin luotettavuus on kaikkien etu.',
      },
      {
        q: 'Miten Featured-paikat jaetaan?',
        a: 'Featured-paikkoja on rajattu määrä per kaupunki, ja ne täytetään varausjärjestyksessä. Näin nosto säilyttää arvonsa eikä etusivu täyty mainoksista.',
      },
      {
        q: 'Voinko perua milloin vain?',
        a: 'Kyllä. Premium on vuosisopimus ilman automaattista uusiutumista — saat muistutuksen ennen kauden päättymistä, ja ilmainen profiilisi säilyy vaikka et jatkaisi.',
      },
      {
        q: 'Kenellä on oikeudet kuviin?',
        a: 'Sinulla. Julkaisemme kuvia vain sinun luvallasi, ja voit pyytää niiden poistoa milloin tahansa. Emme koskaan kopioi kuvia Instagramista ilman lupaa.',
      },
    ],
    formTitle: 'Ilmoittaudu',
    form: {
      name: 'Nimi tai studio',
      city: 'Kaupunki',
      cityPlaceholder: 'Valitse kaupunki',
      email: 'Sähköposti',
      instagram: 'Instagram',
      instagramOptional: '(valinnainen)',
      submit: 'Lähetä hakemus',
      note: 'Vastaamme kahden arkipäivän sisällä.',
    },
  },
  sv: {
    metaTitle: 'Gå med — för studios och tatuerare | MUSTE',
    metaDescription:
      'Lista din studio gratis i Finlands tatuerarkatalog. Premium (190–290 €/år) ger featured-plats, större galleri och topplacering i sökningarna.',
    eyebrow: 'För studios och tatuerare',
    h1: 'Gå med.',
    intro:
      'Dina kunder letar efter en artist per stad och stil. En gratis profil tar med dig i sökningen — Premium lyfter dig till toppen.',
    plans: {
      free: {
        name: 'Gratis',
        price: '0 €',
        period: '/år',
        features: [
          'Profil med kontaktuppgifter och stiltaggar',
          'Upp till 5 bilder i portfolion',
          'Synlighet i stads- och stilsökningar',
          'Länk till Instagram och webbplats',
        ],
        cta: 'Skapa gratis profil',
      },
      premium: {
        name: 'Premium',
        price: '190–290 €',
        period: '/år',
        features: [
          'Featured-plats på startsidan och i toppen av stadssidan',
          'Upp till 24 bilder i portfolion',
          'Topplacering i alla sökningar',
          'Allt som ingår i gratisprofilen',
        ],
        cta: 'Starta Premium',
      },
    },
    faqTitle: 'Vanliga frågor',
    faq: [
      {
        q: 'Vem kan gå med?',
        a: 'Professionella tatuerare och studios verksamma i Finland. Vi förutsätter hygienpass och egenkontrollplan — katalogens trovärdighet gynnar alla.',
      },
      {
        q: 'Hur fördelas Featured-platserna?',
        a: 'Antalet Featured-platser per stad är begränsat och de fylls i bokningsordning. Så behåller lyftet sitt värde och startsidan fylls inte av annonser.',
      },
      {
        q: 'Kan jag avsluta när som helst?',
        a: 'Ja. Premium är ett årsavtal utan automatisk förnyelse — du får en påminnelse innan perioden löper ut, och din gratisprofil finns kvar även om du inte fortsätter.',
      },
      {
        q: 'Vem äger rättigheterna till bilderna?',
        a: 'Du. Vi publicerar bilder endast med ditt tillstånd och du kan begära att de tas bort när som helst. Vi kopierar aldrig bilder från Instagram utan lov.',
      },
    ],
    formTitle: 'Anmäl dig',
    form: {
      name: 'Namn eller studio',
      city: 'Stad',
      cityPlaceholder: 'Välj stad',
      email: 'E-post',
      instagram: 'Instagram',
      instagramOptional: '(valfritt)',
      submit: 'Skicka ansökan',
      note: 'Vi svarar inom två vardagar.',
    },
  },
};
