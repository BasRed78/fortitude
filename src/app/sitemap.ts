import type { MetadataRoute } from 'next';

const BASE_URL = 'https://ffortitude.nl';

const routes = [
  '',
  '/over-ons',
  '/initiatieven',
  '/initiatieven/field-labs',
  '/initiatieven/goos',
  '/initiatieven/community',
  '/pers',
  '/steun',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    entries.push({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : route === '/over-ons' ? 0.9 : 0.8,
      alternates: {
        languages: {
          nl: `${BASE_URL}${route}`,
          en: `${BASE_URL}/en${route}`,
        },
      },
    });
  }

  return entries;
}
