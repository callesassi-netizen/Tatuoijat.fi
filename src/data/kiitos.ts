import type { Locale } from '../i18n/ui';
import type { PaidTier } from './pricing';

/**
 * Tack-sidorna efter Stripe-betalning (betalflode-och-kiitos.md). En sida
 * per nivå (delar KiitosPage.astro) så checklistan blir skräddarsydd:
 * /kiitos-pro, /kiitos-premium (fi) — /tack-pro, /tack-premium (sv).
 * Statiska, noindex — ingen betalningsdata/PII i URL:er eller innehåll.
 */

// PLATSHÅLLARE — Calle: byt till en riktig, övervakad inbox på tatuoijat.fi
// (samma mönster som STRIPE_LINKS hade innan riktiga länkar kom). Bilder
// tas via mejl, inte formulär (Bildpolicy — tillstånd krävs innan publicering).
export const PHOTO_SUBMISSION_EMAIL = 'kuvat@tatuoijat.fi';

export interface KiitosContent {
  metaTitle: Record<PaidTier, string>;
  metaDescription: string;
  h1: string;
  intro: string;
  nextStepTitle: string;
  checklistIntro: Record<PaidTier, string>;
  checklist: Record<PaidTier, string[]>;
  formTitle: string;
  photoNotePrefix: string;
  photoNoteSuffix: string;
  lateNoteText: string;
  lateNoteCta: string;
  backHome: string;
}

export const kiitos: Record<Locale, KiitosContent> = {
  fi: {
    metaTitle: {
      pro: 'Kiitos maksusta — Pro | Tatuoijat.fi',
      premium: 'Kiitos maksusta — Premium | Tatuoijat.fi',
    },
    metaDescription: 'Kiitos tilauksestasi. Profiilisi nostetaan kärkeen ja päivitetään 48 tunnin sisällä.',
    h1: 'Kiitos maksusta!',
    intro:
      'Tilauksesi on vastaanotettu. Profiilisi nostetaan kärkeen ja päivitetään 48 tunnin sisällä. Saat vahvistuksen sähköpostiisi.',
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
        'Laajempi valikoima kuvia töistäsi (ja halutessasi video)',
        'Kuvaus studiostasi (suomeksi ja mielellään ruotsiksi)',
        'Yhteystiedot: puhelin, aukioloajat ja varauslinkki',
        'Kaikkien studiosi artistien nimet ja Instagram-tilit',
        'Profiilisi nostetaan kärkeen hauissa ja esille etusivulle heti kun tiedot on lisätty',
      ],
    },
    formTitle: 'Täytä tiedot alla',
    photoNotePrefix: 'Lähetä yllä mainitut kuvat sähköpostitse osoitteeseen',
    photoNoteSuffix: '— lisäämme ne profiiliisi heti saatuamme luvan julkaista ne.',
    lateNoteText: 'Jos maksu ei näy meillä 48 tunnin sisällä,',
    lateNoteCta: 'ota yhteyttä',
    backHome: 'Takaisin etusivulle',
  },
  sv: {
    metaTitle: {
      pro: 'Tack för betalningen — Pro | Tatuoijat.fi',
      premium: 'Tack för betalningen — Premium | Tatuoijat.fi',
    },
    metaDescription: 'Tack för din beställning. Din profil lyfts till toppen och uppdateras inom 48 timmar.',
    h1: 'Tack för betalningen!',
    intro:
      'Din beställning har mottagits. Din profil lyfts till toppen och uppdateras inom 48 timmar. Du får en bekräftelse till din e-post.',
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
        'Ett bredare urval bilder på dina arbeten (och gärna video)',
        'Beskrivning av din studio (på finska och gärna svenska)',
        'Kontaktuppgifter: telefon, öppettider och bokningslänk',
        'Namn och Instagram för alla artister på din studio',
        'Din profil lyfts till toppen i sökningar och visas på startsidan så snart uppgifterna är tillagda',
      ],
    },
    formTitle: 'Fyll i uppgifterna nedan',
    photoNotePrefix: 'Skicka bilderna ovan via e-post till',
    photoNoteSuffix: '— vi lägger till dem på din profil så snart vi har fått tillstånd att publicera dem.',
    lateNoteText: 'Om betalningen inte syns hos oss inom 48 timmar,',
    lateNoteCta: 'kontakta oss',
    backHome: 'Tillbaka till startsidan',
  },
};
