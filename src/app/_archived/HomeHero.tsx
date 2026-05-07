'use client';

import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/ui/Motion';

export default function HomeHero() {
  const t = useTranslations('home');

  return (
    <section className="gradient-6 gradient-breathe relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center text-white md:px-12">
      {/* Wordmark at significant scale — inline SVG for precise control */}
      <FadeIn direction="none" duration={1000} delay={200}>
        <svg
          viewBox="110 368 950 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto mb-10 h-auto w-[85vw] max-w-[900px] md:mb-14"
          aria-label="Fortitude"
          role="img"
        >
          <path fillRule="nonzero" fill="#FFFFFF" d="M 299.652344 404.382812 L 262.214844 404.382812 L 262.214844 390.597656 L 299.652344 390.597656 Z M 288.511719 370.730469 L 273.246094 370.730469 L 228.824219 385.164062 L 228.824219 409.953125 L 273.246094 424.382812 L 288.511719 424.382812 L 332.933594 409.953125 L 332.933594 385.164062 Z M 288.511719 370.730469 " />
          <path fillRule="nonzero" fill="#FFFFFF" d="M 906.792969 404.382812 L 869.355469 404.382812 L 869.355469 390.597656 L 906.792969 390.597656 Z M 895.65625 370.730469 L 880.386719 370.730469 L 835.96875 370.714844 L 835.96875 424.382812 L 895.65625 424.382812 L 940.078125 409.953125 L 940.078125 385.164062 Z M 895.65625 370.730469 " />
          <path fillRule="nonzero" fill="#FFFFFF" d="M 219.199219 388.347656 L 219.199219 370.734375 L 114.988281 370.734375 L 114.988281 424.382812 L 148.464844 424.382812 L 148.464844 402.167969 L 219.199219 402.167969 L 219.199219 392.199219 L 148.464844 392.199219 L 148.464844 388.347656 Z M 219.199219 388.347656 " />
          <path fillRule="nonzero" fill="#FFFFFF" d="M 558.386719 370.59375 L 456.398438 370.59375 L 456.398438 388.207031 L 490.652344 388.207031 L 490.652344 424.382812 L 524.128906 424.382812 L 524.128906 388.207031 L 558.386719 388.207031 Z M 558.386719 370.59375 " />
          <path fillRule="nonzero" fill="#FFFFFF" d="M 713.101562 370.59375 L 611.113281 370.59375 L 611.113281 388.207031 L 645.367188 388.207031 L 645.367188 424.382812 L 678.847656 424.382812 L 678.847656 388.207031 L 713.101562 388.207031 Z M 713.101562 370.59375 " />
          <path fillRule="nonzero" fill="#FFFFFF" d="M 792.867188 370.730469 L 792.867188 406.769531 L 756.203125 406.769531 L 756.203125 370.730469 L 722.726562 370.730469 L 722.726562 424.382812 L 826.34375 424.382812 L 826.34375 370.730469 Z M 792.867188 370.730469 " />
          <path fillRule="nonzero" fill="#FFFFFF" d="M 601.488281 370.730469 L 568.007812 370.730469 L 568.007812 424.382812 L 601.488281 424.382812 Z M 601.488281 370.730469 " />
          <path fillRule="nonzero" fill="#FFFFFF" d="M 342.558594 370.59375 L 342.558594 424.246094 L 376.035156 424.246094 L 376.035156 409.199219 L 413.292969 409.199219 L 413.292969 424.382812 L 446.773438 424.382812 L 446.773438 409.199219 L 413.292969 398.175781 L 376.035156 398.175781 L 376.035156 388.207031 L 413.292969 388.207031 L 413.292969 398.175781 L 446.773438 398.175781 L 446.773438 370.59375 Z M 342.558594 370.59375 " />
          <path fillRule="nonzero" fill="#FFFFFF" d="M 1053.914062 388.179688 L 1053.914062 370.566406 L 949.699219 370.566406 L 949.699219 424.214844 L 1053.914062 424.214844 L 1053.914062 406.601562 L 983.179688 406.601562 L 983.179688 402.441406 L 1053.914062 402.441406 L 1053.914062 392.199219 L 983.179688 392.199219 L 983.179688 388.179688 Z M 1053.914062 388.179688 " />
        </svg>
      </FadeIn>

      <FadeIn direction="up" duration={800} delay={600} distance={16}>
        <h1 className="max-w-3xl font-sans text-[length:var(--font-h1)] font-medium leading-[1.15]">
          {t('hero.headline')}
        </h1>
      </FadeIn>

      {/* Scroll indicator */}
      <FadeIn direction="up" duration={600} delay={1200} distance={8}>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 opacity-50">
            <span className="text-xs font-medium uppercase tracking-[0.2em]">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M8 4L8 18M8 18L14 12M8 18L2 12" />
            </svg>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
