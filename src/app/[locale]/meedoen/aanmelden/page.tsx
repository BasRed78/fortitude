import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import MeedoenForm from '@/components/forms/MeedoenForm';

export const metadata: Metadata = {
  title: 'Aanmelden',
  description: 'Word onderdeel van Fortitude.',
  robots: { index: false, follow: true },
};

export default function AanmeldenPage() {
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
            <div className="mb-12 md:mb-14">
              <Link
                href="/meedoen"
                className="mb-8 inline-block text-xs font-medium uppercase tracking-[0.1em] text-[#0A0A0A]/70 transition-opacity hover:opacity-100 hover:text-[#0A0A0A]"
              >
                &larr; Terug
              </Link>
              <Image
                src="/fortitude-wordmark.png"
                alt="FORTITUDE - for young men living through and beyond cancer"
                width={2907}
                height={298}
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="mb-10">
              <p className="text-[0.95rem] leading-[1.75] text-[#0A0A0A]/85 md:text-[1.05rem]">
                Fortitude wordt gebouwd vanuit samenwerking. We ontwikkelen
                initiatieven die aansluiten bij wat er werkelijk speelt, mede
                gemaakt door mensen die er middenin zitten of dichtbij staan.
              </p>
              <p className="mt-4 text-[0.95rem] leading-[1.75] text-[#0A0A0A]/85 md:text-[1.05rem]">
                Of je nou zelf AYA bent, een jonge man met kanker kent,
                professional bent of op een andere manier wil meedoen. Vul het
                formulier hieronder in.
              </p>
            </div>

            <div className="mb-12">
              <MeedoenForm />
            </div>

            <div className="border-t border-[#0A0A0A]/20 pt-8 text-center">
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

        <footer className="flex items-center justify-center pt-12">
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-[#0A0A0A]/60">
            Powered by F|Fort Foundation
          </span>
        </footer>
      </div>
    </div>
  );
}
