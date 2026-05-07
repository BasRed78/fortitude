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
  Body,
  BodyLarge,
  Label,
  Quote,
  Accent,
  ButtonLink,
  CTAGroup,
} from '@/components/ui';
import TokenMotif from '@/components/ui/TokenMotif';
import OverOnsHero from './OverOnsHero';

export const metadata: Metadata = {
  title: 'Over ons',
  description: 'Het verhaal achter Fortitude. Waarom we bestaan, wie we zijn, en de oorsprong van onze visuele identiteit.',
};

export default function OverOnsPage() {
  const t = useTranslations();

  return (
    <>
      {/* ─── HERO ─── */}
      <OverOnsHero />

      {/* ─── WHY FORTITUDE EXISTS ─── */}
      {/* The AYA reality. Honest, direct. */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <TwoColumn align="start">
              <div>
                <Label className="mb-6 block opacity-40">
                  De AYA-realiteit
                </Label>
                <H2 className="mb-8">
                  Waarom dit{' '}
                  <Accent>nodig</Accent>{' '}
                  is
                </H2>
                <BodyLarge className="mb-6 opacity-70">
                  [Bas to supply: In Nederland leven zo'n 32.000 jongvolwassenen
                  met kanker. AYA's (Adolescents and Young Adults) vallen tussen
                  twee werelden: te oud voor kinderoncologie, te jong voor de
                  standaardaanpak. Jonge mannen in het bijzonder delen minder,
                  zoeken later hulp, en vinden zichzelf niet terug in het bestaande
                  aanbod.]
                </BodyLarge>
                <Body className="opacity-60">
                  [Bas to supply: additional context about the gap in support,
                  what makes Fortitude's approach different. Practical, not preachy.]
                </Body>
              </div>
              <div className="mt-4">
                <Quote attribution="[Bas to supply]">
                  [Bas to supply: quote that illustrates the AYA reality.
                  From a young man, from research, or from a professional
                  who sees the gap firsthand.]
                </Quote>
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>

      {/* ─── JOACHIM ─── */}
      {/* Woven into the narrative, not a separate memorial page. */}
      <Section theme="dark">
        <Container>
          <Padding size="lg">
            <TwoColumn align="center">
              <div>
                <Label className="mb-6 block opacity-30">
                  Oorsprong
                </Label>
                <H2 className="mb-8">
                  Het ontwerp van{' '}
                  <Accent>Joachim</Accent>
                </H2>
                <BodyLarge className="mb-6 opacity-65">
                  [Bas to supply: Joachim Baan created Fortitude's visual identity.
                  His concept centered on the token of power: a coin, a keyring,
                  something tangible to carry. The lozenge-shaped O in the wordmark
                  is his signature element. Respectful, concrete about his contribution.]
                </BodyLarge>
                <Body className="opacity-50">
                  [Bas to supply: what his work means to the project going forward.
                  Not sentimental. Factual about his legacy within Fortitude.]
                </Body>
              </div>
              <div className="flex items-center justify-center">
                {/* Token motif as quiet tribute */}
                <TokenMotif
                  size={180}
                  className="opacity-[0.08]"
                  color="var(--white)"
                />
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>

      {/* ─── TEAM / WIE WE ZIJN ─── */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <Label className="mb-6 block opacity-40">Wie we zijn</Label>
            <H2 className="mb-4">
              Het{' '}
              <Accent>team</Accent>
            </H2>
            <BodyLarge className="mb-14 max-w-xl opacity-60">
              [Bas to supply: one sentence about F|Fort Foundation as the
              operational umbrella. Who drives Fortitude.]
            </BodyLarge>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <PersonCard
                name="Bas Redhead"
                role="Co-founder, brand & strategie"
                bio="[Bas to supply]"
              />
              <PersonCard
                name="Alexa Gratama"
                role="Voorzitter F|Fort Foundation"
                bio="[Bas to supply]"
              />
              <PersonCard
                name="Jacobine Gratama"
                role="Penningmeester F|Fort Foundation"
                bio="[Bas to supply]"
              />
            </div>

            <div className="mt-12 rounded-xl border border-black/[0.04] bg-[var(--off-white)] px-8 py-6">
              <Body className="opacity-50">
                Fortitude is een initiatief van F|Fort Foundation,
                een stichting opgericht met als doel het ondersteunen
                van jonge mannen met en na kanker.
              </Body>
            </div>
          </Padding>
        </Container>
      </Section>

      {/* ─── MASCULINITIES IN ACTION ─── */}
      {/* Scoped narrowly to the research partnership. */}
      <Section theme="alt">
        <Container>
          <Padding size="md">
            <TwoColumn>
              <div>
                <Label className="mb-6 block opacity-40">
                  Onderzoek
                </Label>
                <H3 className="mb-6">
                  Masculinities{' '}
                  <Accent>in Action</Accent>
                </H3>
                <BodyLarge className="mb-4 opacity-70">
                  [Bas to supply: paragraph about the photovoice research
                  by Niels van Poecke at Amsterdam UMC. What MiA investigates,
                  how it connects to Fortitude's mission.]
                </BodyLarge>
                <Body className="opacity-50">
                  [Bas to supply: scope note. Fortitude references and amplifies
                  this research. Niels van Poecke is a research partner,
                  not a Fortitude staff member.]
                </Body>
              </div>
              <div className="flex items-end">
                <Quote attribution="Masculinities in Action">
                  [Bas to supply: quote from the MiA research
                  or from Niels van Poecke about the research.]
                </Quote>
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>

      {/* ─── CTA ─── */}
      <Section theme="dark">
        <Container>
          <Padding size="lg">
            <div className="mx-auto max-w-2xl text-center">
              <H2 className="mb-6">
                Interesse?
              </H2>
              <BodyLarge className="mb-10 opacity-60">
                [Bas to supply: one or two sentences inviting contact
                or support. Low pressure, clear paths.]
              </BodyLarge>
              <CTAGroup className="justify-center">
                <ButtonLink
                  href="/contact"
                  variant="primary"
                  on="dark"
                  size="lg"
                >
                  {t('nav.contact')}
                </ButtonLink>
                <ButtonLink
                  href="/steun"
                  variant="secondary"
                  on="dark"
                  size="lg"
                >
                  {t('nav.support')}
                </ButtonLink>
              </CTAGroup>
            </div>
          </Padding>
        </Container>
      </Section>
    </>
  );
}

/* ===== PERSON CARD ===== */

function PersonCard({
  name,
  role,
  bio,
}: {
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <div className="rounded-xl border border-black/[0.04] bg-white p-8 transition-shadow duration-300 hover:shadow-sm">
      {/* No photo in Phase 1. Type-only. */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--off-white)]">
        <span className="font-sans text-lg font-semibold opacity-30">
          {name.split(' ').map((n) => n[0]).join('')}
        </span>
      </div>
      <h4 className="font-sans text-lg font-semibold">{name}</h4>
      <p className="mt-1 text-sm opacity-40">{role}</p>
      <p className="mt-4 text-sm leading-relaxed opacity-60">{bio}</p>
    </div>
  );
}
