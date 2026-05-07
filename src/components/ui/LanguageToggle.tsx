'use client';

import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Locale } from '@/i18n/config';

interface LanguageToggleProps {
  locale: Locale;
}

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const t = useTranslations('languageToggle');
  const pathname = usePathname();
  const router = useRouter();

  const targetLocale: Locale = locale === 'nl' ? 'en' : 'nl';

  function handleSwitch() {
    router.replace(pathname, { locale: targetLocale });
  }

  return (
    <button
      onClick={handleSwitch}
      className="text-sm font-medium opacity-60 transition-opacity duration-200 hover:opacity-100"
      aria-label={t('label')}
    >
      {t('switchTo')}
    </button>
  );
}
