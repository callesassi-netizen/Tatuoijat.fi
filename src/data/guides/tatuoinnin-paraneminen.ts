import type { GuideCardByLocale, GuideContentByLocale } from './types';

/**
 * Opas: tatuoinnin paraneminen (/oppaat/tatuoinnin-paraneminen/,
 * sv /sv/guider/sa-laker-en-tatuering/).
 *
 * Täckta söktermer: tatuoinnin paraneminen, kuinka kauan tatuointi paranee,
 * tatuointi kuoriutuu, tatuointi näyttää sameelta, tatuointi tulehtunut.
 *
 * ROLLFÖRDELNING mot de andra guiderna: jälkihoito svarar på VAD MAN GÖR,
 * hoitotuotteet på VAD MAN KÖPER, den här på VAD SOM HÄNDER OCH NÄR. Det är
 * den sida en orolig läsare landar på klockan 23 dag fyra när tatueringen ser
 * grumlig ut — därför ligger tyngdpunkten på \"det här är normalt\" och på en
 * tydlig gräns för när man faktiskt ska söka vård.
 *
 * MEDICINSK FÖRSIKTIGHET: inga diagnoser, inga behandlingsråd utöver
 * basal sårvård, och varje avvikelse leder till \"kontakta vården\". Tidsangivelser
 * är spann och beskrivs som gängse studiopraxis, aldrig som löften.
 */
export const tatuoinninParaneminen: GuideContentByLocale = {
  fi: {
    metaTitle: 'Tatuoinnin paraneminen vaihe vaiheelta | Tatuoijat.fi',
    metaDescription:
      'Kuinka kauan tatuointi paranee ja mitä iholla tapahtuu viikko viikolta: kuoriutuminen, sameuden vaihe, mikä on normaalia ja milloin kannattaa ottaa yhteyttä.',
    eyebrow: 'Opas',
    h1: 'Tatuoinnin paraneminen',
    answer:
      'Tatuointi umpeutuu pinnalta noin 2–3 viikossa ja paranee syvemmältä 2–3 kuukaudessa. Ensimmäisellä viikolla iho on turvonnut ja arka, toisella se kuoriutuu ja kutiaa, kolmannella tatuointi näyttää sameelta ja mattapintaiselta. Lopullinen väri ja kirkkaus näkyvät vasta kun syvempi paraneminen on ohi.',
    intro: [
      'Tatuoinnin paraneminen etenee kahdessa kerroksessa yhtä aikaa, ja se on syy siihen, miksi moni luulee jotain menneen pieleen. Pinta on umpeutunut ja tuntuu normaalilta jo parin viikon jälkeen, mutta syvemmällä ihossa työ jatkuu kuukausia. Siinä välissä tatuointi näyttää usein huonommalta kuin lopputulos tulee olemaan.',
      'Tämä opas kertoo, mitä iholla tapahtuu missäkin vaiheessa ja missä kohtaa raja normaalin ja huolestuttavan välillä kulkee. Aikataulut ovat suomalaisten studioiden yleistä käytäntöä ja spannit ovat leveitä syystä: iso selkätyö ja pieni ranteen viiva eivät parane samassa tahdissa.',
    ],
    sections: [
      {
        id: 'kuinka-kauan',
        title: 'Kuinka kauan tatuointi paranee?',
        lead: 'Pinta umpeutuu 2–3 viikossa. Syvempi paraneminen kestää 2–3 kuukautta, isoissa ja voimakkaasti varjostetuissa töissä pidempään.',
        paragraphs: [
          'Kaksi aikaa sekoitetaan usein keskenään. Kun tatuoija sanoo, että työ on parantunut, hän tarkoittaa yleensä pintaa: iho on ehjä, kuoriutuminen on ohi eikä alue enää vaadi erityistä hoitoa. Sen jälkeen ihon alla jatkuu prosessi, jossa muste asettuu lopulliselle paikalleen ja sidekudos järjestäytyy uudelleen.',
          'Käytännön merkitys on tämä: älä arvioi lopputulosta kolmannella viikolla. Silloin tatuointi on tyypillisesti sameimmillaan. Korjausistunnon tarve kannattaa arvioida vasta 4–8 viikon jälkeen, ja useimmat studiot pyytävätkin odottamaan sen ajan ennen kuin retussista puhutaan.',
        ],
      },
      {
        id: 'vaiheet',
        title: 'Mitä iholla tapahtuu viikko viikolta?',
        lead: 'Paraneminen kulkee neljässä vaiheessa. Jokaisella on oma tyypillinen ulkonäkönsä, ja kaksi niistä näyttää huolestuttavammalta kuin on.',
        table: {
          columns: ['Vaihe', 'Aika', 'Miltä näyttää ja tuntuu'],
          rows: [
            [
              'Avoin haava',
              'Päivät 1–3',
              'Turvotusta, punoitusta, imunestettä ja ylimääräistä väriä. Alue on arka ja lämmin kuin auringonpolttama.',
            ],
            [
              'Kuoriutuminen',
              'Päivät 4–14',
              'Ohuita hilseitä ja paikoin rupia. Kutinaa. Väriä irtoaa hilseiden mukana — se on ylimääräistä, ei tatuointia.',
            ],
            [
              'Sameuden vaihe',
              'Viikot 2–4',
              'Pinta on umpeutunut mutta näyttää mattaiselta ja hieman harmaalta. Tatuointi vaikuttaa haalistuneelta.',
            ],
            [
              'Kirkastuminen',
              'Viikot 4–12',
              'Uusi ihokerros ohenee ja muuttuu läpinäkyvämmäksi. Väri ja kontrasti palaavat vähitellen.',
            ],
          ],
          note: 'Ajat ovat suuntaa antavia. Ohut iho, iso pinta-ala, voimakas varjostus, tupakointi ja huono uni hidastavat kaikki paranemista.',
        },
      },
      {
        id: 'kuoriutuminen',
        title: 'Miksi tatuointi kuoriutuu ja irtoaako väri mukana?',
        lead: 'Kuoriutuminen on ihon tapa poistaa vaurioitunut pintakerros. Hilseissä näkyvä väri on ylimääräistä mustetta, ei tatuointia.',
        paragraphs: [
          'Tatuoitaessa neula lävistää orvaskeden ja jättää mustetta verinahkaan. Osa musteesta jää matkalla ylempiin kerroksiin, ja ne kerrokset ovat juuri niitä, jotka uusiutuvat. Kun ne irtoavat, ylimääräinen väri lähtee mukana — usein niin näyttävästi, että se pelästyttää.',
          'Tatuointi itse on syvemmällä eikä lähde kuoriutumisen mukana. Ainoa tilanne, jossa väriä oikeasti menetetään, on se että rupi revitään irti ennen aikojaan. Silloin repeytyvä kudos vie mustetta mukanaan ja jättää vaalean laikun.',
        ],
        bullets: [
          'Älä raavi ja älä kuori. Kutinaan auttaa ohut kerros hajusteetonta perusvoidetta tai kevyt taputus kämmenellä.',
          'Anna hilseiden irrota itsestään. Puoliksi kiinni oleva hilse ei ole valmis.',
          'Älä liota tatuointia. Pitkät kylvyt pehmittävät rupia ja irrottavat niitä liian aikaisin.',
          'Rupien paksuus vaihtelee. Ohut hilse on tavallista, paksu ja tumma rupi viittaa siihen että työ on tehty raskaalla kädellä tai alue on ollut kuiva.',
        ],
      },
      {
        id: 'sameus',
        title: 'Miksi tatuointi näyttää sameelta kolmannella viikolla?',
        lead: 'Uusi ihokerros on paksumpi ja läpikuultamattomampi kuin lopullinen. Tatuointi katsotaan sen läpi, ja siksi se näyttää harmaalta.',
        paragraphs: [
          'Tätä vaihetta kutsutaan usein nimellä silver skin tai milky healing. Se on paranemisen normaali osa eikä merkki siitä, että väri olisi kadonnut. Kun uusi kerros ohenee ja kypsyy, tatuointi kirkastuu vähitellen — muutos on hidas, joten sitä ei huomaa päivätasolla vaan vertaamalla kuukauden takaiseen kuvaan.',
          'Sameus on myös syy siihen, että lopputuloksen arviointi ja retussikeskustelu kannattaa siirtää vähintään neljän viikon päähän. Moni haluaisi korjata kolmannella viikolla jotain, joka korjaantuu itsestään kuudennella.',
        ],
        callout: {
          title: 'Kuiva iho pahentaa sameutta',
          text: 'Parantunutkin tatuointi näyttää harmaalta, jos iho on kuiva. Se on optiikkaa, ei musteen määrää: säännöllinen kosteutus saa värin näyttämään kirkkaammalta saman tien. Ero näkyy jo muutamassa minuutissa rasvauksen jälkeen.',
          tone: 'note',
        },
      },
      {
        id: 'normaalia',
        title: 'Mikä on normaalia ja mikä ei?',
        lead: 'Suurin osa siitä, mikä näyttää huolestuttavalta ensimmäisellä viikolla, on tavallista. Muutama asia ei ole.',
        bullets: [
          'Normaalia: turvotus, punoitus tatuoinnin rajoissa, lämmön tunne, imuneste, väriä lakanoissa, kutina, hilseily, sameuden vaihe.',
          'Normaalia: pieni kohouma tuoreiden viivojen kohdalla ensimmäisinä päivinä. Se laskeutuu itsestään.',
          'Ei normaalia: punoitus, joka leviää selvästi tatuoinnin ulkopuolelle ja laajenee päivä päivältä.',
          'Ei normaalia: kellertävä tai vihertävä märkä, paha haju, kova kipu joka pahenee kolmannen päivän jälkeen.',
          'Ei normaalia: kuume, vilunväristykset tai punaiset juovat, jotka lähtevät tatuoinnista poispäin.',
          'Ei normaalia: rakkulointi ilman auringonpolttamaa, tai laaja ihottuma tatuoinnin alueella.',
        ],
        callout: {
          title: 'Milloin otat yhteyttä',
          text: 'Ota yhteyttä terveydenhuoltoon, jos punoitus leviää tatuoinnin ulkopuolelle, alueesta tulee märkää, kipu voimistuu kolmannen päivän jälkeen tai saat kuumetta. Nämä ovat tulehduksen merkkejä, eikä niitä hoideta rasvalla. Ota yhteyttä tatuoijaan, jos kyse on ulkonäöstä: laikuista, väripuutoksista tai siitä, ettei työ ole parantunut tasaisesti. Tatuoija ei ole terveydenhuollon ammattilainen, mutta hän tunnistaa oman jälkensä.',
          tone: 'warning',
        },
      },
      {
        id: 'mika-hidastaa',
        title: 'Mikä hidastaa paranemista?',
        lead: 'Paranemisnopeus ei ole pelkkää tuuria. Osa tekijöistä on omissa käsissä, osa ei.',
        bullets: [
          'Sijainti. Kädet, jalkaterät, kyynärpäät ja polvet paranevat hitaimmin, koska iho liikkuu ja hankautuu. Olkavarsi ja reisi paranevat nopeimmin.',
          'Koko ja varjostus. Iso, tiiviisti varjostettu pinta on suurempi haava kuin ohut viiva, ja paranee sen mukaisesti.',
          'Hankaus. Kireät vaatteet, laukun hihna ja urheilu samalla alueella pidentävät paranemista ja voivat aiheuttaa laikkuja.',
          'Kuiva iho. Liian vähän rasvausta johtaa paksuihin rupiin, jotka halkeilevat ja irtoavat epätasaisesti.',
          'Liika rasvaus. Liian paksu kerros tukkii ihon, pitää alueen kosteana ja hidastaa umpeutumista.',
          'Tupakointi ja alkoholi. Molemmat heikentävät verenkiertoa ja kudosten korjautumista. Vaikutus on todellinen mutta pieni verrattuna hankaukseen ja hygieniaan.',
          'Uni ja ravinto. Paraneminen on kudostyötä. Se ei nopeudu lisäravinteilla, mutta hidastuu selvästi jos yöunet jäävät neljään tuntiin.',
        ],
      },
      {
        id: 'retussi',
        title: 'Milloin retussi on tarpeen?',
        lead: 'Arvioi lopputulos aikaisintaan 4–8 viikon kuluttua. Sitä ennen sameuden vaihe piilottaa sekä hyvän että huonon.',
        paragraphs: [
          'Pieniä väripuutoksia syntyy täysin normaalissakin paranemisessa, erityisesti kohdissa joissa rupi on ollut paksu tai joissa iho on liikkunut paljon. Useimmat tatuoijat korjaavat ne yhdellä lyhyellä istunnolla, monet veloituksetta ensimmäisen kerran, mutta käytännöt vaihtelevat studioittain — se kannattaa kysyä jo varausvaiheessa.',
          'Ota valokuva tatuoinnista heti kun se on parantunut ja hyvässä valossa. Se on paras vertailukohta sekä retussikeskustelulle että sille, että näet myöhemmin oikeasti, onko työ haalistunut vai muistatko sen vain kirkkaampana.',
        ],
      },
    ],
    faqTitle: 'Usein kysyttyä paranemisesta',
    faq: [
      {
        q: 'Kuinka kauan tatuointi paranee?',
        a: 'Pinta umpeutuu tyypillisesti 2–3 viikossa ja syvempi paraneminen kestää 2–3 kuukautta. Iso ja voimakkaasti varjostettu työ tarvitsee enemmän aikaa kuin pieni viivatatuointi.',
      },
      {
        q: 'Onko normaalia, että tatuoinnista irtoaa väriä?',
        a: 'On. Kuoriutumisen mukana irtoaa ylimääräistä mustetta, joka jäi ihon ylempiin kerroksiin tatuoitaessa. Itse tatuointi on syvemmällä eikä lähde mukana. Väriä menetetään vain, jos rupi revitään irti liian aikaisin.',
      },
      {
        q: 'Miksi tatuointi näyttää haalistuneelta kolmannella viikolla?',
        a: 'Uusi ihokerros on aluksi paksumpi ja läpikuultamattomampi, ja tatuointia katsotaan sen läpi. Vaihetta kutsutaan sameuden vaiheeksi, ja se menee ohi itsestään kun kerros ohenee. Väri kirkastuu 4–12 viikon aikana.',
      },
      {
        q: 'Milloin tatuoinnin kanssa voi urheilla?',
        a: 'Kevyt liikunta käy muutaman päivän jälkeen, jos tatuointi ei hankaa vaatteisiin eikä alue veny voimakkaasti. Hikoilu, kuntosalilaitteet ja kontaktilajit kannattaa jättää siihen asti kunnes kuoriutuminen on ohi, tyypillisesti 2–3 viikkoa.',
      },
      {
        q: 'Mistä tunnistaa tulehtuneen tatuoinnin?',
        a: 'Tulehduksen merkkejä ovat tatuoinnin ulkopuolelle leviävä punoitus, kellertävä tai vihertävä märkä, paha haju, kolmannen päivän jälkeen voimistuva kipu ja kuume. Nämä eivät ole jälkihoitokysymys — ota yhteyttä terveydenhuoltoon.',
      },
    ],
    productsTitle: 'Mitä paranemisen aikana käytetään',
    productsIntro:
      'Paraneminen ei nopeudu tuotteilla, mutta väärä tuote voi hidastaa sitä. Alla kriteerit, jotka pätevät koko kuoriutumisen ajan.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Pesu koko paranemisen ajan',
        text: 'Hajusteeton nestesaippua 1–2 kertaa päivässä. Ei antibakteerista, ei kuorivaa. Säännöllisyys ratkaisee enemmän kuin tuotteen vahvuus.',
      },
      {
        category: 'aftercare',
        title: 'Rasvaus kuoriutumisen aikana',
        text: 'Kevyt, hajusteeton voide ohuena kerroksena. Panteenoli rauhoittaa kutinaa. Liian paksu kerros tukkii ihon ja hidastaa umpeutumista — sama virhe kuin liian vähän.',
      },
      {
        category: 'moisturising',
        title: 'Kosteutus paranemisen jälkeen',
        text: 'Kuiva iho saa parantuneenkin tatuoinnin näyttämään harmaalta. Säännöllinen kosteutus kirkastaa värin saman tien, ilman että mustetta on yhtään enempää.',
      },
      {
        category: 'spf',
        title: 'Aurinkosuoja kuoriutumisen jälkeen',
        text: 'SPF 50 heti kun iho on ehjä. Ensimmäisenä kesänä suoja on tärkein, koska muste asettuu vielä pinnan alla.',
      },
    ],
    relatedTitle: 'Jatka tästä',
    relatedIntro:
      'Tämä opas kertoo mitä tapahtuu. Mitä tehdä ja mitä ostaa, on kerrottu omissa oppaissaan.',
    upcomingTitle: 'Tulossa',
    ctaTitle: 'Etsitkö tatuoijaa?',
    ctaText:
      'Selaa Suomen tatuoijia ja studioita kaupungin tai tyylin mukaan. Kysy paranemisesta ja retussikäytännöstä jo varausvaiheessa.',
    ctaLabel: 'Selaa tatuoijia',
    disclaimer:
      'Tämä opas kuvaa tavanomaista paranemista eikä ole lääketieteellistä neuvontaa. Jos epäilet tulehdusta tai oireet pahenevat, ota yhteyttä terveydenhuoltoon.',
  },
  sv: {
    metaTitle: 'Tatueringens läkning steg för steg | Tatuoijat.fi',
    metaDescription:
      'Hur länge tar det för en tatuering att läka och vad händer i huden vecka för vecka: fjällning, den grumliga fasen, vad som är normalt och när du ska söka vård.',
    eyebrow: 'Guide',
    h1: 'Tatueringens läkning',
    answer:
      'En tatuering sluter sig på ytan på ungefär 2–3 veckor och läker på djupet på 2–3 månader. Första veckan är huden svullen och öm, andra veckan fjällar den och kliar, tredje veckan ser tatueringen grumlig och matt ut. Den slutliga färgen syns först när den djupare läkningen är över.',
    intro: [
      'En tatuering läker i två lager samtidigt, och det är därför många tror att något gått fel. Ytan är sluten och känns normal redan efter ett par veckor, men djupare ner fortsätter arbetet i månader. Däremellan ser tatueringen ofta sämre ut än slutresultatet kommer att bli.',
      'Den här guiden går igenom vad som händer i vilket skede och var gränsen mellan normalt och oroande går. Tiderna följer finsk studiopraxis, och spannen är breda av ett skäl: ett stort ryggjobb och en tunn linje på handleden läker inte i samma takt.',
    ],
    sections: [
      {
        id: 'kuinka-kauan',
        title: 'Hur länge tar det för en tatuering att läka?',
        lead: 'Ytan sluter sig på 2–3 veckor. Den djupare läkningen tar 2–3 månader, längre för stora och kraftigt skuggade jobb.',
        paragraphs: [
          'De två tiderna blandas ofta ihop. När tatueraren säger att jobbet är läkt menar hen oftast ytan: huden är hel, fjällningen är över och området behöver ingen särskild vård längre. Under ytan fortsätter sedan en process där bläcket sätter sig på sin slutliga plats och bindväven organiserar om sig.',
          'Den praktiska innebörden: bedöm inte slutresultatet i vecka tre. Då är tatueringen typiskt som grumligast. Behovet av retusch bedöms tidigast efter 4–8 veckor, och de flesta studior ber också att man väntar så länge innan retuschen diskuteras.',
        ],
      },
      {
        id: 'vaiheet',
        title: 'Vad händer i huden vecka för vecka?',
        lead: 'Läkningen går i fyra faser. Varje fas har sitt typiska utseende, och två av dem ser oroligare ut än de är.',
        table: {
          columns: ['Fas', 'Tid', 'Så ser och känns det'],
          rows: [
            [
              'Öppet sår',
              'Dag 1–3',
              'Svullnad, rodnad, lymfvätska och överskottsfärg. Området är ömt och varmt som efter solbränna.',
            ],
            [
              'Fjällning',
              'Dag 4–14',
              'Tunna flagor och ställvis sårskorpor. Klåda. Färg lossnar med flagorna — det är överskott, inte tatueringen.',
            ],
            [
              'Grumliga fasen',
              'Vecka 2–4',
              'Ytan är sluten men ser matt och lite grå ut. Tatueringen verkar blekt.',
            ],
            [
              'Uppklarning',
              'Vecka 4–12',
              'Det nya hudlagret tunnas ut och blir mer genomskinligt. Färg och kontrast kommer tillbaka gradvis.',
            ],
          ],
          note: 'Tiderna är vägledande. Tunn hud, stor yta, kraftig skuggning, rökning och dålig sömn bromsar alla läkningen.',
        },
      },
      {
        id: 'kuoriutuminen',
        title: 'Varför fjällar tatueringen, och följer färgen med?',
        lead: 'Fjällningen är hudens sätt att göra sig av med det skadade ytlagret. Färgen i flagorna är överskottsbläck, inte tatueringen.',
        paragraphs: [
          'När tatueringen görs går nålen genom överhuden och lämnar bläck i läderhuden. En del av bläcket blir kvar på vägen i de övre lagren, och det är just de lagren som förnyas. När de lossnar följer överskottsfärgen med — ofta så påtagligt att det skrämmer.',
          'Själva tatueringen ligger djupare och följer inte med. Den enda situation där färg verkligen går förlorad är när en sårskorpa rivs bort i förtid. Då tar den vävnad som slits loss med sig bläck och lämnar en ljus fläck.',
        ],
        bullets: [
          'Klia inte och pilla inte. Mot klådan hjälper ett tunt lager oparfymerad baskräm eller en lätt klapp med handflatan.',
          'Låt flagorna lossna av sig själva. En flaga som sitter fast till hälften är inte klar.',
          'Blötlägg inte tatueringen. Långa bad mjukar upp skorporna och lossar dem för tidigt.',
          'Skorpornas tjocklek varierar. Tunn fjällning är vanligt; tjocka mörka skorpor tyder på att jobbet gjorts med tung hand eller att området varit torrt.',
        ],
      },
      {
        id: 'sameus',
        title: 'Varför ser tatueringen grumlig ut i vecka tre?',
        lead: 'Det nya hudlagret är tjockare och mindre genomskinligt än det slutliga. Tatueringen ses genom det, och därför verkar den grå.',
        paragraphs: [
          'Fasen kallas ofta silver skin eller milky healing. Den är en normal del av läkningen och inget tecken på att färgen försvunnit. När det nya lagret tunnas ut och mognar klarnar tatueringen gradvis — förändringen är långsam, så den märks inte dag för dag utan genom att jämföra med ett foto från en månad tillbaka.',
          'Grumligheten är också skälet till att bedömningen av slutresultatet och retuschdiskussionen bör vänta minst fyra veckor. Många vill rätta till något i vecka tre som rättar till sig själv i vecka sex.',
        ],
        callout: {
          title: 'Torr hud förvärrar grumligheten',
          text: 'Även en färdigläkt tatuering ser grå ut om huden är torr. Det är optik, inte bläckmängd: regelbunden återfuktning får färgen att se klarare ut direkt. Skillnaden syns redan några minuter efter insmörjning.',
          tone: 'note',
        },
      },
      {
        id: 'normaalia',
        title: 'Vad är normalt och vad är det inte?',
        lead: 'Det mesta som ser oroande ut första veckan är vanligt. Några saker är det inte.',
        bullets: [
          'Normalt: svullnad, rodnad inom tatueringens gränser, värmekänsla, lymfvätska, färg på lakanen, klåda, fjällning, den grumliga fasen.',
          'Normalt: en liten upphöjning längs färska linjer de första dagarna. Den lägger sig av sig själv.',
          'Inte normalt: rodnad som sprider sig tydligt utanför tatueringen och växer dag för dag.',
          'Inte normalt: gulaktig eller grönaktig var, dålig lukt, kraftig smärta som förvärras efter tredje dagen.',
          'Inte normalt: feber, frossa eller röda strimmor som går ut från tatueringen.',
          'Inte normalt: blåsbildning utan solbränna, eller utbredda utslag på tatueringsområdet.',
        ],
        callout: {
          title: 'När du ska höra av dig',
          text: 'Kontakta vården om rodnaden sprider sig utanför tatueringen, om det kommer var, om smärtan ökar efter tredje dagen eller om du får feber. Det är tecken på infektion, och de behandlas inte med salva. Kontakta tatueraren om det handlar om utseendet: fläckar, färgbortfall eller att jobbet inte läkt jämnt. Tatueraren är inte vårdpersonal, men känner igen sitt eget arbete.',
          tone: 'warning',
        },
      },
      {
        id: 'mika-hidastaa',
        title: 'Vad bromsar läkningen?',
        lead: 'Läkningstakten är inte bara tur. En del faktorer har du kontroll över, andra inte.',
        bullets: [
          'Placering. Händer, fötter, armbågar och knän läker långsammast eftersom huden rör sig och skaver. Överarm och lår läker snabbast.',
          'Storlek och skuggning. En stor, tätt skuggad yta är ett större sår än en tunn linje och läker därefter.',
          'Skav. Åtsittande kläder, en väskrem eller träning mot samma område förlänger läkningen och kan ge fläckar.',
          'Torr hud. För lite insmörjning ger tjocka skorpor som spricker och lossnar ojämnt.',
          'För mycket insmörjning. Ett för tjockt lager täpper till huden, håller området fuktigt och bromsar tillslutningen.',
          'Rökning och alkohol. Båda försämrar cirkulationen och vävnadsreparationen. Effekten är verklig men liten jämfört med skav och hygien.',
          'Sömn och kost. Läkning är vävnadsarbete. Det går inte snabbare av kosttillskott, men märkbart långsammare om nätterna blir fyra timmar.',
        ],
      },
      {
        id: 'retussi',
        title: 'När behövs en retusch?',
        lead: 'Bedöm resultatet tidigast efter 4–8 veckor. Innan dess döljer den grumliga fasen både det bra och det dåliga.',
        paragraphs: [
          'Små färgbortfall uppstår även vid helt normal läkning, särskilt där skorpan varit tjock eller huden rört sig mycket. De flesta tatuerare rättar till dem på en kort session, många utan kostnad första gången, men rutinerna varierar mellan studior — fråga redan när du bokar.',
          'Fotografera tatueringen så snart den är läkt, i bra ljus. Det är den bästa referensen både för retuschsamtalet och för att du senare faktiskt ska se om jobbet bleknat eller om du bara minns det som klarare.',
        ],
      },
    ],
    faqTitle: 'Vanliga frågor om läkningen',
    faq: [
      {
        q: 'Hur länge tar det för en tatuering att läka?',
        a: 'Ytan sluter sig typiskt på 2–3 veckor och den djupare läkningen tar 2–3 månader. Ett stort och kraftigt skuggat jobb behöver mer tid än en liten linjetatuering.',
      },
      {
        q: 'Är det normalt att färg lossnar?',
        a: 'Ja. Med fjällningen följer överskottsbläck som blev kvar i hudens övre lager när tatueringen gjordes. Själva tatueringen ligger djupare och följer inte med. Färg går bara förlorad om en skorpa rivs bort för tidigt.',
      },
      {
        q: 'Varför ser tatueringen blek ut i vecka tre?',
        a: 'Det nya hudlagret är till en början tjockare och mindre genomskinligt, och tatueringen ses genom det. Fasen kallas den grumliga fasen och går över av sig själv när lagret tunnas ut. Färgen klarnar under vecka 4–12.',
      },
      {
        q: 'När kan man träna med en ny tatuering?',
        a: 'Lätt motion går efter några dagar om tatueringen inte skaver mot kläder och området inte tänjs kraftigt. Svettning, gymmaskiner och kontaktsporter väntar tills fjällningen är över, typiskt 2–3 veckor.',
      },
      {
        q: 'Hur känner man igen en infekterad tatuering?',
        a: 'Tecken på infektion är rodnad som sprider sig utanför tatueringen, gulaktig eller grönaktig var, dålig lukt, smärta som ökar efter tredje dagen och feber. Det är ingen eftervårdsfråga — kontakta vården.',
      },
    ],
    productsTitle: 'Vad som används under läkningen',
    productsIntro:
      'Läkningen går inte snabbare av produkter, men fel produkt kan bromsa den. Nedan kriterierna som gäller hela fjällningen.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Rengöring hela läkningen',
        text: 'Oparfymerad flytande tvål 1–2 gånger om dagen. Inte antibakteriell, inte skrubbande. Regelbundenheten avgör mer än produktens styrka.',
      },
      {
        category: 'aftercare',
        title: 'Insmörjning under fjällningen',
        text: 'Lätt, oparfymerad kräm i tunt lager. Panthenol lugnar klådan. Ett för tjockt lager täpper till huden och bromsar tillslutningen — samma fel som för lite.',
      },
      {
        category: 'moisturising',
        title: 'Återfuktning efter läkningen',
        text: 'Torr hud får även en färdigläkt tatuering att se grå ut. Regelbunden återfuktning klarnar färgen direkt, utan att det finns en droppe mer bläck.',
      },
      {
        category: 'spf',
        title: 'Solskydd efter fjällningen',
        text: 'SPF 50 så snart huden är hel. Första sommaren är skyddet viktigast, eftersom bläcket fortfarande sätter sig under ytan.',
      },
    ],
    relatedTitle: 'Fortsätt här',
    relatedIntro:
      'Den här guiden handlar om vad som händer. Vad du gör och vad du köper står i sina egna guider.',
    upcomingTitle: 'På väg',
    ctaTitle: 'Letar du efter en tatuerare?',
    ctaText:
      'Bläddra bland Finlands tatuerare och studior efter stad eller stil. Fråga om läkning och retuschrutiner redan när du bokar.',
    ctaLabel: 'Bläddra bland tatuerare',
    disclaimer:
      'Den här guiden beskriver normal läkning och är inte medicinsk rådgivning. Misstänker du en infektion eller förvärras besvären — kontakta vården.',
  },
};

export const tatuoinninParaneminenCard: GuideCardByLocale = {
  fi: {
    title: 'Tatuoinnin paraneminen vaihe vaiheelta',
    summary:
      'Mitä iholla tapahtuu viikko viikolta, miksi tatuointi näyttää sameelta kolmannella viikolla ja missä normaalin raja kulkee.',
  },
  sv: {
    title: 'Tatueringens läkning steg för steg',
    summary:
      'Vad som händer i huden vecka för vecka, varför tatueringen ser grumlig ut i vecka tre och var gränsen för det normala går.',
  },
};
