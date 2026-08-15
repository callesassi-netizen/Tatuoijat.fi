import type { GuideCardByLocale, GuideContentByLocale } from './types';

/**
 * Opas: ensimmäinen tatuointi (/oppaat/ensimmainen-tatuointi/,
 * sv /sv/guider/din-forsta-tatuering/).
 *
 * VARFÖR DEN HÄR GUIDEN FINNS. Sökordsanalysen 12/8 2026 hittade ett helt
 * kluster utan täckning på sajten: "kenelle tatuointi ei sovi", "kuka saa
 * tatuoida", "tatuointi alaikäiselle", "tatuointi allergia", "tatuointi
 * alkoholi", "milloin tatuointia ei voi ottaa", "tatuointi arven päälle".
 * Alla ställs FÖRE studioval, alltså av exakt den besökare katalogen vill nå.
 *
 * OM ÅLDERSGRÄNSEN — LÄS INNAN DU ÄNDRAR. Guiden påstår INTE att Finland har
 * en lagstadgad åldersgräns för tatuering, för det har landet inte. Texten
 * beskriver studiopraxis ("valtaosa tatuoi vain täysi-ikäisiä") och hänvisar
 * beslutet till studion. Skriv aldrig om det här stycket till ett juridiskt
 * påstående utan källa — en katalog som påstår fel lag om minderåriga är ett
 * större problem än en katalog som säger "kysy studiolta".
 *
 * ANMÄLNINGSPLIKTEN är däremot en verifierad uppgift: en tatueringsverksamhet
 * ska göra en anmälan enligt hälsoskyddslagens 13 § till den kommunala
 * hälsoskyddsmyndigheten. Det är den enda konkreta myndighetskontroll en kund
 * kan efterfråga, och därför värd att nämna vid namn.
 */
export const ensimmainenTatuointi: GuideContentByLocale = {
  fi: {
    metaTitle: 'Ensimmäinen tatuointi — näin valmistaudut | Tatuoijat.fi',
    metaDescription:
      'Ensimmäinen tatuointi: ikäraja käytännössä, kenelle tatuointi ei sovi, alkoholi ja lääkkeet, allergiat, arpi ja luomi, sekä miten tunnistat turvallisen liikkeen.',
    eyebrow: 'Opas',
    h1: 'Ensimmäinen tatuointi',
    answer:
      'Ennen ensimmäistä tatuointia varmista kolme asiaa: että liike on tehnyt terveydensuojelulain mukaisen ilmoituksen ja työskentelee steriilisti, että olet terve ja selvin päin sinä päivänä, ja että olet katsonut tekijän aiempia töitä samassa tyylissä. Kaiken muun voi kysyä konsultaatiossa — myös hinnan.',
    intro: [
      'Ensimmäinen tatuointi on enimmäkseen kysymyksiä, joita ei kehtaa kysyä ääneen. Saako alaikäinen tatuoinnin. Voiko luomen päälle tatuoida. Entä jos on allerginen. Mistä tietää, ettei liike ole epämääräinen. Ne ovat kaikki hyviä kysymyksiä, ja useimpiin on olemassa selkeä vastaus.',
      'Tämä opas käy läpi sen, mikä kannattaa selvittää ennen ajanvarausta ja mikä vasta konsultaatiossa. Se ei korvaa keskustelua tekijän kanssa eikä terveydenhuollon arviota, jos sinulla on ihosairaus tai lääkitys, joka vaikuttaa asiaan.',
    ],
    sections: [
      {
        id: 'ikaraja',
        title: 'Onko tatuoinnilla ikäraja?',
        lead: 'Suomessa ei ole erillistä lakia tatuoinnin ikärajasta, mutta käytäntö on selvä: valtaosa studioista tatuoi vain täysi-ikäisiä.',
        paragraphs: [
          'Osa liikkeistä tekee poikkeuksen 16–17-vuotiaalle, kun huoltaja on paikan päällä ja antaa kirjallisen suostumuksen. Moni ei tee poikkeusta lainkaan. Studio päättää itse, ja päätös on lopullinen — kannattaa siis kysyä ennen kuin varaat ajan tai maksat varausmaksun.',
          'Jos olet alle 18, ota yhteyttä liikkeeseen etukäteen ja kysy suoraan kaksi asiaa: tatuoivatko he alaikäisiä lainkaan, ja mitä he tarvitsevat huoltajalta. Näin vältät turhan matkan ja kiusallisen tilanteen paikan päällä.',
        ],
      },
      {
        id: 'kuka-saa-tatuoida',
        title: 'Kuka saa tatuoida Suomessa?',
        lead: 'Tatuoijalta ei vaadita lupaa eikä tutkintoa, mutta toiminnasta on tehtävä terveydensuojelulain 13 §:n mukainen ilmoitus kunnan terveydensuojeluviranomaiselle.',
        paragraphs: [
          'Ilmoitus tarkoittaa, että tilat ja toimintatavat ovat viranomaisen tiedossa ja kuuluvat valvonnan piiriin. Se ei ole laatutodistus tekijän taidoista, mutta se on konkreettinen asia, jonka voit kysyä — ja jonka puuttuminen on syy kääntyä ovelta pois.',
          'Ammattikunnalla on lisäksi oma yhdistyksensä, Suomen Tatuointiartistien Liitto (FTAA), jonka jäsenyys edellyttää hygienia- ja ensiapuosaamista. Jäsenyys ei ole pakollinen eikä sen puuttuminen tee tekijästä huonoa, mutta se on yksi lisäsignaali muiden joukossa.',
        ],
        bullets: [
          'Kysy: onko toiminnasta tehty terveydensuojelulain mukainen ilmoitus?',
          'Katso: avataanko neulat ja kärjet pakkauksesta sinun nähtesi?',
          'Katso: käyttääkö tekijä kertakäyttökäsineitä ja vaihtaako hän ne kesken työn?',
          'Katso: onko työpiste suojattu kertakäyttökalvolla ja siisti aloittaessa?',
          'Kysy: saatko kirjalliset jälkihoito-ohjeet mukaan?',
        ],
      },
      {
        id: 'kenelle-ei-sovi',
        title: 'Kenelle tatuointi ei sovi?',
        lead: 'Useimmille sopii. Osassa tilanteita tatuointi siirretään, ja osassa asia kuuluu ensin lääkärille.',
        table: {
          columns: ['Tilanne', 'Käytäntö', 'Miksi'],
          rows: [
            ['Raskaus ja imetys', 'Siirretään.', 'Ei tutkittua tietoa turvallisuudesta, ja tulehdusriskiä ei kannata ottaa.'],
            ['Kuume tai flunssa', 'Siirretään.', 'Vastustuskyky on alhaalla juuri kun iholle tehdään haava.'],
            ['Verenohennuslääkitys', 'Kysy ensin lääkäriltä.', 'Vuoto lisääntyy ja väri istuu huonommin.'],
            ['Diabetes', 'Yleensä onnistuu.', 'Paraneminen voi olla hitaampaa. Kerro tekijälle etukäteen.'],
            ['Psoriasis tai ekseema', 'Terveelle iholle, ei läiskän päälle.', 'Ärsytys voi laukaista uuden läiskän juuri siihen kohtaan.'],
            ['Päihtymys tai krapula', 'Ei tatuoida.', 'Veri ohenee, kipukynnys laskee ja suostumus on kyseenalainen.'],
            ['Isotretinoiinihoito', 'Odota hoidon loppumista.', 'Iho on ohut ja arpeutuu herkemmin. Kysy hoitavalta lääkäriltä.'],
          ],
          note: 'Taulukko on yleistä käytäntöä, ei henkilökohtainen arvio. Oma lääkärisi tuntee tilanteesi.',
        },
        callout: {
          tone: 'warning',
          title: 'Kerro terveystiedot etukäteen, älä paikan päällä',
          text: 'Lääkitys, ihosairaus, allergiat ja aiemmat arpeutumisongelmat kannattaa mainita jo yhteydenotossa. Silloin tekijä ehtii arvioida asian rauhassa, eikä aikaa peruta viime hetkellä.',
        },
      },
      {
        id: 'allergia',
        title: 'Voiko tatuointimusteelle olla allerginen?',
        lead: 'Harvinaista mutta mahdollista. Reaktiot liittyvät useimmiten väripigmentteihin, punaiseen selvästi useammin kuin muihin.',
        paragraphs: [
          'Reaktio näkyy tyypillisesti koholla olevana, kutiavana alueena juuri sen värin kohdalla — joko heti ensimmäisinä viikkoina tai vasta vuosien päästä. Musta ja harmaa aiheuttavat reaktioita selvästi harvemmin kuin värilliset pigmentit.',
          'Jos sinulla on tunnettuja kosketusallergioita, kerro niistä tekijälle. Osa studioista tekee pyynnöstä pienen testialueen huomaamattomaan paikkaan, mutta testi ei sulje pois myöhempää reaktiota. EU-alueella tatuointimusteita säädellään kemikaalilainsäädännöllä, ja ammattiliike käyttää sen mukaisia tuotteita — sekin on asia, jonka voi kysyä.',
        ],
        bullets: [
          'Kohouma ja kutina vain yhden värin alueella viittaa pigmenttireaktioon, ei tulehdukseen.',
          'Koko alueen kuumotus, kipu ja märkiminen viittaa tulehdukseen. Se on terveydenhuollon asia.',
          'Lievä kutina kuoriutumisen aikana on normaalia eikä ole allergiaa.',
        ],
      },
      {
        id: 'arpi-ja-luomi',
        title: 'Voiko tatuoida arven tai luomen päälle?',
        lead: 'Arven päälle usein voi, luomen päälle ei.',
        paragraphs: [
          'Arpi tatuoidaan aikaisintaan noin vuoden kuluttua siitä, kun se on täysin kypsä — vaalea, tasainen ja tuntoinen. Tuore tai kohollaan oleva arpi elää vielä, ja siihen tehty työ muuttuu sen mukana. Arpikudos ottaa väriä epätasaisesti, joten lopputulos ei ole sama kuin terveellä iholla, ja useampi istunto on tavallista. Kokemus tästä vaihtelee tekijöittäin: kysy nimenomaan arpitatuoinneista.',
          'Luomia ja syntymämerkkejä ei tatuoida yli. Syy ei ole esteettinen vaan käytännöllinen: muste peittää juuri sen alueen, jonka värin ja muodon muutoksia pitäisi voida seurata. Ammattitaitoinen tekijä jättää luomen ympärille marginaalin ja suunnittelee kuvion sen mukaan. Jos luomi on muuttunut, näytä se ensin lääkärille.',
        ],
      },
      {
        id: 'ennen-aikaa',
        title: 'Mitä teet ennen istuntoa?',
        lead: 'Suurin osa valmistautumisesta tapahtuu edellisenä iltana ja aamuna, eikä mikään siitä ole vaikeaa.',
        steps: [
          {
            title: 'Nuku kunnolla',
            text: 'Väsyneenä kipukynnys on matalampi ja pitkä istunto tuntuu raskaammalta kuin sen tarvitsisi.',
          },
          {
            title: 'Syö ennen kuin tulet',
            text: 'Kunnon ateria 1–2 tuntia ennen. Tyhjällä vatsalla verensokeri laskee kesken istunnon, ja se on yleisin syy huonoon oloon tuolissa.',
          },
          {
            title: 'Ei alkoholia edellisenä iltana',
            text: 'Alkoholi ohentaa verta vielä seuraavana päivänä. Vuoto lisääntyy, väri istuu huonommin ja moni studio perii peruutusmaksun, jos joudut kääntymään ovelta.',
          },
          {
            title: 'Pue väljät vaatteet',
            text: 'Sellaiset, joista alue paljastuu helposti ja jotka eivät hankaa jälkeenpäin. Tummat vaatteet: väriä irtoaa aina hieman.',
          },
          {
            title: 'Aja ihokarvat vain jos tekijä pyytää',
            text: 'Tekijä ajaa alueen itse steriilillä kertakäyttöterällä. Omat ajovirheet ovat pieniä haavoja, ja ne voivat siirtää koko ajan.',
          },
          {
            title: 'Varaa aikaa enemmän kuin arvelet',
            text: 'Piirtäminen, asettelu ja tauot vievät aikaa. Kiire on huono neuvonantaja pysyvässä päätöksessä.',
          },
        ],
      },
      {
        id: 'konsultaatio',
        title: 'Mitä kysyt konsultaatiossa?',
        lead: 'Konsultaatio on ilmainen useimmissa liikkeissä ja se on paikka, jossa hinnasta ja mitoituksesta sovitaan — ei ajanvarauksen jälkeen.',
        bullets: [
          'Mikä on arvio kokonaishinnasta ja miten se muodostuu: tuntihinta vai työkohtainen hinta?',
          'Kuinka moneen istuntoon työ jakautuu ja mikä on istuntojen väli?',
          'Toimiiko idea siinä koossa ja siinä paikassa, johon sitä olen ajatellut?',
          'Miten kuva vanhenee — kestääkö tämä viivanpaksuus kymmenen vuotta juuri tässä kohdassa?',
          'Onko varausmaksu, ja vähennetäänkö se lopullisesta hinnasta?',
          'Sisältyykö korjausistunto hintaan, jos väri jää jostain kohtaa vajaaksi?',
        ],
        paragraphs: [
          'Hyvä tekijä sanoo myös ei. Jos hän ehdottaa isompaa kokoa, yksinkertaisempaa kuvaa tai toista sijoituspaikkaa, se on ammattitaitoa eikä myyntipuhetta: hän tietää, miltä työ näyttää kymmenen vuoden päästä, ja sinä et vielä.',
        ],
      },
    ],
    faqTitle: 'Usein kysyttyä ensimmäisestä tatuoinnista',
    faq: [
      {
        q: 'Saako alaikäinen tatuoinnin Suomessa?',
        a: 'Käytännössä ei. Valtaosa suomalaisstudioista tatuoi vain täysi-ikäisiä, ja osa tekee poikkeuksen 16–17-vuotiaalle vain huoltajan ollessa paikalla ja antaessa kirjallisen suostumuksen. Studio päättää itse, joten kysy ennen kuin varaat ajan.',
      },
      {
        q: 'Tarvitseeko tatuoija luvan tai tutkinnon?',
        a: 'Erillistä lupaa tai tutkintoa ei vaadita, mutta toiminnasta on tehtävä terveydensuojelulain 13 §:n mukainen ilmoitus kunnan terveydensuojeluviranomaiselle. Sen voi kysyä liikkeeltä suoraan.',
      },
      {
        q: 'Voiko tatuoinnin ottaa raskaana tai imettäessä?',
        a: 'Käytäntö on siirtää. Turvallisuudesta ei ole tutkittua tietoa, ja tuore tatuointi on avohaava, jonka tulehdusriskiä ei kannata ottaa raskauden aikana.',
      },
      {
        q: 'Entä jos otin eilen alkoholia?',
        a: 'Kerro se tekijälle. Alkoholi ohentaa verta vielä seuraavana päivänä, mikä lisää vuotoa ja huonontaa värin istuvuutta. Moni studio siirtää ajan mieluummin kuin tekee huonon jäljen.',
      },
      {
        q: 'Kuinka paljon ensimmäinen tatuointi maksaa?',
        a: 'Suomessa tuntiveloitus on tyypillisesti 100–180 €, ja lähes kaikilla studioilla on minimiveloitus, usein 80–150 €. Pieni ensimmäinen työ osuu useimmiten minimiveloituksen tuntumaan.',
      },
      {
        q: 'Voinko tuoda oman kuvan netistä?',
        a: 'Voit tuoda sen ideaksi, mutta älä odota kopiota. Toisen tekijän työn kopioiminen on alalla huonoa tapaa, ja hyvä tekijä piirtää oman version — joka istuu myös sinun kehoosi ja siihen paikkaan.',
      },
    ],
    productsTitle: 'Mitä hankit valmiiksi kotiin',
    productsIntro:
      'Hoitotuotteet kannattaa ostaa ennen istuntoa, ei sen jälkeen. Ensimmäinen pesu tehdään jo samana iltana, eikä silloin ole mukava lähteä kauppaan.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Hajusteeton pesu',
        text: 'Mieto, väriaineeton nestesaippua. Tämä on ainoa tuote, jota tarvitset ehdottomasti heti ensimmäisenä iltana.',
      },
      {
        category: 'aftercare',
        title: 'Hoitovoide ensimmäiselle viikolle',
        text: 'Ohut kerros pesun jälkeen. Ensimmäisen viikon jälkeen tavallinen hajusteeton perusvoide riittää.',
      },
      {
        category: 'spf',
        title: 'Aurinkosuoja, kun iho on parantunut',
        text: 'Ei tuoreelle työlle, mutta kesällä välttämätön heti kun iho on kokonaan ehjä. UV on tatuoinnin suurin yksittäinen haalistaja.',
      },
    ],
    relatedTitle: 'Jatka tästä',
    relatedIntro:
      'Kun päätös on tehty, seuraavat kysymykset ovat kipu, hinta ja jälkihoito. Ne käsitellään omissa oppaissaan.',
    upcomingTitle: 'Tulossa',
    ctaTitle: 'Etsitkö ensimmäistä tekijääsi?',
    ctaText:
      'Selaa Suomen tatuoijia kaupungin tai tyylin mukaan, katso portfolioita rinnakkain ja kysy konsultaatiota suoraan artistilta.',
    ctaLabel: 'Selaa tatuoijia',
    disclaimer:
      'Tämä opas on yleistä tietoa, ei lääketieteellistä eikä oikeudellista neuvontaa. Ikäraja ja käytännöt vaihtelevat studioittain — kysy aina liikkeeltä. Jos sinulla on ihosairaus, lääkitys tai allergia, keskustele lääkärin kanssa ennen ajanvarausta.',
  },
  sv: {
    metaTitle: 'Din första tatuering — vad du bör veta | Tatuoijat.fi',
    metaDescription:
      'Din första tatuering: åldersgränsen i praktiken, vem tatuering inte passar för, alkohol och mediciner, allergier, ärr och födelsemärken, och hur du känner igen en säker studio.',
    eyebrow: 'Guide',
    h1: 'Din första tatuering',
    answer:
      'Kontrollera tre saker före din första tatuering: att studion gjort anmälan enligt hälsoskyddslagen och arbetar sterilt, att du är frisk och nykter den dagen, och att du sett tatuerarens tidigare arbeten i samma stil. Allt annat går att fråga vid konsultationen — även priset.',
    intro: [
      'Den första tatueringen består mest av frågor man inte vågar ställa högt. Får en minderårig tatuera sig. Går det att tatuera över ett födelsemärke. Tänk om jag är allergisk. Hur vet jag att studion inte är skum. Det är bra frågor allihop, och de flesta har ett tydligt svar.',
      'Guiden går igenom vad som är värt att reda ut före bokningen och vad som hör hemma först vid konsultationen. Den ersätter inte samtalet med tatueraren, och inte heller vårdens bedömning om du har en hudsjukdom eller medicinering som spelar in.',
    ],
    sections: [
      {
        id: 'ikaraja',
        title: 'Finns det en åldersgräns för tatuering?',
        lead: 'Finland har ingen separat lag om åldersgräns för tatuering, men praxis är tydlig: de flesta studior tatuerar bara myndiga.',
        paragraphs: [
          'En del studior gör undantag för 16–17-åringar när vårdnadshavaren är på plats och ger skriftligt samtycke. Många gör inget undantag alls. Studion bestämmer själv, och beslutet är slutgiltigt — fråga alltså innan du bokar tid eller betalar en bokningsavgift.',
          'Är du under 18, kontakta studion i förväg och fråga rakt ut två saker: tatuerar de minderåriga över huvud taget, och vad behöver de från vårdnadshavaren? Då slipper du både en onödig resa och en obekväm situation på plats.',
        ],
      },
      {
        id: 'kuka-saa-tatuoida',
        title: 'Vem får tatuera i Finland?',
        lead: 'Ingen licens eller examen krävs av tatueraren, men verksamheten ska anmälas enligt hälsoskyddslagens 13 § till den kommunala hälsoskyddsmyndigheten.',
        paragraphs: [
          'Anmälan innebär att lokalen och arbetssätten är kända av myndigheten och omfattas av tillsyn. Det är inget kvalitetsbevis på tatuerarens hantverk, men det är en konkret sak du kan fråga om — och saknas den är det skäl att vända i dörren.',
          'Yrkeskåren har dessutom en egen förening, Finlands Tatueringsartisters Förbund (FTAA), där medlemskap förutsätter hygien- och första hjälpen-kunskap. Medlemskap är inte obligatoriskt och avsaknaden gör ingen till en dålig tatuerare, men det är en signal bland andra.',
        ],
        bullets: [
          'Fråga: är verksamheten anmäld enligt hälsoskyddslagen?',
          'Se efter: öppnas nålar och spetsar ur förpackningen medan du ser på?',
          'Se efter: används engångshandskar, och byts de under arbetets gång?',
          'Se efter: är arbetsytan täckt med engångsfilm och ren när ni börjar?',
          'Fråga: får du skriftliga eftervårdsanvisningar med dig?',
        ],
      },
      {
        id: 'kenelle-ei-sovi',
        title: 'Vem passar tatuering inte för?',
        lead: 'De flesta kan tatuera sig. I vissa lägen skjuts tiden upp, och i vissa hör frågan först hemma hos läkaren.',
        table: {
          columns: ['Situation', 'Praxis', 'Varför'],
          rows: [
            ['Graviditet och amning', 'Skjuts upp.', 'Ingen forskning på säkerheten, och infektionsrisken är inte värd att ta.'],
            ['Feber eller förkylning', 'Skjuts upp.', 'Immunförsvaret är nere just när huden får ett sår.'],
            ['Blodförtunnande medicin', 'Fråga läkare först.', 'Blödningen ökar och färgen sätter sig sämre.'],
            ['Diabetes', 'Går oftast bra.', 'Läkningen kan vara långsammare. Berätta för tatueraren i förväg.'],
            ['Psoriasis eller eksem', 'På frisk hud, inte på ett utslag.', 'Irritationen kan utlösa ett nytt utslag just där.'],
            ['Påverkad eller bakfull', 'Tatueras inte.', 'Blodet tunnas ut, smärttröskeln sjunker och samtycket är tveksamt.'],
            ['Isotretinoinbehandling', 'Vänta tills kuren är slut.', 'Huden är tunn och ärrar lättare. Fråga din behandlande läkare.'],
          ],
          note: 'Tabellen beskriver allmän praxis, inte en personlig bedömning. Din egen läkare känner din situation.',
        },
        callout: {
          tone: 'warning',
          title: 'Berätta om hälsan i förväg, inte på plats',
          text: 'Medicinering, hudsjukdom, allergier och tidigare problem med ärrbildning bör nämnas redan vid kontakten. Då hinner tatueraren bedöma saken i lugn och ro, och tiden behöver inte avbokas i sista stund.',
        },
      },
      {
        id: 'allergia',
        title: 'Kan man vara allergisk mot tatueringsbläck?',
        lead: 'Ovanligt men möjligt. Reaktioner hänger oftast ihop med färgpigment, och med rött betydligt oftare än med andra.',
        paragraphs: [
          'En reaktion syns typiskt som ett upphöjt, kliande parti just där den färgen sitter — antingen redan de första veckorna eller först efter flera år. Svart och grått ger reaktioner klart mer sällan än färgade pigment.',
          'Har du kända kontaktallergier, berätta det för tatueraren. En del studior gör på begäran en liten testyta på ett undanskymt ställe, men ett test utesluter inte en senare reaktion. Inom EU regleras tatueringsbläck av kemikalielagstiftningen, och en professionell studio använder produkter enligt den — även det går att fråga om.',
        ],
        bullets: [
          'Upphöjning och klåda bara i ett färgparti tyder på pigmentreaktion, inte infektion.',
          'Värme, smärta och var i hela området tyder på infektion. Det är en fråga för vården.',
          'Lätt klåda under fjällningen är normalt och är ingen allergi.',
        ],
      },
      {
        id: 'arpi-ja-luomi',
        title: 'Går det att tatuera över ärr eller födelsemärken?',
        lead: 'Över ärr ofta ja, över födelsemärken nej.',
        paragraphs: [
          'Ett ärr tatueras tidigast omkring ett år efter att det mognat färdigt — blekt, jämnt och med normal känsel. Ett färskt eller upphöjt ärr rör sig fortfarande, och arbetet förändras med det. Ärrvävnad tar färg ojämnt, så resultatet blir inte detsamma som på frisk hud, och flera sessioner är vanligt. Erfarenheten varierar mellan tatuerare: fråga uttryckligen om ärrtatuering.',
          'Födelsemärken tatueras inte över. Skälet är inte estetiskt utan praktiskt: bläcket döljer exakt den yta vars färg och form man behöver kunna följa. En yrkeskunnig tatuerare lämnar marginal runt märket och planerar motivet därefter. Har ett födelsemärke förändrats, visa det för läkare först.',
        ],
      },
      {
        id: 'ennen-aikaa',
        title: 'Vad gör du före sessionen?',
        lead: 'Det mesta av förberedelsen sker kvällen innan och på morgonen, och inget av det är svårt.',
        steps: [
          {
            title: 'Sov ordentligt',
            text: 'Trött är smärttröskeln lägre, och en lång session känns tyngre än den behöver.',
          },
          {
            title: 'Ät innan du kommer',
            text: 'Ett riktigt mål 1–2 timmar innan. På tom mage sjunker blodsockret mitt i sessionen, och det är den vanligaste orsaken till att någon mår dåligt i stolen.',
          },
          {
            title: 'Ingen alkohol kvällen innan',
            text: 'Alkohol förtunnar blodet ännu dagen efter. Blödningen ökar, färgen sätter sig sämre, och många studior tar en avbokningsavgift om du måste vända i dörren.',
          },
          {
            title: 'Ta på löst sittande kläder',
            text: 'Sådana som lätt friar ytan och inte skaver efteråt. Mörka kläder: det lossnar alltid lite färg.',
          },
          {
            title: 'Raka bara om tatueraren ber om det',
            text: 'Tatueraren rakar ytan själv med ett sterilt engångsblad. Egna rakningsmissar är små sår, och de kan skjuta upp hela tiden.',
          },
          {
            title: 'Avsätt mer tid än du tror',
            text: 'Att rita, placera och ta pauser tar tid. Brådska är en dålig rådgivare i ett permanent beslut.',
          },
        ],
      },
      {
        id: 'konsultaatio',
        title: 'Vad frågar du vid konsultationen?',
        lead: 'Konsultationen är gratis hos de flesta och är platsen där pris och storlek avgörs — inte efter att tiden är bokad.',
        bullets: [
          'Vad är uppskattningen för totalpriset och hur byggs det upp: timpris eller pris per arbete?',
          'Hur många sessioner delas arbetet på, och hur långt mellan dem?',
          'Fungerar idén i den storlek och på den placering jag tänkt mig?',
          'Hur åldras motivet — håller den här linjetjockleken i tio år just där?',
          'Finns det en bokningsavgift, och dras den av från slutpriset?',
          'Ingår en retuschsession om färgen blir ojämn någonstans?',
        ],
        paragraphs: [
          'En bra tatuerare säger också nej. Föreslår hen större format, enklare motiv eller en annan placering är det yrkeskunskap och inte säljsnack: hen vet hur arbetet ser ut om tio år, och det gör inte du än.',
        ],
      },
    ],
    faqTitle: 'Vanliga frågor om den första tatueringen',
    faq: [
      {
        q: 'Får minderåriga tatuera sig i Finland?',
        a: 'I praktiken nej. De flesta finländska studior tatuerar bara myndiga, och en del gör undantag för 16–17-åringar endast med vårdnadshavaren på plats och med skriftligt samtycke. Studion bestämmer själv, så fråga innan du bokar.',
      },
      {
        q: 'Behöver en tatuerare licens eller examen?',
        a: 'Ingen separat licens eller examen krävs, men verksamheten ska anmälas enligt hälsoskyddslagens 13 § till den kommunala hälsoskyddsmyndigheten. Det går att fråga studion om direkt.',
      },
      {
        q: 'Kan man tatuera sig gravid eller under amning?',
        a: 'Praxis är att skjuta upp. Det finns ingen forskning på säkerheten, och en färsk tatuering är ett öppet sår vars infektionsrisk inte är värd att ta under graviditeten.',
      },
      {
        q: 'Tänk om jag drack alkohol i går?',
        a: 'Berätta det för tatueraren. Alkohol förtunnar blodet ännu dagen efter, vilket ökar blödningen och försämrar hur färgen sätter sig. Många studior flyttar hellre tiden än gör ett dåligt jobb.',
      },
      {
        q: 'Vad kostar den första tatueringen?',
        a: 'I Finland ligger timpriset typiskt på 100–180 €, och nästan alla studior har en minimidebitering, ofta 80–150 €. Ett litet första arbete landar oftast kring minimidebiteringen.',
      },
      {
        q: 'Kan jag ta med en bild från nätet?',
        a: 'Ta gärna med den som idé, men vänta dig ingen kopia. Att kopiera en annan tatuerares arbete är dålig sed i branschen, och en bra tatuerare ritar en egen version — som dessutom sitter på just din kropp och placering.',
      },
    ],
    productsTitle: 'Vad du skaffar hem i förväg',
    productsIntro:
      'Vårdprodukterna bör köpas före sessionen, inte efter. Den första tvätten görs redan samma kväll, och då är det inte roligt att behöva gå till butiken.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Parfymfri tvätt',
        text: 'Mild, färgämnesfri flytande tvål. Det är den enda produkt du absolut behöver redan första kvällen.',
      },
      {
        category: 'aftercare',
        title: 'Salva för första veckan',
        text: 'Ett tunt lager efter tvätt. Efter första veckan räcker en vanlig parfymfri baskräm.',
      },
      {
        category: 'spf',
        title: 'Solskydd när huden läkt',
        text: 'Inte på ett färskt arbete, men nödvändigt på sommaren så snart huden är hel. UV är det enskilt största skälet till att en tatuering bleknar.',
      },
    ],
    relatedTitle: 'Fortsätt här',
    relatedIntro:
      'När beslutet är taget är nästa frågor smärtan, priset och eftervården. De behandlas i egna guider.',
    upcomingTitle: 'På gång',
    ctaTitle: 'Letar du efter din första tatuerare?',
    ctaText:
      'Bläddra bland Finlands tatuerare efter stad eller stil, lägg portfolios bredvid varandra och be om en konsultation direkt hos artisten.',
    ctaLabel: 'Bläddra bland tatuerare',
    disclaimer:
      'Den här guiden är allmän information, varken medicinsk eller juridisk rådgivning. Åldersgräns och praxis varierar mellan studior — fråga alltid studion. Har du en hudsjukdom, medicinering eller allergi, tala med läkare före bokningen.',
  },
};

export const ensimmainenTatuointiCard: GuideCardByLocale = {
  fi: {
    title: 'Ensimmäinen tatuointi',
    summary:
      'Ikäraja käytännössä, kenelle tatuointi ei sovi, allergiat ja arvet, sekä miten tunnistat turvallisen liikkeen ja mitä kysyt konsultaatiossa.',
  },
  sv: {
    title: 'Din första tatuering',
    summary:
      'Åldersgränsen i praktiken, vem tatuering inte passar för, allergier och ärr, hur du känner igen en säker studio och vad du frågar vid konsultationen.',
  },
};
