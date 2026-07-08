import type { Locale } from '../i18n/ui';

/**
 * ETT delat formulär för hela sajten (Netlify form name="liity") — används
 * BÅDE på /liity (studio-anmälan) och /yhteys (kontakt + rättelse/borttagning).
 * Ett enda formulär i Netlify, inga dubbletter. "Aihe/Ämne"-fältet skiljer på
 * intentionen; nivån från /hinnasto-korten följer med i ett dolt taso-fält.
 *
 * `reasons[].value` är stabila slugs (samma fi/sv) — det är dessa som hamnar
 * i Netlify-inlämningen; bara etiketten översätts.
 */
export interface ContactFormContent {
  reason: string;
  reasons: { value: string; label: string }[];
  name: string;
  email: string;
  city: string;
  cityNone: string;
  instagram: string;
  optional: string;
  message: string;
  submit: string;
  note: string;
}

export const contactForm: Record<Locale, ContactFormContent> = {
  fi: {
    reason: 'Aihe',
    reasons: [
      { value: 'liity', label: 'Liity mukaan (studioprofiili)' },
      { value: 'kysymys', label: 'Yleinen kysymys' },
      { value: 'oikaisu', label: 'Yritystietojen oikaisu' },
      { value: 'poisto', label: 'Listauksen poisto' },
      { value: 'muu', label: 'Muu' },
    ],
    name: 'Nimi tai studio',
    email: 'Sähköposti',
    city: 'Kaupunki',
    cityNone: '— (valinnainen)',
    instagram: 'Instagram',
    optional: '(valinnainen)',
    message: 'Viesti',
    submit: 'Lähetä',
    note: 'Vastaamme kahden arkipäivän sisällä.',
  },
  sv: {
    reason: 'Ämne',
    reasons: [
      { value: 'liity', label: 'Gå med (studioprofil)' },
      { value: 'kysymys', label: 'Allmän fråga' },
      { value: 'oikaisu', label: 'Rättelse av företagsuppgifter' },
      { value: 'poisto', label: 'Borttagning av listning' },
      { value: 'muu', label: 'Annat' },
    ],
    name: 'Namn eller studio',
    email: 'E-post',
    city: 'Stad',
    cityNone: '— (valfritt)',
    instagram: 'Instagram',
    optional: '(valfritt)',
    message: 'Meddelande',
    submit: 'Skicka',
    note: 'Vi svarar inom två vardagar.',
  },
};
