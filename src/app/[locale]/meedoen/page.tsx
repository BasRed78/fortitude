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
      <div className="relative z-10 flex min-h-screen flex-col justify-between p-8 md:p-10">
        <header className="flex items-center justify-center">
          <span className="text-xs font-medium uppercase tracking-[0.1em] text-[#0A0A0A]/70">
            Powered by F|Fort Foundation
          </span>
        </header>

        <main className="flex flex-1 items-center justify-center py-20 md:py-28">
          <div className="w-full max-w-[520px]">
            <div className="mb-16 md:mb-20">
              <Image
                src="/fortitude-wordmark.png"
                alt="FORTITUDE - for young men living through and beyond cancer"
                width={2907}
                height={298}
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="mb-8 border-b border-[#0A0A0A]/20 pb-8">
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

            <div className="mb-8 border-b border-[#0A0A0A]/20 pb-8">
              <p className="text-[0.95rem] leading-[1.75] text-[#0A0A0A]/85 md:text-[1.05rem]">
                In Nederland leven zo&apos;n 32.000 jongvolwassenen met kanker.
                Jonge mannen vallen daarbij op: ze delen minder snel wat er
                speelt, zoeken later hulp, en bestaande ondersteuning sluit vaak
                niet aan. Fortitude is er voor hen. Een programma voor jonge
                mannen (18&ndash;39) met en na kanker. Voor wie het
                standaardverhaal niet past.
              </p>
            </div>

            <div className="mb-10">
              <p className="text-xl font-semibold leading-snug text-[#0A0A0A] md:text-2xl">
                Goed dat je ons gevonden hebt via het SPACE4AYA congres.
              </p>
              <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#0A0A0A]/85 md:text-[1.05rem]">
                Geen enkele jonge man met kanker hoort er alleen voor te staan.
                Dat zijn ervaring gezien wordt, dat er ruimte is voor wat hij
                voelt, dat hij steun vindt die bij hem past. Daar werken we aan.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/meedoen/aanmelden"
                className="inline-block bg-[#0A0A0A] px-7 py-3.5 text-xs font-medium uppercase tracking-[0.1em] text-[#F5F5F5] transition-opacity duration-200 hover:opacity-85"
              >
                Meer informatie
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
