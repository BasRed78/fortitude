import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'Doe mee',
  description:
    'Fortitude. Voor jonge mannen die leven met en na kanker.',
  openGraph: {
    title: 'Doe mee | Fortitude',
    description:
      'Fortitude. Voor jonge mannen die leven met en na kanker.',
    type: 'website',
  },
};

export default function MeedoenPage() {
  return (
    <div
      className="relative min-h-screen w-full"
      style={{
        backgroundImage: "url('/meedoen-gradient.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        fontFamily: 'var(--font-inter)',
        color: '#0A0A0A',
      }}
    >
      <div className="relative z-10 flex min-h-screen flex-col p-8 md:p-10">
        <main className="flex flex-1 items-start justify-center pt-4 md:pt-8">
          <div className="w-full max-w-[520px]">
            <div className="mb-20 md:mb-32">
              <Image
                src="/fortitude-wordmark.png"
                alt="FORTITUDE - for young men living through and beyond cancer"
                width={2907}
                height={298}
                priority
                className="h-auto w-full"
              />
            </div>

            <section className="mb-8">
              <p className="text-[0.8rem] font-medium uppercase tracking-[0.15em] text-[#0A0A0A]/70 md:text-xs">
                Goed dat je ons gevonden hebt via het SPACE4AYA congres.
              </p>
              <h1
                className="mt-4 text-[2.5rem] leading-[1.05] tracking-tight text-[#0A0A0A] md:text-[3rem]"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Geen enkele jonge man met kanker hoort er{' '}
                <em className="italic">alleen voor te staan</em>.
              </h1>
              <p className="mt-6 text-[1.0625rem] leading-[1.65] text-[#0A0A0A]/85 md:text-[1.125rem]">
                Dat zijn ervaring gezien wordt, dat er ruimte is voor wat hij
                voelt, dat hij steun vindt die bij hem past. Daar werken we aan.
              </p>
              <div className="mt-8">
                <Link
                  href="/meedoen/aanmelden"
                  className="inline-block bg-[#0A0A0A] px-8 py-4 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-[#F5F5F5] transition-opacity duration-200 hover:opacity-85 md:text-xs"
                >
                  Doe mee
                </Link>
              </div>
            </section>

          </div>
        </main>

        <footer className="flex items-center justify-center pt-12">
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-[#0A0A0A]/60">
            Powered by F|Fort Foundation
          </span>
        </footer>
      </div>
    </div>
  );
}
