'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { FadeIn } from '@/components/ui/Motion';

const initiatives = [
  { href: '/initiatieven/field-labs', key: 'fieldLabs', gradient: 1 },
  { href: '/initiatieven/goos', key: 'goos', gradient: 2 },
  { href: '/initiatieven/community', key: 'community', gradient: 3 },
] as const;

export default function HomeInitiatives() {
  const t = useTranslations('initiatives');

  return (
    <div className="flex flex-col gap-5">
      {initiatives.map(({ href, key, gradient }, i) => (
        <FadeIn key={key} delay={i * 120} direction="up" distance={20}>
          <Link
            href={href}
            className={`gradient-${gradient} group relative block overflow-hidden rounded-2xl transition-transform duration-500 hover:scale-[1.008]`}
            style={{ transitionTimingFunction: 'var(--ease-default)' }}
          >
            <div className="relative z-10 flex min-h-[200px] flex-col justify-end p-8 text-white md:min-h-[240px] md:p-12 lg:p-14">
              <h3 className="font-sans text-2xl font-semibold md:text-3xl">
                {t(`${key}.title`)}
              </h3>
              <p className="mt-3 max-w-lg text-base opacity-75 md:text-lg">
                {t(`${key}.summary`)}
              </p>

              {/* Arrow indicator */}
              <div className="absolute right-8 top-8 opacity-0 transition-all duration-500 group-hover:opacity-60 md:right-12 md:top-12">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
