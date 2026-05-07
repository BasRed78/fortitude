import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import {
  Section,
  Container,
  Padding,
  Display,
  H3,
  Body,
  BodyLarge,
} from '@/components/ui';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Initiatieven',
  description:
    'De drie initiatieven van Fortitude: Field Labs, GOOS., en Community.',
};

export default function InitiatievenPage() {
  const t = useTranslations('initiatives');

  const initiatives = [
    { href: '/initiatieven/field-labs', key: 'fieldLabs', gradient: 1 },
    { href: '/initiatieven/goos', key: 'goos', gradient: 2 },
    { href: '/initiatieven/community', key: 'community', gradient: 3 },
  ] as const;

  return (
    <>
      {/* Hero */}
      <Section gradient={5} heroCompact className="flex items-end">
        <Container className="pb-16">
          <Display>{t('title')}</Display>
        </Container>
      </Section>

      {/* Initiative cards */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <div className="flex flex-col gap-6">
              {initiatives.map(({ href, key, gradient }) => (
                <Link
                  key={key}
                  href={href}
                  className={`gradient-${gradient} group block rounded-xl p-10 text-white transition-transform duration-300 hover:scale-[1.01] md:p-16`}
                  style={{
                    transitionTimingFunction: 'var(--ease-default)',
                  }}
                >
                  <H3>{t(`${key}.title`)}</H3>
                  <BodyLarge className="mt-3 max-w-lg opacity-80">
                    {t(`${key}.summary`)}
                  </BodyLarge>
                </Link>
              ))}
            </div>
          </Padding>
        </Container>
      </Section>
    </>
  );
}
