import { ReactNode } from 'react';

/* ===== SECTION ===== */
/* Main section wrapper. Handles background, padding, gradient variants. */

type SectionTheme = 'light' | 'dark' | 'alt';
type GradientVariant = 1 | 2 | 3 | 4 | 5 | 6;

interface SectionProps {
  children: ReactNode;
  theme?: SectionTheme;
  gradient?: GradientVariant;
  breathe?: boolean;
  className?: string;
  id?: string;
  as?: 'section' | 'div' | 'article';
  /** Full-viewport hero height */
  hero?: boolean;
  /** Reduced height hero (60vh) */
  heroCompact?: boolean;
}

const themeStyles: Record<SectionTheme, string> = {
  light: 'bg-[var(--off-white)] text-[var(--black)]',
  dark: 'bg-[var(--black)] text-[var(--off-white)]',
  alt: 'bg-[var(--white)] text-[var(--black)]',
};

export function Section({
  children,
  theme = 'light',
  gradient,
  breathe = true,
  className = '',
  id,
  as: Tag = 'section',
  hero = false,
  heroCompact = false,
}: SectionProps) {
  const gradientClass = gradient ? `gradient-${gradient}` : '';
  const breatheClass = gradient && breathe ? 'gradient-breathe' : '';
  const themeClass = gradient ? 'text-[var(--white)]' : themeStyles[theme];
  const heightClass = hero
    ? 'min-h-screen'
    : heroCompact
      ? 'min-h-[60vh]'
      : '';

  return (
    <Tag
      id={id}
      className={`${themeClass} ${gradientClass} ${breatheClass} ${heightClass} ${className}`}
    >
      {children}
    </Tag>
  );
}

/* ===== CONTAINER ===== */
/* Constrains content width and adds horizontal padding. */

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Narrow container for editorial/text content (max-w-2xl) */
  narrow?: boolean;
  /** Medium container (max-w-4xl) */
  medium?: boolean;
}

export function Container({
  children,
  className = '',
  narrow = false,
  medium = false,
}: ContainerProps) {
  const width = narrow
    ? 'max-w-2xl'
    : medium
      ? 'max-w-4xl'
      : 'max-w-[1400px]';

  return (
    <div className={`mx-auto w-full px-6 md:px-12 ${width} ${className}`}>
      {children}
    </div>
  );
}

/* ===== SECTION PADDING ===== */
/* Standard vertical padding for sections */

interface PaddingProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const paddingSizes = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
};

export function Padding({
  children,
  className = '',
  size = 'md',
}: PaddingProps) {
  return <div className={`${paddingSizes[size]} ${className}`}>{children}</div>;
}

/* ===== TWO COLUMN ===== */
/* Responsive two-column layout */

interface TwoColumnProps {
  children: ReactNode;
  className?: string;
  /** Wide left column (2fr 1fr) */
  wideLeft?: boolean;
  /** Wide right column (1fr 2fr) */
  wideRight?: boolean;
  /** Vertical alignment */
  align?: 'start' | 'center' | 'end';
  /** Reverse on mobile */
  reverseMobile?: boolean;
}

export function TwoColumn({
  children,
  className = '',
  wideLeft = false,
  wideRight = false,
  align = 'start',
  reverseMobile = false,
}: TwoColumnProps) {
  const cols = wideLeft
    ? 'md:grid-cols-[2fr_1fr]'
    : wideRight
      ? 'md:grid-cols-[1fr_2fr]'
      : 'md:grid-cols-2';

  const alignClass = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
  }[align];

  return (
    <div
      className={`grid grid-cols-1 gap-12 md:gap-16 lg:gap-20 ${cols} ${alignClass} ${
        reverseMobile ? 'flex flex-col-reverse md:grid' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ===== DIVIDER ===== */
/* Subtle horizontal rule between sections */

interface DividerProps {
  className?: string;
  on?: 'light' | 'dark';
}

export function Divider({ className = '', on = 'light' }: DividerProps) {
  const color = on === 'dark' ? 'border-white/10' : 'border-black/10';
  return (
    <Container>
      <hr className={`border-t ${color} ${className}`} />
    </Container>
  );
}
