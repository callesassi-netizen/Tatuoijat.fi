import type { GuideCardByLocale, GuideContentByLocale } from './types';

/**
 * Opas: tatuointi ja aurinko (/oppaat/tatuointi-ja-aurinko/,
 * sv /sv/guider/tatuering-och-sol/).
 *
 * Täckta söktermer: tatuointi ja aurinko, tatuointi aurinkorasva, milloin
 * tatuoinnin kanssa aurinkoon, tatuointi solarium, tatuoinnin haalistuminen.
 *
 * VARFÖR EGEN SIDA och inte ett stycke i jälkihoito-guiden: söket delar sig i
 * två helt olika situationer med olika svar — de FÖRSTA veckorna (då svaret är
 * "inte alls") och RESTEN AV LIVET (då svaret är "SPF 50, varannan timme").
 * En sida som ska svara på båda blir otydlig i båda. Jälkihoito-guiden nämner
 * bara de första veckorna och länkar hit.
 *
 * SPF är också guidens affiliate-tyngdpunkt: solskydd säljs varje sommar i
 * åratal, medan eftervårdssalvan säljs en gång per tatuering.
 */
export const tatuointiJaAurinko: GuideContentByLocale = {
  fi: {
    metaTitle: 'Tatuointi ja aurinko — milloin ja miten suojaat | Tatuoijat.fi',
    metaDescription:
      'Tatuointi ja aurinko: milloin tuoreen tatuoinnin voi viedä aurinkoon, miksi UV haalistaa mustetta ja millainen aurinkosuoja tatuoinnille kannattaa valita.',
    eyebrow: 'Opas',
    h1: 'Tatuointi ja aurinko',
    answer:
      'Tuoretta tatuointia ei viedä aurinkoon lainkaan ennen kuin iho on kokonaan kuoriutunut, tyypillisesti 2–4 viikkoa. Sen jälkeen tatuointi kestää aurinkoa, mutta UV-säteily haalistaa mustetta pysyvästi. Käytä SPF 50 -aurinkosuojaa aina kun tatuointi on paljaana auringossa, ja levitä uudelleen kahden tunnin välein.',
    intro: [
      'Aurinko on tatuoinnin pahin yksittäinen vihollinen pitkällä aikavälillä. Se ei tee vahinkoa kerralla vaan hitaasti: viiva pehmenee, musta muuttuu harmaansiniseksi ja värit vaalenevat kesä kesältä. Ero kymmenen vuotta suojatun ja suojaamattoman tatuoinnin välillä on niin selvä, että sen näkee ilman vertailukuvaa.',
      'Ensimmäiset viikot ovat oma tarinansa. Silloin kysymys ei ole haalistumisesta vaan siitä, että paraneva iho palaa poikkeuksellisen helposti — ja palanut tuore tatuointi tarkoittaa rakkuloita, väripuutoksia ja pahimmillaan korjausistuntoa.',
    ],
    sections: [
      {
        id: 'milloin-aurinkoon',
        title: 'Milloin tuoreen tatuoinnin voi viedä aurinkoon?',
        lead: 'Kun iho on kokonaan kuoriutunut eikä pinnalla ole rupia, kuivia hilseitä tai kiiltäviä kohtia. Käytännössä 2–4 viikkoa, isoissa töissä pidempään.',
        paragraphs: [
          'Paraneva iho on ohuempaa ja pigmentiltään puutteellista, joten se palaa nopeammin kuin ympäröivä iho. Palaminen tuoreen tatuoinnin päällä ei ole vain kivuliasta: rakkulointi voi viedä mustetta mukanaan ja jättää laikkuja, jotka näkyvät lopputuloksessa pysyvästi.',
          'Aurinkorasvaa ei laiteta tuoreen tatuoinnin päälle. Se on kosmetiikkaa avoimella haavalla, ja sekä kemialliset että mineraaliset suodattimet ärsyttävät parantuvaa ihoa. Oikea ratkaisu ensimmäisinä viikkoina on peittää tatuointi väljällä vaatteella tai olla varjossa.',
        ],
        bullets: [
          'Viikot 1–2: ei aurinkoa, ei aurinkorasvaa. Peitä väljällä vaatteella.',
          'Viikot 2–4: kuoriutuminen loppuu. Kun pinta on tasainen ja mattapintainen, aurinkosuoja voidaan ottaa käyttöön.',
          'Ensimmäinen kesä: suojaa erityisen huolella. Musteen asettuminen jatkuu vielä pinnan alla kuukausia.',
        ],
      },
      {
        id: 'miksi-haalistuu',
        title: 'Miksi aurinko haalistaa tatuointia?',
        lead: 'UV-säteily hajottaa musteen pigmenttihiukkasia ja aktivoi immuunisoluja, jotka kuljettavat pieniä hiukkasia pois ihosta.',
        paragraphs: [
          'Tatuointimuste ei ole ihon sisällä pysyvästi paikallaan sen takia, että se olisi kemiallisesti muuttumaton. Se pysyy, koska hiukkaset ovat liian isoja imusolujen kuljetettaviksi. UV-säteily pilkkoo hiukkasia pienemmiksi, ja pienemmät lähtevät liikkeelle. Siksi haalistuminen on peruuttamatonta: mustetta on yksinkertaisesti vähemmän jäljellä.',
          'Samalla UV vaurioittaa ihon kollageenia. Löystynyt iho saa viivat leviämään ja terävän työn näyttämään sumealta, vaikka väriä olisikin vielä tallella. Tämä on syy siihen, että vanha tatuointi voi näyttää haalistuneelta myös kohdissa, joissa musteen määrä ei ole muuttunut.',
        ],
      },
      {
        id: 'aurinkosuoja',
        title: 'Millainen aurinkosuoja tatuoinnille kannattaa valita?',
        lead: 'SPF 50, laaja suoja (UVA + UVB), hajusteeton ja riittävän paksuna kerroksena. Merkillä ei ole väliä, määrällä on.',
        bullets: [
          'SPF 50 eikä 15 tai 30. Ero näkyy vuosien mittaan, ja tatuointi on pysyvä investointi.',
          'UVA-merkintä ympyrässä. UVB polttaa, UVA vanhentaa ihoa ja haalistaa mustetta syvemmältä.',
          'Hajusteeton. Ei siksi että tatuointi olisi herkempi, vaan koska hajuste on turha ärsyke isolla ihoalueella joka kesä.',
          'Mineraalinen (sinkkioksidi, titaanidioksidi) tai kemiallinen — molemmat toimivat. Mineraalinen jättää valkoisen kalvon, joka tummalla iholla ja tummalla tatuoinnilla näkyy.',
          'Riittävä määrä: noin teelusikallinen käsivarren mittaiselle alueelle. Suurin osa levittää liian ohuelti, jolloin todellinen suojakerroin on murto-osa luvatusta.',
        ],
        callout: {
          title: 'Kahden tunnin sääntö',
          text: 'Aurinkosuoja kuluu pois hikoillessa, uidessa ja pyyhkiessä. Uudelleenlevitys kahden tunnin välein on tärkeämpää kuin se, mikä kerroin purkissa lukee. Yksi kerros aamulla ei suojaa iltapäivällä.',
          tone: 'note',
        },
      },
      {
        id: 'varit',
        title: 'Mitkä värit haalistuvat nopeimmin?',
        lead: 'Vaaleat ja lämpimät sävyt kärsivät eniten. Musta ja tummansininen kestävät parhaiten.',
        table: {
          columns: ['Väri', 'UV-kestävyys', 'Mitä käytännössä tapahtuu'],
          rows: [
            ['Musta ja harmaasävyt', 'Paras', 'Tummuus säilyy, mutta viiva pehmenee ihon vanhetessa'],
            ['Tummansininen, tummanvihreä', 'Hyvä', 'Sävy haalenee hitaasti kohti harmaata'],
            ['Punainen', 'Kohtalainen', 'Kirkkaus katoaa ensin, sävy muuttuu ruskehtavaksi'],
            ['Keltainen ja oranssi', 'Heikko', 'Näkyvin haalistuminen, voi kadota lähes kokonaan'],
            ['Valkoinen ja pastellit', 'Heikoin', 'Katoaa ihon omaan sävyyn, kellastuu'],
          ],
          note: 'Kestävyys on suuntaa antava. Musteen valmistaja, ihotyyppi, tatuoinnin syvyys ja tekijän tekniikka vaikuttavat kaikki lopputulokseen.',
        },
        paragraphs: [
          'Käytännön johtopäätös: värikäs tatuointi hyötyy aurinkosuojasta enemmän kuin mustavalkoinen, ja vaaleita sävyjä sisältävä työ hyötyy eniten. Jos tatuoinnissa on keltaista tai valkoista, suojaus on ero näkyvän ja näkymättömän yksityiskohdan välillä muutaman vuoden päästä.',
        ],
      },
      {
        id: 'solarium',
        title: 'Entä solarium ja itseruskettavat?',
        lead: 'Solarium on samaa UV-säteilyä tiivistettynä — tuoreelle tatuoinnille ei lainkaan, parantuneelle sama suojaustarve kuin auringossa.',
        bullets: [
          'Solarium tuoreen tatuoinnin päällä: ei. Sama sääntö kuin auringolla, ja säteilyn teho on korkeampi lyhyemmässä ajassa.',
          'Solarium parantuneella tatuoinnilla: haalistaa aivan kuten aurinko. Peitä tatuointi tai varaudu nopeampaan haalistumiseen.',
          'Itseruskettavat voiteet eivät haalista mustetta, koska ne eivät sisällä UV-säteilyä. Ne kuitenkin värjäävät ihon tatuoinnin ympärillä ja voivat saada työn näyttämään sameammalta, kunnes sävy haalenee.',
          'Itseruskettavaa ei laiteta kuoriutuvan tatuoinnin päälle: se tarttuu epätasaisesti kuiviin kohtiin ja jättää laikkuja.',
        ],
      },
      {
        id: 'rannalla',
        title: 'Mitä rannalla saa tehdä ja milloin?',
        lead: 'Uiminen ja auringonotto ovat kaksi eri asiaa, ja niiden aikarajat ovat lähellä toisiaan mutta eivät samat.',
        table: {
          columns: ['Aika tatuoinnista', 'Aurinko', 'Uiminen'],
          rows: [
            ['0–2 viikkoa', 'Ei lainkaan. Peitä vaatteella.', 'Ei uimista. Suihku käy.'],
            ['2–4 viikkoa', 'Vasta kun kuoriutuminen on ohi, SPF 50.', 'Kun iho on ehjä: meri ja allas varoen.'],
            ['1–3 kuukautta', 'SPF 50 aina, uudelleen 2 h välein.', 'Normaalisti. Huuhtele kloori pois.'],
            ['Pysyvästi', 'SPF 50 aina kun tatuointi on paljaana.', 'Ei rajoituksia.'],
          ],
          note: 'Ajat ovat suomalaisten studioiden yleistä käytäntöä. Iso tai voimakkaasti varjostettu työ paranee hitaammin kuin pieni viivatatuointi — kysy tekijältäsi.',
        },
        callout: {
          title: 'Jos tuore tatuointi palaa',
          text: 'Jäähdytä viileällä vedellä, älä jäällä. Älä puhkaise rakkuloita — ne suojaavat alla olevaa ihoa ja mustetta. Jätä alue rauhaan, käytä hajusteetonta perusvoidetta vasta kun kirvely on ohi, ja ota yhteyttä terveydenhuoltoon jos rakkulointi on laajaa tai iho rikkoutuu.',
          tone: 'warning',
        },
      },
    ],
    faqTitle: 'Usein kysyttyä auringosta',
    faq: [
      {
        q: 'Voiko tuoreen tatuoinnin päälle laittaa aurinkorasvaa?',
        a: 'Ei. Tuore tatuointi on avoin haava, eikä aurinkorasva kuulu haavalle. Ensimmäisinä viikkoina tatuointi peitetään väljällä vaatteella tai pysytään varjossa. Aurinkosuoja otetaan käyttöön vasta kun iho on kokonaan kuoriutunut.',
      },
      {
        q: 'Kuinka kauan tatuoinnin kanssa pitää välttää aurinkoa?',
        a: 'Tyypillisesti 2–4 viikkoa eli siihen asti, kunnes kuoriutuminen on ohi ja pinta on tasainen. Iso tai voimakkaasti varjostettu työ paranee hitaammin. Ensimmäisenä kesänä kannattaa suojata erityisen huolellisesti.',
      },
      {
        q: 'Haalistuuko mustavalkoinen tatuointi auringossa?',
        a: 'Haalistuu, mutta hitaammin kuin värillinen. Musta kestää UV-säteilyä parhaiten kaikista sävyistä. Auringon aiheuttama ihon löystyminen saa silti viivat leviämään, joten mustavalkoinenkin työ hyötyy suojasta.',
      },
      {
        q: 'Riittääkö SPF 30 tatuoinnille?',
        a: 'Suojaa sekin, mutta SPF 50 on parempi valinta pysyvälle työlle. Ero yhtenä päivänä on pieni, mutta se kertautuu kymmenen kesän aikana. Tärkeämpää kuin kerroin on riittävä määrä ja uudelleenlevitys kahden tunnin välein.',
      },
      {
        q: 'Voiko tatuoinnin päälle mennä solariumiin?',
        a: 'Tuoreen tatuoinnin päälle ei. Parantuneelle tatuoinnille solarium haalistaa mustetta samalla tavalla kuin aurinko, tiiviimmässä ajassa. Peitä tatuointi tai hyväksy nopeampi haalistuminen.',
      },
    ],
    productsTitle: 'Mitä katsoa aurinkosuojasta',
    productsIntro:
      'Kriteerit ovat samat kuin missä tahansa hyvässä aurinkosuojassa — tatuointi ei tarvitse erikoistuotetta, se tarvitsee riittävästi suojaa riittävän usein.',
    productCategories: [
      {
        category: 'spf',
        title: 'Aurinkosuoja',
        text: 'SPF 50, UVA-merkintä ympyrässä, hajusteeton. Noin teelusikallinen käsivarren mittaiselle alueelle ja uudelleen kahden tunnin välein. Mineraalinen suodatin jättää valkoisen kalvon, kemiallinen ei.',
      },
      {
        category: 'moisturising',
        title: 'Kosteutus kesällä',
        text: 'Aurinko ja suolavesi kuivattavat. Kuiva iho saa tatuoinnin näyttämään harmaalta ja sameelta — säännöllinen kosteutus pitää värin kirkkaana ilman että mustetta on yhtään enempää.',
      },
      {
        category: 'fragrance-free',
        title: 'Hajusteeton perusvoide',
        text: 'Isolla ihoalueella joka kesä käytettävä tuote kannattaa olla hajusteeton. Se ei ole tatuointikohtainen vaatimus vaan tapa välttää turhia ärsykkeitä.',
      },
    ],
    relatedTitle: 'Jatka tästä',
    relatedIntro:
      'Aurinko on yksi osa tatuoinnin hoitoa. Perusrutiini ja tuotevalinnat käydään läpi omissa oppaissaan.',
    upcomingTitle: 'Tulossa',
    ctaTitle: 'Etsitkö tatuoijaa?',
    ctaText:
      'Selaa Suomen tatuoijia ja studioita kaupungin tai tyylin mukaan. Kysy hoito-ohje aina omalta tekijältäsi.',
    ctaLabel: 'Selaa tatuoijia',
    disclaimer:
      'Tämä opas on yleistä tietoa, ei lääketieteellistä neuvontaa. Jos tatuointi palaa, rakkuloi tai iho rikkoutuu, ota yhteyttä terveydenhuoltoon.',
  },
  sv: {
    metaTitle: 'Tatuering och sol — när och hur du skyddar | Tatuoijat.fi',
    metaDescription:
      'Tatuering och sol: när en ny tatuering tål solen, varför UV bleker bläcket permanent och vilket solskydd som passar en tatuering.',
    eyebrow: 'Guide',
    h1: 'Tatuering och sol',
    answer:
      'En ny tatuering ska inte i solen alls förrän huden fjällat färdigt, typiskt 2–4 veckor. Därefter tål tatueringen sol, men UV-strålning bleker bläcket permanent. Använd SPF 50 varje gång tatueringen är bar i solen, och lägg på nytt varannan timme.',
    intro: [
      'Solen är tatueringens värsta enskilda fiende på lång sikt. Skadan sker inte på en gång utan långsamt: linjen mjuknar, svart går mot gråblått och färgerna bleknar sommar för sommar. Skillnaden mellan en skyddad och en oskyddad tatuering efter tio år är så tydlig att den syns utan jämförelsebild.',
      'De första veckorna är en egen historia. Då handlar det inte om blekning utan om att hud som läker bränns ovanligt lätt — och en bränd ny tatuering betyder blåsor, färgbortfall och i värsta fall en retusch.',
    ],
    sections: [
      {
        id: 'milloin-aurinkoon',
        title: 'När tål en ny tatuering solen?',
        lead: 'När huden fjällat färdigt och det inte finns sårskorpor, torra flagor eller blanka partier kvar. I praktiken 2–4 veckor, längre för stora jobb.',
        paragraphs: [
          'Hud som läker är tunnare och saknar full pigmentering, så den bränns snabbare än omgivande hud. Att bränna sig ovanpå en ny tatuering är inte bara smärtsamt: blåsor kan ta med sig bläck och lämna fläckar som syns permanent i resultatet.',
          'Solskydd läggs inte på en ny tatuering. Det är kosmetika på ett öppet sår, och både kemiska och mineraliska filter irriterar hud som läker. Rätt lösning de första veckorna är att täcka tatueringen med löst sittande kläder eller hålla sig i skuggan.',
        ],
        bullets: [
          'Vecka 1–2: ingen sol, inget solskydd. Täck med löst sittande kläder.',
          'Vecka 2–4: fjällningen upphör. När ytan är jämn och matt kan solskyddet börja användas.',
          'Första sommaren: skydda extra noga. Bläcket sätter sig under ytan i flera månader till.',
        ],
      },
      {
        id: 'miksi-haalistuu',
        title: 'Varför bleker solen en tatuering?',
        lead: 'UV-strålning bryter ner bläckets pigmentpartiklar och aktiverar immunceller som transporterar bort de mindre partiklarna.',
        paragraphs: [
          'Tatueringsbläck stannar inte i huden för att det skulle vara kemiskt oföränderligt. Det stannar för att partiklarna är för stora för att lymfcellerna ska orka flytta dem. UV delar partiklarna i mindre bitar, och de mindre ger sig i väg. Därför är blekningen oåterkallelig: det finns helt enkelt mindre bläck kvar.',
          'Samtidigt skadar UV hudens kollagen. Slappare hud får linjer att flyta ut och ett skarpt jobb att se suddigt ut, även om färgen finns kvar. Det är därför en gammal tatuering kan se blek ut också där bläckmängden inte förändrats.',
        ],
      },
      {
        id: 'aurinkosuoja',
        title: 'Vilket solskydd passar en tatuering?',
        lead: 'SPF 50, brett skydd (UVA + UVB), oparfymerat och i tillräckligt tjockt lager. Märket spelar ingen roll, mängden gör det.',
        bullets: [
          'SPF 50, inte 15 eller 30. Skillnaden syns över åren, och en tatuering är en permanent investering.',
          'UVA-märkning i ring. UVB bränner, UVA åldrar huden och bleker bläcket på djupet.',
          'Oparfymerat. Inte för att tatueringen är känsligare, utan för att parfym är ett onödigt irritationsmoment på en stor hudyta varje sommar.',
          'Mineraliskt (zinkoxid, titandioxid) eller kemiskt — båda fungerar. Mineraliskt lämnar en vit hinna som syns på mörk hud och mörk tatuering.',
          'Tillräcklig mängd: ungefär en tesked för en yta i storlek med en underarm. De flesta lägger på för tunt, och då blir det verkliga skyddet en bråkdel av det utlovade.',
        ],
        callout: {
          title: 'Tvåtimmarsregeln',
          text: 'Solskydd nöts bort av svett, bad och avtorkning. Att lägga på nytt varannan timme är viktigare än vilken faktor som står på flaskan. Ett lager på morgonen skyddar inte på eftermiddagen.',
          tone: 'note',
        },
      },
      {
        id: 'varit',
        title: 'Vilka färger bleknar snabbast?',
        lead: 'Ljusa och varma toner tar mest stryk. Svart och mörkblått håller bäst.',
        table: {
          columns: ['Färg', 'UV-tålighet', 'Vad som händer i praktiken'],
          rows: [
            ['Svart och gråskala', 'Bäst', 'Svärtan består, men linjen mjuknar när huden åldras'],
            ['Mörkblått, mörkgrönt', 'Bra', 'Tonen bleknar långsamt mot grått'],
            ['Rött', 'Måttlig', 'Lystern försvinner först, tonen går mot brunt'],
            ['Gult och orange', 'Svag', 'Tydligast blekning, kan nästan försvinna'],
            ['Vitt och pasteller', 'Svagast', 'Går upp i hudtonen, gulnar'],
          ],
          note: 'Tåligheten är vägledande. Bläcktillverkare, hudtyp, djup och tatuerarens teknik påverkar alla resultatet.',
        },
        paragraphs: [
          'Slutsatsen: en färgstark tatuering vinner mer på solskydd än en svartvit, och ett jobb med ljusa toner vinner mest. Finns det gult eller vitt i tatueringen är skyddet skillnaden mellan en synlig och en osynlig detalj om några år.',
        ],
      },
      {
        id: 'solarium',
        title: 'Hur är det med solarium och brun-utan-sol?',
        lead: 'Solarium är samma UV-strålning i koncentrerad form — inget alls på en ny tatuering, samma skyddsbehov som i solen på en läkt.',
        bullets: [
          'Solarium på en ny tatuering: nej. Samma regel som för solen, och strålningen är starkare på kortare tid.',
          'Solarium på en läkt tatuering: bleker precis som solen. Täck tatueringen eller räkna med snabbare blekning.',
          'Brun-utan-sol bleker inte bläcket, eftersom det inte innehåller UV. Däremot färgar det huden runt tatueringen och kan få jobbet att se suddigare ut tills tonen bleknar.',
          'Brun-utan-sol läggs inte på en tatuering som fjällar: den fastnar ojämnt i torra partier och lämnar fläckar.',
        ],
      },
      {
        id: 'rannalla',
        title: 'Vad går att göra på stranden, och när?',
        lead: 'Bad och solande är två olika saker, och tidsgränserna ligger nära varandra men är inte samma.',
        table: {
          columns: ['Tid sedan tatueringen', 'Sol', 'Bad'],
          rows: [
            ['0–2 veckor', 'Inte alls. Täck med kläder.', 'Inget bad. Dusch går bra.'],
            ['2–4 veckor', 'Först när fjällningen är över, SPF 50.', 'När huden är hel: hav och bassäng försiktigt.'],
            ['1–3 månader', 'SPF 50 alltid, på nytt varannan timme.', 'Som vanligt. Skölj bort klor.'],
            ['Permanent', 'SPF 50 varje gång tatueringen är bar.', 'Inga begränsningar.'],
          ],
          note: 'Tiderna följer finsk studiopraxis. Ett stort eller kraftigt skuggat jobb läker långsammare än en liten linjetatuering — fråga din tatuerare.',
        },
        callout: {
          title: 'Om en ny tatuering bränns',
          text: 'Kyl med svalt vatten, inte is. Punktera inte blåsor — de skyddar huden och bläcket under. Låt området vara, använd oparfymerad baskräm först när svedan lagt sig, och kontakta vården om blåsbildningen är stor eller huden går sönder.',
          tone: 'warning',
        },
      },
    ],
    faqTitle: 'Vanliga frågor om sol',
    faq: [
      {
        q: 'Kan man lägga solskydd på en ny tatuering?',
        a: 'Nej. En ny tatuering är ett öppet sår, och solskydd hör inte hemma på sår. De första veckorna täcker du tatueringen med löst sittande kläder eller håller dig i skuggan. Solskyddet börjar användas först när huden fjällat färdigt.',
      },
      {
        q: 'Hur länge ska man undvika solen?',
        a: 'Typiskt 2–4 veckor, alltså tills fjällningen är över och ytan är jämn. Ett stort eller kraftigt skuggat jobb läker långsammare. Första sommaren är det värt att skydda extra noga.',
      },
      {
        q: 'Bleks en svartvit tatuering av solen?',
        a: 'Ja, men långsammare än en färgad. Svart tål UV bäst av alla toner. Solens uttänjning av huden får ändå linjerna att flyta ut, så även ett svartvitt jobb vinner på skydd.',
      },
      {
        q: 'Räcker SPF 30?',
        a: 'Det skyddar också, men SPF 50 är ett bättre val för något permanent. Skillnaden en enskild dag är liten, men den staplas över tio somrar. Viktigare än faktorn är tillräcklig mängd och påfyllning varannan timme.',
      },
      {
        q: 'Kan man sola solarium med tatuering?',
        a: 'Inte på en ny tatuering. På en läkt bleker solarium bläcket på samma sätt som solen, fast på kortare tid. Täck tatueringen eller acceptera snabbare blekning.',
      },
    ],
    productsTitle: 'Vad du tittar efter i ett solskydd',
    productsIntro:
      'Kriterierna är samma som för vilket bra solskydd som helst — en tatuering behöver ingen specialprodukt, den behöver tillräckligt skydd tillräckligt ofta.',
    productCategories: [
      {
        category: 'spf',
        title: 'Solskydd',
        text: 'SPF 50, UVA-märkning i ring, oparfymerat. Ungefär en tesked för en yta i storlek med en underarm, och på nytt varannan timme. Mineraliskt filter lämnar en vit hinna, kemiskt gör det inte.',
      },
      {
        category: 'moisturising',
        title: 'Återfuktning på sommaren',
        text: 'Sol och saltvatten torkar ut. Torr hud får tatueringen att se grå och suddig ut — regelbunden återfuktning håller färgen klar utan att det finns en droppe mer bläck.',
      },
      {
        category: 'fragrance-free',
        title: 'Oparfymerad baskräm',
        text: 'En produkt som används på en stor hudyta varje sommar är värd att ha oparfymerad. Det är inget tatueringsspecifikt krav, bara ett sätt att slippa onödig irritation.',
      },
    ],
    relatedTitle: 'Fortsätt här',
    relatedIntro:
      'Solen är en del av tatueringsvården. Grundrutinen och produktvalen har egna guider.',
    upcomingTitle: 'På väg',
    ctaTitle: 'Letar du efter en tatuerare?',
    ctaText:
      'Bläddra bland Finlands tatuerare och studior efter stad eller stil. Fråga alltid din egen tatuerare om vårdanvisningen.',
    ctaLabel: 'Bläddra bland tatuerare',
    disclaimer:
      'Den här guiden är allmän information, inte medicinsk rådgivning. Om tatueringen bränns, blåsor bildas eller huden går sönder — kontakta vården.',
  },
};

export const tatuointiJaAurinkoCard: GuideCardByLocale = {
  fi: {
    title: 'Tatuointi ja aurinko',
    summary:
      'Milloin tuoreen tatuoinnin voi viedä aurinkoon, miksi UV haalistaa mustetta ja millainen suoja pitää värin kirkkaana vuosia.',
  },
  sv: {
    title: 'Tatuering och sol',
    summary:
      'När en ny tatuering tål solen, varför UV bleker bläcket och vilket skydd som håller färgen klar i åratal.',
  },
};
