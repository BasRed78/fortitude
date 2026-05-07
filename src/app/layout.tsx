import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fortitude',
  description: 'Voor jonge mannen die leven met en na kanker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
