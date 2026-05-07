import type { Metadata } from 'next';
import Image from 'next/image';
import EmailSignup from '@/components/forms/EmailSignup';

export const metadata: Metadata = {
  title: 'Fortitude',
  description:
    'Voor jonge mannen die leven met en na kanker. Een initiatief van F|Fort Foundation.',
};

export default function HomePage() {
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

        <main className="flex flex-1 items-center justify-center py-12">
          <div className="w-full max-w-[520px]">
            <div className="relative mb-12 inline-block w-full">
              <span className="absolute -top-9 right-0 bg-[#0A0A0A] px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.08em] text-[#F5F5F5]">
                Coming soon
              </span>
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

            <div className="mb-10">
              <p className="text-[0.95rem] leading-[1.75] text-[#0A0A0A]/85 md:text-[1.05rem]">
                In Nederland leven zo&apos;n 32.000 jongvolwassenen met kanker.
                Jonge mannen vallen daarbij op: ze delen minder snel wat er
                speelt, zoeken later hulp, en bestaande ondersteuning sluit vaak
                niet aan. Fortitude is er voor hen. Een programma voor jonge
                mannen (18&ndash;39) met en na kanker. Voor wie het
                standaardverhaal niet past. Binnenkort meer.
              </p>
            </div>

            <div className="mb-6">
              <EmailSignup />
            </div>

            <div className="text-center">
              <a
                href="https://www.linkedin.com/company/ffortitude/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#0A0A0A] px-6 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-[#0A0A0A] transition-colors duration-200 hover:bg-[#0A0A0A]/10"
              >
                Volg ons op LinkedIn
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
