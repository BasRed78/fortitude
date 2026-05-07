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
  Quote,
  Accent,
  ButtonLink,
  CTAGroup,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'Field Labs',
  description:
    'Field Labs waren de methode waarmee Fortitude verbinding maakte met jonge mannen met kanker.',
};

export default function FieldLabsPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero — gradient 1 (Orange → Green) */}
      <Section gradient={1} heroCompact className="flex items-end">
        <Container className="pb-16">
          <Label className="mb-4 block opacity-50">Initiatieven</Label>
          <Display>{t('initiatives.fieldLabs.title')}</Display>
        </Container>
      </Section>

      {/* What Field Labs were */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <TwoColumn>
              <div>
                <Label className="mb-6 block opacity-40">Methode</Label>
                <H2 className="mb-8">
                  Wat Field Labs{' '}
                  <Accent>waren</Accent>
                </H2>
                <BodyLarge className="mb-6 opacity-70">
                  [Bas to supply: Field Labs were a method for connecting with
                  the AYA audience, introducing Fortitude, having real
                  conversations, and gathering input that shaped the direction.
                  Past tense. Honest about scale and intent.]
                </BodyLarge>
                <Body className="opacity-55">
                  [Bas to supply: how the sessions worked practically.
                  What happened, who was involved, where they took place.]
                </Body>
              </div>
              <div className="mt-4">
                <Quote attribution="[Bas to supply]">
                  [Bas to supply: quote from a Field Lab participant
                  or observation from the sessions.]
                </Quote>
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>

      {/* What we learned */}
      <Section theme="alt">
        <Container>
          <Padding size="lg">
            <Label className="mb-6 block opacity-40">Inzichten</Label>
            <H2 className="mb-10">
              Wat we{' '}
              <Accent>leerden</Accent>
            </H2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <InsightCard
                number="01"
                title="[Bas to supply]"
                body="[Bas to supply: concrete outcome from Field Labs]"
              />
              <InsightCard
                number="02"
                title="[Bas to supply]"
                body="[Bas to supply: concrete outcome from Field Labs]"
              />
              <InsightCard
                number="03"
                title="[Bas to supply]"
                body="[Bas to supply: concrete outcome from Field Labs]"
              />
            </div>
          </Padding>
        </Container>
      </Section>

      {/* Where this leads */}
      <Section theme="dark">
        <Container>
          <Padding size="lg">
            <div className="mx-auto max-w-2xl text-center">
              <H2 className="mb-6">
                Waar dit{' '}
                <Accent>naartoe</Accent>{' '}
                leidt
              </H2>
              <BodyLarge className="mb-10 opacity-60">
                [Bas to supply: what grew out of Field Labs.
                The insights led to GOOS. and shaped the community direction.]
              </BodyLarge>
              <CTAGroup className="justify-center">
                <ButtonLink
                  href="/initiatieven/goos"
                  variant="primary"
                  on="dark"
                  size="lg"
                >
                  GOOS.
                </ButtonLink>
                <ButtonLink
                  href="/initiatieven/community"
                  variant="secondary"
                  on="dark"
                  size="lg"
                >
                  Community
                </ButtonLink>
              </CTAGroup>
            </div>
          </Padding>
        </Container>
      </Section>
    </>
  );
}

function InsightCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-black/[0.04] bg-white p-8">
      <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-widest opacity-30">
        {number}
      </span>
      <H3 className="mb-3 text-lg">{title}</H3>
      <Body className="opacity-60">{body}</Body>
    </div>
  );
}
