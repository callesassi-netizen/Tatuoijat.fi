import type { GuideCardByLocale, GuideContentByLocale } from './types';

/**
 * Opas: tatuoinnin hoitotuotteet (/oppaat/tatuoinnin-hoitotuotteet/,
 * sv /sv/guider/produkter-for-tatueringsvard/).
 *
 * Täckta söktermer: tatuoinnin hoitotuotteet, tatuointivoide, tatuointirasva,
 * hajusteeton perusvoide tatuoinnille, tatuoinnin pesuaine, tatuointi
 * aurinkorasva.
 *
 * KANNIBALISERING: /oppaat/tatuoinnin-jalkihoito/ äger själva RUTINEN (när,
 * hur ofta, i vilken ordning). Den här sidan äger PRODUKTVALET (vad man ska
 * titta efter i innehållsförteckningen). Sidorna länkar till varandra i stället
 * för att upprepa varandra — därför står det ingen dag-för-dag-rutin här.
 *
 * AFFILIATE: det här är den enda guiden som är skriven för att bära
 * produktkort. Kriterietexterna i `productCategories` är redaktionella och
 * står på egna ben även utan en enda länk — se src/data/affiliate.ts. Inga
 * märkesnamn i brödtexten: rekommenderar vi en INNEHÅLLSTYP i stället för ett
 * varumärke håller texten även när sortimentet byts ut.
 */
export const tatuoinninHoitotuotteet: GuideContentByLocale = {
  fi: {
    metaTitle: 'Tatuoinnin hoitotuotteet — mitä oikeasti tarvitset | Tatuoijat.fi',
    metaDescription:
      'Tatuoinnin hoitotuotteet ilman turhaa: millainen rasva ja saippua tuoreelle tatuoinnille sopii, mitä ainesosia vältetään ja milloin aurinkosuoja otetaan käyttöön.',
    eyebrow: 'Opas',
    h1: 'Tatuoinnin hoitotuotteet',
    answer:
      'Tuore tatuointi tarvitsee kaksi tuotetta: hajusteettoman nestesaippuan ja ohuen, hajusteettoman perusvoiteen. Erillistä tatuointivoidetta ei ole pakko ostaa — apteekin perusvoide riittää, kunhan siinä ei ole hajusteita, väriaineita eikä alkoholia. Kolmas tuote, aurinkosuoja SPF 50, otetaan käyttöön vasta kun iho on kokonaan parantunut.',
    intro: [
      'Tatuointivoide on ala, jossa markkinointi on selvästi edellä tutkimusta. Purkkeja myydään tatuointiin erikseen suunniteltuina, mutta ainesosaluettelo on useimmiten sama kuin tavallisessa apteekin perusvoiteessa — hinta vain on toinen. Tämä opas kertoo, mitä ainesosia kannattaa katsoa ja mitä ei tarvitse maksaa.',
      'Käytännön ohje: osta ensin halvin vaihtoehto joka täyttää kriteerit. Jos iho reagoi, vaihda — mutta älä osta kolmea purkkia varmuuden vuoksi. Itse hoitorutiini eli pesun ja rasvauksen ajoitus on oma lukunsa, ja se käydään läpi jälkihoito-oppaassa.',
    ],
    sections: [
      {
        id: 'mita-tarvitaan',
        title: 'Mitä tuotteita tatuoinnin hoitoon oikeasti tarvitaan?',
        lead: 'Kaksi tuotetta riittää koko paranemisen ajan. Kolmas tulee mukaan vasta kun iho on kunnossa.',
        bullets: [
          'Hajusteeton nestesaippua. Pesuun 1–2 kertaa päivässä. Kiinteä palasaippua ei ole ihanteellinen: se kerää bakteereita pinnalleen ja kuivattaa herkemmin.',
          'Hajusteeton perusvoide tai -emulsio. Ohut kerros pesun jälkeen. Tämä on se tuote, jota kutsutaan kaupassa tatuointivoiteeksi.',
          'Aurinkosuoja SPF 50. Vasta kuoriutumisen jälkeen — tuoreelle haavalle aurinkorasvaa ei laiteta lainkaan.',
        ],
        paragraphs: [
          'Kaikki muu on lisävarustetta. Erilliset tatuointiöljyt, balsamit ja seerumit eivät ole haitallisia, mutta ne eivät myöskään tee mitään, mitä perusvoide ei tekisi. Jos haluat ostaa tatuointiin suunnitellun tuotteen mielikuvan takia, se on täysin kelvollinen syy — kunhan tiedät maksavasi siitä.',
        ],
      },
      {
        id: 'rasva',
        title: 'Millainen rasva tatuoinnille sopii?',
        lead: 'Etsi kolmea asiaa: ei hajustetta, kevyt koostumus ja lyhyt ainesosaluettelo. Kaikki kolme lukevat purkin kyljessä.',
        bullets: [
          'Hajusteeton (hajusteeton / parfyymitön / fragrance free). Hajusteet ovat yleisin syy siihen, että tuore tatuointi alkaa kutista ja punoittaa.',
          'Väriaineeton. Väriaine ei hyödytä ihoa millään tavalla ja on turha allergeeni avoimella iholla.',
          'Kevyt, ei paksu. Tuore tatuointi tarvitsee happea. Paksu kerros vaseliinia tai muuta okklusiivista rasvaa tukkii ihon ja hidastaa kuoriutumista.',
          'Panteenoli (D-pantenoli, provitamiini B5) on hyvä lisä. Se rauhoittaa ja tukee ihon omaa korjautumista, ja sitä on useimmissa apteekin haavanhoitovoiteissa.',
          'Ureaa sisältävät voiteet jätetään myöhempään. Urea kosteuttaa tehokkaasti mutta kirvelee avoimella iholla — se on parantuneen tatuoinnin ylläpitotuote, ei ensimmäisen viikon.',
        ],
        paragraphs: [
          'Kokosöljy, sheavoi ja muut kotikonstit kannattaa jättää tähän vaiheeseen väliin. Ne ovat okklusiivisia eli tiivistäviä, ja niiden puhtaudesta ei ole takeita samalla tavalla kuin apteekkituotteessa. Käytä niitä vasta kun iho on ehjä, jos haluat.',
        ],
        callout: {
          title: 'Ohut kerros tarkoittaa ohutta',
          text: 'Yleisin virhe ei ole väärä tuote vaan liian paksu kerros. Oikea määrä on niin vähän, että iho kiiltää hetken ja mattuu muutamassa minuutissa. Jos tatuointi näyttää tunnin päästä kiiltävältä, rasvaa oli liikaa.',
          tone: 'note',
        },
      },
      {
        id: 'pesu',
        title: 'Millaisella saippualla tatuointi pestään?',
        lead: 'Miedolla, hajusteettomalla nestesaippualla. Ei antibakteerista, ei kuorivaa, ei tuoksuvaa suihkusaippuaa.',
        paragraphs: [
          'Antibakteerinen saippua kuulostaa loogiselta valinnalta haavalle, mutta se kuivattaa ihoa turhaan eikä tuo lisähyötyä tavalliseen pesuun verrattuna. Tuoreen tatuoinnin puhtaus ratkeaa käsihygienialla ja pesun säännöllisyydellä, ei saippuan vahvuudella.',
          'Apteekin hajusteeton pesuneste tai perusvoiteen kanssa samaan sarjaan kuuluva pesutuote on turvallinen oletus. Tavallinen tuoksuva suihkusaippua ei ole — se on juuri se tuote, joka saa tuoreen tatuoinnin kirvelemään.',
        ],
        bullets: [
          'Nestemäinen, ei palasaippua.',
          'Hajusteeton ja väriaineeton.',
          'Ei antibakteerinen, ei kuoriva, ei happopitoinen (AHA/BHA).',
          'pH lähellä ihon omaa, noin 5,5, jos se on merkitty.',
        ],
      },
      {
        id: 'valtettavat',
        title: 'Mitä tuotteita tatuoinnille ei saa laittaa?',
        lead: 'Muutama tuoteryhmä tekee aktiivista vahinkoa tuoreelle tatuoinnille. Ne ovat helppo välttää, kun tietää mitkä ne ovat.',
        bullets: [
          'Alkoholipitoiset tuotteet, käsidesi ja desinfiointiaineet. Kuivattavat ja kirvelevät, eivätkä kuulu paranevalle haavalle.',
          'Vetyperoksidi ja jodi. Vaurioittavat uutta ihosolukkoa ja voivat haalistaa väriä.',
          'Kuorivat tuotteet, AHA- ja BHA-hapot, retinoli. Nämä irrottavat juuri sitä kerrosta, jonka pitäisi saada olla rauhassa.',
          'Paksu vaseliini yksinään. Tukkii ihon eikä päästä kuoriutumista etenemään.',
          'Hajustetut vartalovoiteet ja bodylotionit. Yleisin ärsytyksen aiheuttaja.',
        ],
        callout: {
          title: 'Milloin tuote on väärä',
          text: 'Jos rasvaus kirvelee yli muutaman sekunnin, iho punoittaa laajemmalta alueelta kuin itse tatuointi tai alue alkaa kutista voimakkaasti, kyse on todennäköisesti tuotteesta eikä tatuoinnista. Pese tuote pois haalealla vedellä ja vaihda hajusteettomaan perusvoiteeseen. Jos oireet jatkuvat, ota yhteyttä tatuoijaan tai terveydenhuoltoon.',
          tone: 'warning',
        },
      },
      {
        id: 'aurinkosuoja',
        title: 'Milloin aurinkosuoja otetaan käyttöön?',
        lead: 'Vasta kun iho on kokonaan kuoriutunut, tyypillisesti 2–4 viikon kuluttua. Sen jälkeen se on tatuoinnin tärkein yksittäinen hoitotuote loppuiäksi.',
        paragraphs: [
          'Tuoreelle tatuoinnille ei laiteta aurinkorasvaa. Se ei kuulu avoimelle haavalle, ja oikea ratkaisu ensimmäisinä viikkoina on peittää tatuointi vaatteella tai pysyä varjossa.',
          'Parantumisen jälkeen tilanne kääntyy päinvastaiseksi. UV-säteily haalistaa tatuointimustetta pysyvästi, ja ero suojatun ja suojaamattoman tatuoinnin välillä näkyy vuosien kuluessa selvästi. Kymmenen vuoden päästä terävä viiva on kiinni siitä, käytettiinkö aurinkosuojaa kesäisin.',
          'Käytännössä: SPF 50, hajusteeton, ja uudelleen kahden tunnin välein auringossa. Musta ja tummansininen haalistuvat hitaimmin, punainen ja keltainen nopeimmin — värikäs tatuointi hyötyy suojasta eniten.',
        ],
      },
      {
        id: 'hinta',
        title: 'Paljonko tatuoinnin hoitotuotteet maksavat?',
        lead: 'Koko paranemisen tuotteet maksavat noin 15–30 €, jos ostaa apteekin perusvalikoimasta. Tatuointiin erikseen brändätyt tuotteet nostavat summan helposti kaksinkertaiseksi.',
        table: {
          columns: ['Tuote', 'Tyypillinen hinta', 'Riittää'],
          rows: [
            ['Hajusteeton nestesaippua, 250–500 ml', '5–12 €', 'Useaan tatuointiin'],
            ['Hajusteeton perusvoide, 100–200 ml', '7–15 €', 'Koko paranemisen ajan'],
            ['Panteenolia sisältävä hoitovoide, 30–100 g', '8–18 €', 'Koko paranemisen ajan'],
            ['Aurinkosuoja SPF 50, 200 ml', '10–25 €', 'Kesäkauden'],
            ['Tatuointiin brändätty balsami, 30–50 ml', '15–30 €', 'Yhden tatuoinnin'],
          ],
          note: 'Hintahaarukat ovat Suomen verkkoapteekkien ja kosmetiikkaverkkokauppojen tavanomaista tasoa elokuussa 2026. Ne vaihtelevat kampanjoiden mukaan.',
        },
        paragraphs: [
          'Taulukon viimeinen rivi on se, jossa raha menee. Tatuointiin brändätty balsami on usein pieni pakkaus kalliilla — samat ainesosat isommassa purkissa maksavat vähemmän apteekin hyllyssä. Se ei tee tuotteesta huonoa, mutta hinta ei kerro tehosta.',
        ],
      },
    ],
    faqTitle: 'Usein kysyttyä hoitotuotteista',
    faq: [
      {
        q: 'Tarvitseeko tatuointiin ostaa erityistä tatuointivoidetta?',
        a: 'Ei tarvitse. Hajusteeton apteekin perusvoide täyttää samat kriteerit kuin tatuointiin brändätty voide, usein halvemmalla ja isommassa pakkauksessa. Tatuointituotteet eivät ole huonoja, mutta ne eivät ole välttämättömiä.',
      },
      {
        q: 'Käykö Bepanthen tai muu panteenolivoide tatuoinnille?',
        a: 'Panteenolia sisältävä hoitovoide sopii tuoreelle tatuoinnille hyvin, kunhan se on hajusteeton ja levitetään ohuelti. Panteenoli rauhoittaa ihoa ja tukee sen omaa korjautumista. Paksu kerros on silti liikaa myös näillä tuotteilla.',
      },
      {
        q: 'Voiko tatuointiin käyttää tavallista bodylotionia?',
        a: 'Vain jos se on hajusteeton ja väriaineeton. Valtaosa vartalovoiteista on hajustettuja, ja hajuste on yleisin syy siihen, että tuore tatuointi alkaa kutista ja punoittaa. Parantuneelle tatuoinnille tavallinen voide käy.',
      },
      {
        q: 'Kuinka kauan hoitotuotteita käytetään?',
        a: 'Pesua ja rasvausta jatketaan koko kuoriutumisen ajan, tyypillisesti 2–3 viikkoa. Sen jälkeen tatuointia hoidetaan kuten muutakin ihoa: kosteutusta tarpeen mukaan ja aurinkosuojaa aina kun iho on auringossa.',
      },
      {
        q: 'Kannattaako ostaa tuotteet studiolta vai apteekista?',
        a: 'Kumpi vain käy. Studio myy usein tuotetta, jonka se tietää toimivan omien kalvojensa kanssa, ja se on hyvä syy ostaa sieltä. Apteekin valikoima on halvempi ja pakkaukset isompia. Ainesosat ratkaisevat, ei ostopaikka.',
      },
    ],
    productsTitle: 'Mitä katsoa tuotteesta',
    productsIntro:
      'Alla olevat kriteerit ovat sama lista, jonka käyt läpi purkin kyljessä kaupassa. Ne pätevät riippumatta merkistä ja siitä, onko tuote markkinoitu tatuointiin vai ei.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Pesu',
        text: 'Nestemäinen, hajusteeton ja väriaineeton pesuneste. Ei antibakteerista, ei kuorivaa, ei happoja. pH noin 5,5 jos se on merkitty pakkaukseen.',
      },
      {
        category: 'aftercare',
        title: 'Hoitovoide ensimmäisille viikoille',
        text: 'Kevyt koostumus ja lyhyt ainesosaluettelo. Panteenoli (provitamiini B5) on hyvä lisä. Ei hajustetta, ei alkoholia, ei ureaa niin kauan kuin iho kuoriutuu.',
      },
      {
        category: 'fragrance-free',
        title: 'Hajusteeton perusvoide',
        text: 'Perusvoide on tatuointivoiteen halvempi ja isompi vastine. Etsi merkintää hajusteeton tai fragrance free — se on ainoa kriteeri, joka oikeasti erottaa sopivan sopimattomasta.',
      },
      {
        category: 'moisturising',
        title: 'Ylläpito parantumisen jälkeen',
        text: 'Kun iho on ehjä, sääntöjä on vähemmän. Ureaa sisältävät voiteet käyvät nyt, ja kuiva iho saa tatuoinnin näyttämään harmaalta — säännöllinen kosteutus pitää värin kirkkaana.',
      },
      {
        category: 'spf',
        title: 'Aurinkosuoja',
        text: 'SPF 50, hajusteeton, uudelleen kahden tunnin välein auringossa. Tämä on tatuoinnin tärkein hoitotuote pitkällä aikavälillä — UV haalistaa mustetta pysyvästi.',
      },
    ],
    relatedTitle: 'Jatka tästä',
    relatedIntro:
      'Tuotteet ovat puolet asiasta. Toinen puoli on ajoitus: milloin pestään, milloin rasvataan ja milloin voi mennä saunaan.',
    upcomingTitle: 'Tulossa',
    ctaTitle: 'Etsitkö tatuoijaa?',
    ctaText:
      'Selaa Suomen tatuoijia ja studioita kaupungin tai tyylin mukaan. Kysy jälkihoito-ohje aina omalta tekijältäsi — hän tietää, millä kalvolla työsi on tehty.',
    ctaLabel: 'Selaa tatuoijia',
    disclaimer:
      'Tämä opas on yleistä tietoa tuotevalinnasta, ei lääketieteellistä neuvontaa. Noudata ensisijaisesti tatuoijasi ohjetta. Jos iho tulehtuu, kuumottaa tai oireet pahenevat, ota yhteyttä terveydenhuoltoon.',
  },
  sv: {
    metaTitle: 'Produkter för tatueringsvård — vad du faktiskt behöver | Tatuoijat.fi',
    metaDescription:
      'Produkter för tatueringsvård utan onödigt: vilken salva och tvål som passar en ny tatuering, vilka ingredienser du undviker och när solskyddet ska in.',
    eyebrow: 'Guide',
    h1: 'Produkter för tatueringsvård',
    answer:
      'En ny tatuering behöver två produkter: en oparfymerad flytande tvål och en tunn, oparfymerad baskräm. Någon särskild tatueringssalva behöver du inte köpa — apotekets baskräm räcker, så länge den saknar parfym, färgämnen och alkohol. Den tredje produkten, solskydd SPF 50, används först när huden är helt läkt.',
    intro: [
      'Tatueringssalva är en bransch där marknadsföringen ligger tydligt före forskningen. Burkarna säljs som särskilt framtagna för tatueringar, men innehållsförteckningen är oftast densamma som i en vanlig baskräm från apoteket — det är priset som skiljer. Den här guiden går igenom vilka ingredienser som spelar roll och vilka du inte behöver betala för.',
      'Praktiskt råd: köp det billigaste alternativet som uppfyller kriterierna. Reagerar huden byter du — men köp inte tre burkar för säkerhets skull. Själva rutinen, alltså när du tvättar och smörjer, hör hemma i eftervårdsguiden.',
    ],
    sections: [
      {
        id: 'mita-tarvitaan',
        title: 'Vilka produkter behöver du egentligen?',
        lead: 'Två produkter räcker hela läkningen. Den tredje kommer in först när huden är hel.',
        bullets: [
          'Oparfymerad flytande tvål. För tvätt 1–2 gånger om dagen. Fast tvål är inte idealisk: den samlar bakterier på ytan och torkar lättare ut huden.',
          'Oparfymerad baskräm eller emulsion. Ett tunt lager efter tvätt. Det är den här produkten som kallas tatueringssalva i butiken.',
          'Solskydd SPF 50. Först efter att huden fjällat färdigt — på ett färskt sår används inget solskydd alls.',
        ],
        paragraphs: [
          'Allt annat är tillbehör. Separata tatueringsoljor, balsam och serum är inte skadliga, men de gör inget som baskrämen inte redan gör. Vill du köpa en produkt gjord för tatueringar för känslans skull är det ett fullt godtagbart skäl — så länge du vet att det är vad du betalar för.',
        ],
      },
      {
        id: 'rasva',
        title: 'Vilken salva passar en tatuering?',
        lead: 'Leta efter tre saker: ingen parfym, lätt konsistens och kort innehållsförteckning. Alla tre står på burken.',
        bullets: [
          'Oparfymerad (parfymfri / fragrance free). Parfym är den vanligaste orsaken till att en ny tatuering börjar klia och rodna.',
          'Utan färgämnen. Färgämnen gör ingen nytta för huden och är ett onödigt allergen på öppen hud.',
          'Lätt, inte tjock. En ny tatuering behöver syre. Ett tjockt lager vaselin eller annan täckande salva täpper till huden och bromsar fjällningen.',
          'Panthenol (D-panthenol, provitamin B5) är ett bra tillskott. Det lugnar och stödjer hudens egen reparation, och finns i de flesta sårläkningskrämer på apotek.',
          'Krämer med urea sparar du till senare. Urea återfuktar effektivt men svider på öppen hud — det är en underhållsprodukt för en läkt tatuering, inte för första veckan.',
        ],
        paragraphs: [
          'Kokosolja, sheasmör och andra husmedel hoppar du över i det här skedet. De är täckande, och renheten är inte garanterad på samma sätt som i en apoteksprodukt. Använd dem gärna senare, när huden är hel.',
        ],
        callout: {
          title: 'Tunt lager betyder tunt',
          text: 'Det vanligaste felet är inte fel produkt utan för tjockt lager. Rätt mängd är så lite att huden glänser ett ögonblick och mattas på några minuter. Ser tatueringen blank ut en timme senare var det för mycket.',
          tone: 'note',
        },
      },
      {
        id: 'pesu',
        title: 'Vilken tvål tvättar man en tatuering med?',
        lead: 'En mild, oparfymerad flytande tvål. Inte antibakteriell, inte skrubbande, inte parfymerad duschtvål.',
        paragraphs: [
          'Antibakteriell tvål låter logiskt på ett sår, men den torkar ut huden i onödan och ger ingen extra nytta jämfört med vanlig tvätt. Renheten avgörs av handhygien och regelbundenhet, inte av tvålens styrka.',
          'Ett oparfymerat rengöringsmedel från apoteket är ett tryggt förval. En vanlig parfymerad duschtvål är det inte — det är precis den produkt som får en ny tatuering att svida.',
        ],
        bullets: [
          'Flytande, inte fast tvål.',
          'Oparfymerad och utan färgämnen.',
          'Inte antibakteriell, inte skrubbande, inga syror (AHA/BHA).',
          'pH nära hudens eget, runt 5,5, om det är angivet.',
        ],
      },
      {
        id: 'valtettavat',
        title: 'Vad får inte användas på en tatuering?',
        lead: 'Några produktgrupper gör aktiv skada på en ny tatuering. De är lätta att undvika när man vet vilka de är.',
        bullets: [
          'Alkoholbaserade produkter, handsprit och desinfektionsmedel. Torkar ut och svider, och hör inte hemma på ett sår som läker.',
          'Väteperoxid och jod. Skadar den nya hudvävnaden och kan blekna färgen.',
          'Skrubbande produkter, AHA- och BHA-syror, retinol. De lossar just det lager som ska få vara i fred.',
          'Tjockt lager vaselin ensamt. Täpper till huden och låter inte fjällningen gå framåt.',
          'Parfymerade kroppslotioner. Den vanligaste orsaken till irritation.',
        ],
        callout: {
          title: 'När produkten är fel',
          text: 'Om det svider mer än några sekunder när du smörjer, om huden rodnar över ett större område än själva tatueringen eller om det börjar klia kraftigt, är det troligen produkten och inte tatueringen. Tvätta bort den med ljummet vatten och byt till en oparfymerad baskräm. Håller besvären i sig, kontakta din tatuerare eller vården.',
          tone: 'warning',
        },
      },
      {
        id: 'aurinkosuoja',
        title: 'När ska solskyddet in?',
        lead: 'Först när huden fjällat färdigt, typiskt efter 2–4 veckor. Därefter är det tatueringens viktigaste enskilda vårdprodukt — resten av livet.',
        paragraphs: [
          'På en ny tatuering används inget solskydd. Det hör inte hemma på ett öppet sår, och rätt lösning de första veckorna är att täcka tatueringen med kläder eller hålla sig i skuggan.',
          'Efter läkningen vänder det. UV-strålning bleker tatueringsbläck permanent, och skillnaden mellan en skyddad och en oskyddad tatuering syns tydligt efter några år. Om linjen är skarp om tio år hänger på om solskydd användes på somrarna.',
          'I praktiken: SPF 50, oparfymerad, och på nytt varannan timme i solen. Svart och mörkblått bleknar långsammast, rött och gult snabbast — en färgstark tatuering vinner mest på skyddet.',
        ],
      },
      {
        id: 'hinta',
        title: 'Vad kostar produkterna?',
        lead: 'Hela läkningen kostar ungefär 15–30 € om du köper ur apotekets basutbud. Produkter som är särskilt märkta för tatueringar dubblar lätt summan.',
        table: {
          columns: ['Produkt', 'Typiskt pris', 'Räcker till'],
          rows: [
            ['Oparfymerad flytande tvål, 250–500 ml', '5–12 €', 'Flera tatueringar'],
            ['Oparfymerad baskräm, 100–200 ml', '7–15 €', 'Hela läkningen'],
            ['Vårdkräm med panthenol, 30–100 g', '8–18 €', 'Hela läkningen'],
            ['Solskydd SPF 50, 200 ml', '10–25 €', 'En sommarsäsong'],
            ['Balsam märkt för tatueringar, 30–50 ml', '15–30 €', 'En tatuering'],
          ],
          note: 'Prisspannen motsvarar normalnivån hos finska nätapotek och kosmetikbutiker i augusti 2026. De varierar med kampanjer.',
        },
        paragraphs: [
          'Sista raden i tabellen är där pengarna går. Ett balsam märkt för tatueringar är ofta en liten förpackning till högt pris — samma ingredienser i en större burk kostar mindre på apotekshyllan. Det gör inte produkten dålig, men priset säger inget om effekten.',
        ],
      },
    ],
    faqTitle: 'Vanliga frågor om produkter',
    faq: [
      {
        q: 'Måste man köpa en särskild tatueringssalva?',
        a: 'Nej. En oparfymerad baskräm från apoteket uppfyller samma kriterier som en salva märkt för tatueringar, ofta billigare och i större förpackning. Tatueringsprodukterna är inte dåliga, men de är inte nödvändiga.',
      },
      {
        q: 'Fungerar Bepanthen eller andra panthenolkrämer?',
        a: 'En vårdkräm med panthenol passar en ny tatuering bra, så länge den är oparfymerad och läggs på tunt. Panthenol lugnar huden och stödjer dess egen reparation. Ett tjockt lager är för mycket även med de här produkterna.',
      },
      {
        q: 'Går det bra med vanlig bodylotion?',
        a: 'Bara om den är oparfymerad och fri från färgämnen. De flesta kroppslotioner är parfymerade, och parfym är den vanligaste orsaken till att en ny tatuering börjar klia och rodna. På en läkt tatuering fungerar vanlig lotion.',
      },
      {
        q: 'Hur länge används produkterna?',
        a: 'Tvätt och smörjning fortsätter hela fjällningen, typiskt 2–3 veckor. Därefter sköts tatueringen som vilken hud som helst: återfuktning vid behov och solskydd varje gång huden är i solen.',
      },
      {
        q: 'Ska man köpa på studion eller apoteket?',
        a: 'Båda fungerar. Studion säljer ofta en produkt de vet fungerar med sina egna filmer, vilket är ett bra skäl att köpa där. Apotekets sortiment är billigare och förpackningarna större. Det är ingredienserna som avgör, inte inköpsstället.',
      },
    ],
    productsTitle: 'Vad du tittar efter',
    productsIntro:
      'Kriterierna nedan är samma lista som du går igenom på burkens baksida i butiken. De gäller oavsett märke och oavsett om produkten marknadsförs för tatueringar eller inte.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Rengöring',
        text: 'Flytande, oparfymerat rengöringsmedel utan färgämnen. Inte antibakteriellt, inte skrubbande, inga syror. pH runt 5,5 om det står på förpackningen.',
      },
      {
        category: 'aftercare',
        title: 'Vårdkräm för de första veckorna',
        text: 'Lätt konsistens och kort innehållsförteckning. Panthenol (provitamin B5) är ett bra tillskott. Ingen parfym, ingen alkohol, ingen urea så länge huden fjällar.',
      },
      {
        category: 'fragrance-free',
        title: 'Oparfymerad baskräm',
        text: 'Baskrämen är tatueringssalvans billigare och större motsvarighet. Leta efter märkningen oparfymerad eller fragrance free — det är det enda kriteriet som faktiskt skiljer lämpligt från olämpligt.',
      },
      {
        category: 'moisturising',
        title: 'Underhåll efter läkningen',
        text: 'När huden är hel gäller färre regler. Krämer med urea fungerar nu, och torr hud får tatueringen att se grå ut — regelbunden återfuktning håller färgen klar.',
      },
      {
        category: 'spf',
        title: 'Solskydd',
        text: 'SPF 50, oparfymerad, på nytt varannan timme i solen. Det här är tatueringens viktigaste vårdprodukt på lång sikt — UV bleker bläcket permanent.',
      },
    ],
    relatedTitle: 'Fortsätt här',
    relatedIntro:
      'Produkterna är halva saken. Andra halvan är tajmingen: när du tvättar, när du smörjer och när du kan gå i bastu.',
    upcomingTitle: 'På väg',
    ctaTitle: 'Letar du efter en tatuerare?',
    ctaText:
      'Bläddra bland Finlands tatuerare och studior efter stad eller stil. Fråga alltid din egen tatuerare om eftervården — hen vet vilken film ditt jobb är gjort med.',
    ctaLabel: 'Bläddra bland tatuerare',
    disclaimer:
      'Den här guiden är allmän information om produktval, inte medicinsk rådgivning. Följ i första hand din tatuerares anvisning. Om huden blir infekterad, känns varm eller besvären förvärras — kontakta vården.',
  },
};

export const tatuoinninHoitotuotteetCard: GuideCardByLocale = {
  fi: {
    title: 'Tatuoinnin hoitotuotteet',
    summary:
      'Mitä tuotteita tarvitaan oikeasti, mitä ainesosia katsotaan purkin kyljestä ja mitä ei kannata maksaa.',
  },
  sv: {
    title: 'Produkter för tatueringsvård',
    summary:
      'Vilka produkter som faktiskt behövs, vilka ingredienser du läser på burken och vad du inte behöver betala för.',
  },
};
