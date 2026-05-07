import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Wordmark from '@/components/ui/Wordmark';
import TokenMotif from '@/components/ui/TokenMotif';

const footerNav = [
  { href: '/over-ons', key: 'about' },
  { href: '/initiatieven', key: 'initiatives' },
  { href: '/pers', key: 'press' },
  { href: '/steun', key: 'support' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--black)] text-[var(--off-white)]">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-24">
        {/* Top section: wordmark + token */}
        <div className="mb-12 flex items-start justify-between">
          <div>
            <Wordmark variant="white" className="h-8 w-auto md:h-10" />
            <p className="mt-3 text-sm opacity-60">
              {t('footer.payoff')}
            </p>
          </div>
          <TokenMotif className="hidden opacity-30 md:block" size={48} />
        </div>

        {/* Navigation + info */}
        <div className="flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerNav.map(({ href, key }) => (
              <Link
                key={key}
                href={href}
                className="text-sm opacity-60 transition-opacity duration-200 hover:opacity-100"
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-2 text-sm opacity-40 md:items-end">
            <a
              href="https://www.linkedin.com/company/ffortitude/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity duration-200 hover:opacity-70"
            >
              LinkedIn
            </a>
            <p>{t('footer.copyright', { year })}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
