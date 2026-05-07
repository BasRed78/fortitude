export const locales = ['nl'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'nl';
