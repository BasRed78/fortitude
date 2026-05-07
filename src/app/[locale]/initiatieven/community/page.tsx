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
} from '@/components/ui';
import CommunityInterestForm from '@/components/forms/CommunityInterestForm';

export const metadata: Metadata = {
  title: 'Community',
  description:
    'De community rond Fortitude: professionals, supporters, en ervaringsdeskundigen.',
};

export default function CommunityPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero — gradient 3 (Blue → Mint) */}
      <Section gradient={3} heroCompact className="flex items-end">
        <Container className="pb-16">
          <Label className="mb-4 block opacity-50">Initiatieven</Label>
          <Display>{t('initiatives.community.title')}</Display>
        </Container>
      </Section>

      {/* What the community is */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <div className="mx-auto max-w-3xl">
              <Label className="mb-6 block opacity-40">De kring</Label>
              <H2 className="mb-8">
                Wat de community{' '}
                <Accent>is</Accent>
              </H2>
              <BodyLarge className="mb-6 opacity-70">
                [Bas to supply: narrative that describes and inspires.
                The community is the kring around Fortitude: professionals,
                supporters, ervaringsdeskundigen. Non-financial support
                flows through here.]
              </BodyLarge>
              <Body className="opacity-55">
                [Bas to supply: what distinguishes the community from
                direct AYA support. Fortitude supports AYA's directly
                via GOOS., Field Labs, content. The community is for
                people who believe in the mission.]
              </Body>
            </div>
          </Padding>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section theme="alt">
        <Container>
          <Padding size="lg">
            <H2 className="mb-12">
              Voor{' '}
              <Accent>wie</Accent>
            </H2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <AudienceCard
                title="Professionals"
                description="[Bas to supply: zorgprofessionals, onderzoekers,
                beleidsmakers die met AYA's werken of zich inzetten
                voor betere zorg.]"
              />
              <AudienceCard
                title="Supporters"
                description="[Bas to supply: mensen die de missie steunen
                als ambassadeur, partner, of met kennis en kunde.]"
              />
              <AudienceCard
                title="Ervaringsdeskundigen"
                description="[Bas to supply: jonge mannen die zelf kanker
                hebben (gehad) en hun ervaring willen inzetten.]"
              />
            </div>
          </Padding>
        </Container>
      </Section>

      {/* How it will grow */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <TwoColumn>
              <div>
                <Label className="mb-6 block opacity-40">Fasering</Label>
                <H2 className="mb-8">
                  Hoe het{' '}
                  <Accent>groeit</Accent>
                </H2>
                <BodyLarge className="opacity-70">
                  [Bas to supply: honest about current state.
                  The community is being built in phases.]
                </BodyLarge>
              </div>
              <div className="flex flex-col gap-5">
                <PhaseCard
                  phase="1"
                  title="Broadcast"
                  description="[Bas to supply: first phase, one-way communication, building awareness]"
                  active
                />
                <PhaseCard
                  phase="2"
                  title="Groei"
                  description="[Bas to supply: growth phase, two-way engagement, events]"
                />
                <PhaseCard
                  phase="3"
                  title="Zelfdragend"
                  description="[Bas to supply: self-sustaining community with own momentum]"
                />
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>

      {/* Interest capture form */}
      <Section theme="dark">
        <Container>
          <Padding size="lg">
            <TwoColumn align="start">
              <div>
                <H2 className="mb-6">
                  Doe{' '}
                  <Accent>mee</Accent>
                </H2>
                <BodyLarge className="mb-6 opacity-60">
                  [Bas to supply: invitation to join. What happens when you
                  sign up. Setting expectations about cadence and platform.]
                </BodyLarge>
                <Quote className="opacity-80">
                  [Bas to supply: motivational quote about community,
                  connection, or collective action.]
                </Quote>
              </div>
              <div className="rounded-xl bg-[var(--off-white)] p-8 text-[var(--black)]">
                <H3 className="mb-6">Ik ben geïnteresseerd</H3>
                <CommunityInterestForm />
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>

      {/* What happens next */}
      <Section theme="light">
        <Container narrow>
          <Padding size="md">
            <div className="text-center">
              <Label className="mb-4 block opacity-40">En dan</Label>
              <H3 className="mb-4">Wat er daarna gebeurt</H3>
              <Body className="opacity-60">
                [Bas to supply: short note setting expectations.
                We collect interest now. The community platform will
                launch in a later phase. For now: occasional updates
                via email.]
              </Body>
            </div>
          </Padding>
        </Container>
      </Section>
    </>
  );
}

function AudienceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-black/[0.04] bg-white p-8">
      <H3 className="mb-4">{title}</H3>
      <Body className="opacity-60">{description}</Body>
    </div>
  );
}

function PhaseCard({
  phase,
  title,
  description,
  active = false,
}: {
  phase: string;
  title: string;
  description: string;
  active?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-6 ${
        active
          ? 'border-[var(--blue)]/20 bg-[var(--blue)]/[0.03]'
          : 'border-black/[0.04] bg-white'
      }`}
    >
      <div className="mb-2 flex items-center gap-3">
        <span className="font-sans text-xs font-medium uppercase tracking-widest opacity-40">
          Fase {phase}
        </span>
        {active && (
          <span className="rounded-full bg-[var(--blue)]/10 px-2 py-0.5 text-xs font-medium text-[var(--blue)]">
            Nu
          </span>
        )}
      </div>
      <h4 className="font-sans text-lg font-semibold">{title}</h4>
      <Body className="mt-2 opacity-60">{description}</Body>
    </div>
  );
}
