import type { GuideCardByLocale, GuideContentByLocale } from './types';

/**
 * Opas: tatuointi ja uiminen (/oppaat/tatuointi-ja-uiminen/,
 * sv /sv/guider/tatuering-och-bad/).
 *
 * Täckta söktermer: tatuointi ja uiminen, uimahalli tatuoinnin jälkeen,
 * milloin voi uida tatuoinnin jälkeen, tatuointi ja meri, tatuointi ja kloori.
 *
 * AVGRÄNSNING mot bastu-guiden: bastun handlar om VÄRME och svett, den här om
 * VATTEN — blötläggning och främmande bakterier. De två guiderna nämner
 * varandra men upprepar inte varandras resonemang. Den som söker på
 * "uimahalli tatuoinnin jälkeen" ska inte behöva läsa om löyly först.
 *
 * SÄSONG: söktrycket ligger maj–augusti. Sidan skrivs så att den fungerar
 * året om (uimahalli finns alltid) men har badstranden i fokus.
 */
export const tatuointiJaUiminen: GuideContentByLocale = {
  fi: {
    metaTitle: 'Tatuointi ja uiminen — milloin veteen? | Tatuoijat.fi',
    metaDescription:
      'Tatuointi ja uiminen: milloin tuoreen tatuoinnin kanssa voi uida, miksi uimahalli, meri ja järvi ovat eri asioita ja mitä tehdä uinnin jälkeen.',
    eyebrow: 'Opas',
    h1: 'Tatuointi ja uiminen',
    answer:
      'Tuoreen tatuoinnin kanssa ei uida ennen kuin iho on kokonaan kuoriutunut, tyypillisesti 2–3 viikkoa. Suihku käy heti ensimmäisestä päivästä, mutta upottaminen ei: pitkä liotus pehmittää rupia ja jaettu vesi tuo bakteereja avoimelle haavalle. Uinnin jälkeen tatuointi huuhdellaan ja rasvataan.',
    intro: [
      'Ero suihkun ja uimisen välillä on se, kuinka kauan iho on veden alla. Muutaman minuutin suihku ei ehdi pehmittää rupia eikä liuottaa mitään irti — se on osa jälkihoitoa alusta asti. Uiminen tarkoittaa kymmeniä minuutteja upotettuna, ja se on kokonaan toinen asia.',
      'Toinen ero on vesi itsessään. Uimahallin kloori, meren suola ja järven mikrobit vaikuttavat parantuvaan ihoon eri tavoin, eivätkä ne ole yhtä vaarallisia. Tämä opas käy ne läpi erikseen, koska aikaraja on sama mutta syyt eivät ole.',
    ],
    sections: [
      {
        id: 'milloin-uimaan',
        title: 'Milloin tatuoinnin jälkeen voi uida?',
        lead: 'Kun kuoriutuminen on ohi ja pinta on tasainen. Käytännössä 2–3 viikkoa, isoissa töissä pidempään.',
        table: {
          columns: ['Aika tatuoinnista', 'Suihku', 'Uiminen'],
          rows: [
            ['0–1 viikko', 'Kyllä, haalea ja lyhyt.', 'Ei missään vedessä.'],
            ['1–2 viikkoa', 'Kyllä, normaalisti.', 'Ei. Kuoriutuminen kesken.'],
            ['2–3 viikkoa', 'Kyllä.', 'Vasta kun pinta on ehjä ja kuiva.'],
            ['3+ viikkoa', 'Kyllä.', 'Normaalisti. Huuhtele ja rasvaa jälkeenpäin.'],
          ],
          note: 'Ajat ovat suomalaisten studioiden yleistä käytäntöä. Kysy omalta tekijältäsi — iso työ ja hankala sijainti pidentävät aikaa.',
        },
        paragraphs: [
          'Sama raja koskee kylpyammetta ja porealtaasta. Kylpy on itse asiassa uimista huonompi vaihtoehto tuoreelle tatuoinnille: vesi on lämmintä, liotus on pitkä ja alue on koko ajan upotettuna.',
        ],
      },
      {
        id: 'vedet',
        title: 'Onko uimahalli, meri ja järvi eri asia?',
        lead: 'Aikaraja on sama, mutta riskit ovat erilaisia. Jos joku näistä on pakko valita ensimmäisenä, klooriallas on hallituin.',
        bullets: [
          'Uimahalli. Kloori tappaa suurimman osan bakteereista, mutta se on myös ärsyke: se kuivattaa parantuvaa ihoa ja voi kirvellä. Hallituin vaihtoehto, ei silti tuoreelle tatuoinnille.',
          'Meri. Suolavesi kirvelee avoimella iholla ja kuivattaa. Itämeren mikrobimäärä vaihtelee rajusti lämpimänä kesänä — sinilevän aikaan vesi ei kelpaa haavalle lainkaan.',
          'Järvi ja avanto. Käsittelemätöntä luonnonvettä, jossa on eläinperäisiä bakteereja. Suurin tulehdusriski parantuvalle iholle.',
          'Poreallas. Lämmin, jaettu vesi ja pitkä liotus. Huonoin yhdistelmä koko listalla.',
        ],
        callout: {
          title: 'Vedenpitävä kalvo ei ole lupa uida',
          text: 'Hoitokalvo on suunniteltu suojaamaan ihoa arjessa, ei kestämään vedenpainetta ja hankausta uidessa. Reunat päästävät vettä, ja kalvon alle jäänyt vesi on lämmin ja suljettu ympäristö — juuri se, mitä halutaan välttää. Kalvo ei lyhennä odotusaikaa.',
          tone: 'warning',
        },
      },
      {
        id: 'miksi-ei',
        title: 'Miksi uiminen on ongelma parantuvalle tatuoinnille?',
        lead: 'Kaksi mekanismia: rupien pehmeneminen ja bakteerit. Ensimmäinen pilaa ulkonäön, toinen on terveysasia.',
        paragraphs: [
          'Pitkä upotus pehmittää rupia ja hilseitä niin, että ne irtoavat ennen kuin alla oleva iho on valmis. Repeytyvä kudos vie mustetta mukanaan, ja tulos on vaalea laikku, joka näkyy pysyvästi. Tämä on sama mekanismi kuin rupien raapimisessa, mutta se tapahtuu huomaamatta.',
          'Toinen syy on yksinkertaisempi. Tuore tatuointi on avoin haava, ja jaettu tai käsittelemätön vesi sisältää bakteereja, joita iho normaalisti torjuu. Terveellä iholla se ei ole ongelma; parantuvalla se on tulehdusriski.',
        ],
      },
      {
        id: 'uinnin-jalkeen',
        title: 'Mitä tehdä uinnin jälkeen kun tatuointi on parantunut?',
        lead: 'Kaksi askelta, kummatkin nopeita. Ne eivät koske musteen säilymistä vaan sitä, miltä tatuointi näyttää.',
        steps: [
          {
            title: 'Huuhtele makealla vedellä',
            text: 'Kloori ja suola jäävät iholle ja kuivattavat sitä tuntien ajan. Nopea suihku poistaa ne.',
          },
          {
            title: 'Kuivaa taputellen',
            text: 'Hankaava kuivaus ärsyttää ihoa turhaan, erityisesti jos tatuointi on vasta hiljattain parantunut.',
          },
          {
            title: 'Rasvaa',
            text: 'Kuiva iho saa tatuoinnin näyttämään harmaalta. Kosteutus palauttaa värin kirkkauden saman tien.',
          },
          {
            title: 'Laita aurinkosuoja jos jäät ulos',
            text: 'Uinnin jälkeen aurinkosuoja on pesty pois. Tämä on se hetki, jolloin tatuointi useimmiten palaa — märkänä, varjossa ei olla, ja rasvausta ei muisteta uusia.',
          },
        ],
      },
      {
        id: 'urheilu',
        title: 'Entä uimahallissa käynti ilman uimista?',
        lead: 'Pukuhuone, suihku ja allasosaston kosteat lattiat ovat oma juttunsa — ne eivät edellytä samaa odotusaikaa, mutta hygienia kannattaa.',
        bullets: [
          'Suihkussa käynti uimahallissa käy koko paranemisen ajan, kuten kotonakin.',
          'Älä istu paljaalla iholla lauteilla tai penkeillä. Pyyhe alle, aivan kuten saunassa.',
          'Kuivaa tatuointi huolellisesti ennen kuin puet vaatteet päälle. Kostea kangas tatuoinnin päällä on hankausta ja lämpöä yhtä aikaa.',
          'Väljä vaate paranevan tatuoinnin päälle. Kireä uimapuku tai urheiluvaate hankaa juuri sitä pintaa, jonka pitäisi saada olla rauhassa.',
        ],
      },
    ],
    faqTitle: 'Usein kysyttyä uimisesta',
    faq: [
      {
        q: 'Milloin tatuoinnin jälkeen voi uida?',
        a: 'Kun iho on kokonaan kuoriutunut ja pinta on tasainen, tyypillisesti 2–3 viikon kuluttua. Suihku käy heti ensimmäisestä päivästä — ero on siinä, kuinka kauan iho on veden alla.',
      },
      {
        q: 'Voiko uimahalliin mennä vedenpitävän kalvon kanssa?',
        a: 'Ei. Hoitokalvo ei ole tehty kestämään vedenpainetta, ja reunoista sisään päässyt vesi jää kalvon alle lämpimäksi ja suljetuksi. Kalvo ei lyhennä odotusaikaa.',
      },
      {
        q: 'Onko meri parempi kuin uimahalli?',
        a: 'Ei kummankaan puolesta ratkaisevaa eroa tuoreelle tatuoinnille — aikaraja on sama. Kloori kuivattaa mutta on hallitumpi, meri ja järvi sisältävät luonnollisia bakteereja. Sinilevän aikaan vesi ei sovi haavalle lainkaan.',
      },
      {
        q: 'Voiko kylpyammeessa käydä?',
        a: 'Ei ennen kuin iho on ehjä. Kylpy on tuoreelle tatuoinnille jopa uimista huonompi: lämmin vesi, pitkä liotus ja alue koko ajan upotettuna. Suihku on koko paranemisen ajan oikea tapa pestä.',
      },
      {
        q: 'Haalistaako kloori tai suolavesi tatuointia?',
        a: 'Parantunutta tatuointia ei merkittävästi. Molemmat kuivattavat ihoa, ja kuiva iho saa tatuoinnin näyttämään harmaalta — huuhtelu ja rasvaus uinnin jälkeen riittää. Aurinko haalistaa mustetta pysyvästi, vesi ei.',
      },
    ],
    productsTitle: 'Mitä uinnin ympärille',
    productsIntro:
      'Uimakauden tuotteet ovat samat kuin muutenkin, mutta järjestys on tärkeä: huuhtele, kosteuta, suojaa auringolta.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Huuhtelu uinnin jälkeen',
        text: 'Hajusteeton pesuaine ja makea vesi. Kloori ja suola kuivattavat tuntien ajan jos ne jäävät iholle — nopea suihku riittää.',
      },
      {
        category: 'moisturising',
        title: 'Kosteutus uimakaudella',
        text: 'Vesi, kloori ja aurinko kuivattavat yhdessä. Säännöllinen kosteutus on ero kirkkaan ja sameelta näyttävän tatuoinnin välillä.',
      },
      {
        category: 'spf',
        title: 'Aurinkosuoja uinnin jälkeen',
        text: 'Uinti pesee suojan pois, ja märkä iho rannalla on se tilanne, jossa tatuointi useimmiten palaa. SPF 50 uudelleen heti kun olet kuiva.',
      },
    ],
    relatedTitle: 'Jatka tästä',
    relatedIntro:
      'Vesi on yksi kysymys paranemisen aikana. Sauna, aurinko ja itse hoitorutiini käsitellään omissa oppaissaan.',
    upcomingTitle: 'Tulossa',
    ctaTitle: 'Etsitkö tatuoijaa?',
    ctaText:
      'Selaa Suomen tatuoijia ja studioita kaupungin tai tyylin mukaan. Ajoita iso työ niin, että paraneminen ei osu keskelle uimakautta.',
    ctaLabel: 'Selaa tatuoijia',
    disclaimer:
      'Tämä opas on yleistä tietoa, ei lääketieteellistä neuvontaa. Jos alue tulehtuu tai oireet pahenevat, ota yhteyttä terveydenhuoltoon.',
  },
  sv: {
    metaTitle: 'Tatuering och bad — när kan du bada? | Tatuoijat.fi',
    metaDescription:
      'Tatuering och bad: när du kan bada med en ny tatuering, varför simhall, hav och sjö är olika saker och vad du gör efter badet.',
    eyebrow: 'Guide',
    h1: 'Tatuering och bad',
    answer:
      'Med en ny tatuering badar du inte förrän huden fjällat färdigt, typiskt 2–3 veckor. Dusch går bra från första dagen, men inte att ligga i vatten: lång blötläggning mjukar upp skorporna och delat vatten för med sig bakterier till ett öppet sår. Efter badet sköljer och smörjer du tatueringen.',
    intro: [
      'Skillnaden mellan dusch och bad är hur länge huden är under vatten. Några minuters dusch hinner inte mjuka upp skorpor eller lösa något — den är en del av eftervården från början. Bad betyder tiotals minuter nedsänkt, och det är en helt annan sak.',
      'Den andra skillnaden är vattnet i sig. Simhallens klor, havets salt och sjöns mikrober påverkar hud som läker på olika sätt, och de är inte lika farliga. Guiden går igenom dem var för sig, eftersom tidsgränsen är densamma men skälen inte är det.',
    ],
    sections: [
      {
        id: 'milloin-uimaan',
        title: 'När kan man bada efter en tatuering?',
        lead: 'När fjällningen är över och ytan är jämn. I praktiken 2–3 veckor, längre för stora jobb.',
        table: {
          columns: ['Tid sedan tatueringen', 'Dusch', 'Bad'],
          rows: [
            ['0–1 vecka', 'Ja, ljummen och kort.', 'Nej, inte i något vatten.'],
            ['1–2 veckor', 'Ja, som vanligt.', 'Nej. Fjällningen pågår.'],
            ['2–3 veckor', 'Ja.', 'Först när ytan är hel och torr.'],
            ['3+ veckor', 'Ja.', 'Som vanligt. Skölj och smörj efteråt.'],
          ],
          note: 'Tiderna följer finsk studiopraxis. Fråga din egen tatuerare — ett stort jobb och ett besvärligt ställe förlänger tiden.',
        },
        paragraphs: [
          'Samma gräns gäller badkar och bubbelpool. Badkaret är faktiskt sämre än att simma för en ny tatuering: vattnet är varmt, blötläggningen lång och området nedsänkt hela tiden.',
        ],
      },
      {
        id: 'vedet',
        title: 'Är simhall, hav och sjö olika saker?',
        lead: 'Tidsgränsen är densamma, men riskerna skiljer sig. Måste något väljas först är klorbassängen den mest kontrollerade.',
        bullets: [
          'Simhall. Kloret dödar de flesta bakterier, men är också ett irritationsmoment: det torkar ut hud som läker och kan svida. Mest kontrollerat, ändå inte för en ny tatuering.',
          'Hav. Saltvatten svider på öppen hud och torkar ut. Östersjöns mikrobhalt varierar kraftigt under en varm sommar — vid algblomning duger vattnet inte alls på ett sår.',
          'Sjö och vak. Obehandlat naturvatten med bakterier av djurursprung. Störst infektionsrisk för hud som läker.',
          'Bubbelpool. Varmt, delat vatten och lång blötläggning. Sämsta kombinationen på hela listan.',
        ],
        callout: {
          title: 'Vattentät film är inget tillstånd att bada',
          text: 'Vårdfilmen är gjord för att skydda huden i vardagen, inte för att stå emot vattentryck och nötning under simning. Kanterna släpper in vatten, och vattnet som blir kvar under filmen är varmt och instängt — precis det man vill undvika. Filmen kortar inte väntetiden.',
          tone: 'warning',
        },
      },
      {
        id: 'miksi-ei',
        title: 'Varför är bad ett problem för en tatuering som läker?',
        lead: 'Två mekanismer: skorporna mjuknar, och bakterier. Den första förstör utseendet, den andra är en hälsofråga.',
        paragraphs: [
          'Lång nedsänkning mjukar upp skorpor och flagor så att de lossnar innan huden under är klar. Vävnaden som slits loss tar med sig bläck, och resultatet är en ljus fläck som syns permanent. Det är samma mekanism som när man river skorpor, men den sker obemärkt.',
          'Det andra skälet är enklare. En ny tatuering är ett öppet sår, och delat eller obehandlat vatten innehåller bakterier som huden normalt håller ute. På frisk hud är det inget problem; på hud som läker är det en infektionsrisk.',
        ],
      },
      {
        id: 'uinnin-jalkeen',
        title: 'Vad gör du efter badet när tatueringen är läkt?',
        lead: 'Två steg, båda snabba. De handlar inte om att bläcket sitter kvar utan om hur tatueringen ser ut.',
        steps: [
          {
            title: 'Skölj med sötvatten',
            text: 'Klor och salt blir kvar på huden och torkar ut den i timmar. En snabb dusch tar bort dem.',
          },
          {
            title: 'Klappa torrt',
            text: 'Att gnida torrt irriterar huden i onödan, särskilt om tatueringen läkt nyligen.',
          },
          {
            title: 'Smörj',
            text: 'Torr hud får tatueringen att se grå ut. Återfuktning ger tillbaka färgens klarhet direkt.',
          },
          {
            title: 'Lägg på solskydd om du stannar ute',
            text: 'Badet har tvättat bort skyddet. Det här är stunden då tatueringar oftast bränns — man är blöt, inte i skuggan, och glömmer att lägga på nytt.',
          },
        ],
      },
      {
        id: 'urheilu',
        title: 'Hur är det med simhallsbesök utan att bada?',
        lead: 'Omklädningsrum, dusch och våta golv är en egen sak — de kräver ingen väntetid, men hygienen är värd att tänka på.',
        bullets: [
          'Dusch i simhallen går bra hela läkningen, precis som hemma.',
          'Sitt inte med bar hud på lavar och bänkar. Handduk under, precis som i bastun.',
          'Torka tatueringen ordentligt innan du klär på dig. Fuktigt tyg ovanpå tatueringen är nötning och värme samtidigt.',
          'Löst sittande kläder över en tatuering som läker. En tajt baddräkt eller träningsplagg skaver mot precis den yta som ska få vara i fred.',
        ],
      },
    ],
    faqTitle: 'Vanliga frågor om bad',
    faq: [
      {
        q: 'När kan man bada efter en tatuering?',
        a: 'När huden fjällat färdigt och ytan är jämn, typiskt efter 2–3 veckor. Dusch går bra från första dagen — skillnaden är hur länge huden är under vatten.',
      },
      {
        q: 'Kan man gå till simhallen med vattentät film?',
        a: 'Nej. Vårdfilmen är inte gjord för vattentryck, och vatten som kommit in vid kanterna blir kvar under filmen, varmt och instängt. Filmen kortar inte väntetiden.',
      },
      {
        q: 'Är havet bättre än simhallen?',
        a: 'Ingen avgörande skillnad för en ny tatuering — tidsgränsen är densamma. Klor torkar ut men är mer kontrollerat, hav och sjö innehåller naturliga bakterier. Vid algblomning duger vattnet inte alls på ett sår.',
      },
      {
        q: 'Går det bra att bada i badkar?',
        a: 'Inte förrän huden är hel. Badkaret är för en ny tatuering till och med sämre än att simma: varmt vatten, lång blötläggning och området nedsänkt hela tiden. Dusch är rätt sätt att tvätta hela läkningen.',
      },
      {
        q: 'Bleker klor eller saltvatten tatueringen?',
        a: 'Inte en läkt tatuering nämnvärt. Båda torkar ut huden, och torr hud får tatueringen att se grå ut — sköljning och insmörjning efter badet räcker. Solen bleker bläcket permanent, vattnet gör det inte.',
      },
    ],
    productsTitle: 'Vad du använder kring badet',
    productsIntro:
      'Badsäsongens produkter är desamma som annars, men ordningen spelar roll: skölj, återfukta, skydda mot solen.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Sköljning efter badet',
        text: 'Oparfymerat rengöringsmedel och sötvatten. Klor och salt torkar ut i timmar om de blir kvar på huden — en snabb dusch räcker.',
      },
      {
        category: 'moisturising',
        title: 'Återfuktning under badsäsongen',
        text: 'Vatten, klor och sol torkar ut tillsammans. Regelbunden återfuktning är skillnaden mellan en klar och en suddig tatuering.',
      },
      {
        category: 'spf',
        title: 'Solskydd efter badet',
        text: 'Badet tvättar bort skyddet, och blöt hud på stranden är den situation där tatueringar oftast bränns. SPF 50 på nytt så snart du är torr.',
      },
    ],
    relatedTitle: 'Fortsätt här',
    relatedIntro:
      'Vattnet är en fråga under läkningen. Bastu, sol och själva vårdrutinen har egna guider.',
    upcomingTitle: 'På väg',
    ctaTitle: 'Letar du efter en tatuerare?',
    ctaText:
      'Bläddra bland Finlands tatuerare och studior efter stad eller stil. Tajma ett stort jobb så att läkningen inte hamnar mitt i badsäsongen.',
    ctaLabel: 'Bläddra bland tatuerare',
    disclaimer:
      'Den här guiden är allmän information, inte medicinsk rådgivning. Om området blir infekterat eller besvären förvärras — kontakta vården.',
  },
};

export const tatuointiJaUiminenCard: GuideCardByLocale = {
  fi: {
    title: 'Tatuointi ja uiminen',
    summary:
      'Milloin veteen pääsee taas, miksi uimahalli, meri ja järvi ovat eri asioita ja mitä tehdään uinnin jälkeen.',
  },
  sv: {
    title: 'Tatuering och bad',
    summary:
      'När du kan bada igen, varför simhall, hav och sjö är olika saker och vad du gör efter badet.',
  },
};
