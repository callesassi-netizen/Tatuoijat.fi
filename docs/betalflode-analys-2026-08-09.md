# Betalflödet: analys och förslag

**Datum:** 2026-08-09 · **Status:** beslutsunderlag + delvis implementerat
**Gäller:** /hinnasto → Stripe → /kiitos-pro | /kiitos-premium → intag-formulär → manuell tier-flip
**Föregås av:** `betalflode-och-kiitos.md` (specen), `docs/claude-code-handoff-paket-hinnasto.md` (feature-matrisen)

> Frågan som utlöste analysen: *"Just nu öppnas Stripe när dom klickar på dom planerna
> och efter det tror jag att det kommer ett formulär bara dom skickar in med information.
> Vi kanske måste göra denna delen tydligare? Hur vet dom annars att dom har betalat för något?"*

---

## 1. Kort svar

Farhågan stämmer, och det är värre än "otydligt". Tre saker i det gamla flödet var
**faktiskt fel**, inte bara vaga:

1. Tack-sidan sa **"Kiitos maksusta!"** ("tack för betalningen") till någon vars kort
   inte hade debiterats. Kampanjbadgen lovar 10/30 dagars gratis provperiod — med en
   provperiod tar Stripe **0 €** vid kassan och mejlar "din provperiod har börjat", inte
   ett betalningskvitto. Sidan påstod alltså något som Stripes eget mejl motsade.
2. Tack-sidan sa att **profilen uppdateras inom 48 h** — utan att nämna att ingenting
   alls händer förrän formuläret längre ner är ifyllt. Den som betalade och stängde
   fliken satt och väntade på en uppdatering som aldrig skulle komma.
3. **Efter att formuläret skickats hände ingenting synligt.** Formuläret postade till
   tack-sidan själv, så studion landade på en identisk sida med ett tomt formulär. Det
   är omöjligt att avgöra om inskicket gick igenom eller inte.

Alla tre är åtgärdade i koden (§4). Det som återstår är två beslut och två
dashboard-inställningar som bara du kan göra (§5, §7).

Grundproblemet går inte att trolla bort: **en statisk sajt kan inte veta att någon har
betalat.** Det finns ingen backend, ingen webhook, ingen inloggning. Lösningen är därför
inte att låtsas bekräfta betalningen, utan att vara tydlig med vem som bekräftar vad:
*Stripe* bekräftar betalningen (kvittomejlet), *sajten* bekräftar att uppgifterna kommit
fram, och *du* bekräftar publiceringen. Tre kvitton, tre avsändare, ingen låtsaskoll.

---

## 2. Nuläget — vad koden faktiskt gör

Verifierat i koden, inte antaget. Läget innan denna ändring:

| Steg | Var det bor | Vad som händer |
| --- | --- | --- |
| 1. Priskort | `src/data/pricing.ts` → `STRIPE_LINKS`, `PAYMENTS_LIVE = true` | Pro/Premium-CTA går direkt till Stripe Payment Link i ny flik (`target="_blank"`). Gratis går till `/liity/?taso=perus`. |
| 2. Betalning | Stripe (utanför repot) | Payment Link, årspris 199 / 499 €. Stripe Tax **av**. Kampanjbadge lovar trial 10 pv (Pro) / 30 pv (Premium) — trialen måste vara satt på länken i Stripe, koden kan inte veta om den är det. |
| 3. Redirect | Stripe-dashboarden (inte kod) | Pro → `/kiitos-pro`, Premium → `/kiitos-premium` (sv: `/tack-pro`, `/tack-premium`). |
| 4. Tack-sida | `KiitosPage.astro` + `data/kiitos.ts` | Statisk, `noindex`. Rubrik + checklista per nivå + intag-formulär. **Ingen koppling till den faktiska betalningen** — sidan är en öppen URL. |
| 5. Intag | `IntakeForm.astro` + `data/intakeForm.ts` | ~20 fält + filuppladdning, `multipart/form-data`, Netlify Forms. Postade till tack-sidan själv. Delade formulärnamnet `"liity"` med kontaktformuläret. |
| 6. Publicering | Manuellt | Du sätter `tier:` i studions frontmatter, commit, Netlify bygger om. |

Ingen del av kedjan känner till någon annan del. Det enda som binder ihop en betalning
med en studio är Stripes custom field ("Studion nimi + profiilin URL") och att samma
person råkar fylla i formuläret efteråt.

---

## 3. Var det brister — ur besökarens perspektiv

Rangordnat efter hur mycket det kostar i förlorat förtroende eller förlorad data.

### F1 · Kritisk · "Kiitos maksusta" när ingen betalning skett
Med provperiod debiteras kortet inte vid kassan; Stripe skickar ett mejl om att
provperioden startat och drar pengarna först när den löper ut ([Stripe: free trials]).
Den gamla rubriken var alltså osann för i princip alla som landar där under kampanjen —
och den efterföljande raden *"Jos maksu ei näy meillä 48h"* ("om betalningen inte syns
hos oss inom 48 h") var meningslös, eftersom det inte finns någon betalning att se.
→ **Åtgärdat:** rubriken är nu "Kiitos tilauksestasi!" / "Tack för din beställning!",
som är sann i båda fallen.

### F2 · Kritisk · Sidan lät som att publiceringen sker av sig själv
*"Profiilisi nostetaan kärkeen ja päivitetään 48 tunnin sisällä"* stod **ovanför**
formuläret, utan att formuläret nämndes som ett villkor. En rimlig läsare drar slutsatsen
att betalningen räcker och att formuläret är frivilligt extramaterial.
→ **Åtgärdat:** ny varningsruta ("Profiilisi ei päivity pelkällä maksulla…"), omskriven
ingress, och en stegrad som visar att man står i steg 3 av 4.

### F3 · Kritisk · Inskicket gav ingen kvittering
`<IntakeForm action={path} />` — formuläret postade till den sida det stod på. Netlify
redirectar till `action`, så efter submit fick man tillbaka **samma sida med tomt
formulär**. Ingen bekräftelse, ingen skillnad mot att inte ha skickat. Den mest sannolika
följden är att folk skickar in två eller tre gånger, eller antar att det gick fel och
ger upp.
→ **Åtgärdat:** egen kvittosida `/tiedot-vastaanotettu/` (sv `/uppgifter-mottagna/`).

### F4 · Hög · Netlify-formulärkollisionen
`IntakeForm.astro` och `ContactForm.astro` delade formulärnamnet `"liity"`. Netlify
kopplar fältdefinitionen till namnet, så de två formulärens fält blandas ihop i inkorgen
och inskicken blir svårlästa. Namnet valdes ursprungligen just för att e-postnotisen
hänger per formulärnamn och `"liity"` var det enda verifierat fungerande — ett nytt namn
utan notis betyder **tyst dataförlust**, vilket redan hänt en gång (2026-07-15).
→ **Åtgärdat i kod:** intaget heter nu `studiotiedot`. **Kräver att du sätter upp
notisen först** — se §5. Nödbroms finns (en rad).

### F5 · Hög · 8 MB-taket gör Premium-löftet omöjligt
Netlify avvisar POST-anrop över **8 MB** på CDN-nivå; gränsen går inte att höja med
någon plan ([Netlify: 8 MB form request limit]). Formuläret bad Premium-kunder om
*"laajempi valikoima kuvia — halutessasi mukaan myös video"*. En video sprängde gränsen
direkt, och 4–5 obehandlade mobilbilder gör det ofta också. Resultat: 20 ifyllda fält
raderas av ett rått felsvar.
→ **Åtgärdat:** hjälptext om gränsen, klientvarning som blockerar submit över 7 MB
(marginal för textfälten), `accept` begränsad till bilder, och videolöftet omformulerat
till "kommer vi överens om separat".

### F6 · Hög · Tre olika ledtidslöften på samma sida
"48 tunnin sisällä" (ingressen), "kahden arkipäivän sisällä" (formulärnoten), "48 h"
(specen). Och räknat från vad — betalningen eller formuläret? Med ett manuellt flöde är
48 timmar dessutom ett dåligt löfte över en helg.
→ **Åtgärdat:** ett enda löfte överallt — **två vardagar räknat från att formuläret
skickats**. Ärligare och håller även om någon betalar en fredag kväll.

### F7 · Hög · FAQ:n motsäger kampanjen
FAQ:n sa *"Priset är en årsavgift utan automatisk förnyelse — du får en påminnelse innan
perioden löper ut"*. En gratis provperiod finns bara på **prenumerationer** i Stripe, och
en prenumeration förnyas automatiskt om inget annat är satt. Antingen är FAQ:n fel eller
så finns ingen trial — de kan inte båda stämma.
→ **Delvis åtgärdat:** påståendet är borttaget och ersatt med en formulering som inte
gissar ("de exakta villkoren ser du på Stripes betalsida innan du bekräftar"). **Du måste
kontrollera i Stripe vad som faktiskt gäller** och sedan skriva rätt sak. Se §7.1.

### F8 · Medel · Momsen syns ingenstans
Ordet moms/alv förekom inte en enda gång i hela repot, trots momsregistrering sedan
13/7 2026. Stripe Tax är av, så Payment Link drar **exakt 199 / 499 €** — inget påslag
sker i kassan. En finsk B2B-köpare antar normalt att priser är exkl. moms; det gör de
inte här. Allmän momssats i Finland är 25,5 % ([Vero/alv-kannat 2026]).
→ **Åtgärdat med en flagga, inte ett beslut:** `VAT_INCLUDED` i `src/data/pricing.ts`
styr både prisnoten och FAQ-svaret. Default är `true` = "priset innehåller moms", vilket
är vad som **faktiskt händer** i kassan idag. Vill du i stället sälja exkl. moms måste
Stripe-priset höjas i motsvarande grad — annars lovar sidan ett påslag kassan inte gör.
Se §7.2.

### F9 · Medel · Ingen väg tillbaka till tack-sidan
Stänger man fliken är sidan borta. Ingen länk mejlas, inget konto finns.
→ **Delvis åtgärdat:** ett "Etkö ehdi nyt?"-block ber dem bokmärka sidan och pekar på
kontaktformuläret som reservväg. **Den riktiga lösningen är att du mejlar länken** i
välkomstmejlet (§6.2).

### F10 · Medel · Om formuläret aldrig kommer in upptäcks det aldrig
Ingenting i kedjan larmar om att någon betalat men inte fyllt i. Kan inte lösas statiskt.
→ **Förslag:** (a) samla identiteten redan i Stripe (§6.1) så du åtminstone vet vem det
gäller, (b) lägg en manuell avstämning i rutinen (§6.3).

### F11 · Medel · Sajten kan inte verifiera att någon betalat
`/kiitos-pro/` är en publik URL. Vem som helst kan öppna den och skicka in formuläret och
påstå sig ha köpt Pro. I praktiken låg risk — men **flippa aldrig `tier` enbart på ett
formulärinskick.** Stäm alltid av mot en faktisk Stripe-betalning eller trial-start.
Detta är en process-regel, inte en kodfix.

### F12 · Låg–Medel · Affärsrisken i 30 dagars trial
Premium publiceras direkt, provperioden är 30 dagar och kan sägas upp dag 29. Det är
en gratis månad på startsidan. Rimligt som lanseringsstrategi, men värt att vara medveten
om — och värt att inte förlänga i onödan. Ingen kodändring föreslagen.

### F13 · Låg · Samma "inget händer"-problem finns på /liity och /yhteys
`ContactForm.astro` postar också till sin egen sida. Samma fix (en kvittosida) skulle
fungera där. **Inte gjort nu** — det ligger utanför betalflödet och rör sidor som andra
pågående ändringar kan ha tagit i. Rekommenderas som nästa lilla uppgift.

### F14 · Låg · `astro check` har ett fel sedan tidigare
`src/components/pages/HomePage.astro:430` — `const nudge = (dir) =>`, implicit `any`.
Kom in med pil-navigeringen på stilraden, inte med denna ändring. Bygget går igenom ändå.
Fixas med `(dir: number)`.

---

## 4. Det nya flödet (så det ser ut efter ändringen)

```
/hinnasto
  ├─ tre priskort
  ├─ NYTT: momsnot under korten
  ├─ NYTT: kokeilujakso-not under kampanjbadgen ("kortet debiteras inte under provperioden")
  └─ NYTT: "Näin se etenee" — fyra steg
        1. Valitse taso
        2. Maksa Stripellä          → kvitto per mejl från Stripe
        3. Täytä studiosi tiedot    → utan detta händer ingenting
        4. Julkaisemme profiilisi   → två vardagar från inskicket
        ↓
Stripe Payment Link (oförändrad — inga priser eller länkar rörda)
        ↓
/kiitos-pro | /kiitos-premium   (sv: /tack-pro | /tack-premium)
  ├─ NYTT: bekräftelsekort — Taso · Kuitti (Stripes mejl) · Seuraavaksi
  ├─ NYTT: stegrad, "Olet vaiheessa 3/4"
  ├─ NYTT: varningsruta — betalningen ensam publicerar ingenting
  ├─ checklista per nivå (oförändrad i sak)
  ├─ intag-formulär → NYTT namn `studiotiedot`, storleksspärr 7 MB
  └─ NYTT: "Etkö ehdi nyt?" — bokmärk sidan
        ↓
/tiedot-vastaanotettu   (sv: /uppgifter-mottagna)   ← HELT NY SIDA
  ├─ grön bock + "Tiedot vastaanotettu!"
  ├─ "Mitä tapahtuu seuraavaksi" — fyra punkter med ledtid
  └─ "Om du inte hör från oss inom två vardagar → kontakta oss"
```

### Filer som ändrats

| Fil | Vad |
| --- | --- |
| `src/data/pricing.ts` | `VAT_INCLUDED` + `VAT_RATE_LABEL`, `priceNote`, `trialNote`, `steps` (fi+sv); FAQ: förnyelse-påståendet borttaget, två nya frågor (vad händer efter betalningen / ingår moms) |
| `src/components/pages/HinnastoPage.astro` | Renderar stegsektionen, momsnoten och trial-noten + CSS |
| `src/data/kiitos.ts` | Omskriven: bekräftelsekort, stegrad, varningsruta, "senare"-block, kvittosidans texter. Exporterar `KIITOS_PATHS` och `SUBMITTED_PATHS` |
| `src/components/pages/KiitosPage.astro` | Renderar de nya blocken; formuläret postar till kvittosidan |
| `src/components/IntakeForm.astro` | Formulärnamn `studiotiedot` (en konstant), storleksvarning + submit-spärr, `accept="image/*"` |
| `src/data/intakeForm.ts` | `sizeHint`, `sizeWarning`; videolöftet omformulerat |
| `src/components/pages/LahetettyPage.astro` | **Ny** — kvittosidan |
| `src/pages/tiedot-vastaanotettu/index.astro` | **Ny** — fi-route |
| `src/pages/sv/uppgifter-mottagna/index.astro` | **Ny** — sv-route |
| `astro.config.mjs` | De två nya sidorna undantagna ur sitemap (de är `noindex`) |

Verifierat: `npm ci` + `npx astro build` → 573 sidor, inga fel. `npx astro check` → samma
enda fel som redan fanns (F14). Formulärnamnen i `dist/` är `studiotiedot` (4 sidor) och
`liity` (4 sidor) — inga fler kollisioner.

---

## 5. ⚠️ Innan detta deployas — två saker i Netlify

**5.1 Skapa e-postnotisen för `studiotiedot`.** Netlify kopplar notiser till
formulärnamnet. Det nya namnet har ingen notis. Deployar du utan att skapa den landar
inskicken i Netlifys inkorg men **inget mejl skickas** — precis det som hände 2026-07-15.

> Site configuration → Forms → Form notifications → Add notification → Email notification
> → välj formuläret **`studiotiedot`** → din adress → Save.

Formuläret dyker upp i listan först efter första deployen som innehåller det, eller efter
första inskicket. Ordningen som fungerar: deploya → gör ett testinskick på
`/kiitos-pro/` → skapa notisen → gör ett till testinskick och kontrollera att mejlet kommer.
**Kolla också att filbilagan följer med i mejlet.**

**5.2 Nödbroms om du inte hinner.** I `src/components/IntakeForm.astro`, översta
konstanten:

```ts
const NETLIFY_FORM_NAME = 'studiotiedot';   // ← ändra till 'liity'
```

Sätts den till `'liity'` är beteendet exakt som förut: rörig inkorg, men en notis som
bevisligen fungerar. Allt annat i den här ändringen fungerar oberoende av det valet.

---

## 6. Förslag som inte ligger i koden

### 6.1 Samla identiteten i Stripe i stället för efteråt (ingen backend, störst effekt)
Payment Links kan samla in mer än vad som används idag ([Stripe: customize payment links]):

- **Custom fields** (text/nummer/dropdown) — "Studion nimi", "Profiilin osoite (URL)".
- **Business name** — separat inställning, "Collect customer names → business".
- **Tax ID (Y-tunnus)** — "Collect business customer tax IDs". Behövs för en korrekt
  faktura till företagskund, och Stripes vanliga kvitto är inte nödvändigtvis en
  fullgod faktura enligt de finska laskumerkinnät-kraven.
- **Support-uppgifter och villkor** på betalsidan — Checkout-inställningarna.

Vinsten: även om intag-formuläret aldrig kommer in vet du **vem** som betalat och kan
mejla dem. Det stänger F10 till hälften utan en enda rad kod.

### 6.2 Ett välkomstmejl som gör tack-sidans jobb en gång till
Det som verkligen räddar den som stängde fliken. Skickas manuellt (eller via Stripes
egna mejlinställningar) direkt när en betalning/trial dyker upp:

> **Ämne:** Tervetuloa Tatuoijat.fi Prohon — yksi vaihe jäljellä
>
> Kiitos tilauksestasi. Profiilisi päivittyy heti kun saamme sinulta tiedot ja kuvat:
> **https://tatuoijat.fi/kiitos-pro/**
> Täyttäminen vie noin 5 minuuttia. Julkaisemme päivitetyn profiilin kahden arkipäivän
> kuluessa siitä kun lomake on lähetetty. Jos jokin on epäselvää, vastaa tähän viestiin.

Och ett andra, kort mejl när profilen är publicerad — kvittosidan lovar det ("Saat
sähköpostiisi viestin, kun päivitetty profiili on julkaistu"), så det löftet måste
infrias manuellt.

### 6.3 Rutinen, uppdaterad
1. Stripe-notis om betalning **eller trial-start** kommer in.
2. Anteckna studion (custom field / business name).
3. Vänta på `studiotiedot`-inskicket. **Kommit inom ett dygn?** Annars: skicka mejlet i 6.2.
4. Stäm av inskicket mot en faktisk Stripe-post innan `tier` ändras (F11).
5. Sätt `tier:` (+ `verified: true`), lägg in text och kontaktuppgifter.
6. Lägg in gallery-bilder **endast** om `kuvat_lupa` är ikryssat (Bildpolicyn).
7. Commit → Netlify deploy.
8. Mejla studion att profilen är live. **Inom två vardagar från steg 3.**

### 6.4 Det som faktiskt kräver mer än en statisk sajt
Ärlig avvägning — inget av detta behövs för att flödet ska fungera, allt gör det bättre:

| Lösning | Vad den ger | Vad den kostar |
| --- | --- | --- |
| Netlify Function + Stripe-webhook (`checkout.session.completed`) | Sajten *vet* att betalningen skett; kan visa ett äkta "betalning bekräftad" och förifylla studionamn på tack-sidan | En serverless-funktion, en webhook-secret, felhantering. Bryter "helt statiskt". Realistiskt en halvdag. |
| Webhook → skapar utkast-PR med frontmatter | Halverar din manuella tid per kund | Ovanstående + GitHub-token + PR-mall. Granskningen måste vara kvar (bildtillstånd). |
| Automatisk påminnelse om formuläret uteblir | Stänger F10 helt | Kräver ett schemalagt jobb och att någon lagrar "betalat men ej inskickat" — dvs. ett litet tillstånd någonstans. |
| Inloggning / självbetjäning för studios | Den "riktiga" produkten | Helt annan produkt. Inte nu. |

**Rekommendation:** bygg ingenting av detta förrän du har 5–10 betalande kunder. Vid den
volymen är manuellt snabbare än att underhålla en webhook, och den nya kvittosidan +
välkomstmejlet täcker det som faktiskt gjorde ont.

---

## 7. Beslut som bara du kan ta

### 7.1 Är Stripe-länkarna prenumerationer med trial — eller engångsbetalningar?
Kampanjbadgen ("Saat 10/30 päivää ilmaiseksi") kräver en prenumeration med provperiod.
Gå in på båda Payment Links och kontrollera. Sedan:

- **Prenumeration med trial:** då stämmer badgen och den nya trial-noten. Slå på Stripes
  påminnelsemejl innan provperioden löper ut (Settings → Subscriptions and emails →
  Manage free trial messaging) — det är dessutom vad kortnätverken förväntar sig.
- **Engångsbetalning utan trial:** då **ljuger badgen** och måste bort ur
  `pricing.ts` (`campaignBadge` på Pro och Premium). Prioritera detta över allt annat i
  dokumentet — ett osant löfte i kassan är värre än en otydlig tack-sida.

### 7.2 Är 199 € med eller utan moms?
`VAT_INCLUDED = true` i `src/data/pricing.ts` (default) betyder: 199 € är totalpris,
du redovisar 25,5 % ur beloppet → netto ca 158,57 €. Det motsvarar vad Stripe faktiskt
drar idag. Vill du sälja exkl. moms: sätt flaggan till `false` **och** höj priserna i
Stripe i motsvarande grad, annars säger sidan en sak och kassan gör en annan. Stäm av
mot `moms-fakturering.md` innan du väljer.

### 7.3 Två vardagar — är det ett löfte du vill ge?
All copy säger nu "två vardagar från att formuläret skickats". Vill du ha marginal, ändra
på ett ställe per språk i `pricing.ts` (`steps`) och `kiitos.ts` (ingress, kvittosida) —
men håll dem i synk, det var just spretandet som var problemet.

---

## Källor

- [Stripe: Configure free trials](https://docs.stripe.com/payments/checkout/free-trials) — trial ⇒ prenumeration, 0 € vid kassan, debitering när trialen löper ut
- [Stripe: Customize checkout for Payment Links](https://docs.stripe.com/payment-links/customize) — custom fields, business name, tax ID, villkor
- [Netlify: 8 MB form request limit](https://answers.netlify.com/t/the-form-request-has-a-maximum-size-limit-of-8-mb/112079) — CDN-nivå, går inte att höja
- [ALV-kannat Suomessa 2026](https://alv.fi/alv-kannat/) — allmän momssats 25,5 %
- [Vero: Laskutusvaatimukset arvonlisäverotuksessa](https://www.vero.fi/syventavat-vero-ohjeet/ohje-hakusivu/48090/laskutusvaatimukset-arvonlis%C3%A4verotuksessa2/) — obligatoriska fakturauppgifter
