import type { Locale } from '../i18n/ui';

/**
 * Strukturerat intag-formulär på tack-sidorna (betalflode-och-kiitos.md,
 * "Intag-formulär"). Delar Netlify-formuläret "liity" med ContactForm.astro
 * (samma name=, redan konfigurerad och bekräftat fungerande e-postnotis i
 * Netlify-dashboarden — se IntakeForm.astro för varför). Bilderna laddas
 * upp direkt i formuläret (filfält) och når Calle via samma notis.
 * Granskning (bildtillstånd/kvalitet) sker fortfarande innan de läggs i
 * studions galleri (Bildpolicy).
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
  photos: string;
  photosHint: Record<'pro' | 'premium', string>;
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
    photos: 'Kuvat',
    photosHint: {
      pro: '3–5 parasta työtäsi (jpg/png).',
      premium: 'Laajempi valikoima töistäsi — halutessasi mukaan myös video.',
    },
    photoPermission: 'Annan luvan julkaista tässä lähettämäni kuvat Tatuoijat.fi-profiilissani.',
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
    photos: 'Bilder',
    photosHint: {
      pro: '3–5 av dina bästa arbeten (jpg/png).',
      premium: 'Ett bredare urval av dina arbeten — gärna även video.',
    },
    photoPermission: 'Jag ger tillstånd att publicera bilderna jag skickar här på min Tatuoijat.fi-profil.',
    optional: '(valfritt)',
    submit: 'Skicka uppgifterna',
    note: 'Vi behandlar uppgifterna inom två vardagar.',
  },
};
