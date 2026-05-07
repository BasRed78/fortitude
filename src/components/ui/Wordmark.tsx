import Image from 'next/image';

interface WordmarkProps {
  variant?: 'black' | 'white';
  className?: string;
}

export default function Wordmark({ variant = 'black', className = '' }: WordmarkProps) {
  const src =
    variant === 'white'
      ? '/logos/svg/fortitude-wordmark-white.svg'
      : '/logos/svg/fortitude-wordmark.svg';

  return (
    <Image
      src={src}
      alt="Fortitude"
      width={280}
      height={18}
      className={className}
      priority
    />
  );
}
