import type { Locale } from '@/i18n/config';

/**
 * Extract localized string from a Sanity localized field.
 * Falls back to Dutch if the requested locale is not available.
 */
export function localize<T = string>(
  field: { nl?: T; en?: T } | undefined,
  locale: Locale
): T | undefined {
  if (!field) return undefined;
  return field[locale] ?? field.nl;
}

/**
 * Shorthand for localize with a fallback string.
 */
export function t(
  field: { nl?: string; en?: string } | undefined,
  locale: Locale,
  fallback = ''
): string {
  return localize(field, locale) ?? fallback;
}
