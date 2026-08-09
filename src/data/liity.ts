import type { Locale } from '../i18n/ui';

/**
 * /liity — "puuttuuko studiosi?". Sidan är INTE en registrering: den ber om
 * ett vanligt meddelande (nimi / sähköposti / viesti) och Calle lägger upp
 * studion manuellt. Omskriven 2026-08-09 efter att två av två inskick (27/7,
 * 5/8) övergavs efter e-postfältet — det gamla formuläret läste som ett
 * konto-skapande som sajten inte ens har.
 *
 * Den fulla 3-nivå-jämförelsen och priserna bor ENBART på /hinnasto (och i
 * src/data/pricing.ts); här finns bara en kompakt teaser som läser nivånamn/
 * priser ur samma källa — de kan aldrig divergera. Tunn sida → noindex,follow
 * (LiityPage), /hinnasto är den som rankar.
 */
export interface LiityContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  teaserTitle: string;
  teaserText: string;
  teaserCta: string;
  formTitle: string;
  /** Ledtext direkt ovanför formuläret — sätter förväntan (inget konto). */
  formLead: string;
}

export const liity: Record<Locale, LiityContent> = {
  fi: {
    metaTitle: 'Puuttuuko studiosi? — ilmoita meille | Tatuoijat.fi',
    metaDescription:
      'Jos studiotasi tai sinua ei löydy Suomen tatuoijakatalogista, lähetä meille viesti. Perustason listaus on ilmainen.',
    eyebrow: 'Studioille ja tatuoijille',
    h1: 'Puuttuuko studiosi?',
    intro:
      'Asiakkaasi etsivät tekijää kaupungin ja tyylin mukaan. Jos sinua ei vielä näy Tatuoijat.fi:ssä, kerro siitä — perustason listaus on ilmainen.',
    teaserTitle: 'Kolme tasoa',
    teaserText:
      'Perus on ilmainen ja tuo sinut hakuun. Pro ja Premium tuovat gallerian, yhteydenoton ja kärkisijoituksen.',
    teaserCta: 'Katso hinnasto ja paketit',
    formTitle: 'Lähetä viesti',
    formLead:
      'Onko sinulla studio, jota ei näy täällä? Lähetä meille viesti, niin katsomme voimmeko lisätä sinut. Et tarvitse tunnuksia — riittää että kerrot kuka olet ja missä.',
  },
  sv: {
    metaTitle: 'Saknas din studio? — hör av dig | Tatuoijat.fi',
    metaDescription:
      'Hittar du inte din studio i Finlands tatuerarkatalog? Skicka ett meddelande till oss. Listning på basnivå är gratis.',
    eyebrow: 'För studios och tatuerare',
    h1: 'Saknas din studio?',
    intro:
      'Dina kunder letar efter en artist per stad och stil. Syns du inte på Tatuoijat.fi ännu? Hör av dig — listning på basnivå är gratis.',
    teaserTitle: 'Tre nivåer',
    teaserText:
      'Gratis är gratis och tar med dig i sökningen. Pro och Premium ger galleri, kontaktknapp och topplacering.',
    teaserCta: 'Se prislista och paket',
    formTitle: 'Skicka ett meddelande',
    formLead:
      'Har du en studio som inte syns här? Skicka ett meddelande så kikar vi på om vi kan lägga upp dig. Du behöver inget konto — berätta bara vem du är och var du finns.',
  },
};
