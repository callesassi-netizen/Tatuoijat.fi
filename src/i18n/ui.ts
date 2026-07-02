export const locales = ['fi', 'sv'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fi';

// Sajtnamnet ligger här (och bara här bland strängarna) — namnbyte
// vid domänval ska vara en 3-raders ändring: SITE_URL i astro.config.mjs,
// site.name nedan (fi + sv) och logotyp-komponenten om den får egen grafik.
export const ui = {
  fi: {
    'site.name': 'MUSTE',
    'site.tagline': 'Löydä tatuoijasi',
    'site.description':
      'Suomen tatuoijat ja studiot yhdessä paikassa. Selaa portfolioita, vertaile tyylejä ja löydä oma artistisi.',
    'nav.cities': 'Kaupungit',
    'nav.styles': 'Tyylit',
    'nav.forStudios': 'Studioille: Liity mukaan',
    'nav.menu': 'Valikko',
    'nav.toSearch': 'Siirry hakuun',
    'hero.tagline': 'Selaa portfolioita, vertaile tyylejä ja löydä tatuoijasi.',
    'search.city': 'Kaupunki',
    'search.style': 'Tyyli',
    'search.allCities': 'Kaikki kaupungit',
    'search.allStyles': 'Kaikki tyylit',
    'search.cta': 'Näytä tatuoijat',
    'search.popular': 'Suosittua:',
    'home.featured.eyebrow': 'Premium',
    'home.featured.title': 'Nostetut artistit',
    'home.all': 'Kaikki',
    'home.styles.eyebrow': 'Tyylit',
    'home.styles.title': 'Selaa tyylin mukaan',
    'home.cities.eyebrow': 'Kaupungit',
    'home.cities.title': 'Selaa kaupungin mukaan',
    'home.artistCount.one': '1 tatuoija',
    'home.artistCount.many': '{n} tatuoijaa',
    'home.metaSuffix': 'Tatuoijat ja studiot Suomessa',
    'how.eyebrow': 'Näin se toimii',
    'how.title': 'Kolme askelta artistiin',
    'how.step1.title': 'Etsi kaupungin tai tyylin mukaan',
    'how.step1.text':
      'Selaa tatuoijia omasta kaupungistasi tai etsi juuri sinun tyylisi osaajaa.',
    'how.step2.title': 'Vertaile portfolioita',
    'how.step2.text': 'Kaikki työt yhdessä paikassa. Katso, kenen jälki puhuttelee.',
    'how.step3.title': 'Ota yhteyttä suoraan',
    'how.step3.text': 'Viesti artistille tai varaa aika — ilman välikäsiä.',
    'card.featured': 'Featured',
    'card.instagramHint': 'Katso työt Instagramissa',
    'footer.tagline': 'Suomen tatuoijat yhdessä paikassa.',
    'nav.prices': 'Hinnat',
    'breadcrumb.home': 'Etusivu',
    'city.eyebrow': 'Kaupunki',
    'city.back': 'Etusivu',
    'city.h1': 'Tatuoijat {city}',
    'city.metaTitle': 'Tatuoijat {city} — vertaile portfolioita | {site}',
    'city.metaDescription':
      'Tatuoijat ja tatuointistudiot: {city}. Selaa portfolioita, suodata tyylin mukaan ja ota yhteyttä suoraan artistiin.',
    'city.introCount.one': '1 tatuoija.',
    'city.introCount.many': '{n} tatuoijaa.',
    'city.switch': 'Vaihda:',
    'city.results.one': '1 tulos',
    'city.results.many': '{n} tulosta',
    'city.filterAll': 'Kaikki',
    'city.filterLabel': 'Suodata tyylin mukaan',
    'city.empty.title': 'Ei tuloksia tällä tyylillä',
    'city.empty.text': 'Tästä kaupungista ei vielä löytynyt tatuoijia valitulla tyylillä.',
    'city.empty.reset': 'Näytä kaikki tyylit',
    'artist.metaTitle': '{name} — tatuoija, {city} | {site}',
    'artist.book': 'Varaa aika',
    'artist.responds': 'Vastaa yleensä 1–2 arkipäivässä',
    'artist.portfolio': 'Portfolio',
    'artist.works.one': '1 työ',
    'artist.works.many': '{n} työtä',
    'artist.noImages.title': 'Portfolio täydentyy pian',
    'artist.noImages.text':
      'Kuvat lisätään artistin omalla luvalla. Uusimmat työt löydät Instagramista.',
    'artist.igCta': 'Katso työt Instagramissa',
    'artist.about': 'Tietoa',
    'artist.trust': 'Luotettavuus',
    'artist.verified': 'Vahvistettu profiili — artisti hallinnoi tietojaan itse',
    'artist.ftaa': 'FTAA:n jäsen — Suomen Tatuointiartistien Liitto',
    'artist.website': 'Verkkosivut',
    'artist.artists': 'Artistit',
    'artist.metaDescriptionFallback':
      '{name} — tatuointistudio ({place}). Profiili ja yhteystiedot MUSTE-katalogissa.',
    'common.finland': 'Suomi',
    'style.eyebrow': 'Tyyli',
    'style.metaTitle': '{style} — tatuoijat ja portfoliot | {site}',
    'style.metaDescription':
      '{style}: mitä tyyli tarkoittaa ja ketkä sitä tekevät Suomessa. Selaa portfolioita ja löydä oma tatuoijasi.',
    'style.artistsTitle': 'Tyylin tekijät',
    'style.artistsEmpty':
      'Tälle tyylille ei ole vielä listattuja artisteja. Katso kaikki tatuoijat kaupungeittain.',
    'style.citiesTitle': 'Selaa kaupungeittain',
    'style.inCity': '{style} · {city}',
    'notFound.title': 'Sivua ei löytynyt',
    'notFound.text': 'Etsimääsi sivua ei ole olemassa tai se on siirretty.',
    'notFound.cta': 'Takaisin etusivulle',
  },
  sv: {
    'site.name': 'MUSTE',
    'site.tagline': 'Hitta din tatuerare',
    'site.description':
      'Finlands tatuerare och studios på ett ställe. Bläddra bland portfolios, jämför stilar och hitta din artist.',
    'nav.cities': 'Städer',
    'nav.styles': 'Stilar',
    'nav.forStudios': 'För studios: Gå med',
    'nav.menu': 'Meny',
    'nav.toSearch': 'Till sökningen',
    'hero.tagline': 'Bläddra bland portfolios, jämför stilar och hitta din tatuerare.',
    'search.city': 'Stad',
    'search.style': 'Stil',
    'search.allCities': 'Alla städer',
    'search.allStyles': 'Alla stilar',
    'search.cta': 'Visa tatuerare',
    'search.popular': 'Populärt:',
    'home.featured.eyebrow': 'Premium',
    'home.featured.title': 'Utvalda artister',
    'home.all': 'Alla',
    'home.styles.eyebrow': 'Stilar',
    'home.styles.title': 'Bläddra efter stil',
    'home.cities.eyebrow': 'Städer',
    'home.cities.title': 'Bläddra efter stad',
    'home.artistCount.one': '1 tatuerare',
    'home.artistCount.many': '{n} tatuerare',
    'home.metaSuffix': 'Tatuerare och studios i Finland',
    'how.eyebrow': 'Så funkar det',
    'how.title': 'Tre steg till din artist',
    'how.step1.title': 'Sök efter stad eller stil',
    'how.step1.text':
      'Bläddra bland tatuerare i din stad eller hitta någon som behärskar just din stil.',
    'how.step2.title': 'Jämför portfolios',
    'how.step2.text': 'Alla arbeten på ett ställe. Se vems handstil som talar till dig.',
    'how.step3.title': 'Ta kontakt direkt',
    'how.step3.text': 'Skriv till artisten eller boka tid — utan mellanhänder.',
    'card.featured': 'Featured',
    'card.instagramHint': 'Se arbeten på Instagram',
    'footer.tagline': 'Finlands tatuerare på ett ställe.',
    'nav.prices': 'Priser',
    'breadcrumb.home': 'Startsidan',
    'city.eyebrow': 'Stad',
    'city.back': 'Startsidan',
    'city.h1': 'Tatuerare i {city}',
    'city.metaTitle': 'Tatuerare i {city} — jämför portfolios | {site}',
    'city.metaDescription':
      'Tatuerare och tatueringsstudios i {city}. Bläddra bland portfolios, filtrera på stil och kontakta artisten direkt.',
    'city.introCount.one': '1 tatuerare.',
    'city.introCount.many': '{n} tatuerare.',
    'city.switch': 'Byt:',
    'city.results.one': '1 träff',
    'city.results.many': '{n} träffar',
    'city.filterAll': 'Alla',
    'city.filterLabel': 'Filtrera på stil',
    'city.empty.title': 'Inga träffar för den stilen',
    'city.empty.text': 'Inga tatuerare med den valda stilen hittades i den här staden ännu.',
    'city.empty.reset': 'Visa alla stilar',
    'artist.metaTitle': '{name} — tatuerare, {city} | {site}',
    'artist.book': 'Boka tid',
    'artist.responds': 'Svarar oftast inom 1–2 vardagar',
    'artist.portfolio': 'Portfolio',
    'artist.works.one': '1 arbete',
    'artist.works.many': '{n} arbeten',
    'artist.noImages.title': 'Portfolion fylls på snart',
    'artist.noImages.text':
      'Bilder läggs till med artistens eget tillstånd. De senaste arbetena hittar du på Instagram.',
    'artist.igCta': 'Se arbeten på Instagram',
    'artist.about': 'Om',
    'artist.trust': 'Trygghet',
    'artist.verified': 'Verifierad profil — artisten hanterar sina uppgifter själv',
    'artist.ftaa': 'Medlem i FTAA — Finlands tatueringsartisters förbund',
    'artist.website': 'Webbplats',
    'artist.artists': 'Artister',
    'artist.metaDescriptionFallback':
      '{name} — tatueringsstudio ({place}). Profil och kontaktuppgifter i MUSTE-katalogen.',
    'common.finland': 'Finland',
    'style.eyebrow': 'Stil',
    'style.metaTitle': '{style} — tatuerare och portfolios | {site}',
    'style.metaDescription':
      '{style}: vad stilen innebär och vilka som gör den i Finland. Bläddra bland portfolios och hitta din tatuerare.',
    'style.artistsTitle': 'Artister med stilen',
    'style.artistsEmpty':
      'Inga artister är listade för den här stilen ännu. Se alla tatuerare per stad.',
    'style.citiesTitle': 'Bläddra per stad',
    'style.inCity': '{style} · {city}',
    'notFound.title': 'Sidan hittades inte',
    'notFound.text': 'Sidan du letar efter finns inte eller har flyttats.',
    'notFound.cta': 'Tillbaka till startsidan',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)['fi'];

export function useTranslations(locale: Locale) {
  return function t(key: UiKey, vars?: Record<string, string | number>): string {
    let text: string = ui[locale][key] ?? ui[defaultLocale][key];
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        text = text.replaceAll(`{${k}}`, String(v));
      }
    }
    return text;
  };
}

/** Prefixar en rot-relativ path med locale-segmentet (fi = inget prefix). */
export function localePath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean}`;
}
