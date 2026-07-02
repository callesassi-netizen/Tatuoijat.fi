# Lanserings-checklista — MUSTE

Bockas av innan sajten går live (och innan Claude Code-bygget anses klart).

## Före deploy (Claude Code verifierar)

- [ ] Lighthouse 95+ på Performance, SEO, Accessibility (mobil) — alla sidtyper
- [ ] CLS = 0 (alla bilder/plattor har reserverad aspect-ratio)
- [ ] Hreflang fi↔sv korrekt parade + canonical på varje sida
- [ ] XML-sitemap genereras och innehåller alla städer/stilar/profiler (båda språk)
- [ ] Schema.org validerar (Rich Results Test): TattooParlor, BreadcrumbList, FAQPage på /hinnat
- [ ] Title/meta unika per sida enligt mallarna i CLAUDE.md
- [ ] 404-sida, favicon, OG-bilder per sidtyp
- [ ] `prefers-reduced-motion` stänger av all motion
- [ ] Profiler UTAN bilder ser avsiktliga ut (monogram-platta + IG-länk)
- [ ] Inga hårdkodade domännamn (sök i koden efter kandidat-domänerna)
- [ ] Inga cookies sätts (verifiera i DevTools) → ingen banner behövs
- [ ] Mobilmeny, filter-chips och sök fungerar med JS avstängt eller degraderar snyggt

## Calles uppgifter (ingen AI-usage)

- [ ] Kolla domänkandidater hos Traficom → registrera vald domän
- [ ] GitHub-repo skapat, Netlify kopplat (samma flöde som portfolion)
- [ ] Netlify: custom domain + HTTPS
- [ ] Google Search Console: verifiera egendom + skicka in sitemap
- [ ] Kontakt-mejladress för sajten (rättelser/borttagning + studio-anmälningar)

## Efter lansering (vecka 4–6 enligt plan)

- [ ] GSC: indexeringsstatus per sidtyp efter 1–2 veckor
- [ ] Alla studios listade gratis (seed-datan inne)
- [ ] Outreach-mejl (fi) draftade — Morpheus skriver, Calle skickar
- [ ] Mätpunkt vecka 6–10: 2–3 betalande av 30 kontaktade = skala
