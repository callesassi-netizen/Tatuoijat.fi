import type { Locale } from '../i18n/ui';

/**
 * Strukturerat intag-formulär på tack-sidorna (betalflode-och-kiitos.md,
 * "Intag-formulär"). Netlify Forms (name="aloitus"), samma mönster som
 * ContactForm.astro. Fälten matchar exakt det som ska in i studions
 * frontmatter — gör Calles/Morpheus klipp-och-klistra-jobb minimalt.
 * Bilder tas ALDRIG via detta formulär (Bildpolicy — tillstånd krävs
 * innan publicering), bara en textinstruktion om att mejla dem.
 */
export interface IntakeFormContent {
  studioName: string;
  profileUrl: string;
  email: string;
  descriptionFi: string;
  descriptionSv: string;
  phone: string;
  hours: string;
  hoursPlaceholder: string;
  bookingUrl: string;
  styles: string;
  extraArtistsTitle: string;
  extraArtistsHint: string;
  artistName: string;
  artistInstagram: string;
  photoPermission: string;
  optional: string;
  submit: string;
  note: string;
}

export const intakeForm: Record<Locale, IntakeFormContent> = {
  fi: {
    studioName: 'Studion nimi',
    profileUrl: 'Profiilisi osoite (esim. /artistit/studiosi/)',
    email: 'Sähköposti',
    descriptionFi: 'Kuvaus suomeksi',
    descriptionSv: 'Kuvaus ruotsiksi',
    phone: 'Puhelin',
    hours: 'Aukioloajat',
    hoursPlaceholder: 'Ma–Pe 11–18, La 12–16',
    bookingUrl: 'Varauslinkki tai muu yhteydenottotapa',
    styles: 'Tyylit',
    extraArtistsTitle: 'Studion muut artistit',
    extraArtistsHint: 'Nimi ja Instagram jokaiselle artistille — Premium saa oman artistiprofiilin kullekin.',
    artistName: 'Artistin nimi',
    artistInstagram: 'Instagram (ilman @)',
    photoPermission:
      'Annan luvan julkaista kuvat, jotka lähetän Tatuoijat.fi-profiilissani.',
    optional: '(valinnainen)',
    submit: 'Lähetä tiedot',
    note: 'Käsittelemme tiedot kahden arkipäivän sisällä.',
  },
  sv: {
    studioName: 'Studions namn',
    profileUrl: 'Din profils adress (t.ex. /artistit/din-studio/)',
    email: 'E-post',
    descriptionFi: 'Beskrivning på finska',
    descriptionSv: 'Beskrivning på svenska',
    phone: 'Telefon',
    hours: 'Öppettider',
    hoursPlaceholder: 'Mån–Fre 11–18, Lör 12–16',
    bookingUrl: 'Bokningslänk eller annat sätt att kontakta dig',
    styles: 'Stilar',
    extraArtistsTitle: 'Studions övriga artister',
    extraArtistsHint: 'Namn och Instagram för varje artist — Premium får en egen artistprofil per person.',
    artistName: 'Artistens namn',
    artistInstagram: 'Instagram (utan @)',
    photoPermission: 'Jag ger tillstånd att publicera de bilder jag skickar på min Tatuoijat.fi-profil.',
    optional: '(valfritt)',
    submit: 'Skicka uppgifterna',
    note: 'Vi behandlar uppgifterna inom två vardagar.',
  },
};
