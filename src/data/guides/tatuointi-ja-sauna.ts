import type { GuideCardByLocale, GuideContentByLocale } from './types';

/**
 * Opas: tatuointi ja sauna (/oppaat/tatuointi-ja-sauna/,
 * sv /sv/guider/tatuering-och-bastu/).
 *
 * Täckta söktermer: tatuointi ja sauna, milloin saunaan tatuoinnin jälkeen,
 * saunominen tuoreella tatuoinnilla, tatuointi ja löyly.
 *
 * VARFÖR DEN HÄR SIDAN ÄR VIKTIGARE I FINLAND ÄN NÅGON ANNANSTANS: bastu är
 * inte en lyx utan veckorutin. Frågan "när kan jag basta igen" ställs av i
 * princip varje finsk kund, och den generiska engelskspråkiga eftervårds-
 * texten svarar aldrig på den. Det är hela luckan sidan finns för.
 *
 * TONEN: inga förbud utan skäl. Läsaren som får veta VARFÖR värmen är ett
 * problem klarar tre veckor; den som bara får ett förbud chansar.
 */
export const tatuointiJaSauna: GuideContentByLocale = {
  fi: {
    metaTitle: 'Tatuointi ja sauna — milloin voit saunoa? | Tatuoijat.fi',
    metaDescription:
      'Tatuointi ja sauna: milloin tuoreen tatuoinnin kanssa voi saunoa, miksi kuuma löyly on ongelma parantuvalle iholle ja mitä tehdä jos sauna on pakko.',
    eyebrow: 'Opas',
    h1: 'Tatuointi ja sauna',
    answer:
      'Tuoreen tatuoinnin kanssa ei saunota ennen kuin iho on kokonaan kuoriutunut, tyypillisesti 2–3 viikkoa. Kuumuus laajentaa verisuonia ja lisää turvotusta, hiki ärsyttää avointa ihoa ja lauteet ovat bakteeriympäristö. Ensimmäinen sauna kannattaa ottaa lyhyenä ja viileänä, ja tatuointi pestään heti jälkeenpäin.',
    intro: [
      'Sauna on Suomessa viikkorutiini, ei erikoistilaisuus, ja siksi tämä on käytännössä yleisin yksittäinen kysymys tuoreen tatuoinnin jälkeen. Vastaus on sama kaikilta tatuoijilta: odota kunnes iho on ehjä. Vaikeampi kysymys on miksi — ja se kannattaa tietää, koska kolme viikkoa on pitkä aika olla noudattamatta sääntöä, jonka perustetta ei ymmärrä.',
      'Aikataulut tässä oppaassa ovat suomalaisten studioiden yleistä käytäntöä. Oma tekijäsi tietää, millä kalvolla ja miten syvälle työsi on tehty, joten hänen ohjeensa menee aina tämän edelle.',
    ],
    sections: [
      {
        id: 'milloin-saunaan',
        title: 'Milloin tatuoinnin jälkeen voi mennä saunaan?',
        lead: 'Kun kuoriutuminen on kokonaan ohi eikä pinnalla ole rupia, hilseitä tai kiiltäviä kohtia. Käytännössä 2–3 viikkoa, isoissa töissä pidempään.',
        table: {
          columns: ['Aika tatuoinnista', 'Sauna', 'Miksi'],
          rows: [
            ['0–1 viikko', 'Ei.', 'Avoin haava. Hiki, kuumuus ja lauteiden bakteerit yhdessä.'],
            ['1–2 viikkoa', 'Ei.', 'Kuoriutuminen käynnissä. Kosteus pehmittää rupia liian aikaisin.'],
            ['2–3 viikkoa', 'Vasta kun pinta on ehjä.', 'Lyhyt ja viileä ensimmäinen kerta.'],
            ['3+ viikkoa', 'Normaalisti.', 'Rasvaa jälkeenpäin — sauna kuivattaa ihoa.'],
          ],
          note: 'Ajat ovat suuntaa antavia. Iso, tiiviisti varjostettu työ tai hankalassa paikassa oleva tatuointi paranee hitaammin kuin ohut viiva.',
        },
        paragraphs: [
          'Sama raja pätee höyrysaunaan, infrapunasaunaan ja kuumaan kylpyyn. Infrapunasauna ei ole poikkeus siksi että ilma on viileämpää — ihon lämpötila nousee silti ja hikoilu on sama asia.',
        ],
      },
      {
        id: 'miksi-ei',
        title: 'Miksi sauna on ongelma tuoreelle tatuoinnille?',
        lead: 'Kolme erillistä syytä, ja ne kasautuvat. Yksikään ei yksinään pilaa työtä, mutta yhdessä ne ovat se yleisin tapa, jolla lopputulos kärsii.',
        bullets: [
          'Kuumuus laajentaa verisuonia. Tuore tatuointi turpoaa ja punoittaa enemmän, ja imunestettä erittyy uudelleen jo rauhoittuneelta alueelta.',
          'Hiki on suolaista. Se kirvelee avoimella iholla ja kuivattaa aluetta, mikä johtaa paksumpiin rupiin ja epätasaisempaan kuoriutumiseen.',
          'Lauteet ovat lämmin ja kostea pinta, jolla on muiden ihmisten bakteereita. Se on tulehdusriski avoimelle haavalle, ei tavalliselle iholle.',
          'Kosteus pehmittää rupia. Pehmeä rupi irtoaa liian aikaisin ja vie mustetta mukanaan — juuri tästä syntyvät vaaleat laikut.',
        ],
        callout: {
          title: 'Yleisin virhe',
          text: 'Ei se että joku menee saunaan päivänä yksi — sen useimmat tietävät. Vaan se että kymmenentenä päivänä pinta näyttää jo hyvältä, kuoriutuminen vaikuttaa loppuneen ja sauna tuntuu turvalliselta. Silloin alla on vielä uutta, ohutta ihoa, ja juuri silloin laikut syntyvät.',
          tone: 'warning',
        },
      },
      {
        id: 'jos-on-pakko',
        title: 'Entä jos saunaa ei voi välttää?',
        lead: 'Työsauna, mökkireissu tai yhteinen ilta ei aina jousta. Riskiä voi pienentää, vaikka sitä ei voi poistaa.',
        steps: [
          {
            title: 'Odota vähintään ensimmäinen viikko',
            text: 'Ensimmäiset 5–7 vuorokautta ovat ne, joina alue on aidosti avoin. Jos joustaa on pakko, jousta vasta sen jälkeen.',
          },
          {
            title: 'Mene viileään saunaan ja lyhyeksi ajaksi',
            text: 'Alalauteille, ei löylyä, korkeintaan viisi minuuttia. Tavoite on olla saunassa, ei hikoilla kunnolla.',
          },
          {
            title: 'Istu oman pyyhkeen päällä',
            text: 'Älä anna tatuoinnin koskea lauteisiin. Puhdas pyyhe alle joka kerta.',
          },
          {
            title: 'Pese heti jälkeenpäin',
            text: 'Haalea suihku ja hajusteeton pesuaine saman tien. Hikeä ei jätetä tatuoinnin päälle kuivumaan.',
          },
          {
            title: 'Kuivaa taputellen ja rasvaa ohuelti',
            text: 'Puhtaalla pyyhkeellä taputellen, ei hangaten. Sen jälkeen ohut kerros hajusteetonta hoitovoidetta.',
          },
        ],
        paragraphs: [
          'Älä uskottele itsellesi että kylpylän poreallas tai uima-allas olisi turvallisempi kuin sauna. Se on huonompi: siinä yhdistyy pitkä liotus ja jaettu vesi. Uimisesta on oma oppaansa.',
        ],
      },
      {
        id: 'parantunut',
        title: 'Vaikuttaako sauna parantuneeseen tatuointiin?',
        lead: 'Ei merkittävästi. Säännöllinen saunominen ei haalista mustetta, mutta se kuivattaa ihoa — ja kuiva iho saa tatuoinnin näyttämään harmaalta.',
        paragraphs: [
          'Parantuneen tatuoinnin muste on verinahassa, jonne saunan lämpö ei ylety vaikuttamaan pigmenttiin. Toisin kuin auringossa, tässä ei ole kyse haalistumisesta vaan optiikasta: kuiva ja hilseilevä pintakerros hajottaa valoa ja tatuointi näyttää sameammalta kuin se on.',
          'Ratkaisu on yksinkertainen. Rasvaa saunan jälkeen kuten muutenkin rasvaisit, niin väri näyttää kirkkaalta seuraavana päivänäkin. Tämä on sama ilmiö kuin talvella kuivan sisäilman kanssa.',
        ],
      },
      {
        id: 'kylma',
        title: 'Entä avanto ja kylmäaltistus?',
        lead: 'Sama raja kuin saunalla, ja yksi lisäsyy: avantovesi ei ole puhdasta.',
        bullets: [
          'Avanto ja järvi tuoreen tatuoinnin kanssa: ei. Luonnonvesi sisältää bakteereita, ja tatuointi on avoin haava vähintään kaksi viikkoa.',
          'Kylmäsuihku parantuneelle tatuoinnille: ei haittaa lainkaan.',
          'Kylmä kutistaa verisuonia ja vähentää turvotusta, mutta se ei ole syy altistaa tuoretta tatuointia järvivedelle. Turvotukseen riittää se, että kohotat raajaa ensimmäisenä iltana.',
        ],
      },
    ],
    faqTitle: 'Usein kysyttyä saunasta',
    faq: [
      {
        q: 'Milloin tatuoinnin jälkeen voi saunoa?',
        a: 'Kun iho on kokonaan kuoriutunut eikä pinnalla ole rupia tai hilseitä, tyypillisesti 2–3 viikon kuluttua. Ensimmäinen kerta kannattaa ottaa lyhyenä ja viileänä, ja tatuointi pestään heti jälkeenpäin.',
      },
      {
        q: 'Voiko infrapunasaunaan mennä aikaisemmin?',
        a: 'Ei. Ilma on viileämpää, mutta ihon lämpötila nousee ja hikoilu on sama asia. Sama 2–3 viikon raja pätee infrapunasaunaan, höyrysaunaan ja kuumaan kylpyyn.',
      },
      {
        q: 'Mitä tapahtuu jos saunoin vahingossa liian aikaisin?',
        a: 'Yksi lyhyt kerta ei useimmiten pilaa työtä. Pese alue haalealla vedellä ja hajusteettomalla pesuaineella, kuivaa taputellen ja rasvaa ohuelti. Seuraa aluetta: leviävä punoitus, märkä tai voimistuva kipu ovat syitä ottaa yhteyttä terveydenhuoltoon.',
      },
      {
        q: 'Saako kalvon kanssa saunoa?',
        a: 'Ei. Hengittävä hoitokalvo ei ole vesitiivis suoja saunan olosuhteissa, ja sen alle kertyvä hiki on juuri se ympäristö jota halutaan välttää. Kalvo ei muuta aikarajaa.',
      },
      {
        q: 'Haalistaako sauna tatuointia pitkällä aikavälillä?',
        a: 'Ei merkittävästi. Sauna kuivattaa ihoa, ja kuiva iho saa tatuoinnin näyttämään harmaalta — mutta se on optiikkaa, ei musteen katoamista. Säännöllinen kosteutus riittää. Aurinko sen sijaan haalistaa pysyvästi.',
      },
    ],
    productsTitle: 'Mitä saunan jälkeen',
    productsIntro:
      'Kun saunominen taas onnistuu, kaksi tuotetta riittää: mieto pesu heti jälkeenpäin ja kosteutus, joka pitää värin kirkkaana.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Pesu heti saunan jälkeen',
        text: 'Hajusteeton nestesaippua, haalea vesi. Hikeä ei jätetä tatuoinnin päälle kuivumaan — se on tärkeämpää kuin se, kuinka kauan saunassa oli.',
      },
      {
        category: 'aftercare',
        title: 'Hoitovoide paranemisen aikana',
        text: 'Niin kauan kuin iho kuoriutuu: kevyt, hajusteeton kerros pesun jälkeen. Sauna odottaa siihen asti, mutta rasvaus ei.',
      },
      {
        category: 'moisturising',
        title: 'Kosteutus säännölliselle saunojalle',
        text: 'Sauna kuivattaa, ja kuiva iho saa tatuoinnin näyttämään harmaalta. Rasvaus saunan jälkeen on ero kirkkaan ja sameelta näyttävän tatuoinnin välillä — ilman että mustetta on yhtään enempää.',
      },
    ],
    relatedTitle: 'Jatka tästä',
    relatedIntro:
      'Sauna on yksi kysymys paranemisen aikana. Uiminen, aurinko ja itse hoitorutiini käsitellään omissa oppaissaan.',
    upcomingTitle: 'Tulossa',
    ctaTitle: 'Etsitkö tatuoijaa?',
    ctaText:
      'Selaa Suomen tatuoijia ja studioita kaupungin tai tyylin mukaan. Kysy jälkihoito-ohje aina omalta tekijältäsi.',
    ctaLabel: 'Selaa tatuoijia',
    disclaimer:
      'Tämä opas on yleistä tietoa, ei lääketieteellistä neuvontaa. Jos alue tulehtuu tai oireet pahenevat, ota yhteyttä terveydenhuoltoon.',
  },
  sv: {
    metaTitle: 'Tatuering och bastu — när kan du basta? | Tatuoijat.fi',
    metaDescription:
      'Tatuering och bastu: när du kan basta med en ny tatuering, varför värmen är ett problem för hud som läker och vad du gör om bastun inte går att undvika.',
    eyebrow: 'Guide',
    h1: 'Tatuering och bastu',
    answer:
      'Med en ny tatuering bastar du inte förrän huden fjällat färdigt, typiskt 2–3 veckor. Värmen vidgar blodkärlen och ökar svullnaden, svetten irriterar öppen hud och lavarna är en bakteriemiljö. Första gången bör vara kort och sval, och tatueringen tvättas direkt efteråt.',
    intro: [
      'Bastu är veckorutin i Finland, inte en högtidsstund, och därför är det här i praktiken den vanligaste enskilda frågan efter en ny tatuering. Svaret är detsamma från alla tatuerare: vänta tills huden är hel. Den svårare frågan är varför — och den är värd att veta, för tre veckor är lång tid att följa en regel man inte förstår grunden för.',
      'Tiderna i guiden följer finsk studiopraxis. Din egen tatuerare vet vilken film och vilket djup ditt jobb har, så hens anvisning går alltid före den här.',
    ],
    sections: [
      {
        id: 'milloin-saunaan',
        title: 'När kan man basta efter en tatuering?',
        lead: 'När fjällningen är helt över och det inte finns skorpor, flagor eller blanka partier kvar. I praktiken 2–3 veckor, längre för stora jobb.',
        table: {
          columns: ['Tid sedan tatueringen', 'Bastu', 'Varför'],
          rows: [
            ['0–1 vecka', 'Nej.', 'Öppet sår. Svett, värme och lavarnas bakterier samtidigt.'],
            ['1–2 veckor', 'Nej.', 'Fjällning pågår. Fukten mjukar upp skorporna för tidigt.'],
            ['2–3 veckor', 'Först när ytan är hel.', 'Kort och svalt första gången.'],
            ['3+ veckor', 'Som vanligt.', 'Smörj efteråt — bastun torkar ut huden.'],
          ],
          note: 'Tiderna är vägledande. Ett stort, tätt skuggat jobb eller en tatuering på ett besvärligt ställe läker långsammare än en tunn linje.',
        },
        paragraphs: [
          'Samma gräns gäller ångbastu, infraröd bastu och varmt bad. Infrabastun är inget undantag för att luften är svalare — hudtemperaturen stiger ändå och svettningen är samma sak.',
        ],
      },
      {
        id: 'miksi-ei',
        title: 'Varför är bastu ett problem för en ny tatuering?',
        lead: 'Tre separata skäl, och de staplar sig. Inget av dem förstör jobbet ensamt, men tillsammans är de det vanligaste sättet resultatet blir sämre.',
        bullets: [
          'Värmen vidgar blodkärlen. En ny tatuering svullnar och rodnar mer, och lymfvätska börjar rinna igen från ett område som redan lugnat sig.',
          'Svett är salt. Det svider på öppen hud och torkar ut området, vilket ger tjockare skorpor och ojämnare fjällning.',
          'Lavarna är en varm, fuktig yta med andras bakterier. Det är en infektionsrisk för ett öppet sår, inte för vanlig hud.',
          'Fukten mjukar upp skorporna. En mjuk skorpa lossnar för tidigt och tar med sig bläck — det är precis så de ljusa fläckarna uppstår.',
        ],
        callout: {
          title: 'Det vanligaste misstaget',
          text: 'Är inte att någon bastar dag ett — det vet de flesta. Det är att ytan dag tio ser bra ut, fjällningen verkar över och bastun känns säker. Då finns fortfarande ny, tunn hud under, och det är just då fläckarna uppstår.',
          tone: 'warning',
        },
      },
      {
        id: 'jos-on-pakko',
        title: 'Vad gör du om bastun inte går att undvika?',
        lead: 'En jobbastu, en stugresa eller en gemensam kväll flyttar sig inte alltid. Risken går att minska även om den inte går att ta bort.',
        steps: [
          {
            title: 'Vänta åtminstone ut första veckan',
            text: 'De första 5–7 dygnen är de då området verkligen är öppet. Måste du tumma på det, gör det efter dem.',
          },
          {
            title: 'Sval bastu och kort tid',
            text: 'Nedre laven, inget bad, högst fem minuter. Målet är att vara med, inte att svettas ordentligt.',
          },
          {
            title: 'Sitt på din egen handduk',
            text: 'Låt inte tatueringen röra laven. Ren handduk under varje gång.',
          },
          {
            title: 'Tvätta direkt efteråt',
            text: 'Ljummen dusch och oparfymerat rengöringsmedel med en gång. Svett lämnas inte kvar att torka på tatueringen.',
          },
          {
            title: 'Klappa torrt och smörj tunt',
            text: 'Ren handduk, klappa — gnid inte. Därefter ett tunt lager oparfymerad vårdkräm.',
          },
        ],
        paragraphs: [
          'Intala dig inte att spabadet eller bassängen skulle vara säkrare än bastun. De är sämre: där kombineras lång blötläggning med delat vatten. Bad har en egen guide.',
        ],
      },
      {
        id: 'parantunut',
        title: 'Påverkar bastu en läkt tatuering?',
        lead: 'Inte nämnvärt. Regelbundet bastande bleker inte bläcket, men det torkar ut huden — och torr hud får tatueringen att se grå ut.',
        paragraphs: [
          'Bläcket i en läkt tatuering sitter i läderhuden, dit bastuvärmen inte når för att påverka pigmentet. Till skillnad från solen handlar det inte om blekning utan om optik: ett torrt, fjällande ytlager sprider ljuset och tatueringen ser suddigare ut än den är.',
          'Lösningen är enkel. Smörj efter bastun som du skulle smörja annars, så ser färgen klar ut också dagen efter. Det är samma fenomen som torr inomhusluft ger på vintern.',
        ],
      },
      {
        id: 'kylma',
        title: 'Hur är det med vak och kallbad?',
        lead: 'Samma gräns som för bastun, plus ett skäl till: vakvatten är inte rent.',
        bullets: [
          'Vak och sjö med en ny tatuering: nej. Naturvatten innehåller bakterier, och tatueringen är ett öppet sår i minst två veckor.',
          'Kalldusch på en läkt tatuering: helt oproblematiskt.',
          'Kyla drar ihop blodkärlen och minskar svullnaden, men det är inget skäl att utsätta en ny tatuering för sjövatten. Mot svullnaden räcker det att du håller upp armen eller benet första kvällen.',
        ],
      },
    ],
    faqTitle: 'Vanliga frågor om bastu',
    faq: [
      {
        q: 'När kan man basta efter en tatuering?',
        a: 'När huden fjällat färdigt och det inte finns skorpor eller flagor kvar, typiskt efter 2–3 veckor. Första gången bör vara kort och sval, och tatueringen tvättas direkt efteråt.',
      },
      {
        q: 'Går det bra med infrabastu tidigare?',
        a: 'Nej. Luften är svalare, men hudtemperaturen stiger och svettningen är samma sak. Samma gräns på 2–3 veckor gäller infrabastu, ångbastu och varmt bad.',
      },
      {
        q: 'Vad händer om jag bastade för tidigt av misstag?',
        a: 'En kort gång förstör oftast inte jobbet. Tvätta området med ljummet vatten och oparfymerat rengöringsmedel, klappa torrt och smörj tunt. Håll koll: spridande rodnad, var eller ökande smärta är skäl att kontakta vården.',
      },
      {
        q: 'Kan man basta med filmen på?',
        a: 'Nej. Den andningsbara vårdfilmen är inget vattentätt skydd i bastumiljö, och svetten som samlas under den är precis den miljö man vill undvika. Filmen ändrar inte tidsgränsen.',
      },
      {
        q: 'Bleker bastu tatueringen på lång sikt?',
        a: 'Inte nämnvärt. Bastun torkar ut huden, och torr hud får tatueringen att se grå ut — men det är optik, inte att bläck försvinner. Regelbunden återfuktning räcker. Solen däremot bleker permanent.',
      },
    ],
    productsTitle: 'Vad du använder efter bastun',
    productsIntro:
      'När bastandet fungerar igen räcker två produkter: mild rengöring direkt efteråt och återfuktning som håller färgen klar.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Rengöring direkt efter bastun',
        text: 'Oparfymerad flytande tvål, ljummet vatten. Att svetten inte får torka på tatueringen är viktigare än hur länge du satt i bastun.',
      },
      {
        category: 'aftercare',
        title: 'Vårdkräm under läkningen',
        text: 'Så länge huden fjällar: ett lätt, oparfymerat lager efter tvätt. Bastun väntar till dess, men insmörjningen gör det inte.',
      },
      {
        category: 'moisturising',
        title: 'Återfuktning för den som bastar ofta',
        text: 'Bastun torkar ut, och torr hud får tatueringen att se grå ut. Insmörjning efter bastun är skillnaden mellan en klar och en suddig tatuering — utan att det finns en droppe mer bläck.',
      },
    ],
    relatedTitle: 'Fortsätt här',
    relatedIntro:
      'Bastun är en fråga under läkningen. Bad, sol och själva vårdrutinen har egna guider.',
    upcomingTitle: 'På väg',
    ctaTitle: 'Letar du efter en tatuerare?',
    ctaText:
      'Bläddra bland Finlands tatuerare och studior efter stad eller stil. Fråga alltid din egen tatuerare om vårdanvisningen.',
    ctaLabel: 'Bläddra bland tatuerare',
    disclaimer:
      'Den här guiden är allmän information, inte medicinsk rådgivning. Om området blir infekterat eller besvären förvärras — kontakta vården.',
  },
};

export const tatuointiJaSaunaCard: GuideCardByLocale = {
  fi: {
    title: 'Tatuointi ja sauna',
    summary:
      'Milloin saunaan pääsee taas, miksi löyly on ongelma parantuvalle iholle ja miten riskiä pienennetään jos sauna on pakko.',
  },
  sv: {
    title: 'Tatuering och bastu',
    summary:
      'När du kan basta igen, varför värmen är ett problem för hud som läker och hur du minskar risken när bastun inte går att undvika.',
  },
};
