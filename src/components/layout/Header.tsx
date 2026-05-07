'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useParams } from 'next/navigation';
import { Locale } from '@/i18n/config';
import Wordmark from '@/components/ui/Wordmark';
import LanguageToggle from '@/components/ui/LanguageToggle';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/over-ons', key: 'about' },
  { href: '/initiatieven', key: 'initiatives' },
  { href: '/pers', key: 'press' },
  { href: '/steun', key: 'support' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const params = useParams();
  const locale = (params.locale as Locale) || 'nl';
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Determine if we're on the home page (hero has gradient background)
  const isHome = pathname === '/' || pathname === '';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--off-white)]/95 shadow-sm backdrop-blur-md'
          : ''
      } ${mobileOpen ? 'bg-[var(--off-white)]' : ''}`}
      style={{ transitionTimingFunction: 'var(--ease-default)' }}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        {/* Wordmark — white on home hero before scroll, black otherwise */}
        <Link href="/" aria-label={t('home')} className="shrink-0">
          <Wordmark
            variant={isHome && !scrolled && !mobileOpen ? 'white' : 'black'}
            className="h-5 w-auto transition-opacity duration-300 md:h-6"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(({ href, key }) => {
            const isActive =
              pathname === href || pathname.startsWith(href + '/');
            return (
              <Link
                key={key}
                href={href}
                className={`text-sm font-medium transition-all duration-200 ${
                  isHome && !scrolled
                    ? isActive
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                    : isActive
                      ? 'text-[var(--black)]'
                      : 'text-[var(--black)]/50 hover:text-[var(--black)]'
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
          <LanguageToggle locale={locale} />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 transition-transform duration-300 ${
              mobileOpen
                ? 'translate-y-2 rotate-45 bg-[var(--black)]'
                : isHome && !scrolled
                  ? 'bg-white'
                  : 'bg-[var(--black)]'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-default)' }}
          />
          <span
            className={`block h-0.5 w-6 transition-opacity duration-300 ${
              mobileOpen
                ? 'opacity-0'
                : isHome && !scrolled
                  ? 'bg-white'
                  : 'bg-[var(--black)]'
            }`}
          />
          <span
            className={`block h-0.5 w-6 transition-transform duration-300 ${
              mobileOpen
                ? '-translate-y-2 -rotate-45 bg-[var(--black)]'
                : isHome && !scrolled
                  ? 'bg-white'
                  : 'bg-[var(--black)]'
            }`}
            style={{ transitionTimingFunction: 'var(--ease-default)' }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-black/5 bg-[var(--off-white)] transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-[400px] px-6 pb-8 pt-4' : 'max-h-0 px-6'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-default)' }}
      >
        <div className="flex flex-col gap-4">
          {navItems.map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="text-lg font-medium text-[var(--black)]"
            >
              {t(key)}
            </Link>
          ))}
          <div className="pt-2">
            <LanguageToggle locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
}
