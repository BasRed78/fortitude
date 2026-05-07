import { ReactNode } from 'react';

/* ===== SHARED TYPES ===== */

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

interface TypographyProps {
  children: ReactNode;
  as?: As;
  className?: string;
}

/* ===== DISPLAY ===== */
/* Hero headlines. DM Sans. clamp(3rem, 8vw, 5rem) */

export function Display({
  children,
  as: Tag = 'h1',
  className = '',
}: TypographyProps) {
  return (
    <Tag
      className={`font-sans text-[length:var(--font-display)] font-medium leading-[1.05] tracking-tight ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== H1 ===== */
/* Page-level headings. DM Sans. clamp(2rem, 4vw, 3.5rem) */

export function H1({
  children,
  as: Tag = 'h1',
  className = '',
}: TypographyProps) {
  return (
    <Tag
      className={`font-sans text-[length:var(--font-h1)] font-medium leading-[1.1] tracking-tight ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== H2 ===== */
/* Section headings. DM Sans. 2.5rem / 40px */

export function H2({
  children,
  as: Tag = 'h2',
  className = '',
}: TypographyProps) {
  return (
    <Tag
      className={`font-sans text-[length:var(--font-h2)] font-medium leading-[1.15] ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== H3 ===== */
/* Subsection headings. DM Sans. 1.75rem / 28px */

export function H3({
  children,
  as: Tag = 'h3',
  className = '',
}: TypographyProps) {
  return (
    <Tag
      className={`font-sans text-[length:var(--font-h3)] font-semibold leading-[1.2] ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== H4 ===== */
/* Card/item headings. DM Sans. 1.25rem / 20px */

export function H4({
  children,
  as: Tag = 'h4',
  className = '',
}: TypographyProps) {
  return (
    <Tag
      className={`font-sans text-[length:var(--font-h4)] font-semibold leading-[1.3] ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== BODY ===== */
/* Default body text. DM Sans. 1rem / 16px */

export function Body({
  children,
  as: Tag = 'p',
  className = '',
}: TypographyProps) {
  return (
    <Tag
      className={`font-sans text-[length:var(--font-body)] font-normal leading-[1.6] ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== BODY LARGE ===== */
/* Intro paragraphs, subtitles. DM Sans. 1.125rem / 18px */

export function BodyLarge({
  children,
  as: Tag = 'p',
  className = '',
}: TypographyProps) {
  return (
    <Tag
      className={`font-sans text-lg font-normal leading-[1.7] ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== SMALL ===== */
/* Captions, labels, metadata. DM Sans. 0.875rem / 14px */

export function Small({
  children,
  as: Tag = 'p',
  className = '',
}: TypographyProps) {
  return (
    <Tag
      className={`font-sans text-[length:var(--font-small)] font-normal leading-[1.5] ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== LABEL ===== */
/* Section labels, overlines. DM Sans. 12px, uppercase, tracked */

export function Label({
  children,
  as: Tag = 'span',
  className = '',
}: TypographyProps) {
  return (
    <Tag
      className={`font-sans text-xs font-medium uppercase tracking-[0.15em] ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== QUOTE ===== */
/* Pull quotes. Instrument Serif italic. Large. */

interface QuoteProps {
  children: ReactNode;
  attribution?: string;
  className?: string;
}

export function Quote({ children, attribution, className = '' }: QuoteProps) {
  return (
    <figure className={className}>
      <blockquote className="border-l-[3px] border-current pl-6 md:pl-8">
        <p className="font-serif text-2xl italic leading-[1.4] md:text-[1.75rem]">
          {children}
        </p>
      </blockquote>
      {attribution && (
        <figcaption className="mt-4 pl-6 font-sans text-sm opacity-60 md:pl-8">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}

/* ===== ACCENT ===== */
/* Instrument Serif inline accent for single words/phrases inside headings */

export function Accent({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`font-serif italic ${className}`}>{children}</span>
  );
}
