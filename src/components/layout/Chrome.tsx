'use client';

import { ReactNode } from 'react';
import { usePathname } from '@/i18n/navigation';
import Header from './Header';
import Footer from './Footer';

const NAKED_PATHS = ['/', '/meedoen'];

function isNaked(pathname: string): boolean {
  return NAKED_PATHS.some(
    (p) => pathname === p || (p !== '/' && pathname.startsWith(`${p}/`))
  );
}

export default function Chrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const naked = isNaked(pathname);

  return (
    <>
      {!naked && <Header />}
      <main className={`flex-1 ${naked ? '' : 'pt-20'}`}>{children}</main>
      {!naked && <Footer />}
    </>
  );
}
