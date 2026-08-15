import type { GuideCardByLocale, GuideContentByLocale } from './types';

/**
 * Opas: tatuoinnin kipu ja sijoituspaikka (/oppaat/tatuoinnin-kipu/,
 * sv /sv/guider/hur-ont-gor-en-tatuering/).
 *
 * VARFÖR DEN HÄR GUIDEN FINNS. Sökordsanalysen 12/8 2026 hittade tio distinkta
 * varianter av samma fråga — "mihin tatuointi sattuu vähiten", "kuinka paljon
 * tatuointi sattuu", "miltä tatuointi tuntuu", "mihin eka tatuointi" — och
 * sajten nämnde inte ordet kipu på en enda sida. Frågan ställs dessutom av
 * någon som ännu INTE valt studio, vilket är precis den besökare en katalog
 * vill fånga. Därför länkar guiden vidare till stads- och stillistorna, inte
 * bara till de andra vårdguiderna.
 *
 * TONEN. Smärta går inte att lova bort och ska inte bagatelliseras. Guiden
 * beskriver vad som faktiskt varierar (plats, tid, teknik, dagsform) och
 * undviker sifferskalor av typen "7/10" — de låter exakta men mäter ingenting
 * och skulle vara vår uppfinning, inte ett fynd.
 *
 * INGA MEDICINSKA RÅD. Inga rekommendationer om bedövningskräm eller
 * smärtstillande: det förra är receptfritt men påverkar huden under arbetet
 * och är tatuerarens beslut, det senare gäller blodförtunning. Båda hänvisas
 * till studion respektive vården.
 */
export const tatuoinninKipu: GuideContentByLocale = {
  fi: {
    metaTitle: 'Kuinka paljon tatuointi sattuu? | Tatuoijat.fi',
    metaDescription:
      'Mihin tatuointi sattuu vähiten ja mihin eniten? Kipu kehonosittain, miltä tatuointi oikeasti tuntuu, kuinka kauan se on kipeä ja mihin kannattaa ottaa ensimmäinen tatuointi.',
    eyebrow: 'Opas',
    h1: 'Kuinka paljon tatuointi sattuu?',
    answer:
      'Tatuointi sattuu, mutta harvemmin niin paljon kuin sitä ennen pelkää. Tuntemus on lähempänä pitkää raapaisua tai auringonpolttamaa kuin pistoa. Vähiten sattuu siellä missä on lihasta ja rasvaa — olkavarsi, reisi, pohje. Eniten siellä missä luu on lähellä ihoa: kylkiluut, nilkka, jalkaterä, kyynärpää ja polvitaive.',
    intro: [
      'Kipu on se kysymys, joka estää useimpia varaamasta aikaa — ja samalla se, josta on vaikein saada suora vastaus. Osa kertoo nukahtaneensa istunnon aikana, osa kuvaa samaa paikkaa sietämättömäksi. Molemmat puhuvat totta: kipukynnys on henkilökohtainen, ja sen päälle tulevat sijainti, istunnon pituus, tekniikka ja se, miten olet nukkunut ja syönyt sinä aamuna.',
      'Tämä opas ei lupaa, ettei satu. Se kertoo mikä vaihtelee ja miten paljon, jotta osaat valita ensimmäisen paikan järkevästi ja tiedät mitä odottaa istunnossa. Kysy aina tarkempi arvio omalta tekijältäsi — hän tuntee oman kätensä ja sen paikan, johon työ tulee.',
    ],
    sections: [
      {
        id: 'milta-tuntuu',
        title: 'Miltä tatuointi tuntuu?',
        lead: 'Useimmat kuvaavat tuntemuksen kuumaksi raapaisuksi, joka toistuu. Ei yksittäisiä pistoja, vaan jatkuvaa hankausta samalla alueella.',
        paragraphs: [
          'Neula liikkuu ihossa satoja kertoja sekunnissa ja yltää ihon toiseen kerrokseen, verinahkaan. Se ei ole sama asia kuin injektio: neula ei mene syvälle vaan tiheästi, ja siksi tuntemus on pinnallinen mutta yhtäjaksoinen. Moni vertaa sitä kissan raapaisuun tai vasta tulleeseen auringonpolttamaan, jota hangataan.',
          'Ensimmäiset minuutit tuntuvat yleensä pahimmilta, koska keho ei vielä tiedä mitä on tulossa. Sen jälkeen useimmilla asettuu rytmi, ja noin puolen tunnin kohdalla kipu tuntuu tylsemmältä. Pitkässä istunnossa suunta kääntyy taas: 3–4 tunnin jälkeen sama paikka alkaa aristaa uudelleen, kun iho on turvonnut ja hermopäät ärtyneet.',
        ],
        bullets: [
          'Ääriviivat tuntuvat terävämmiltä kuin varjostus — ohut neula, tarkka viiva, usein yhdellä vedolla.',
          'Varjostus ja täyttö ovat tylsempää mutta kuumempaa, ja ne kestävät kauemmin samalla alueella.',
          'Värin pakkaaminen samaan kohtaan uudelleen on se vaihe, jonka useimmat muistavat jälkeenpäin.',
          'Luun päällä tuntemus värähtelee sisäänpäin. Se on eri laatuinen kipu kuin pehmeällä alueella, ei vain voimakkaampi.',
        ],
      },
      {
        id: 'mihin-sattuu-vahiten',
        title: 'Mihin tatuointi sattuu vähiten?',
        lead: 'Sinne missä ihon alla on lihasta tai rasvaa ja hermopäätteitä on harvassa. Ulompi olkavarsi on syystä klassinen ensimmäinen paikka.',
        table: {
          columns: ['Paikka', 'Kipu', 'Miksi'],
          rows: [
            ['Ulompi olkavarsi', 'Lievä', 'Lihasta alla, vähän hermopäätteitä, iho paksua.'],
            ['Ulompi reisi', 'Lievä', 'Paksuin pehmytkudos koko kehossa.'],
            ['Pohje', 'Lievä–kohtalainen', 'Lihaksikas, mutta takaosa aristaa enemmän.'],
            ['Kyynärvarsi, ulkosyrjä', 'Lievä–kohtalainen', 'Suosittu ensimmäinen paikka, hyvin siedetty.'],
            ['Olkapää ja lapaluun päällys', 'Kohtalainen', 'Lapaluun reunalla luu tulee lähelle.'],
            ['Selkä, ulkoreunat', 'Kohtalainen', 'Selkärangan vieressä siedettävä, päällä ei.'],
          ],
          note: 'Taulukko kuvaa sitä, mitä tatuoijat kuulevat asiakkailta yleisimmin. Oma kokemuksesi voi poiketa kumpaankin suuntaan.',
        },
      },
      {
        id: 'mihin-sattuu-eniten',
        title: 'Mihin tatuointi sattuu eniten?',
        lead: 'Luun päälle, ohuen ihon alueille ja sinne missä hermopäätteitä on tiheässä. Näissä paikoissa myös lyhyt istunto tuntuu pitkältä.',
        table: {
          columns: ['Paikka', 'Kipu', 'Miksi'],
          rows: [
            ['Kylkiluut', 'Kova', 'Ohut iho suoraan luun päällä, ja hengitys liikuttaa aluetta koko ajan.'],
            ['Nilkka ja jalkaterä', 'Kova', 'Luu pinnassa, hermopäätteitä tiheässä.'],
            ['Kyynärpää ja polvitaive', 'Kova', 'Ohut, venyvä iho ja luu tai jänteet heti alla.'],
            ['Kädet ja sormet', 'Kova', 'Paljon hermopäätteitä, ohut iho, lisäksi nopea kuluminen.'],
            ['Kaula ja kurkku', 'Kova', 'Ohut iho, ei pehmustetta, refleksinomainen jännitys.'],
            ['Solisluu', 'Kova', 'Luu käytännössä pinnassa.'],
            ['Pää ja korvan seutu', 'Kova', 'Ääni ja tärinä kallossa tekevät kokemuksesta oman lajinsa.'],
          ],
        },
        callout: {
          title: 'Ensimmäinen tatuointi ei kuulu näihin paikkoihin',
          text: 'Ei siksi ettei kipua kestäisi, vaan siksi ettei ensimmäisessä istunnossa vielä tiedä miten oma keho reagoi. Kylkiluut tai jalkaterä ensimmäisenä on tarpeeton riski keskeytyneelle työlle — ja keskeneräinen tatuointi on huonompi lopputulos kuin sama kuva toisessa paikassa.',
        },
      },
      {
        id: 'mika-vaikuttaa',
        title: 'Mikä muu vaikuttaa kipuun kuin paikka?',
        lead: 'Sijainti on suurin yksittäinen tekijä, mutta ei ainoa. Osaan näistä voit vaikuttaa itse jo edellisenä iltana.',
        steps: [
          {
            title: 'Nuku ja syö',
            text: 'Valvottu yö ja tyhjä vatsa laskevat kipukynnystä mitattavasti. Syö kunnon ateria 1–2 tuntia ennen ja ota vettä mukaan.',
          },
          {
            title: 'Jätä alkoholi väliin',
            text: 'Alkoholi ohentaa verta, lisää vuotoa ja huonontaa värin istuvuutta. Moni studio ei tatuoi krapulaista tai päihtynyttä lainkaan.',
          },
          {
            title: 'Varaa lyhyempi ensimmäinen istunto',
            text: 'Kaksi tuntia on eri kokemus kuin kuusi. Iso työ kannattaa jakaa, ja tekijä osaa ehdottaa luontevan katkon.',
          },
          {
            title: 'Hengitä ulos, älä pidätä',
            text: 'Pidätetty hengitys jännittää lihaksen neulan alla ja tekee tuntemuksesta terävämmän. Tasainen uloshengitys on ainoa tekniikka, joka toimii kaikilla.',
          },
          {
            title: 'Sano kun tarvitset tauon',
            text: 'Tauko ei pilaa työtä eikä loukkaa tekijää. Se on normaali osa pitkää istuntoa, ja tekijä pitää mieluummin tauon kuin tatuoi liikkuvaa ihoa.',
          },
        ],
        paragraphs: [
          'Puudutusvoiteista kannattaa kysyä studiolta ennen kuin ostat mitään. Ne muuttavat ihon rakennetta työn aikana ja vaikuttavat siihen, miten väri istuu, joten osa tekijöistä ei käytä niitä lainkaan. Se on tekijän ammatillinen päätös, ei mielipidekysymys.',
          'Verta ohentavista särkylääkkeistä, kuten ibuprofeenista ja asetyylisalisyylihaposta, kannattaa keskustella lääkärin kanssa, jos käytät niitä säännöllisesti. Älä muuta omaa lääkitystäsi tatuointia varten.',
        ],
      },
      {
        id: 'kuinka-kauan-kipea',
        title: 'Kuinka kauan tatuointi on kipeä jälkeenpäin?',
        lead: 'Varsinainen kipu loppuu istunnon myötä. Sen jälkeen alue on arka kuin mustelma noin 2–4 vuorokautta.',
        table: {
          columns: ['Aika', 'Tuntuu', 'Normaalia'],
          rows: [
            ['Ensimmäiset tunnit', 'Kuuma, polttava, kuin auringonpolttama.', 'Kyllä.'],
            ['1–3 vrk', 'Arka ja turvonnut, sattuu kosketukseen.', 'Kyllä.'],
            ['3–7 vrk', 'Kutina alkaa, arkuus laskee.', 'Kyllä — älä raavi.'],
            ['1–2 vk', 'Kuoriutuminen, ei enää kipua.', 'Kyllä.'],
            ['Yli 2 vk', 'Kasvava kipu, kuumotus tai märkä.', 'Ei. Ota yhteyttä terveydenhuoltoon.'],
          ],
        },
        paragraphs: [
          'Nivelen tai taipeen kohdalla arkuus kestää tavallista pidempään yksinkertaisesti siksi, että alue liikkuu jokaisella askeleella. Jalkaterä ja nilkka ovat tässä pahimmat: kenkä hankaa juuri siihen kohtaan, jonka pitäisi saada olla rauhassa.',
        ],
      },
      {
        id: 'mihin-eka',
        title: 'Mihin kannattaa ottaa ensimmäinen tatuointi?',
        lead: 'Paikkaan joka on siedettävä, paranee helposti ja jonka voit peittää — siinä järjestyksessä.',
        bullets: [
          'Ulompi olkavarsi tai kyynärvarren ulkosyrjä: lievä kipu, helppo hoitaa, ei hankaa vaatteisiin.',
          'Ulompi reisi tai pohje: sama etu, ja kesällä helppo pitää auringolta suojassa housuilla.',
          'Lapaluun päällys: siedettävä ja helppo peittää, mutta rasvaaminen vaatii toisen ihmisen apua.',
          'Vältä ensimmäisellä kerralla käsiä, sormia, jalkateriä, kylkiluita ja kaulaa. Ne ovat sekä kivuliaimmat että vaikeimmat parantaa.',
        ],
        paragraphs: [
          'Kannattaa myös miettiä kokoa. Pieni ensimmäinen tatuointi kuulostaa varovaiselta valinnalta, mutta hyvin pieni ja tiheä kuva vaatii ohutta viivaa, joka leviää vuosien mittaan. Kysy tekijältä, mikä on pienin koko jolla juuri se idea toimii — vastaus on usein hieman isompi kuin itse ajattelit, ja se on hinnan arvoista.',
        ],
      },
    ],
    faqTitle: 'Usein kysyttyä tatuoinnin kivusta',
    faq: [
      {
        q: 'Sattuuko tatuointi enemmän kuin lävistys?',
        a: 'Lävistys on hetkellisesti terävämpi mutta ohi sekunneissa. Tatuointi on lievempi tuntemus, joka jatkuu tunteja. Useimmat pitävät lävistystä pahempana yksittäisenä hetkenä ja tatuointia raskaampana kokonaisuutena.',
      },
      {
        q: 'Sattuuko väri enemmän kuin musta?',
        a: 'Ei väriaineesta johtuen. Väripinnat vaativat kuitenkin usein useamman kerroksen samaan kohtaan, ja se toisto tuntuu — ei väri itsessään.',
      },
      {
        q: 'Voiko tatuoinnin ottaa kuukautisten aikana?',
        a: 'Voi. Osa kokee kipukynnyksen olevan silloin matalampi, joten jos ajankohtaa voi siirtää ja paikka on kivulias, siirto voi olla mukavampi. Se ei ole este.',
      },
      {
        q: 'Voiko kesken istunnon pyytää lopettamaan?',
        a: 'Voi, milloin tahansa. Tekijä viimeistelee sen kohdan, joka on kesken, ja loput sovitaan uuteen aikaan. Keskeytys ei pilaa työtä.',
      },
      {
        q: 'Auttaako puudutusvoide?',
        a: 'Se vähentää tuntemusta, mutta muuttaa myös ihon rakennetta työn aikana ja voi vaikuttaa siihen miten väri istuu. Kysy aina tekijältä ennen kuin hankit sellaista — osa ei tatuoi puudutetulle iholle.',
      },
      {
        q: 'Sattuuko peittotatuointi enemmän?',
        a: 'Yleensä kyllä, koska sama alue käydään läpi tiheämmin ja arpikudos on herkempää. Varaa siihen pidempi aika ja odota useampaa istuntoa.',
      },
    ],
    productsTitle: 'Mikä auttaa istunnon jälkeen',
    productsIntro:
      'Kipuun ei tarvita tuotteita, mutta arkuuteen ja kuivumiseen tarvitaan. Nämä ovat samat perusasiat kuin jälkihoidossa — hajusteeton pesu ja ohut rasvakerros.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Hajusteeton pesu heti ensimmäisenä iltana',
        text: 'Arka iho ei kestä hajusteita. Mieto, väriaineeton nestesaippua on ainoa mitä tuoreelle työlle tarvitaan.',
      },
      {
        category: 'aftercare',
        title: 'Hoitovoide arkuuden ajaksi',
        text: 'Ohut kerros pesun jälkeen pitää ihon notkeana ja vähentää kiristävää tunnetta niinä päivinä, jolloin alue on mustelmalla.',
      },
    ],
    relatedTitle: 'Jatka tästä',
    relatedIntro:
      'Kun paikka on valittu, seuraava kysymys on hinta ja sen jälkeen jälkihoito. Molemmat vaikuttavat siihen, miltä työ näyttää vuoden päästä.',
    upcomingTitle: 'Tulossa',
    ctaTitle: 'Valmis varaamaan?',
    ctaText:
      'Selaa Suomen tatuoijia kaupungin tai tyylin mukaan ja kysy tekijältä arvio sekä ajasta että tuntemuksesta juuri siinä paikassa.',
    ctaLabel: 'Selaa tatuoijia',
    disclaimer:
      'Tämä opas on yleistä tietoa, ei lääketieteellistä neuvontaa. Älä muuta omaa lääkitystäsi tatuointia varten, ja jos alue tulehtuu tai kipu kasvaa parantumisen aikana, ota yhteyttä terveydenhuoltoon.',
  },
  sv: {
    metaTitle: 'Hur ont gör en tatuering? | Tatuoijat.fi',
    metaDescription:
      'Var gör en tatuering minst ont och var mest? Smärtan per kroppsdel, hur det faktiskt känns, hur länge det ömmar efteråt och var du bör placera din första tatuering.',
    eyebrow: 'Guide',
    h1: 'Hur ont gör en tatuering?',
    answer:
      'En tatuering gör ont, men sällan så ont som man befarar i förväg. Känslan ligger närmare en långdragen rispa eller solbränna än ett stick. Minst ont gör det där det finns muskel och fett — överarm, lår, vad. Mest gör det där benet ligger nära huden: revben, fotled, fotrygg, armbåge och knäveck.',
    intro: [
      'Smärtan är den fråga som hindrar flest från att boka tid, och samtidigt den det är svårast att få ett rakt svar på. Någon berättar att hen somnade under sessionen, någon annan beskriver samma ställe som outhärdligt. Båda talar sanning: smärttröskeln är personlig, och ovanpå den kommer placering, sessionens längd, teknik och hur du sovit och ätit den morgonen.',
      'Den här guiden lovar inte att det inte gör ont. Den beskriver vad som varierar och hur mycket, så att du kan välja din första placering klokt och veta vad du har att vänta. Fråga alltid din egen tatuerare om en närmare bedömning — hen känner sitt handlag och just det stället.',
    ],
    sections: [
      {
        id: 'milta-tuntuu',
        title: 'Hur känns en tatuering?',
        lead: 'De flesta beskriver det som en het rispa som upprepas. Inte enskilda stick, utan ett jämnt skavande på samma yta.',
        paragraphs: [
          'Nålen rör sig hundratals gånger i sekunden och når hudens andra lager, läderhuden. Det är inte samma sak som en spruta: nålen går inte djupt utan tätt, och därför är känslan ytlig men oavbruten. Många jämför den med en kattrispa eller med färsk solbränna som gnuggas.',
          'De första minuterna känns oftast värst, eftersom kroppen ännu inte vet vad som kommer. Sedan lägger sig en rytm hos de flesta, och runt halvtimmen känns smärtan trubbigare. I en lång session vänder det igen: efter 3–4 timmar börjar samma yta ömma på nytt när huden svullnat och nervändarna blivit irriterade.',
        ],
        bullets: [
          'Konturer känns skarpare än skuggning — tunn nål, exakt linje, ofta i ett drag.',
          'Skuggning och fyllning är trubbigare men hetare, och pågår längre på samma yta.',
          'Att packa färg i samma parti igen är det moment de flesta minns efteråt.',
          'Över ben vibrerar känslan inåt. Det är en annan sorts smärta än på mjuk yta, inte bara starkare.',
        ],
      },
      {
        id: 'mihin-sattuu-vahiten',
        title: 'Var gör en tatuering minst ont?',
        lead: 'Där det finns muskel eller fett under huden och nervändarna sitter glest. Yttre överarmen är en klassisk första placering av goda skäl.',
        table: {
          columns: ['Placering', 'Smärta', 'Varför'],
          rows: [
            ['Yttre överarm', 'Mild', 'Muskel under, få nervändar, tjock hud.'],
            ['Yttre lår', 'Mild', 'Kroppens tjockaste mjukdelslager.'],
            ['Vad', 'Mild–måttlig', 'Muskulöst, men baksidan ömmar mer.'],
            ['Underarm, yttersidan', 'Mild–måttlig', 'Populär första placering, väl tolererad.'],
            ['Axel och över skulderbladet', 'Måttlig', 'Vid skulderbladets kant kommer benet nära.'],
            ['Rygg, ytterkanterna', 'Måttlig', 'Bredvid ryggraden går bra, ovanpå inte.'],
          ],
          note: 'Tabellen beskriver vad tatuerare oftast hör av kunder. Din egen upplevelse kan avvika åt båda hållen.',
        },
      },
      {
        id: 'mihin-sattuu-eniten',
        title: 'Var gör en tatuering mest ont?',
        lead: 'Över ben, på tunn hud och där nervändarna sitter tätt. På de ställena känns även en kort session lång.',
        table: {
          columns: ['Placering', 'Smärta', 'Varför'],
          rows: [
            ['Revben', 'Kraftig', 'Tunn hud direkt över ben, och andningen rör ytan hela tiden.'],
            ['Fotled och fotrygg', 'Kraftig', 'Ben i ytan, tätt med nervändar.'],
            ['Armbåge och knäveck', 'Kraftig', 'Tunn, töjbar hud med ben eller senor strax under.'],
            ['Händer och fingrar', 'Kraftig', 'Mycket nervändar, tunn hud, och snabbt slitage.'],
            ['Hals och strupe', 'Kraftig', 'Tunn hud, ingen stötdämpning, reflexmässig spänning.'],
            ['Nyckelben', 'Kraftig', 'Benet ligger praktiskt taget i ytan.'],
            ['Huvud och området vid örat', 'Kraftig', 'Ljudet och vibrationen i skallen gör det till en egen upplevelse.'],
          ],
        },
        callout: {
          title: 'Din första tatuering hör inte hemma på de här ställena',
          text: 'Inte för att smärtan vore outhärdlig, utan för att du under din första session ännu inte vet hur din kropp reagerar. Revben eller fotrygg först är en onödig risk för ett avbrutet jobb — och en halvfärdig tatuering är ett sämre resultat än samma motiv på ett annat ställe.',
        },
      },
      {
        id: 'mika-vaikuttaa',
        title: 'Vad påverkar smärtan förutom placeringen?',
        lead: 'Placeringen är den enskilt största faktorn, men inte den enda. En del av det här styr du själv redan kvällen innan.',
        steps: [
          {
            title: 'Sov och ät',
            text: 'En genomvakad natt och tom mage sänker smärttröskeln mätbart. Ät ett riktigt mål 1–2 timmar innan och ta med vatten.',
          },
          {
            title: 'Hoppa över alkoholen',
            text: 'Alkohol förtunnar blodet, ökar blödningen och försämrar hur färgen sätter sig. Många studior tatuerar inte den som är bakfull eller påverkad.',
          },
          {
            title: 'Boka en kortare första session',
            text: 'Två timmar är en annan upplevelse än sex. Ett stort jobb bör delas upp, och tatueraren kan föreslå ett naturligt avbrott.',
          },
          {
            title: 'Andas ut, håll inte andan',
            text: 'Hållen andning spänner muskeln under nålen och gör känslan skarpare. Jämn utandning är den enda tekniken som fungerar för alla.',
          },
          {
            title: 'Säg till när du behöver paus',
            text: 'En paus förstör inte jobbet och förolämpar inte tatueraren. Den är en normal del av en lång session, och hen tar hellre paus än tatuerar på hud som rör sig.',
          },
        ],
        paragraphs: [
          'Fråga studion om bedövningskräm innan du köper något. Den ändrar hudens struktur under arbetet och kan påverka hur färgen sätter sig, så en del tatuerare använder den inte alls. Det är ett yrkesmässigt beslut, inte en smaksak.',
          'Om du regelbundet använder blodförtunnande värktabletter, som ibuprofen eller acetylsalicylsyra, tala med läkare. Ändra aldrig din egen medicinering för en tatuerings skull.',
        ],
      },
      {
        id: 'kuinka-kauan-kipea',
        title: 'Hur länge ömmar en tatuering efteråt?',
        lead: 'Den egentliga smärtan slutar med sessionen. Därefter ömmar ytan som ett blåmärke i ungefär 2–4 dygn.',
        table: {
          columns: ['Tid', 'Känns', 'Normalt'],
          rows: [
            ['Första timmarna', 'Het, brännande, som solbränna.', 'Ja.'],
            ['1–3 dygn', 'Öm och svullen, gör ont vid beröring.', 'Ja.'],
            ['3–7 dygn', 'Klådan börjar, ömheten avtar.', 'Ja — klia inte.'],
            ['1–2 veckor', 'Fjällning, ingen smärta längre.', 'Ja.'],
            ['Över 2 veckor', 'Växande smärta, värmekänsla eller var.', 'Nej. Kontakta vården.'],
          ],
        },
        paragraphs: [
          'Vid en led eller ett veck varar ömheten längre av det enkla skälet att ytan rör sig vid varje steg. Fotrygg och fotled är värst här: skon skaver precis där huden borde få vara i fred.',
        ],
      },
      {
        id: 'mihin-eka',
        title: 'Var bör du placera din första tatuering?',
        lead: 'På ett ställe som är uthärdligt, läker lätt och går att täcka — i den ordningen.',
        bullets: [
          'Yttre överarm eller underarmens yttersida: mild smärta, lätt att sköta, skaver inte mot kläder.',
          'Yttre lår eller vad: samma fördel, och lätt att hålla undan solen med byxor på sommaren.',
          'Över skulderbladet: uthärdligt och lätt att täcka, men insmörjningen kräver hjälp av någon annan.',
          'Undvik händer, fingrar, fötter, revben och hals första gången. De är både de smärtsammaste och de svåraste att läka.',
        ],
        paragraphs: [
          'Tänk också på storleken. En liten första tatuering låter som ett försiktigt val, men ett mycket litet och tätt motiv kräver tunna linjer som flyter ut med åren. Fråga tatueraren vilken minsta storlek som fungerar för just den idén — svaret är ofta något större än du tänkt, och det är värt pengarna.',
        ],
      },
    ],
    faqTitle: 'Vanliga frågor om smärtan',
    faq: [
      {
        q: 'Gör en tatuering mer ont än en piercing?',
        a: 'En piercing är skarpare i stunden men över på sekunder. En tatuering är en mildare känsla som pågår i timmar. De flesta tycker piercingen är värre som enskilt ögonblick och tatueringen tyngre som helhet.',
      },
      {
        q: 'Gör färg mer ont än svart?',
        a: 'Inte på grund av färgämnet. Färgytor kräver dock ofta flera lager på samma ställe, och den upprepningen känns — inte färgen i sig.',
      },
      {
        q: 'Kan man tatuera sig under mens?',
        a: 'Ja. En del upplever att smärttröskeln är lägre då, så om tiden går att flytta och placeringen är smärtsam kan det bli bekvämare att skjuta upp. Det är inget hinder.',
      },
      {
        q: 'Kan man be tatueraren sluta mitt i?',
        a: 'Ja, när som helst. Tatueraren avslutar det parti som är påbörjat och resten bokas om. Ett avbrott förstör inte jobbet.',
      },
      {
        q: 'Hjälper bedövningskräm?',
        a: 'Den dämpar känseln, men ändrar också hudens struktur under arbetet och kan påverka hur färgen sätter sig. Fråga alltid tatueraren innan du skaffar någon — en del tatuerar inte på bedövad hud.',
      },
      {
        q: 'Gör en cover-up mer ont?',
        a: 'Oftast ja, eftersom samma yta bearbetas tätare och ärrvävnad är känsligare. Räkna med längre tid och flera sessioner.',
      },
    ],
    productsTitle: 'Vad som hjälper efter sessionen',
    productsIntro:
      'Smärtan kräver inga produkter, men ömheten och uttorkningen gör det. Det är samma grunder som i eftervården — parfymfri tvätt och ett tunt lager salva.',
    productCategories: [
      {
        category: 'cleansing',
        title: 'Parfymfri tvätt redan första kvällen',
        text: 'Öm hud tål inte parfym. En mild, färgämnesfri flytande tvål är allt ett färskt jobb behöver.',
      },
      {
        category: 'aftercare',
        title: 'Salva under de ömma dygnen',
        text: 'Ett tunt lager efter tvätt håller huden mjuk och minskar spänningskänslan de dagar då ytan känns som ett blåmärke.',
      },
    ],
    relatedTitle: 'Fortsätt här',
    relatedIntro:
      'När placeringen är vald är nästa fråga priset, och därefter eftervården. Båda påverkar hur jobbet ser ut om ett år.',
    upcomingTitle: 'På gång',
    ctaTitle: 'Redo att boka?',
    ctaText:
      'Bläddra bland Finlands tatuerare efter stad eller stil och be om en bedömning av både tidsåtgång och känsla för just den placeringen.',
    ctaLabel: 'Bläddra bland tatuerare',
    disclaimer:
      'Den här guiden är allmän information, inte medicinsk rådgivning. Ändra aldrig din egen medicinering för en tatuerings skull, och kontakta vården om området blir infekterat eller smärtan ökar under läkningen.',
  },
};

export const tatuoinninKipuCard: GuideCardByLocale = {
  fi: {
    title: 'Kuinka paljon tatuointi sattuu?',
    summary:
      'Kipu kehonosittain, miltä neula oikeasti tuntuu, mikä vaikuttaa kipukynnykseen ja mihin kannattaa ottaa ensimmäinen tatuointi.',
  },
  sv: {
    title: 'Hur ont gör en tatuering?',
    summary:
      'Smärtan per kroppsdel, hur nålen faktiskt känns, vad som påverkar smärttröskeln och var du bör placera din första tatuering.',
  },
};
