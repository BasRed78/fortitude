import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Link } from '@/i18n/navigation';

/* ===== SHARED STYLES ===== */

const baseStyles =
  'inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue)]';

const easing = { transitionTimingFunction: 'var(--ease-default)' };

const variants = {
  primary: {
    light:
      'bg-[var(--black)] text-[var(--white)] hover:bg-[var(--black)]/90 hover:-translate-y-0.5',
    dark:
      'bg-[var(--white)] text-[var(--black)] hover:bg-[var(--off-white)] hover:-translate-y-0.5',
    gradient:
      'bg-[var(--white)] text-[var(--black)] hover:bg-[var(--off-white)] hover:-translate-y-0.5',
  },
  secondary: {
    light:
      'border-2 border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)]',
    dark:
      'border-2 border-[var(--white)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)]',
    gradient:
      'border-2 border-[var(--white)] text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)]',
  },
  ghost: {
    light:
      'text-[var(--black)] hover:opacity-70',
    dark:
      'text-[var(--white)] hover:opacity-70',
    gradient:
      'text-[var(--white)] hover:opacity-70',
  },
} as const;

const sizes = {
  sm: 'px-5 py-2.5 text-sm rounded-md',
  md: 'px-7 py-3.5 text-sm rounded-lg',
  lg: 'px-9 py-4.5 text-base rounded-lg',
} as const;

type Variant = keyof typeof variants;
type OnBackground = 'light' | 'dark' | 'gradient';
type Size = keyof typeof sizes;

/* ===== BUTTON (as <button>) ===== */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  on?: OnBackground;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  on = 'light',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variants[variant][on]} ${sizes[size]} ${className}`}
      style={easing}
      {...props}
    >
      {children}
    </button>
  );
}

/* ===== BUTTON LINK (as next-intl <Link>) ===== */

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  size?: Size;
  on?: OnBackground;
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  on = 'light',
  className = '',
  external = false,
}: ButtonLinkProps) {
  const classes = `${baseStyles} ${variants[variant][on]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        style={easing}
      >
        {children}
        <ArrowUpRight />
      </a>
    );
  }

  return (
    <Link href={href} className={classes} style={easing}>
      {children}
    </Link>
  );
}

/* ===== CTA GROUP ===== */
/* Two buttons side by side, responsive */

interface CTAGroupProps {
  children: ReactNode;
  className?: string;
}

export function CTAGroup({ children, className = '' }: CTAGroupProps) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-center ${className}`}
    >
      {children}
    </div>
  );
}

/* ===== ICONS ===== */

function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10L10 4M10 4H4M10 4V10" />
    </svg>
  );
}
