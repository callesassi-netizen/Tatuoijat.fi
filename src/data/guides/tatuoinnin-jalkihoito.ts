import type { GuideCardByLocale, GuideContentByLocale } from './types';

/**
 * Opas: tatuoinnin jälkihoito (/oppaat/tatuoinnin-jalkihoito/,
 * sv /sv/guider/eftervard-av-tatuering/).
 *
 * Täckta söktermer (naturligt inbakade, inte staplade): tatuoinnin jälkihoito,
 * uuden tatuoinnin hoito, tatuoinnin rasvaus, tatuoinnin pesu, tatuointi ja
 * sauna, tatuointi ja uiminen, tatuointi ja aurinko, tatuoinnin paraneminen.
 *
 * Tonen är vårdguide, inte reklam: inga produktnamn, inga priser, inga
 * externa länkar. Tidsangivelserna är den gängse finska studiopraxisen och
 * skrivs som spann — aldrig som medicinska löften. Ansvarsfriskrivningen
 * (`disclaimer`) och sektionen "milloin kannattaa ottaa yhteyttä" hör ihop och
 * ska inte tas bort var för sig.
 */
export const tatuoinninJalkihoito: GuideContentByLocale = {
  fi: {
    metaTitle: 'Tatuoinnin jälkihoito — päivä päivältä | Tatuoijat.fi',
    metaDescription:
      'Tatuoinnin jälkihoito päivä päivältä: milloin kalvo pois, miten pesu ja rasvaus tehdään ja kuinka kauan saunaa, uimista ja aurinkoa kannattaa välttää.',
    eyebrow: 'Opas',
    h1: 'Tatuoinnin jälkihoito',
    answer:
      'Tuore tatuointi on avohaava, joka umpeutuu pinnalta noin 2–3 viikossa ja paranee syvemmältä 2–3 kuukaudessa. Jälkihoito on yksinkertainen: pese haalealla vedellä ja hajusteettomalla saippualla 1–2 kertaa päivässä, rasvaa ohuelti ja pysy poissa saunasta, uimavesistä ja auringosta, kunnes iho on kokonaan kuoriutunut.',
    intro: [
      'Tatuoinnin lopputulos ratkeaa vasta parantumisen aikana, ja uuden tatuoinnin hoito on siinä se osuus, johon voit itse vaikuttaa. Väri istuu ja viiva pysyy terävänä, kun iho saa umpeutua rauhassa — ja moni laikukas tai haalistunut jälki johtuu jälkihoidosta, ei itse tatuoinnista. Hoito on onneksi lyhyt ja yksinkertainen: puhtaus, ohut rasvakerros ja malttia.',
      'Noudata aina ensisijaisesti oman tatuoijasi ohjetta. Studiot käyttävät eri kalvoja ja eri tuotteita, ja tekijä tietää, miten juuri sinun työsi on tehty. Tämä opas kertoo, mitä iholla tapahtuu ja mikä on yleinen käytäntö Suomessa silloin, kun tarkempaa ohjetta ei ole käsillä.',
    ],
    sections: [
      {
        id: 'kalvo',
        title: 'Milloin kalvo otetaan pois?',
        lead: 'Studiot käyttävät kahta erilaista suojausta, ja niiden ohjeet eroavat toisistaan. Kysy tekijältä, kumpi sinulla on — se ratkaisee ensimmäisen vuorokauden.',
        bullets: [
          'Perinteinen suojakelmu tai -side otetaan pois 2–6 tunnin kuluttua, viimeistään saman illan aikana. Sen alle kertyy verta, imunestettä ja ylimääräistä väriä. Se kuuluu asiaan.',
          'Hengittävä hoitokalvo eli niin sanottu toinen iho jätetään paikoilleen 1–5 vuorokaudeksi. Kalvon alle kerääntyvä samea neste on normaalia. Jos kalvo vuotaa reunoista, irtoaa tai ihoa alkaa kirvellä voimakkaasti, ota se pois etuajassa.',
        ],
        paragraphs: [
          'Ota kalvo pois suihkussa haalean veden alla ja vedä sitä hitaasti ihoa myöten, älä suoraan ylöspäin — märkä kalvo irtoaa kivuttomasti, kuiva ei. Pese kädet aina ennen kuin kosket tuoreeseen tatuointiin.',
        ],
      },
      {
        id: 'pesu',
        title: 'Miten tuore tatuointi pestään?',
        lead: 'Tatuoinnin pesu on jälkihoidon tärkein yksittäinen asia. Pese 1–2 kertaa päivässä koko kuoriutumisen ajan — aamulla ja illalla riittää hyvin.',
        steps: [
          {
            title: 'Pese kädet',
            text: 'Pese kädet saippualla ennen jokaista kosketusta. Tuore tatuointi on haava, ja valtaosa ongelmista lähtee likaisista käsistä.',
          },
          {
            title: 'Huuhtele haalealla vedellä',
            text: 'Anna haalean veden valua tatuoinnin yli. Kuuma vesi turvottaa ihoa turhaan, kylmä taas ei irrota rasvaa ja imunestettä.',
          },
          {
            title: 'Pese hajusteettomalla saippualla',
            text: 'Levitä hajusteetonta, väriaineetonta nestesaippuaa sormenpäillä kevyesti pyörittäen. Älä käytä pesulappua, sientä tai kuorivaa tuotetta.',
          },
          {
            title: 'Huuhtele saippua kokonaan pois',
            text: 'Ihoon jäävä saippua kuivattaa ja kirvelee. Huuhtele niin kauan, ettei pinta enää tunnu liukkaalta.',
          },
          {
            title: 'Taputtele kuivaksi',
            text: 'Taputtele puhtaalla talouspaperilla tai omalla juuri pestyllä pyyhkeellä. Älä hankaa. Anna ihon kuivua vielä muutama minuutti ennen rasvausta.',
          },
        ],
      },
      {
        id: 'rasvaus',
        title: 'Kuinka usein tatuointia rasvataan?',
        lead: 'Tatuoinnin rasvaus on helppo tehdä väärin molempiin suuntiin. Tarkoitus on pitää iho notkeana, ei tukkia sitä: ohut kerros riittää, ja tatuoinnin pitää näyttää kosteutetulta eikä kiiltävältä tai märältä.',
        paragraphs: [
          'Rasvaa 2–3 kertaa päivässä pesun jälkeen ja aina kun iho tuntuu kiristävän. Liika rasva pehmentää rupea liikaa, hidastaa paranemista ja saa osalla aikaan pieniä näppyjä. Jos rasva jää pinnalle kiiltämään, taputa ylimääräinen pois puhtaalla paperilla.',
          'Ensimmäisinä päivinä käytetään yleensä ohutta tatuoinnille tarkoitettua hoitovoidetta. Ensimmäisen viikon jälkeen tavallinen hajusteeton perusvoide riittää, ja sitä kannattaa jatkaa niin kauan kuin iho tuntuu kuivalta.',
        ],
        bullets: [
          'Hajusteeton ja väriaineeton — hajusteet ovat yleisin ärsytyksen aiheuttaja parantuvalla iholla.',
          'Kevyt koostumus, joka imeytyy. Paksu, ilmatiivis kerros ei kuulu tuoreen tatuoinnin päälle.',
          'Ei kuorivia happoja (AHA/BHA), ei retinolia eikä alkoholipitoisia tuotteita ennen kuin iho on täysin parantunut.',
          'Oma purkki vain sinulle. Sormin avopurkista otettu voide kerää bakteereja — pumppu- tai tuubipakkaus on turvallisempi.',
        ],
      },
      {
        id: 'paraneminen',
        title: 'Näin tatuointi paranee päivä päivältä',
        lead: 'Tatuoinnin paraneminen etenee samassa järjestyksessä lähes kaikilla. Aikataulu on suuntaa-antava — sijainti ja työn koko vaikuttavat siihen eniten.',
        table: {
          columns: ['Vaihe', 'Mitä iholla tapahtuu', 'Mitä teet'],
          rows: [
            [
              'Päivä 1',
              'Iho on punoittava ja arka ja tihkuu imunestettä ja ylimääräistä väriä.',
              'Kalvo pois ohjeen mukaan, ensimmäinen pesu, ohut rasvakerros.',
            ],
            [
              'Päivät 2–3',
              'Turvotus laskee, pinta alkaa kuivua ja tuntuu kireältä.',
              'Pesu 1–2 kertaa päivässä, rasvaus 2–3 kertaa päivässä.',
            ],
            [
              'Päivät 4–6',
              'Pinnalle muodostuu ohut rupi tai kalvo. Tatuointi näyttää sameelta.',
              'Sama rutiini. Älä raavi äläkä revi irtoavaa ihoa.',
            ],
            [
              'Viikko 2',
              'Iho kuoriutuu ja kutiaa. Väri näyttää haalealta ja epätasaiselta.',
              'Rasvaa herkemmin ja taputa kutinaa kämmenellä. Ei raapimista.',
            ],
            [
              'Viikot 3–4',
              'Kuoriutuminen loppuu, pinta on sileä mutta vielä hieman kiiltävä.',
              'Perusvoide riittää. Aurinkosuoja käyttöön heti kun iho on ehjä.',
            ],
            [
              'Kuukaudet 2–3',
              'Ihon syvemmät kerrokset paranevat ja väri asettuu lopulliseen sävyynsä.',
              'Normaali ihonhoito ja aurinkosuoja aina kun tatuointi on paljaana.',
            ],
          ],
          note: 'Isot ja tiheästi varjostetut työt paranevat hitaammin kuin ohut viivatyö. Kädet, jalkaterät, kylkiluut ja taivealueet ovat aina hitaimpia, koska iho liikkuu ja hankautuu niissä eniten.',
        },
      },
      {
        id: 'valta',
        title: 'Mitä välttää — ja kuinka kauan?',
        lead: 'Sauna, uiminen ja aurinko ovat kolme yleisintä syytä pilata muuten hyvin tehty tatuointi. Alla tavanomaiset odotusajat suomalaisessa studiokäytännössä.',
        table: {
          columns: ['Asia', 'Kuinka kauan', 'Miksi'],
          rows: [
            [
              'Sauna ja kuuma kylpy',
              'Kunnes iho on kuoriutunut, yleensä 2–3 viikkoa',
              'Kuumuus ja hikoilu turvottavat ihoa, pehmentävät rupea ja huuhtovat väriä pois.',
            ],
            [
              'Uiminen: uimahalli, järvi, meri, poreallas',
              'Aikaisintaan 2–3 viikkoa, kun iho on täysin umpeutunut',
              'Vesi liottaa haavan auki ja tuo mukanaan bakteereja, klooria ja järvivettä.',
            ],
            [
              'Suora aurinko ja solarium',
              '3–4 viikkoa, sen jälkeen aurinkosuoja SPF 50',
              'UV-säteily polttaa parantuvan ihon herkästi ja haalistaa väriä pysyvästi.',
            ],
            [
              'Kova, hikoiluttava treeni',
              '3–5 päivää, tatuoinnin sijainnista riippuen',
              'Hiki, venyvä iho ja välineitä vasten hankaaminen ärsyttävät haavaa.',
            ],
            [
              'Rupien raapiminen ja kuorinta',
              'Ei koskaan — anna irrota itsestään',
              'Repiminen vie väriä mukanaan ja jättää pysyviä aukkokohtia.',
            ],
            [
              'Tiukat ja karheat vaatteet',
              'Ensimmäiset 1–2 viikkoa',
              'Hankaus irrottaa parantuvaa pintaa ja voi jättää jäljen.',
            ],
            [
              'Runsas alkoholi',
              'Tatuointipäivä ja sitä edeltävä ilta',
              'Alkoholi ohentaa verta, lisää vuotoa tatuoinnin aikana ja kuivattaa ihoa.',
            ],
          ],
          note: 'Yksi lyhyt suihku ei ole uimista: suihkussa saa ja pitää käydä joka päivä. Vältä vain pitkää liotusta ja sitä, että vesisuihku osuu suoraan tuoreeseen tatuointiin.',
        },
      },
      {
        id: 'milloin-yhteytta',
        title: 'Milloin kannattaa ottaa yhteyttä?',
        lead: 'Lievä punoitus, lämpö ja arkuus ensimmäisinä päivinä ovat normaaleja. Osa oireista kertoo silti siitä, että tilanne kannattaa näyttää ammattilaiselle.',
        callout: {
          title: 'Ota yhteyttä terveydenhuoltoon, jos',
          tone: 'warning',
          bullets: [
            'punoitus leviää tatuoinnin ulkopuolelle tai voimistuu 2–3 päivän jälkeen',
            'haavasta tulee kellertävää tai vihertävää eritettä tai paha haju',
            'sinulle nousee kuumetta tai vilunväreitä',
            'kipu voimistuu sen sijaan että helpottaisi päivä päivältä',
            'iho rakkuloituu tai ihottuma leviää — mahdollinen reaktio väriaineelle',
          ],
        },
        paragraphs: [
          'Ota lisäksi yhteyttä tatuoijaasi. Hyvä tekijä haluaa tietää, miten työ parani, ja moni studio korjaa parantumisen jälkeen jääneet aukkokohdat sovitusti. Korjaus arvioidaan vasta täysin parantuneesta ihosta, aikaisintaan 4–6 viikon kuluttua.',
        ],
      },
    ],
    howTo: {
      name: 'Tuoreen tatuoinnin pesu',
      description:
        'Tuore tatuointi pestään haalealla vedellä ja hajusteettomalla nestesaippualla 1–2 kertaa päivässä koko kuoriutumisen ajan.',
      stepsFromSection: 'pesu',
    },
    faqTitle: 'Usein kysyttyä jälkihoidosta',
    faq: [
      {
        q: 'Kuinka kauan tatuointi paranee?',
        a: 'Pintakerros umpeutuu yleensä 2–3 viikossa, ja iho on siihen mennessä kuoriutunut. Syvemmät kerrokset paranevat 2–3 kuukauden aikana, ja lopullisen sävyn näkee vasta silloin.',
      },
      {
        q: 'Milloin tatuoinnin kanssa voi mennä saunaan?',
        a: 'Odota, kunnes iho on kokonaan kuoriutunut ja umpeutunut — käytännössä 2–3 viikkoa. Kuumuus ja hikoilu pehmentävät rupea ja voivat huuhtoa väriä pois.',
      },
      {
        q: 'Saako tuoreella tatuoinnilla uida?',
        a: 'Ei. Uimahalli, järvi, meri ja poreallas jäävät väliin, kunnes haava on umpeutunut, yleensä 2–3 viikoksi. Suihkussa saa käydä normaalisti.',
      },
      {
        q: 'Kuinka usein tatuointia pitää rasvata?',
        a: 'Ohut kerros 2–3 kertaa päivässä pesun jälkeen ja aina kun iho kiristää. Liika rasva on yhtä haitallista kuin liian vähän: se tukkii ihon ja hidastaa paranemista.',
      },
      {
        q: 'Millä tuore tatuointi pestään?',
        a: 'Haalealla vedellä ja hajusteettomalla nestesaippualla sormenpäillä, 1–2 kertaa päivässä. Ei pesulappua, ei kuorintaa, ei kuumaa vettä.',
      },
      {
        q: 'Saako tuore tatuointi olla auringossa?',
        a: 'Suoraa aurinkoa ja solariumia vältetään 3–4 viikkoa. Sen jälkeen tatuointi kannattaa suojata SPF 50 -aurinkosuojalla aina kun se on paljaana, sillä UV-säteily haalistaa väriä pysyvästi.',
      },
      {
        q: 'Miksi tatuointi kutiaa ja kuoriutuu?',
        a: 'Kutina ja hilseily kuuluvat toiseen viikkoon: iho uusii pintakerroksensa. Taputa kutisevaa kohtaa kämmenellä ja rasvaa. Raapiminen ja ruven repiminen vievät väriä mukanaan.',
      },
      {
        q: 'Voiko tatuoinnin kanssa treenata?',
        a: 'Kevyt liikunta onnistuu parin päivän jälkeen. Vältä 3–5 päivää runsaasti hikoiluttavaa treeniä sekä liikkeitä, jotka venyttävät tatuoitua ihoa tai hankaavat sitä välineitä vasten.',
      },
      {
        q: 'Miksi tatuoinnista lähtee väriä ensimmäisinä päivinä?',
        a: 'Kalvon alle ja pesuveteen valuva väri on ylimääräistä pigmenttiä ihon pinnalta, ei itse tatuoinnista. Se kuuluu asiaan eikä tarkoita, että työ haalistuisi.',
      },
      {
        q: 'Milloin tatuoinnin voi korjauttaa?',
        a: 'Aukkokohdat ja ohentuneet viivat arvioidaan vasta täysin parantuneesta ihosta, aikaisintaan 4–6 viikon kuluttua. Kysy korjauskäytännöstä omalta tatuoijaltasi jo ajanvarauksen yhteydessä.',
      },
    ],
    productsTitle: 'Tatuoinnin hoitotuotteet: mitä tuotteesta kannattaa katsoa',
    productsIntro:
      'Emme myy tuotteita emmekä nosta yksittäisiä merkkejä. Alla on se, mikä oikeasti ratkaisee tuotetta valitessa — samat kriteerit toimivat apteekin hyllyllä, marketissa ja studion omassa valikoimassa.',
    productCategories: [
      {
        category: 'aftercare',
        title: 'Tatuoinnin hoitovoide',
        text: 'Tatuoinnille suunnitellut voiteet ovat ohuita ja hengittäviä. Katso, että koostumus imeytyy eikä jätä paksua kalvoa, ja suosi pumppu- tai tuubipakkausta: avopurkkiin kulkeutuu sormista bakteereja.',
      },
      {
        category: 'fragrance-free',
        title: 'Hajusteeton perusvoide',
        text: 'Ensimmäisen viikon jälkeen tavallinen hajusteeton perusvoide riittää pitkälle. Lyhyt ainesosaluettelo, ei hajustetta, ei väriainetta, ei eteerisiä öljyjä.',
      },
      {
        category: 'cleansing',
        title: 'Pesu',
        text: 'Hajusteeton ja väriaineeton nestesaippua tai pesuvoide, mieluiten lievästi hapan. Ei kuorivia hiukkasia eikä antibakteerista pesuainetta ilman erillistä ohjetta.',
      },
      {
        category: 'moisturising',
        title: 'Kosteutus kuoriutumisvaiheessa',
        text: 'Kuoriutumisen kutinaan auttaa kosteus. Ureaa tai glyserolia sisältävä perusvoide toimii hyvin — mutta vasta kun iho on ehjä, sillä urea kirvelee avohaavassa.',
      },
      {
        category: 'spf',
        title: 'Aurinkosuoja',
        text: 'Kun iho on umpeutunut, aurinkosuoja on ainoa asia, joka pitää tatuoinnin terävänä vuosia. SPF 50 ja uudelleenlevitys muutaman tunnin välein ulkona.',
      },
    ],
    relatedTitle: 'Etsitkö tatuoijaa?',
    relatedIntro:
      'Tatuoijat.fi kokoaa Suomen tatuoijat ja tatuointiliikkeet yhteen paikkaan. Selaa kaupungin tai tyylin mukaan ja katso hintatasot ennen ajanvarausta.',
    upcomingTitle: 'Tulossa oppaisiin',
    ctaTitle: 'Löydä tatuoijasi',
    ctaText:
      'Vertaile portfolioita, tyylejä ja yhteystietoja kaupungeittain — ja ota yhteyttä suoraan artistiin.',
    ctaLabel: 'Selaa tatuoijia',
    disclaimer:
      'Tämä opas on yleistä tietoa, ei terveydenhuollon ohjetta. Noudata ensisijaisesti tatuoijasi antamia ohjeita ja ota epäselvissä tai tulehdukseen viittaavissa tilanteissa yhteyttä terveydenhuoltoon.',
  },

  sv: {
    metaTitle: 'Eftervård av tatuering — dag för dag | Tatuoijat.fi',
    metaDescription:
      'Eftervård av tatuering dag för dag: när filmen tas bort, hur du tvättar och smörjer och hur länge du bör undvika bastu, bad och sol.',
    eyebrow: 'Guide',
    h1: 'Eftervård av tatuering',
    answer:
      'En ny tatuering är ett öppet sår som sluter sig på ytan på ungefär 2–3 veckor och läker på djupet under 2–3 månader. Eftervården är enkel: tvätta med ljummet vatten och parfymfri tvål 1–2 gånger om dagen, smörj tunt och håll dig borta från bastu, bad och sol tills huden har fjällat färdigt.',
    intro: [
      'Slutresultatet avgörs under läkningen. Färgen sätter sig och linjen håller sig skarp när huden får sluta sig i lugn och ro — och en fläckig eller blekt tatuering beror oftare på eftervården än på själva arbetet. Vården är som tur är kort och enkel: renlighet, ett tunt lager salva och tålamod.',
      'Följ alltid i första hand din egen tatuerares anvisningar. Studior använder olika filmer och olika produkter, och den som gjort arbetet vet hur just din tatuering är lagd. Den här guiden beskriver vad som händer i huden och vad som är gängse praxis i Finland när du inte har en mer detaljerad instruktion till hands.',
    ],
    sections: [
      {
        id: 'kalvo',
        title: 'När tas skyddsfilmen bort?',
        lead: 'Studior använder två olika sorters skydd, och anvisningarna skiljer sig åt. Fråga tatueraren vilket du har — det avgör det första dygnet.',
        bullets: [
          'Vanlig plastfilm eller ett förband tas bort efter 2–6 timmar, senast samma kväll. Under den samlas blod, sårvätska och överskottsfärg. Det hör till.',
          'Andningsbar vårdfilm, så kallad andra hud, sitter kvar i 1–5 dygn. Den grumliga vätskan som samlas under den är normal. Om filmen läcker i kanterna, lossnar eller huden börjar svida kraftigt tar du bort den i förtid.',
        ],
        paragraphs: [
          'Ta bort filmen i duschen under ljummet vatten och dra den långsamt längs med huden, inte rakt uppåt — blöt film lossnar smärtfritt, torr gör det inte. Tvätta alltid händerna innan du rör vid en ny tatuering.',
        ],
      },
      {
        id: 'pesu',
        title: 'Hur tvättar man en ny tatuering?',
        lead: 'Tvätten är eftervårdens enskilt viktigaste moment. Tvätta 1–2 gånger om dagen under hela fjällningen — morgon och kväll räcker gott.',
        steps: [
          {
            title: 'Tvätta händerna',
            text: 'Tvätta händerna med tvål före varje beröring. En ny tatuering är ett sår, och de flesta problem börjar med smutsiga händer.',
          },
          {
            title: 'Skölj med ljummet vatten',
            text: 'Låt ljummet vatten rinna över tatueringen. Hett vatten svullnar huden i onödan, kallt löser varken salva eller sårvätska.',
          },
          {
            title: 'Tvätta med parfymfri tvål',
            text: 'Massera in parfymfri och färgämnesfri flytande tvål med fingertopparna. Använd inte tvättlapp, svamp eller skrubbande produkter.',
          },
          {
            title: 'Skölj bort all tvål',
            text: 'Tvål som blir kvar torkar ut och svider. Skölj tills ytan inte längre känns hal.',
          },
          {
            title: 'Klappa torrt',
            text: 'Klappa torrt med hushållspapper eller en egen nytvättad handduk. Gnid inte. Låt huden lufttorka några minuter innan du smörjer.',
          },
        ],
      },
      {
        id: 'rasvaus',
        title: 'Hur ofta ska tatueringen smörjas?',
        lead: 'Salvan ska hålla huden mjuk, inte täppa till den. Ett tunt lager räcker: tatueringen ska se återfuktad ut, inte blank eller våt.',
        paragraphs: [
          'Smörj 2–3 gånger om dagen efter tvätten och alltid när huden känns spänd. För mycket salva mjukar upp skorpan, fördröjer läkningen och ger hos en del små finnar. Blir ytan blank klappar du bort överskottet med rent papper.',
          'De första dagarna används oftast en tunn salva avsedd för tatueringar. Efter den första veckan räcker en vanlig parfymfri basmjukgörare, och den är värd att fortsätta med så länge huden känns torr.',
        ],
        bullets: [
          'Parfymfri och färgämnesfri — parfym är den vanligaste orsaken till irritation i läkande hud.',
          'Lätt konsistens som går in. Ett tjockt, lufttätt lager hör inte hemma på en färsk tatuering.',
          'Inga exfolierande syror (AHA/BHA), inget retinol och inga alkoholbaserade produkter förrän huden är helt läkt.',
          'Egen burk bara till dig. Salva som tas med fingrarna ur en öppen burk samlar bakterier — pump eller tub är säkrare.',
        ],
      },
      {
        id: 'paraneminen',
        title: 'Så läker tatueringen dag för dag',
        lead: 'Läkningen följer nästan alltid samma ordning. Tidtabellen är vägledande — placering och storlek påverkar den mest.',
        table: {
          columns: ['Skede', 'Vad som händer i huden', 'Vad du gör'],
          rows: [
            [
              'Dag 1',
              'Huden är röd och öm och vätskar sårvätska och överskottsfärg.',
              'Film av enligt anvisning, första tvätten, ett tunt lager salva.',
            ],
            [
              'Dag 2–3',
              'Svullnaden lägger sig, ytan torkar och känns spänd.',
              'Tvätt 1–2 gånger om dagen, salva 2–3 gånger om dagen.',
            ],
            [
              'Dag 4–6',
              'En tunn skorpa eller hinna bildas. Tatueringen ser grumlig ut.',
              'Samma rutin. Klia inte och dra inte bort hud som lossnar.',
            ],
            [
              'Vecka 2',
              'Huden fjällar och kliar. Färgen ser blek och ojämn ut.',
              'Smörj oftare och klappa på kliet med handflatan. Ingen klåda med naglarna.',
            ],
            [
              'Vecka 3–4',
              'Fjällningen upphör, ytan är slät men fortfarande lite blank.',
              'Basmjukgörare räcker. Solskydd så snart huden är hel.',
            ],
            [
              'Månad 2–3',
              'De djupare hudlagren läker och färgen sätter sig i sin slutliga ton.',
              'Vanlig hudvård och solskydd varje gång tatueringen är bar.',
            ],
          ],
          note: 'Stora och tätt skuggade arbeten läker långsammare än tunt linjearbete. Händer, fötter, revben och veck är alltid långsammast eftersom huden rör sig och skaver mest där.',
        },
      },
      {
        id: 'valta',
        title: 'Vad ska undvikas — och hur länge?',
        lead: 'Bastu, bad och sol är de tre vanligaste sätten att förstöra en i övrigt välgjord tatuering. Nedan de vanliga väntetiderna i finsk studiopraxis.',
        table: {
          columns: ['Det här', 'Hur länge', 'Varför'],
          rows: [
            [
              'Bastu och varmt bad',
              'Tills huden fjällat färdigt, oftast 2–3 veckor',
              'Värme och svettning svullnar huden, mjukar upp skorpan och sköljer bort färg.',
            ],
            [
              'Bad: simhall, sjö, hav, bubbelpool',
              'Tidigast 2–3 veckor, när huden är helt sluten',
              'Vatten blöter upp såret och för med sig bakterier, klor och sjövatten.',
            ],
            [
              'Direkt sol och solarium',
              '3–4 veckor, därefter solskydd SPF 50',
              'UV bränner läkande hud lätt och bleker färgen permanent.',
            ],
            [
              'Hård, svettig träning',
              '3–5 dagar beroende på placering',
              'Svett, hud som tänjs och skav mot redskap irriterar såret.',
            ],
            [
              'Att klia och peta bort skorpor',
              'Aldrig — låt dem lossna av sig själva',
              'Det drar med sig färg och lämnar bestående luckor.',
            ],
            [
              'Åtsittande och sträva kläder',
              'De första 1–2 veckorna',
              'Skav lossar läkande yta och kan lämna märken.',
            ],
            [
              'Mycket alkohol',
              'Tatueringsdagen och kvällen innan',
              'Alkohol tunnar ut blodet, ökar blödningen under arbetet och torkar ut huden.',
            ],
          ],
          note: 'En kort dusch är inte bad: duscha ska du göra varje dag. Undvik bara långvarig blötläggning och att strålen träffar den färska tatueringen direkt.',
        },
      },
      {
        id: 'milloin-yhteytta',
        title: 'När ska man söka vård?',
        lead: 'Lätt rodnad, värme och ömhet de första dagarna är normalt. Vissa symtom är ändå värda att visa för en yrkesperson.',
        callout: {
          title: 'Kontakta vården om',
          tone: 'warning',
          bullets: [
            'rodnaden sprider sig utanför tatueringen eller förvärras efter 2–3 dagar',
            'såret vätskar gulaktigt eller grönaktigt eller luktar illa',
            'du får feber eller frossa',
            'smärtan tilltar i stället för att lätta dag för dag',
            'huden blåsbildar sig eller ett utslag sprider sig — möjlig reaktion på färgen',
          ],
        },
        paragraphs: [
          'Hör också av dig till din tatuerare. En bra tatuerare vill veta hur arbetet läkte, och många studior fyller i luckor efter läkningen enligt överenskommelse. En retusch bedöms först på helt läkt hud, tidigast efter 4–6 veckor.',
        ],
      },
    ],
    howTo: {
      name: 'Tvätta en ny tatuering',
      description:
        'En ny tatuering tvättas med ljummet vatten och parfymfri flytande tvål 1–2 gånger om dagen under hela fjällningen.',
      stepsFromSection: 'pesu',
    },
    faqTitle: 'Vanliga frågor om eftervård',
    faq: [
      {
        q: 'Hur länge tar det för en tatuering att läka?',
        a: 'Ytlagret sluter sig oftast på 2–3 veckor och huden har fjällat färdigt då. De djupare lagren läker under 2–3 månader, och den slutliga tonen syns först då.',
      },
      {
        q: 'När kan man bada bastu med en ny tatuering?',
        a: 'Vänta tills huden fjällat färdigt och är helt sluten — i praktiken 2–3 veckor. Värme och svettning mjukar upp skorpan och kan skölja bort färg.',
      },
      {
        q: 'Får man bada med en ny tatuering?',
        a: 'Nej. Simhall, sjö, hav och bubbelpool får vänta tills såret är slutet, oftast 2–3 veckor. Duscha går bra som vanligt.',
      },
      {
        q: 'Hur ofta ska tatueringen smörjas?',
        a: 'Ett tunt lager 2–3 gånger om dagen efter tvätten och alltid när huden spänner. För mycket salva är lika skadligt som för lite: det täpper till huden och fördröjer läkningen.',
      },
      {
        q: 'Vad tvättar man en ny tatuering med?',
        a: 'Ljummet vatten och parfymfri flytande tvål med fingertopparna, 1–2 gånger om dagen. Ingen tvättlapp, ingen skrubb, inget hett vatten.',
      },
      {
        q: 'Får en ny tatuering vara i solen?',
        a: 'Direkt sol och solarium undviks i 3–4 veckor. Därefter ska tatueringen skyddas med SPF 50 varje gång den är bar, eftersom UV bleker färgen permanent.',
      },
      {
        q: 'Varför kliar och fjällar tatueringen?',
        a: 'Klåda och fjällning hör till andra veckan: huden förnyar sitt ytlager. Klappa på stället med handflatan och smörj. Att klia eller peta bort skorpan drar med sig färg.',
      },
      {
        q: 'Kan man träna med en ny tatuering?',
        a: 'Lätt motion går efter ett par dagar. Undvik 3–5 dagar svettig träning och rörelser som tänjer den tatuerade huden eller skaver mot redskap.',
      },
      {
        q: 'Varför lossnar det färg de första dagarna?',
        a: 'Färgen som rinner under filmen och i tvättvattnet är överskottspigment från hudytan, inte från själva tatueringen. Det hör till och betyder inte att arbetet bleknar.',
      },
      {
        q: 'När kan tatueringen retuscheras?',
        a: 'Luckor och tunna linjer bedöms först på helt läkt hud, tidigast efter 4–6 veckor. Fråga din tatuerare om retuschpraxis redan när du bokar tid.',
      },
    ],
    productsTitle: 'Produkter för eftervård: vad du ska titta efter',
    productsIntro:
      'Vi säljer inga produkter och lyfter inga enskilda märken. Nedan står det som faktiskt avgör när du väljer produkt — samma kriterier fungerar på apoteket, i matbutiken och i studions eget sortiment.',
    productCategories: [
      {
        category: 'aftercare',
        title: 'Salva för tatueringar',
        text: 'Salvor avsedda för tatueringar är tunna och andningsbara. Se att konsistensen går in utan att lämna en tjock hinna, och välj pump eller tub: i en öppen burk hamnar bakterier från fingrarna.',
      },
      {
        category: 'fragrance-free',
        title: 'Parfymfri basmjukgörare',
        text: 'Efter första veckan räcker en vanlig parfymfri basmjukgörare långt. Kort innehållsförteckning, ingen parfym, inga färgämnen, inga eteriska oljor.',
      },
      {
        category: 'cleansing',
        title: 'Rengöring',
        text: 'Parfymfri och färgämnesfri flytande tvål eller tvättkräm, helst milt sur. Inga skrubbkorn och ingen antibakteriell tvål utan särskild anvisning.',
      },
      {
        category: 'moisturising',
        title: 'Återfuktning under fjällningen',
        text: 'Mot klådan i fjällningsskedet hjälper fukt. En basmjukgörare med urea eller glycerol fungerar bra — men först när huden är hel, eftersom urea svider i ett öppet sår.',
      },
      {
        category: 'spf',
        title: 'Solskydd',
        text: 'När huden är sluten är solskydd det enda som håller tatueringen skarp i åratal. SPF 50 och omsmörjning med några timmars mellanrum utomhus.',
      },
    ],
    relatedTitle: 'Letar du efter en tatuerare?',
    relatedIntro:
      'Tatuoijat.fi samlar Finlands tatuerare och tatueringsstudior på ett ställe. Bläddra efter stad eller stil och se prisnivåerna innan du bokar tid.',
    upcomingTitle: 'På väg in i guiderna',
    ctaTitle: 'Hitta din tatuerare',
    ctaText:
      'Jämför portfolios, stilar och kontaktuppgifter per stad — och hör av dig direkt till artisten.',
    ctaLabel: 'Bläddra bland tatuerare',
    disclaimer:
      'Den här guiden är allmän information, inte en vårdanvisning. Följ i första hand din tatuerares instruktioner och kontakta vården vid oklarheter eller tecken på infektion.',
  },
};

/** Kort-text på hubben (/oppaat/, /sv/guider/). */
export const tatuoinninJalkihoitoCard: GuideCardByLocale = {
  fi: {
    title: 'Tatuoinnin jälkihoito',
    summary:
      'Kalvo, pesu ja rasvaus, paraneminen päivä päivältä sekä se, kuinka kauan saunaa, uimista ja aurinkoa kannattaa välttää.',
  },
  sv: {
    title: 'Eftervård av tatuering',
    summary:
      'Skyddsfilm, tvätt och salva, läkningen dag för dag samt hur länge bastu, bad och sol bör undvikas.',
  },
};
