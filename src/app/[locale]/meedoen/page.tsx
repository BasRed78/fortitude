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
            <div className="mb-10 md:mb-12">
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
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#0A0A0A]/70">
                Goed dat je ons gevonden hebt via het SPACE4AYA congres.
              </p>
              <h1
                className="mt-3 text-[2rem] leading-[1.05] tracking-tight text-[#0A0A0A] md:text-[2.75rem]"
                style={{ fontFamily: 'var(--font-instrument-serif)' }}
              >
                Geen enkele jonge man met kanker hoort er alleen voor te staan.
              </h1>
              <p className="mt-5 text-[0.95rem] leading-[1.6] text-[#0A0A0A]/85 md:text-[1.05rem]">
                Dat zijn ervaring gezien wordt, dat er ruimte is voor wat hij
                voelt, dat hij steun vindt die bij hem past. Daar werken we aan.
              </p>
              <div className="mt-7">
                <Link
                  href="/meedoen/aanmelden"
                  className="inline-block bg-[#0A0A0A] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-[#F5F5F5] transition-opacity duration-200 hover:opacity-85"
                >
                  Doe mee
                </Link>
              </div>
            </section>

            <div className="mb-8 border-t border-[#0A0A0A]/20 pt-8">
              <span className="text-base font-medium tracking-[0.02em] text-[#0A0A0A] md:text-lg">
                for·ti·tude
              </span>
              <span className="ml-2 text-sm text-[#0A0A0A]/60 md:text-base">
                /ˈfɔːtɪtjuːd/
              </span>
              <span className="mt-1 block text-sm italic text-[#0A0A0A]/70 md:text-[0.9rem]">
                zelfstandig naamwoord
              </span>
              <p className="mt-2 text-[0.95rem] text-[#0A0A0A]/85 md:text-[1.05rem]">
                Moed en innerlijke kracht in het omgaan met pijn of tegenslag.
              </p>
            </div>

            <div className="border-t border-[#0A0A0A]/20 pt-8">
              <p className="text-[0.95rem] leading-[1.75] text-[#0A0A0A]/85 md:text-[1.05rem]">
                In Nederland leven zo&apos;n 32.000 jongvolwassenen met kanker.
                Jonge mannen vallen daarbij op: ze delen minder snel wat er
                speelt, zoeken later hulp, en bestaande ondersteuning sluit vaak
                niet aan. Fortitude is er voor hen. Een programma voor jonge
                mannen (18&ndash;39) met en na kanker. Voor wie het
                standaardverhaal niet past.
              </p>
            </div>
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
