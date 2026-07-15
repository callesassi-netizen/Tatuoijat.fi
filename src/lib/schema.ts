import type { CollectionEntry } from 'astro:content';

/**
 * GEO.md §5 (färskhet) — sanningsenlig som "innehållet granskat {datum}",
 * INTE per-post redigeringsdatum (det kan vi inte spåra utan tung git-log-
 * tooling per fil). Höj detta datum manuellt vid större innehålls-/data-
 * genomgångar (t.ex. berikningsbatcher som walkIn-importen). Används både
 * som synlig text och som `dateModified` i schema.org.
 */
export const CONTENT_UPDATED = '2026-07-15';

/**
 * Serialisering för JSON-LD i set:html. JSON.stringify escapar INTE `<`,
 * så ett datavärde med `</script>` skulle annars kunna bryta script-taggen
 * och injicera HTML. `<` är ekvivalent JSON och ofarligt i HTML.
 */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/** BreadcrumbList — används på alla undersidor (SEO-krav i CLAUDE.md). */
export function breadcrumbLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** TattooParlor per studioprofil. `dateModified` = GEO.md §3/§5 (färskhet). */
export function tattooParlorLd(
  studio: CollectionEntry<'studios'>,
  cityName: string,
  url: string,
) {
  const { data } = studio;
  const sameAs: string[] = [];
  if (data.instagram) sameAs.push(`https://instagram.com/${data.instagram}`);
  if (data.website) sameAs.push(data.website);

  return {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    name: data.name,
    url,
    dateModified: CONTENT_UPDATED,
    address: {
      '@type': 'PostalAddress',
      ...(data.address ? { streetAddress: data.address } : {}),
      addressLocality: cityName,
      addressCountry: 'FI',
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

/**
 * Person per namngiven artist på en studio (GEO.md §3). Ingen egen publik
 * artistsida ännu (CLAUDE.md/innehållsmodell) — renderas som ett extra
 * JSON-LD-block på studioprofilen, `mainEntityOfPage` pekar dit.
 */
export function personLd(
  name: string,
  studioName: string,
  pageUrl: string,
  instagramHandle?: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle: 'tatuoija',
    worksFor: { '@type': 'TattooParlor', name: studioName },
    mainEntityOfPage: pageUrl,
    ...(instagramHandle ? { sameAs: [`https://instagram.com/${instagramHandle}`] } : {}),
  };
}

/**
 * WebSite + SearchAction — startsidan (handoff §4). Sökformuläret är
 * select-baserat; stilfiltret (?tyyli=) är den fria parametern.
 */
export function webSiteLd(name: string, siteUrl: string, searchUrlTemplate: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: searchUrlTemplate },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * CollectionPage + ItemList (GEO.md §3) — stads-, stil- och walk-in-sidorna.
 * Märker sidan som en kurerad lista, inte en godtycklig sida, vilket är
 * signalen AI-sök (och Google) läser för "tatuoijat {stad}"-källa.
 */
export function collectionPageLd(name: string, url: string, itemUrls: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url,
    dateModified: CONTENT_UPDATED,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: itemUrls.length,
      itemListElement: itemUrls.map((itemUrl, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: itemUrl,
      })),
    },
  };
}

/** FAQPage — prisguiden. */
export function faqLd(questions: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
