import type { Locale } from '../i18n/ui';

/**
 * Prisguiden /hinnat — SEO-magneten ("Mitä tatuointi maksaa?").
 * Riktig, hjälpsam long-form; FAQ:n matas även in i FAQPage-schemat.
 * Prisspannen är generella riktvärden för Finland — uppdatera vid behov.
 */
export interface HinnatContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  tableTitle: string;
  tableColumns: [string, string, string];
  rows: { label: string; size: string; price: string }[];
  tableNote: string;
  factorsTitle: string;
  factors: { title: string; text: string }[];
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
}

export const hinnat: Record<Locale, HinnatContent> = {
  fi: {
    // "tatuoinnin hinta" är primärtermen (handoff §2); "hintaesimerkit"
    // täcker autocomplete-frasen "tatuointi hinta esimerkki". 53 tecken.
    metaTitle: 'Tatuoinnin hinta 2026 — hintaesimerkit | Tatuoijat.fi',
    metaDescription:
      'Tatuoinnin hinta Suomessa: pienet työt 100–200 €, tuntiveloitus 100–180 €/h, hihat 1 500 €:sta ylöspäin. Katso hintataulukko ja mihin hinta perustuu.',
    eyebrow: 'Hintaopas',
    h1: 'Mitä tatuointi maksaa?',
    intro: [
      'Tatuoinnin hinta muodostuu ennen kaikkea työhön kuluvasta ajasta: koko, yksityiskohtien määrä ja sijoituspaikka ratkaisevat. Suomessa tuntiveloitus on tyypillisesti 100–180 €, ja lähes jokaisella studiolla on minimiveloitus — usein 80–150 € — joka kattaa valmistelun, steriilit tarvikkeet ja suunnittelun.',
      'Alla olevat hinnat ovat suuntaa-antavia keskiarvoja. Tarkan hinnan saat aina artistilta itseltään: lähetä idea, koko senttimetreinä ja toivottu sijoituspaikka, niin saat arvion. Hyvä artisti kertoo hinnoittelunsa avoimesti ennen ajanvarausta.',
    ],
    tableTitle: 'Hintataulukko: suuntaa-antavat hinnat Suomessa',
    tableColumns: ['Työn koko', 'Esimerkki', 'Hinta-arvio'],
    rows: [
      { label: 'Pieni', size: '3–8 cm', price: '100–200 €' },
      { label: 'Keskikokoinen', size: '10–15 cm', price: '200–450 €' },
      { label: 'Iso yksittäinen työ', size: '15–25 cm', price: '450–900 €' },
      { label: 'Puolihiha', size: 'kyynärpäästä ylös', price: '600–1 500 €' },
      { label: 'Kokohiha', size: 'koko käsivarsi', price: '1 500–3 500 €' },
      { label: 'Selkä / iso kokonaisuus', size: 'useita istuntoja', price: '2 000–6 000 €' },
    ],
    tableNote:
      'Hinnat vaihtelevat kaupungin, artistin kokemuksen ja tyylin mukaan. Realismi ja japanilainen vievät tyypillisesti enemmän aikaa kuin yksinkertainen fineline — ja aika on hinnan suurin tekijä.',
    factorsTitle: 'Mistä hinta muodostuu?',
    factors: [
      {
        title: 'Koko ja yksityiskohdat',
        text: 'Isompi ja yksityiskohtaisempi työ vie enemmän tunteja. Varjostukset, väritys ja pienet detaljit kasvattavat aikaa nopeammin kuin pelkkä ääriviiva.',
      },
      {
        title: 'Tyyli',
        text: 'Realismi, japanilainen ja isot blackwork-pinnat ovat hitaita tekniikoita. Yksinkertainen fineline- tai traditional-työ valmistuu usein yhdessä istunnossa.',
      },
      {
        title: 'Sijoituspaikka',
        text: 'Kylkiluut, kaula, kädet ja jalkaterät ovat vaativampia — iho käyttäytyy eri tavalla ja työskentely on hitaampaa, mikä näkyy hinnassa.',
      },
      {
        title: 'Artistin kokemus',
        text: 'Kysytyn artistin tuntihinta on korkeampi, mutta kokemus näkyy jäljessä ja kestävyydessä. Tatuointi on pysyvä — portfolio kertoo enemmän kuin hinta.',
      },
      {
        title: 'Kaupunki',
        text: 'Helsingissä hinnat ovat keskimäärin korkeimmat. Pienemmissä kaupungeissa tuntiveloitus voi olla 20–40 € matalampi samalla laatutasolla.',
      },
      {
        title: 'Istuntojen määrä',
        text: 'Isot kokonaisuudet tehdään useassa istunnossa, ja monet artistit hinnoittelevat ne päivä- tai istuntokohtaisesti (esim. 500–900 €/päivä).',
      },
    ],
    faqTitle: 'Usein kysyttyä hinnoista',
    faq: [
      {
        q: 'Mikä on tatuoinnin minimihinta?',
        a: 'Useimmilla suomalaisilla studioilla minimiveloitus on 80–150 €. Se kattaa steriilit tarvikkeet, valmistelun ja suunnittelutyön — siksi pienikin tatuointi maksaa vähintään tämän verran.',
      },
      {
        q: 'Paljonko pieni tatuointi maksaa?',
        a: 'Pieni, yksinkertainen tatuointi (3–8 cm) maksaa Suomessa tyypillisesti 100–200 €. Hintaan vaikuttavat yksityiskohtien määrä ja sijoituspaikka.',
      },
      {
        q: 'Maksetaanko varausmaksu etukäteen?',
        a: 'Kyllä, lähes aina. Varausmaksu on tyypillisesti 50–150 € ja se vähennetään lopullisesta hinnasta. Se sitoo ajan ja korvaa artistin suunnittelutyön, jos aika perutaan myöhään.',
      },
      {
        q: 'Voiko hinnasta neuvotella?',
        a: 'Hinnasta tinkiminen ei kuulu alan tapoihin — hinta perustuu työaikaan ja ammattitaitoon. Budjetin voi silti kertoa avoimesti: artisti voi ehdottaa kokoa tai toteutusta, joka sopii siihen.',
      },
      {
        q: 'Mitä jälkihoito maksaa?',
        a: 'Jälkihoitotuotteet (rasva, suojakalvo) maksavat noin 10–30 €. Monet studiot antavat ensipakkauksen mukaan. Hyvä jälkihoito suojaa sijoitustasi — huonosti hoidettu tatuointi voi vaatia maksullisen korjauksen.',
      },
      {
        q: 'Miksi sama idea maksaa eri artisteilla eri verran?',
        a: 'Tuntihinta, työnopeus ja tekniikka vaihtelevat. Kokeneempi artisti voi olla nopeampi mutta kalliimpi tunnilta — ja tyylierikoistuminen vaikuttaa siihen, kuinka monta istuntoa työ vaatii.',
      },
    ],
    ctaTitle: 'Valmis etsimään tekijää?',
    ctaText:
      'Selaa portfolioita kaupungin tai tyylin mukaan ja pyydä hinta-arvio suoraan artistilta.',
    ctaLabel: 'Näytä tatuoijat',
  },
  sv: {
    metaTitle: 'Vad kostar en tatuering? Priser 2026 | Tatuoijat.fi',
    metaDescription:
      'Tatueringspriser i Finland: små motiv 100–200 €, timdebitering 100–180 €/h, sleeves från 1 500 €. Se pristabellen och vad som avgör priset.',
    eyebrow: 'Prisguide',
    h1: 'Vad kostar en tatuering?',
    intro: [
      'Priset på en tatuering styrs framför allt av arbetstiden: storlek, detaljnivå och placering avgör. I Finland ligger timdebiteringen typiskt på 100–180 €, och nästan alla studios har en minimidebitering — ofta 80–150 € — som täcker förberedelser, sterila tillbehör och designarbetet.',
      'Priserna nedan är riktvärden. Det exakta priset får du alltid av artisten själv: skicka din idé, storlek i centimeter och önskad placering så får du en uppskattning. En seriös artist berättar öppet om sin prissättning före bokningen.',
    ],
    tableTitle: 'Pristabell: riktpriser i Finland',
    tableColumns: ['Storlek', 'Exempel', 'Prisuppskattning'],
    rows: [
      { label: 'Liten', size: '3–8 cm', price: '100–200 €' },
      { label: 'Mellanstor', size: '10–15 cm', price: '200–450 €' },
      { label: 'Stort enskilt motiv', size: '15–25 cm', price: '450–900 €' },
      { label: 'Halv sleeve', size: 'från armbågen och upp', price: '600–1 500 €' },
      { label: 'Hel sleeve', size: 'hela armen', price: '1 500–3 500 €' },
      { label: 'Rygg / stor helhet', size: 'flera sittningar', price: '2 000–6 000 €' },
    ],
    tableNote:
      'Priserna varierar med stad, artistens erfarenhet och stil. Realism och japanskt tar typiskt längre tid än enkel fineline — och tiden är prisets största faktor.',
    factorsTitle: 'Vad avgör priset?',
    factors: [
      {
        title: 'Storlek och detaljer',
        text: 'Ett större och mer detaljerat motiv tar fler timmar. Skuggningar, färgläggning och små detaljer ökar tiden snabbare än enbart konturlinjer.',
      },
      {
        title: 'Stil',
        text: 'Realism, japanskt och stora blackwork-ytor är långsamma tekniker. Ett enkelt fineline- eller traditional-motiv blir ofta klart på en sittning.',
      },
      {
        title: 'Placering',
        text: 'Revben, hals, händer och fötter är mer krävande — huden beter sig annorlunda och arbetet går långsammare, vilket syns i priset.',
      },
      {
        title: 'Artistens erfarenhet',
        text: 'En efterfrågad artist tar mer per timme, men erfarenheten syns i resultatet och hållbarheten. En tatuering är permanent — portfolion säger mer än priset.',
      },
      {
        title: 'Stad',
        text: 'I Helsingfors är priserna i snitt högst. I mindre städer kan timdebiteringen vara 20–40 € lägre med samma kvalitetsnivå.',
      },
      {
        title: 'Antal sittningar',
        text: 'Stora helheter görs i flera sittningar, och många artister prissätter dem per dag eller sittning (t.ex. 500–900 €/dag).',
      },
    ],
    faqTitle: 'Vanliga frågor om priser',
    faq: [
      {
        q: 'Vad är minimipriset för en tatuering?',
        a: 'De flesta finländska studios har en minimidebitering på 80–150 €. Den täcker sterila tillbehör, förberedelser och designarbete — därför kostar även en liten tatuering minst så mycket.',
      },
      {
        q: 'Vad kostar en liten tatuering?',
        a: 'En liten, enkel tatuering (3–8 cm) kostar i Finland typiskt 100–200 €. Detaljnivå och placering påverkar priset.',
      },
      {
        q: 'Betalar man bokningsavgift i förskott?',
        a: 'Ja, nästan alltid. Bokningsavgiften är typiskt 50–150 € och dras av från slutpriset. Den reserverar tiden och ersätter artistens designarbete vid sen avbokning.',
      },
      {
        q: 'Kan man pruta på priset?',
        a: 'Att pruta hör inte till branschens kutym — priset baseras på arbetstid och yrkesskicklighet. Du kan ändå berätta din budget öppet: artisten kan föreslå en storlek eller ett utförande som passar den.',
      },
      {
        q: 'Vad kostar eftervården?',
        a: 'Eftervårdsprodukter (salva, skyddsfilm) kostar cirka 10–30 €. Många studios skickar med ett startpaket. God eftervård skyddar din investering — en illa skött tatuering kan kräva en betald korrigering.',
      },
      {
        q: 'Varför kostar samma idé olika hos olika artister?',
        a: 'Timpris, arbetstempo och teknik varierar. En mer erfaren artist kan vara snabbare men dyrare per timme — och stilspecialisering påverkar hur många sittningar arbetet kräver.',
      },
    ],
    ctaTitle: 'Redo att hitta din artist?',
    ctaText: 'Bläddra bland portfolios per stad eller stil och be om en prisuppskattning direkt av artisten.',
    ctaLabel: 'Visa tatuerare',
  },
};
