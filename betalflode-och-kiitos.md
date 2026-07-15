# Betalflöde + tack-sida (Stripe) — instruktion till Claude Code (MUSTE)

MVP: inga automatiska tier-uppgraderingar, ingen backend/webhook. Stripe Payment Links + manuell tier-flip + tack-sidor per nivå. Bygger på `claude-code-handoff-paket-hinnasto.md` (nivåer Perus/Pro/Premium) och `CLAUDE.md` — **bildpolicyn gäller ovillkorligen (aldrig skrapa; galleri endast efter tillstånd).**

## Flödet (så det hänger ihop)

1. Gratisprofil (perus) och `/hinnasto` har CTA **"Osta Pro" / "Osta Premium"** → länkar till respektive **Stripe Payment Link** (Calle skapar länkarna, levererar URL:erna; håll dem i en config/i18n-sträng).
2. Studio betalar på Stripes hostade sida.
3. Stripe **omdirigerar till nivåns tack-sida**: Pro → `/kiitos-pro`, Premium → `/kiitos-premium` (sv: `/tack-pro`, `/tack-premium`). Redirect-URL sätts per Payment Link.
4. Stripe mejlar Calle om betalningen + kvitto till kunden. Calle flippar `tier` i studions frontmatter → commit → Netlify bygger om → live inom 48 h.

## Vad Claude Code bygger

### Tack-sidor per nivå — `/kiitos-pro` + `/kiitos-premium` (fi), `/tack-pro` + `/tack-premium` (sv)
En egen sida per nivå (delar samma layout/komponent) så checklistan blir skräddarsydd. Alla `noindex`, statiska, Tatuoijat.fi-brand.
- Gemensam del (fi), motsvarande sv:
  - Rubrik: **"Kiitos maksusta!"**
  - Brödtext: "Tilauksesi on vastaanotettu. Profiilisi nostetaan kärkeen ja päivitetään **48 tunnin sisällä**. Saat vahvistuksen sähköpostiisi."
  - **Seuraava askel** (låser upp galleriet): "Lähetä valokuvat töistäsi ja profiilitietosi (kuvaus, yhteystiedot, aukioloajat) osoitteeseen {sähköposti} tai oheisella lomakkeella." Länk till intag-formulär (Netlify Forms) eller e-post.
  - Diskret 'jos maksu ei näy 48h, ota yhteyttä'.
- **Skillnad per nivå (checklistan):** `/kiitos-pro` = 3–5 kuvaa + grunduppgifter. `/kiitos-premium` = fler kuvaa (+ ev. video), flera artistprofiler, och nämner topplacering/startsidesfeature. Härled ur feature-matrisen.
- Ingen betalningsdata/PII i URL:er.

### CTA-koppling
- Perus-profiler: "Onko tämä sinun studiosi? Ota profiili haltuun" → /hinnasto.
- /hinnasto: tre priskort (Perus 0 € / Pro ~129 € / Premium ~279 €), betald nivå → rätt Payment Link.

### Kampanj-badge på /hinnasto (Claude Code bygger)
- **Premium**-priskortet: badge/pill **"30 päivää ilmaiseksi"** (guld #C9A227).
- **Pro**-priskortet: badge/pill **"10 päivää ilmaiseksi"**.
- Ev. eyebrow/etikett ovanför: **"Aloitustarjous"**. Diskret, premium — inte rea-skrik.
- **VIKTIGT:** badgen måste motsvaras av en verklig **free trial i Stripe** (Premium 30 pv, Pro 10 pv — se Stripe-config nedan), annars lovar den något kassan inte ger.

## Vad Calle konfigurerar i Stripe (inte Claude Code)
- En **Payment Link per nivå** (Pro, Premium), pris i EUR, årsvis. LIVE-länkar:
  - Pro: `https://buy.stripe.com/8x2dR94sPgtOea3a6c6sw00`
  - Premium: `https://buy.stripe.com/7sY4gz8J52CY0jd4LS6sw01`
- **Free trial (kampanjen):** sätt på varje länks abonnemang i Stripe — Premium **30 päivää**, Pro **10 päivää**. Måste matcha badgen på /hinnasto.
- **Custom field**: "Studion nimi + profiilin osoite (URL)" → så Calle vet vems tier som ska uppgraderas.
- **After-payment: Redirect per länk** → Pro-länk → `https://tatuoijat.fi/kiitos-pro`, Premium-länk → `https://tatuoijat.fi/kiitos-premium` (och `/tack-pro`, `/tack-premium` för sv-CTA:er).
- Kvittomejl på (Stripe default). (Valfritt) fält "Y-tunnus".

## Onboarding: vad kunden får per nivå + hur infon kommer in

Pro/Premium = mer än startsidesplats. Ur feature-matrisen (`claude-code-handoff-paket-hinnasto.md`): Pro = galleri 3–5 egna bilder, verifierad badge, full beskrivning fi/sv, full kontakt, boka-/kontaktknapp, ovanför gratislistningar. Premium = utökat galleri + ev. video, topp/pinnad placering, featured-badge (guld), feature på startsidans hero-collage, flera artistprofiler, cross-promo, leads-rapport. Tack-sidan + kvitto/onboarding-mejlet listar en **checklista per nivå** utifrån detta.

### Intag-formulär (gör Calles insats minimal)
Strukturerat **Netlify Forms**-formulär, länkat från tack-sidan, med exakt profilfälten:
- `kuvaus_fi`, `kuvaus_sv`, `puhelin`, `aukioloajat`, `booking_url`/kontakt, `tyylit` (kryss ur stil-taxonomin), (Premium) `lisaartistit` (namn + IG per artist), samt `studion_nimi` + `profiilin_url`.
- Ett fält: "Lähetä 3–5 kuvaa töistäsi sähköpostilla osoitteeseen {email}" — **bilder tas via mejl, inte formulär** (tillståndsspår; CLAUDE.md-bildpolicyn kräver tillstånd innan publicering). Kryssruta "annan luvan julkaista lähettämäni kuvat".

### Automatiseringsstege (välj läge)
1. **MVP (rek.):** formulär-submission + bilder på mejl → Calle/Morpheus klistrar in i frontmatter → commit → live. **Mänsklig granskning kvar** (bildtillstånd + kvalitet). Morpheus kan omvandla varje submission till färdigt `.md`-block.
2. **v2 (senare):** formulär → Netlify Function → **draft-markdown/PR** i repot → Calle godkänner/merge:ar → build.
3. **Full auto (avrådes):** publicera direkt live utan granskning — hoppa över (bildpolicy/juridik).

Bilder läggs i `images`/galleri FÖRST efter mottaget tillstånd, i alla lägen.

## Manuell tier-flip (Calles rutin)
1. Stripe-mejl "Betalning mottagen" + custom-fältet visar vilken studio.
2. Sätt `tier: "pro"|"premium"` i studions `.md`-frontmatter (+ `verified: true` när claimad).
3. Lägg gallery-bilder när studion skickat dem (endast då — bildpolicy).
4. Commit → Netlify auto-deploy → live inom 48 h.

## Senare (ej MVP)
Stripe **webhook** (`checkout.session.completed`) → Netlify Function → sätt flagga/trigga build. Bygg INTE i MVP — manuellt + 48 h-löfte räcker.

## Not
- "48 tuntia" är rätt förväntan (manuellt flöde) — lova aldrig "heti".
- Skilj `/hinnat` (konsument-SEO: tatuoinnin hinnat) från `/hinnasto` (B2B-listningspriser).
- Payment Link-URL:er + domän i EN config/i18n-fil (3-raders ändring vid namn/domänbyte).
