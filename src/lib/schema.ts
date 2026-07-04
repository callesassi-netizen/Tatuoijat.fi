import type { CollectionEntry } from 'astro:content';

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

/** TattooParlor per studioprofil. */
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

/** ItemList på stads-/stilsidor. */
export function itemListLd(name: string, urls: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: urls.length,
    itemListElement: urls.map((url, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url,
    })),
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
