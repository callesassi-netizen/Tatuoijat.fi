import type { CollectionEntry } from 'astro:content';

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

/** TattooParlor per artist-/studioprofil. */
export function tattooParlorLd(
  artist: CollectionEntry<'artists'>,
  cityName: string,
  url: string,
) {
  const { data } = artist;
  const sameAs: string[] = [];
  if (data.instagram) sameAs.push(`https://www.instagram.com/${data.instagram}/`);
  if (data.website) sameAs.push(data.website);

  return {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    name: data.studio || data.name,
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
