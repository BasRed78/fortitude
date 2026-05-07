import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'never', // NL-only: never prefix locale
  localeDetection: false, // ignore browser Accept-Language
});

export type AppLocale = (typeof locales)[number];
