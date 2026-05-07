/**
 * Token of Power motif — echoes the lozenge-shaped "O" from the Fortitude wordmark.
 * Joachim's original concept: a coin with a hole, embedded in the brand.
 *
 * Phase 1: static, used in footer. Phase 2: section punctuation, page transitions.
 */

interface TokenMotifProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function TokenMotif({
  size = 32,
  className = '',
  color = 'currentColor',
}: TokenMotifProps) {
  const outerWidth = size;
  const outerHeight = size * 0.56; // lozenge proportions from wordmark O

  return (
    <svg
      width={outerWidth}
      height={outerHeight}
      viewBox="0 0 100 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Lozenge shape matching the wordmark O geometry */}
      <path
        d="M 35 0 L 65 0 L 100 16 L 100 40 L 65 56 L 35 56 L 0 40 L 0 16 Z"
        fill={color}
      />
      {/* Horizontal slit (the coin hole) */}
      <rect x="20" y="24" width="60" height="8" fill="var(--black, #000000)" />
    </svg>
  );
}
