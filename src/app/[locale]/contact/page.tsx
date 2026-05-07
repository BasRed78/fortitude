import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import {
  Section,
  Container,
  Padding,
  TwoColumn,
  Display,
  H3,
  Body,
  BodyLarge,
  Label,
  ButtonLink,
} from '@/components/ui';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Neem contact op met Fortitude.',
};

export default function ContactPage() {
  const t = useTranslations();

  return (
    <>
      {/* Hero — dark, type-led */}
      <Section theme="dark" heroCompact className="flex items-end">
        <Container className="pb-16">
          <Label className="mb-4 block opacity-30">Fortitude</Label>
          <Display>{t('contact.title')}</Display>
        </Container>
      </Section>

      {/* Contact form + info */}
      <Section theme="light">
        <Container>
          <Padding size="lg">
            <TwoColumn>
              {/* Form */}
              <div>
                <Label className="mb-6 block opacity-40">
                  Stuur een bericht
                </Label>
                <ContactForm />
              </div>

              {/* Contact info */}
              <div>
                <Label className="mb-6 block opacity-40">
                  Direct contact
                </Label>
                <H3 className="mb-6">Neem contact op</H3>
                <BodyLarge className="mb-8 opacity-60">
                  [Bas to supply: short intro about getting in touch.
                  Response time expectations.]
                </BodyLarge>

                <div className="flex flex-col gap-5 text-sm">
                  <div>
                    <span className="block font-medium">E-mail</span>
                    <span className="opacity-50">[Bas to supply]</span>
                  </div>
                  <div>
                    <span className="block font-medium">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/company/ffortitude/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-50 transition-opacity hover:opacity-100"
                    >
                      linkedin.com/company/ffortitude
                    </a>
                  </div>
                </div>

                <div className="mt-10 rounded-xl border border-black/[0.04] bg-[var(--off-white)] p-6">
                  <Body className="opacity-50">
                    Perscontact? Ga naar de{' '}
                    <ButtonLink
                      href="/pers"
                      variant="ghost"
                      size="sm"
                      className="!inline !p-0 !text-[var(--black)] underline"
                    >
                      perspagina
                    </ButtonLink>
                    .
                  </Body>
                </div>
              </div>
            </TwoColumn>
          </Padding>
        </Container>
      </Section>
    </>
  );
}
