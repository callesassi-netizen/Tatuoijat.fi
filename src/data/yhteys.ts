import type { Locale } from '../i18n/ui';

/**
 * /yhteys (sv /sv/yhteys) — allmän kontaktsida MED rättelse-/borttagnings-
 * begäran för listade företag (CLAUDE.md: "företagsdata är offentlig, men vi
 * svarar snabbt på ändringsönskemål"). Använder det DELADE formuläret
 * (ContactForm, Netlify name="liity") — samma form som /liity, inget separat
 * Netlify-formulär. Här bor bara sidans egen copy + rättelse-/borttagningsnotisen.
 */
export interface YhteysContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  formTitle: string;
  removalTitle: string;
  removalText: string;
}

export const yhteys: Record<Locale, YhteysContent> = {
  fi: {
    metaTitle: 'Ota yhteyttä | Tatuoijat.fi',
    metaDescription:
      'Kysymyksiä, palautetta tai yritystietojen oikaisu- tai poistopyyntö? Ota yhteyttä Tatuoijat.fi-tiimiin — vastaamme kahden arkipäivän sisällä.',
    eyebrow: 'Yhteystiedot',
    h1: 'Ota yhteyttä.',
    intro:
      'Kysymyksiä palvelusta, palautetta tai yritystietojen oikaisu- tai poistopyyntö? Täytä lomake, niin palaamme asiaan kahden arkipäivän sisällä.',
    formTitle: 'Lähetä viesti',
    removalTitle: 'Oikaisu- ja poistopyynnöt',
    removalText:
      'Listatut yritystiedot ovat julkisia, mutta käsittelemme oikaisu- ja poistopyynnöt nopeasti. Valitse aiheeksi oikaisu tai poisto ja kerro viestissä studion nimi ja kaupunki sekä mitä haluat muuttaa tai poistaa.',
  },
  sv: {
    metaTitle: 'Kontakt | Tatuoijat.fi',
    metaDescription:
      'Frågor, feedback eller en begäran om rättelse eller borttagning av företagsuppgifter? Kontakta Tatuoijat.fi — vi svarar inom två vardagar.',
    eyebrow: 'Kontakt',
    h1: 'Kontakta oss.',
    intro:
      'Frågor om tjänsten, feedback eller en begäran om rättelse eller borttagning av företagsuppgifter? Fyll i formuläret så återkommer vi inom två vardagar.',
    formTitle: 'Skicka meddelande',
    removalTitle: 'Rättelse och borttagning',
    removalText:
      'Listade företagsuppgifter är offentliga, men vi hanterar begäranden om rättelse och borttagning snabbt. Välj ämnet rättelse eller borttagning och ange studions namn och stad samt vad du vill ändra eller ta bort.',
  },
};
