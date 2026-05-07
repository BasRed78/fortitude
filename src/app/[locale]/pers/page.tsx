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
  ButtonLink,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'Pers',
  description:
    'Perscontact, woordvoerders, en media-assets van Fortitude.',
};

export default function PersPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero — dark, type-led, no gradient */}
      <Section theme="dark" heroCompact className="flex items-end">
        <Container className="pb-16">
          <Display>{t('press.title')}</Display>
        </Container>
      </Section>

      {/* Over Fortitude — press copy */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <TwoColumn>
              <div>
                <Label className="mb-6 block opacity-50">Over Fortitude</Label>
                <H2 className="mb-8">In het kort</H2>
                <BodyLarge className="opacity-70">
                  [Bas to supply: 100-word press description]
                </BodyLarge>
              </div>
              <div>
                <Label className="mb-6 block opacity-50">Uitgebreid</Label>
                <Body className="opacity-70">
                  [Bas to supply: 300-word press description]
                </Body>
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>

      {/* Spokespeople */}
      <Section theme="alt">
        <Container>
          <Padding size="md">
            <Label className="mb-6 block opacity-50">Woordvoerders</Label>
            <H2 className="mb-12">Contact voor pers</H2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <SpokespersonCard
                name="Bas Redhead"
                role="Co-founder, Fortitude"
                bio="[Bas to supply]"
              />
              <SpokespersonCard
                name="Alexa Gratama"
                role="Voorzitter F|Fort Foundation"
                bio="[Bas to supply]"
              />
              <SpokespersonCard
                name="Niels van Poecke"
                role="Onderzoeker, Amsterdam UMC"
                bio="[Bas to supply]"
                note="Alleen over Masculinities in Action onderzoek"
              />
            </div>
          </Padding>
        </Container>
      </Section>

      {/* Key facts */}
      <Section theme="light">
        <Container>
          <Padding size="md">
            <Label className="mb-6 block opacity-50">Feiten</Label>
            <H2 className="mb-8">Kerngegevens</H2>
            <ul className="max-w-2xl space-y-3">
              <li className="text-base opacity-70">[Bas to supply: bullet list of verifiable facts]</li>
            </ul>
          </Padding>
        </Container>
      </Section>

      {/* Assets + newsroom link */}
      <Section theme="dark">
        <Container>
          <Padding size="lg">
            <TwoColumn>
              <div>
                <H3 className="mb-6">Visuele assets</H3>
                <Body className="mb-8 opacity-70">
                  Download het Fortitude logo in diverse formaten.
                </Body>
                <ButtonLink
                  href="/downloads/fortitude-logo-pack.zip"
                  variant="primary"
                  on="dark"
                  size="md"
                  external
                >
                  Download logo pack (ZIP)
                </ButtonLink>
              </div>
              <div>
                <H3 className="mb-6">Nieuwsroom</H3>
                <Body className="mb-8 opacity-70">
                  Persberichten en coverage vind je in onze nieuwsroom.
                </Body>
                <ButtonLink
                  href="https://smart.pr"
                  variant="secondary"
                  on="dark"
                  size="md"
                  external
                >
                  Bekijk nieuwsroom
                </ButtonLink>
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>
    </>
  );
}

function SpokespersonCard({
  name,
  role,
  bio,
  note,
}: {
  name: string;
  role: string;
  bio: string;
  note?: string;
}) {
  return (
    <div className="rounded-lg border border-black/5 bg-white p-8">
      <h4 className="font-sans text-lg font-semibold">{name}</h4>
      <p className="mt-1 text-sm opacity-50">{role}</p>
      <p className="mt-4 text-sm leading-relaxed opacity-70">{bio}</p>
      {note && (
        <p className="mt-3 text-xs italic opacity-40">{note}</p>
      )}
    </div>
  );
}
