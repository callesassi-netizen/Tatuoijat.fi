export const locales = ['fi', 'sv'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fi';

// Sajtnamnet ligger här (och bara här bland strängarna). Publikt varumärke
// = Tatuoijat.fi sedan 2026-07-04 (handoff §7) — MUSTE lever kvar enbart
// som internt kodnamn. Domänen läses från SITE_URL i astro.config.mjs.
export const ui = {
  fi: {
    'site.name': 'Tatuoijat.fi',
    'site.tagline': 'Löydä tatuoijasi',
    'site.description':
      'Suomen tatuoijat ja studiot yhdessä paikassa. Selaa portfolioita, vertaile tyylejä ja löydä oma artistisi.',
    'nav.cities': 'Kaupungit',
    'nav.styles': 'Tyylit',
    'nav.forStudios': 'Studioille: Liity mukaan',
    'nav.contact': 'Ota yhteyttä',
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
    // Platshållarkort tills en riktig premiumkund finns (ingen låtsas-featured)
    'home.featured.slotTitle': 'Vapaa Premium-paikka',
    'home.featured.slotCta': 'Hae mukaan',
    'home.all': 'Kaikki',
    'home.styles.eyebrow': 'Tyylit',
    'home.styles.title': 'Selaa tyylin mukaan',
    'home.cities.eyebrow': 'Kaupungit',
    'home.cities.title': 'Selaa kaupungin mukaan',
    'home.artistCount.one': '1 tatuoija',
    'home.artistCount.many': '{n} tatuoijaa',
    'home.metaSuffix': 'Suomen tatuoijat ja tatuointiliikkeet',
    // Meta description för startsidan (140–155 tecken, antal-fritt + CTA).
    // site.description är hero-copy och för kort som SERP-beskrivning.
    'home.metaDescription':
      'Tatuoijat.fi kokoaa Suomen tatuoijat ja tatuointiliikkeet yhteen paikkaan. Selaa portfolioita, vertaile tyylejä ja hintoja ja löydä oma tatuoijasi.',
    'home.premiumCta.title': 'Haluatko näkyä tässä?',
    'home.premiumCta.text':
      'Etusivun Premium-paikat ovat rajattuja ja täytetään varausjärjestyksessä. Nosta studiosi koko Suomen näkyville.',
    'home.premiumCta.button': 'Aloita Premium',
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
    'a11y.skipToContent': 'Siirry sisältöön',
    'cities.top.title': 'Suurimmat kaupungit',
    'cities.all.title': 'Kaikki kaupungit A–Ö',
    'breadcrumb.home': 'Etusivu',
    'city.eyebrow': 'Kaupunki',
    'city.back': 'Etusivu',
    'city.h1': 'Tatuoijat {city}',
    // "tatuointi {stad}" är huvudtermen, "tatuointiliike" näst störst
    // (handoff §2); antalet är CTR-differentieringen mot enskilda studios.
    // "tatuoija {stad}" täcks av sluttaggen. Max 57 tecken med dagens data.
    'city.metaTitle': 'Tatuointi {city} — {n} tatuointiliikettä | {site}',
    'city.metaDescription':
      'Tatuointi {city}: {n} tatuointiliikettä ja tatuoijaa portfolioineen. Vertaile tyylejä ja hintoja, katso kuvat ja ota yhteyttä suoraan artistiin.',
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
    'artist.metaTitle': '{name} — tatuointiliike, {city} | {site}',
    // Fallback när studionamnet gör fullmallen längre än 60 tecken
    'artist.metaTitleShort': '{name} | {site}',
    'artist.book': 'Varaa aika',
    'artist.call': 'Soita',
    'artist.hours': 'Aukioloajat',
    'artist.contact.cta': 'Ota yhteyttä',
    'artist.contact.name': 'Nimesi',
    'artist.contact.email': 'Sähköpostisi',
    'artist.contact.message': 'Viesti',
    'artist.contact.submit': 'Lähetä viesti',
    'artist.responds': 'Vastaa yleensä 1–2 arkipäivässä',
    'artist.portfolio': 'Portfolio',
    'artist.works.one': '1 työ',
    'artist.works.many': '{n} työtä',
    'artist.noImages.title': 'Portfolio täydentyy pian',
    'artist.noImages.text':
      'Kuvat lisätään artistin omalla luvalla. Uusimmat työt löydät Instagramista.',
    'artist.igCta': 'Katso työt Instagramissa',
    // Instagram-embed facade (handoff §8.3) — Metan embed.js laddas ENDAST vid klick
    'artist.instagram.title': 'Katso mestariteokset',
    'artist.instagram.cta': 'Näytä työt Instagramista',
    'artist.instagram.fineprint':
      'Sisältö ladataan Instagramista (Meta), joka voi asettaa evästeitä.',
    'artist.instagram.fallbackCta': 'Katso Instagramissa',
    'artist.about': 'Tietoa',
    'artist.trust': 'Luotettavuus',
    'artist.verified': 'Vahvistettu profiili — artisti hallinnoi tietojaan itse',
    'artist.ftaa': 'FTAA:n jäsen — Suomen Tatuointiartistien Liitto',
    'artist.website': 'Verkkosivut',
    'artist.artists': 'Artistit',
    'artist.metaDescriptionFallback':
      '{name} — tatuointiliike ({place}). Katso tyylit ja yhteystiedot ja ota yhteyttä suoraan — {site} kokoaa Suomen tatuoijat.',
    'common.finland': 'Suomi',
    'style.eyebrow': 'Tyyli',
    // "{stil} tatuointi" är söktermen — inte stilnamnet ensamt (handoff §2)
    'style.metaTitle': '{style}-tatuointi — tatuoijat Suomessa | {site}',
    'style.metaDescription':
      '{style}-tatuointi: katso, ketkä tyyliä tekevät Suomessa. Selaa tatuoijien portfolioita kaupungeittain, vertaile töitä ja ota yhteyttä artistiin.',
    'style.artistsTitle': 'Tyylin tekijät',
    'style.artistsEmpty':
      'Tälle tyylille ei ole vielä listattuja artisteja. Katso kaikki tatuoijat kaupungeittain.',
    'style.citiesTitle': 'Selaa kaupungeittain',
    'style.inCity': '{style} · {city}',
    // Walk-in (handoff §1.3/§3.4) — samlingssida + stadssektion + badge
    'walkin.metaTitle': 'Walk-in-tatuointi — liikkeet kaupungeittain | {site}',
    'walkin.metaDescription':
      'Walk-in-tatuointi ilman ajanvarausta: katso mitkä tatuointiliikkeet ottavat walk-in-asiakkaita eri kaupungeissa Suomessa. Vertaile ja ota yhteyttä.',
    'walkin.eyebrow': 'Walk-in',
    'walkin.h1': 'Walk-in-tatuoinnit',
    // PLATSHÅLLARE — Calle/Morpheus levererar slutlig copy senare.
    'walkin.intro':
      'Osa tatuointiliikkeistä ottaa walk-in-asiakkaita ilman ajanvarausta. Tähän kootaan liikkeet kaupungeittain sitä mukaa kun tiedot täydentyvät.',
    'walkin.empty':
      'Walk-in-liikkeitä ei ole vielä listattu. Täydennämme tietoja jatkuvasti.',
    'city.walkin.title': 'Walk-in-tatuoinnit {city}',
    'card.walkin': 'Walk-in',
    'artist.walkin': 'Walk-in mahdollista',
    'notFound.title': 'Sivua ei löytynyt',
    'notFound.text': 'Etsimääsi sivua ei ole olemassa tai se on siirretty.',
    'notFound.cta': 'Takaisin etusivulle',
  },
  sv: {
    'site.name': 'Tatuoijat.fi',
    'site.tagline': 'Hitta din tatuerare',
    'site.description':
      'Finlands tatuerare och studios på ett ställe. Bläddra bland portfolios, jämför stilar och hitta din artist.',
    'nav.cities': 'Städer',
    'nav.styles': 'Stilar',
    'nav.forStudios': 'För studios: Gå med',
    'nav.contact': 'Kontakt',
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
    'home.featured.slotTitle': 'Ledig Premium-plats',
    'home.featured.slotCta': 'Ansök nu',
    'home.all': 'Alla',
    'home.styles.eyebrow': 'Stilar',
    'home.styles.title': 'Bläddra efter stil',
    'home.cities.eyebrow': 'Städer',
    'home.cities.title': 'Bläddra efter stad',
    'home.artistCount.one': '1 tatuerare',
    'home.artistCount.many': '{n} tatuerare',
    'home.metaSuffix': 'Finlands tatuerare och tatueringsstudior',
    'home.metaDescription':
      'Tatuoijat.fi samlar Finlands tatuerare och tatueringsstudior på ett ställe. Bläddra bland portfolios, jämför stilar och priser och hitta din artist.',
    'home.premiumCta.title': 'Vill du synas här?',
    'home.premiumCta.text':
      'Premium-platserna på startsidan är begränsade och fylls i bokningsordning. Lyft din studio inför hela Finland.',
    'home.premiumCta.button': 'Starta Premium',
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
    'a11y.skipToContent': 'Hoppa till innehållet',
    'cities.top.title': 'Största städerna',
    'cities.all.title': 'Alla städer A–Ö',
    'breadcrumb.home': 'Startsidan',
    'city.eyebrow': 'Stad',
    'city.back': 'Startsidan',
    'city.h1': 'Tatuerare i {city}',
    'city.metaTitle': 'Tatuerare i {city} — {n} studior | {site}',
    'city.metaDescription':
      'Tatuerare och tatueringsstudior i {city}: {n} studior med portfolios. Jämför stilar och priser, se bilder och kontakta artisten direkt.',
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
    'artist.metaTitle': '{name} — tatueringsstudio, {city} | {site}',
    'artist.metaTitleShort': '{name} | {site}',
    'artist.book': 'Boka tid',
    'artist.call': 'Ring',
    'artist.hours': 'Öppettider',
    'artist.contact.cta': 'Ta kontakt',
    'artist.contact.name': 'Ditt namn',
    'artist.contact.email': 'Din e-post',
    'artist.contact.message': 'Meddelande',
    'artist.contact.submit': 'Skicka meddelande',
    'artist.responds': 'Svarar oftast inom 1–2 vardagar',
    'artist.portfolio': 'Portfolio',
    'artist.works.one': '1 arbete',
    'artist.works.many': '{n} arbeten',
    'artist.noImages.title': 'Portfolion fylls på snart',
    'artist.noImages.text':
      'Bilder läggs till med artistens eget tillstånd. De senaste arbetena hittar du på Instagram.',
    'artist.igCta': 'Se arbeten på Instagram',
    'artist.instagram.title': 'Se mästerverken',
    'artist.instagram.cta': 'Visa verken från Instagram',
    'artist.instagram.fineprint':
      'Innehållet laddas från Instagram (Meta) och kan använda cookies.',
    'artist.instagram.fallbackCta': 'Se på Instagram',
    'artist.about': 'Om',
    'artist.trust': 'Trygghet',
    'artist.verified': 'Verifierad profil — artisten hanterar sina uppgifter själv',
    'artist.ftaa': 'Medlem i FTAA — Finlands tatueringsartisters förbund',
    'artist.website': 'Webbplats',
    'artist.artists': 'Artister',
    'artist.metaDescriptionFallback':
      '{name} — tatueringsstudio ({place}). Se stilar och kontaktuppgifter och ta kontakt direkt — {site} samlar Finlands tatuerare.',
    'common.finland': 'Finland',
    'style.eyebrow': 'Stil',
    'style.metaTitle': '{style}-tatuering — tatuerare i Finland | {site}',
    'style.metaDescription':
      '{style}-tatuering: se vilka som gör stilen i Finland. Bläddra bland tatuerarnas portfolios per stad, jämför arbeten och kontakta artisten direkt.',
    'style.artistsTitle': 'Artister med stilen',
    'style.artistsEmpty':
      'Inga artister är listade för den här stilen ännu. Se alla tatuerare per stad.',
    'style.citiesTitle': 'Bläddra per stad',
    'style.inCity': '{style} · {city}',
    // Walk-in (handoff §1.3/§3.4) — samlingssida + stadssektion + badge
    'walkin.metaTitle': 'Walk-in-tatuering — studior per stad | {site}',
    'walkin.metaDescription':
      'Walk-in-tatuering utan tidsbokning: se vilka tatueringsstudior som tar emot walk-in-kunder i olika städer i Finland. Jämför och ta kontakt.',
    'walkin.eyebrow': 'Walk-in',
    'walkin.h1': 'Walk-in-tatueringar',
    // PLATSHÅLLARE — Calle/Morpheus levererar slutlig copy senare.
    'walkin.intro':
      'Vissa tatueringsstudior tar emot walk-in-kunder utan tidsbokning. Här samlas studiorna per stad efterhand som informationen fylls på.',
    'walkin.empty':
      'Inga walk-in-studior är listade ännu. Vi fyller på informationen löpande.',
    'city.walkin.title': 'Walk-in-tatuering i {city}',
    'card.walkin': 'Walk-in',
    'artist.walkin': 'Walk-in möjligt',
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
