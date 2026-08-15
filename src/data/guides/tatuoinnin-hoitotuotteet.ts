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
 * PRISVINKEL (ändrad 2026-08-11). Guiden hette tidigare läsaren att köpa
 * billigast möjliga som uppfyller kriterierna. Det var sant men inte hela
 * sanningen: en 400 ml pumpflaska dermatologisk vårdkräm ÄR bättre på öppen
 * hud än en 100 g burk, och skillnaden märks under de tre veckor läsaren
 * faktiskt använder den. Axeln går nu "vad köper ett högre pris" i stället
 * för "billigast vinner" — samma ärlighet, mer användbart råd, och det
 * sammanfaller med att dyrare produkter ger provision. Den ena raden som
 * INTE fick mjukas upp: att ordet "tatuering" på etiketten inte är värt
 * något. Den är sann, och den är hela skälet till att resten går att lita på.
 *
 * AFFILIATE: det här är den enda guiden som är skriven för att bära
 * produktkort. Kriterietexterna i `productCategories` är redaktionella och
 * står på egna ben även utan en enda länk — se src/data/affiliate.ts. Inga
 * märkesnamn i brödtexten: rekommenderar vi en INNEHÅLLSTYP i stället för ett
 * varumärke håller texten även när sortimentet byts ut.
 */
export const tatuoinninHoitotuotteet: GuideContentByLocale = {
  fi: {
    metaTitle: 'Tatuoinnin hoitotuotteet — mitä tarvitset | Tatuoijat.fi',
    metaDescription:
      'Tatuoinnin hoitotuotteet: millainen rasva ja saippua tuoreelle tatuoinnille sopii, mistä hinnassa kannattaa maksaa ja milloin aurinkosuoja otetaan käyttöön.',
    eyebrow: 'Opas',
    h1: 'Tatuoinnin hoitotuotteet',
    answer:
      'Tuore tatuointi tarvitsee kaksi tuotetta: hajusteettoman nestesaippuan ja hajusteettoman hoitovoiteen. Hajusteettomuus on ainoa ehdoton kriteeri — sen jälkeen ratkaisee pakkauskoko, koostumus ja se, kestääkö iho tuotetta kolme viikkoa. Kolmas tuote, aurinkosuoja SPF 50, otetaan käyttöön vasta kun iho on kokonaan parantunut.',
    intro: [
      'Hoitotuotteita myydään kahdella hyvin erilaisella hintatasolla, ja ero ei ole markkinointia. Viiden euron perusvoide ja kahdenkymmenen euron dermatologinen hoitovoide täyttävät molemmat perusvaatimuksen — hajusteettomuuden — mutta ne eivät tunnu iholla samalta eivätkä riitä yhtä pitkään. Tämä opas kertoo, mistä hinnassa oikeasti maksaa.',
      'Käytännön ohje: älä säästä siinä tuotteessa, jota levität avoimelle iholle kaksi kertaa päivässä kolmen viikon ajan. Säästä ennemmin määrässä — kaksi tuotetta riittää, ei viisi. Itse hoitorutiini eli pesun ja rasvauksen ajoitus on oma lukunsa, ja se käydään läpi jälkihoito-oppaassa.',
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
          'Kaksi tuotetta, ei viittä. Erilliset seerumit, öljyt ja kuorinnat eivät kuulu paranevalle iholle lainkaan, ja jokainen ylimääräinen tuote on yksi ainesosalista lisää, joka voi ärsyttää. Raha kannattaa laittaa siihen, että nämä kaksi ovat hyviä, eikä siihen että niitä on monta.',
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
        id: 'mista-maksaa',
        title: 'Mistä hoitotuotteessa kannattaa maksaa?',
        lead: 'Kolme asiaa erottaa viiden euron purkin kahdenkymmenen euron purkista, ja kaikki kolme tuntuvat iholla. Neljäs ero — sana "tatuointi" etiketissä — ei tunnu.',
        steps: [
          {
            title: 'Pakkauskoko ja annostelu',
            text: 'Iso pumppupullo on halvempi grammaa kohden ja hygieenisempi kuin purkki, johon työnnetään sormet. Tuore tatuointi on haava, ja 400 ml riittää yli koko paranemisen — pieni tuubi loppuu kesken juuri silloin kun kuoriutuminen on pahimmillaan.',
          },
          {
            title: 'Koostumus herkälle iholle',
            text: 'Dermatologiset hoitovoiteet on muotoiltu kutisevalle ja ärtyvälle iholle. Kutina on kuoriutumisvaiheen ikävin osa, ja se on juuri se kohta, jossa moni raapaisee ja menettää väriä. Jos ihosi reagoi herkästi, tämä on se kohta, jossa lisäeuroista saa vastinetta.',
          },
          {
            title: 'Aurinkosuoja',
            text: 'Tässä ei kannata säästää lainkaan, mutta ei myöskään ostaa pientä. Aurinkosuojaa pitää levittää paksusti ja usein, ja liian pieni pullo johtaa automaattisesti liian ohueen kerrokseen. Iso pakkaus on halvempi tapa saada oikea annos.',
          },
        ],
        paragraphs: [
          'Se mistä EI kannata maksaa on markkinointi. Tatuointiin erikseen brändätty balsami on tyypillisesti 30–50 ml pientä pakkausta, jonka ainesosaluettelo ei eroa apteekin hoitovoiteesta. Maksa koosta, koostumuksesta ja pumpusta — älä sanasta etiketissä.',
        ],
      },
      {
        id: 'hinta',
        title: 'Paljonko tatuoinnin hoitotuotteet maksavat?',
        lead: 'Koko paranemisen tuotteet maksavat noin 15–45 € riippuen siitä, ostaako perustason vai dermatologisen tason. Molemmat toimivat; kalliimpi on miellyttävämpi ja riittää pidempään.',
        table: {
          columns: ['Tuote', 'Perustaso', 'Dermatologinen taso'],
          rows: [
            ['Hajusteeton pesuaine', '5–8 €', '15–20 €'],
            ['Hoitovoide ensimmäisille viikoille', '6–10 €', '18–30 €'],
            ['Ylläpitovoide parantumisen jälkeen', '8–12 €', '15–25 €'],
            ['Aurinkosuoja SPF 50, iso pakkaus', '12–18 €', '20–30 €'],
            ['Yhteensä', 'noin 30 €', 'noin 75 €'],
          ],
          note: 'Hintahaarukat ovat Suomen verkkoapteekkien tavanomaista tasoa elokuussa 2026 ja vaihtelevat kampanjoiden mukaan. Sama tuote riittää useimmiten monta tatuointia.',
        },
        paragraphs: [
          'Suhteuta summa itse tatuointiin. Pienikin työ maksaa satoja euroja, ja hoitotuotteet ovat muutaman prosentin lisä siihen. Se on halpa vakuutus sille, että viiva pysyy terävänä ja väri tasaisena — laikukas lopputulos maksaa korjausistunnon, joka on moninkertainen hoitotuotteiden hintaan nähden.',
        ],
      },
    ],
    faqTitle: 'Usein kysyttyä hoitotuotteista',
    faq: [
      {
        q: 'Tarvitseeko tatuointiin ostaa erityistä tatuointivoidetta?',
        a: 'Ei tarvitse, mutta hoitovoiteen laadulla on merkitystä. Ratkaisevaa ei ole sana "tatuointi" etiketissä vaan hajusteettomuus, koostumus ja pakkauskoko. Apteekin dermatologinen hoitovoide täyttää kriteerit paremmin kuin pieni brändätty balsami — ja usein halvemmalla millilitraa kohden.',
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
        a: 'Kumpi vain käy. Studio myy usein tuotetta, jonka se tietää toimivan omien kalvojensa kanssa, ja se on hyvä syy ostaa sieltä. Apteekin valikoima on laajempi ja pakkaukset isompia, mikä tulee halvemmaksi millilitraa kohden. Ainesosat ja koko ratkaisevat, ei ostopaikka.',
      },
    ],
    productsTitle: 'Mitä katsoa tuotteesta',
    productsIntro:
      'Alla olevat kriteerit ovat sama lista, jonka käyt läpi purkin kyljessä kaupassa. Jokaisessa kategoriassa on sekä perustason että dermatologisen tason vaihtoehto — molemmat täyttävät kriteerit, ero on koostumuksessa ja pakkauskoossa.',
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
        text: 'Perusvoide on hoitotuotteen edullisin taso ja täyttää perusvaatimuksen. Etsi merkintää hajusteeton tai fragrance free. Jos iho ei reagoi mitenkään, tämä riittää koko paranemisen ajan.',
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
    metaTitle: 'Produkter för tatueringsvård — vad du behöver | Tatuoijat.fi',
    metaDescription:
      'Produkter för tatueringsvård: vilken salva och tvål som passar en ny tatuering, vad ett högre pris faktiskt köper och när solskyddet ska in.',
    eyebrow: 'Guide',
    h1: 'Produkter för tatueringsvård',
    answer:
      'En ny tatuering behöver två produkter: en oparfymerad flytande tvål och en oparfymerad vårdkräm. Att den är oparfymerad är det enda absoluta kravet — därefter avgör förpackningsstorlek, konsistens och om huden tål produkten i tre veckor. Den tredje produkten, solskydd SPF 50, används först när huden är helt läkt.',
    intro: [
      'Vårdprodukter säljs på två mycket olika prisnivåer, och skillnaden är inte bara marknadsföring. En baskräm för fem euro och en dermatologisk vårdkräm för tjugo uppfyller båda grundkravet — att vara oparfymerade — men de känns inte likadana på huden och räcker inte lika länge. Den här guiden går igenom vad priset faktiskt köper.',
      'Praktiskt råd: snåla inte med den produkt du stryker på öppen hud två gånger om dagen i tre veckor. Snåla hellre med antalet — två produkter räcker, inte fem. Själva rutinen, alltså när du tvättar och smörjer, hör hemma i eftervårdsguiden.',
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
          'Två produkter, inte fem. Separata serum, oljor och skrubb hör inte hemma på hud som läker, och varje extra produkt är ytterligare en innehållsförteckning som kan irritera. Lägg pengarna på att de två är bra, inte på att de är många.',
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
        id: 'mista-maksaa',
        title: 'Vad är värt att betala för?',
        lead: 'Tre saker skiljer en burk för fem euro från en för tjugo, och alla tre märks på huden. Den fjärde skillnaden — ordet "tatuering" på etiketten — märks inte.',
        steps: [
          {
            title: 'Förpackningsstorlek och pump',
            text: 'En stor pumpflaska är billigare per gram och mer hygienisk än en burk du stoppar fingrarna i. En ny tatuering är ett sår, och 400 ml räcker förbi hela läkningen — en liten tub tar slut precis när fjällningen är som värst.',
          },
          {
            title: 'Konsistens för känslig hud',
            text: 'Dermatologiska vårdkrämer är formulerade för hud som kliar och irriteras lätt. Klådan är fjällningsfasens jobbigaste del, och det är precis där många river och förlorar färg. Reagerar din hud lätt är det här du får något för de extra euron.',
          },
          {
            title: 'Solskydd',
            text: 'Här ska du inte snåla alls, men inte heller köpa litet. Solskydd ska läggas tjockt och ofta, och en för liten flaska leder automatiskt till ett för tunt lager. Stor förpackning är det billigare sättet att få rätt dos.',
          },
        ],
        paragraphs: [
          'Det du INTE ska betala för är marknadsföringen. Ett balsam märkt för tatueringar är typiskt en liten 30–50 ml förpackning vars innehållsförteckning inte skiljer sig från apotekets vårdkräm. Betala för storlek, konsistens och pump — inte för ordet på etiketten.',
        ],
      },
      {
        id: 'hinta',
        title: 'Vad kostar produkterna?',
        lead: 'Hela läkningen kostar ungefär 15–45 € beroende på om du köper basnivå eller dermatologisk nivå. Båda fungerar; den dyrare är behagligare och räcker längre.',
        table: {
          columns: ['Produkt', 'Basnivå', 'Dermatologisk nivå'],
          rows: [
            ['Oparfymerad rengöring', '5–8 €', '15–20 €'],
            ['Vårdkräm för de första veckorna', '6–10 €', '18–30 €'],
            ['Underhållskräm efter läkningen', '8–12 €', '15–25 €'],
            ['Solskydd SPF 50, stor förpackning', '12–18 €', '20–30 €'],
            ['Totalt', 'cirka 30 €', 'cirka 75 €'],
          ],
          note: 'Prisspannen motsvarar normalnivån hos finska nätapotek i augusti 2026 och varierar med kampanjer. Samma produkt räcker oftast till flera tatueringar.',
        },
        paragraphs: [
          'Sätt summan i relation till tatueringen. Även ett litet jobb kostar hundratals euro, och vårdprodukterna är några procent ovanpå det. Det är en billig försäkring för att linjen förblir skarp och färgen jämn — ett fläckigt resultat kostar en retuschsession, som är mångdubbelt dyrare än produkterna.',
        ],
      },
    ],
    faqTitle: 'Vanliga frågor om produkter',
    faq: [
      {
        q: 'Måste man köpa en särskild tatueringssalva?',
        a: 'Nej, men vårdkrämens kvalitet spelar roll. Det avgörande är inte ordet "tatuering" på etiketten utan att den är oparfymerad, konsistensen och förpackningsstorleken. Apotekets dermatologiska vårdkräm uppfyller kriterierna bättre än ett litet märkesbalsam — och ofta billigare per milliliter.',
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
        a: 'Båda fungerar. Studion säljer ofta en produkt de vet fungerar med sina egna filmer, vilket är ett bra skäl att köpa där. Apotekets sortiment är bredare och förpackningarna större, vilket blir billigare per milliliter. Det är ingredienserna och storleken som avgör, inte inköpsstället.',
      },
    ],
    productsTitle: 'Vad du tittar efter',
    productsIntro:
      'Kriterierna nedan är samma lista som du går igenom på burkens baksida i butiken. Varje kategori har både ett basalternativ och ett dermatologiskt — båda uppfyller kriterierna, skillnaden ligger i konsistens och förpackningsstorlek.',
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
        text: 'Baskrämen är vårdproduktens billigaste nivå och uppfyller grundkravet. Leta efter märkningen oparfymerad eller fragrance free. Reagerar huden inte alls räcker den här hela läkningen.',
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
      'Mitä tuotteita tarvitaan oikeasti, mitä ainesosia katsotaan purkin kyljestä ja mistä hinnassa kannattaa maksaa.',
  },
  sv: {
    title: 'Produkter för tatueringsvård',
    summary:
      'Vilka produkter som faktiskt behövs, vilka ingredienser du läser på burken och vad ett högre pris faktiskt köper.',
  },
};
