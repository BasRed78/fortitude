import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const PARKED_PATHS = [
  '/over-ons',
  '/pers',
  '/steun',
  '/contact',
  '/initiatieven',
  '/initiatieven/:path*',
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/congres',
        destination: '/meedoen?bron=space4aya_2026',
        permanent: true,
      },
      // Catch any leftover /en/* URLs from the previous bilingual config
      // and route them back to their NL equivalents.
      {
        source: '/en',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/:path*',
        destination: '/:path*',
        permanent: true,
      },
      ...PARKED_PATHS.map((source) => ({
        source,
        destination: '/',
        permanent: false,
      })),
    ];
  },
};

export default withNextIntl(nextConfig);
