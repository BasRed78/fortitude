'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/Motion';

export default function OverOnsHero() {
  const t = useTranslations('about');

  return (
    <section className="gradient-4 gradient-breathe flex min-h-[60vh] items-end px-6 pb-16 text-white md:px-12">
      <div className="mx-auto w-full max-w-[1400px]">
        <FadeIn direction="up" duration={700} delay={200} distance={16}>
          <span className="mb-4 block font-sans text-xs font-medium uppercase tracking-[0.2em] opacity-50">
            Fortitude
          </span>
        </FadeIn>
        <FadeIn direction="up" duration={700} delay={350} distance={16}>
          <h1 className="font-sans text-[length:var(--font-display)] font-medium leading-[1.05] tracking-tight">
            {t('title')}
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}
