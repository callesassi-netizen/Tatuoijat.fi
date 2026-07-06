import type { Locale } from '../i18n/ui';

/**
 * Bantade /liity — ren ansöknings-/signup-sida (Netlify-formulär). Den
 * fulla 3-nivå-jämförelsen och priserna bor numera ENBART på /hinnasto
 * (och i src/data/pricing.ts). Här finns bara en kompakt teaser som läser
 * nivånamn/priser ur samma pricing-källa och länkar vidare — de kan aldrig
 * divergera. Sidan är tunn → noindex,follow (LiityPage), /hinnasto rankar.
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
    metaTitle: 'Liity mukaan — luo ilmainen studioprofiili | Tatuoijat.fi',
    metaDescription:
      'Ilmoita studiosi Suomen tatuoijakatalogiin. Luo ilmainen perusprofiili — voit nostaa sen Pro- tai Premium-tasolle milloin tahansa.',
    eyebrow: 'Studioille ja tatuoijille',
    h1: 'Liity mukaan.',
    intro:
      'Asiakkaasi etsivät tekijää kaupungin ja tyylin mukaan. Luo ilmainen perusprofiili — voit nostaa sen Pro- tai Premium-tasolle koska tahansa.',
    teaserTitle: 'Kolme tasoa',
    teaserText:
      'Perus on ilmainen ja tuo sinut hakuun. Pro ja Premium tuovat gallerian, yhteydenoton ja kärkisijoituksen.',
    teaserCta: 'Katso hinnasto ja paketit',
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
    metaTitle: 'Gå med — skapa en gratis studioprofil | Tatuoijat.fi',
    metaDescription:
      'Anmäl din studio till Finlands tatuerarkatalog. Skapa en gratis basprofil — uppgradera till Pro eller Premium när som helst.',
    eyebrow: 'För studios och tatuerare',
    h1: 'Gå med.',
    intro:
      'Dina kunder letar efter en artist per stad och stil. Skapa en gratis basprofil — du kan uppgradera till Pro eller Premium när som helst.',
    teaserTitle: 'Tre nivåer',
    teaserText:
      'Gratis är gratis och tar med dig i sökningen. Pro och Premium ger galleri, kontaktknapp och topplacering.',
    teaserCta: 'Se prislista och paket',
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
