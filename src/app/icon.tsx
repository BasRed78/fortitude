import { ImageResponse } from 'next/og';

// Edge-runtime favicon generator. Replaces the default Next.js icon.
// 64x64 keeps it sharp at typical favicon scales (16x16, 32x32).

export const runtime = 'edge';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #2686FA 0%, #12F7A5 100%)',
        }}
      >
        {/* Token motif: the lozenge from the FORTITUDE wordmark "O" */}
        <svg
          width="44"
          height="26"
          viewBox="0 0 100 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 35 0 L 65 0 L 100 16 L 100 40 L 65 56 L 35 56 L 0 40 L 0 16 Z"
            fill="#0A0A0A"
          />
          <rect x="20" y="24" width="60" height="8" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
