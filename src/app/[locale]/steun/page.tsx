import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import {
  Section,
  Container,
  Padding,
  TwoColumn,
  Display,
  H2,
  H3,
  BodyLarge,
  Body,
  Label,
  Accent,
  ButtonLink,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'Steun Fortitude',
  description:
    'Steun Fortitude via F|Fort Foundation of sluit je aan bij de community.',
};

export default function SteunPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero — dark, type-led */}
      <Section theme="dark" heroCompact className="flex items-end">
        <Container className="pb-16">
          <Display>{t('support.title')}</Display>
        </Container>
      </Section>

      {/* Why support matters */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <div className="mx-auto max-w-3xl">
              <Label className="mb-6 block opacity-50">Waarom</Label>
              <H2 className="mb-8">
                Wat jouw steun <Accent>mogelijk maakt</Accent>
              </H2>
              <BodyLarge className="opacity-70">
                [Bas to supply]
              </BodyLarge>
            </div>
          </Padding>
        </Container>
      </Section>

      {/* Donate CTA */}
      <Section theme="dark">
        <Container>
          <Padding size="lg">
            <div className="text-center">
              <H2 className="mb-6">Steun Fortitude</H2>
              <BodyLarge className="mx-auto mb-10 max-w-lg opacity-70">
                [Bas to supply]
              </BodyLarge>
              {/* External link to F|Fort Foundation donation page */}
              <ButtonLink
                href="https://ffortfoundation.nl"
                variant="primary"
                on="dark"
                size="lg"
                external
              >
                Doneer via F|Fort Foundation
              </ButtonLink>
            </div>
          </Padding>
        </Container>
      </Section>

      {/* Other ways to support */}
      <Section theme="alt">
        <Container>
          <Padding size="md">
            <TwoColumn>
              <div>
                <H3 className="mb-6">Andere manieren om te helpen</H3>
                <Body className="opacity-70">
                  [Bas to supply: paragraph pointing to Community page for ambassadors, partners, in-kind support]
                </Body>
                <div className="mt-8">
                  <ButtonLink href="/initiatieven/community" variant="secondary" size="md">
                    Bekijk de community
                  </ButtonLink>
                </div>
              </div>
              <div />
            </TwoColumn>
          </Padding>
        </Container>
      </Section>
    </>
  );
}
