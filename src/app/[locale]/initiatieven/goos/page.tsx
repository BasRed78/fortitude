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
  title: 'GOOS.',
  description:
    'GOOS. is een conversational support tool voor jonge mannen met en na kanker.',
};

export default function GoosPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero — gradient 2 (Red → Violet) */}
      <Section gradient={2} heroCompact className="flex items-end">
        <Container className="pb-16">
          <Label className="mb-4 block opacity-50">Initiatieven</Label>
          <Display>{t('initiatives.goos.title')}</Display>
        </Container>
      </Section>

      {/* What GOOS. is */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <TwoColumn>
              <div>
                <Label className="mb-6 block opacity-40">Het product</Label>
                <H2 className="mb-8">
                  Wat GOOS.{' '}
                  <Accent>doet</Accent>
                </H2>
                <BodyLarge className="mb-6 opacity-70">
                  [Bas to supply: GOOS. is Fortitude's first concrete support
                  product. An LLM-driven conversational support tool for male
                  AYA's. Plain-language explanation of what it does, who it
                  is for, what a session looks like.]
                </BodyLarge>
                <Body className="opacity-55">
                  [Bas to supply: technical details kept minimal.
                  Focus on what the AYA experiences, not how it works.]
                </Body>
              </div>
              <div>
                <Label className="mb-6 block opacity-40">Waarom</Label>
                <H2 className="mb-8">
                  Waarom het{' '}
                  <Accent>bestaat</Accent>
                </H2>
                <BodyLarge className="opacity-70">
                  [Bas to supply: the gap GOOS. fills. Existing support is
                  not always accessible, not always the right format,
                  not always available at 2am when it matters. GOOS. is.]
                </BodyLarge>
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>

      {/* How it works (brief) */}
      <Section theme="alt">
        <Container>
          <Padding size="md">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <StepCard
                number="01"
                title="Laagdrempelig"
                body="[Bas to supply: no intake, no appointment, no waiting list]"
              />
              <StepCard
                number="02"
                title="Op jouw manier"
                body="[Bas to supply: text-based, on your own terms, anonymous if you want]"
              />
              <StepCard
                number="03"
                title="Altijd beschikbaar"
                body="[Bas to supply: 24/7, no office hours, no voicemail]"
              />
            </div>
          </Padding>
        </Container>
      </Section>

      {/* Status and CTA */}
      <Section theme="dark">
        <Container>
          <Padding size="lg">
            <div className="mx-auto max-w-2xl text-center">
              <Label className="mb-6 block opacity-30">Status</Label>
              <H2 className="mb-6">
                Binnenkort{' '}
                <Accent>beschikbaar</Accent>
              </H2>
              <BodyLarge className="mb-10 opacity-60">
                [Bas to supply: GOOS. launches Q2 2026. It has its own visual
                language and will live at its own URL. For now: leave your
                email to be notified at launch.]
              </BodyLarge>
              {/* Pre-launch: email capture. Post-launch: link-out button.
                  Switch via Sanity goosLive flag on settings singleton. */}
              <ButtonLink
                href="/contact"
                variant="primary"
                on="dark"
                size="lg"
              >
                Houd me op de hoogte
              </ButtonLink>
              <p className="mt-6 text-sm opacity-30">
                GOOS. heeft een eigen visuele identiteit en draait op een apart platform.
              </p>
            </div>
          </Padding>
        </Container>
      </Section>
    </>
  );
}

function StepCard({
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
