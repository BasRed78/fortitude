import { ImageResponse } from 'next/og';

// Edge-runtime Open Graph image generator. Used for WhatsApp / Twitter /
// Slack / iMessage previews. 1200x630 is the standard 1.91:1 ratio.

export const runtime = 'edge';
export const alt = 'Fortitude — voor jonge mannen die leven met en na kanker';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          background:
            'linear-gradient(135deg, #2686FA 0%, #12F7A5 100%)',
          padding: '90px 100px',
          color: '#0A0A0A',
        }}
      >
        <div
          style={{
            fontSize: 200,
            fontWeight: 800,
            letterSpacing: -8,
            lineHeight: 0.9,
            display: 'flex',
          }}
        >
          FORTITUDE
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 38,
            fontStyle: 'italic',
            opacity: 0.85,
            letterSpacing: -0.5,
            display: 'flex',
          }}
        >
          for young men living through and beyond cancer
        </div>
      </div>
    ),
    { ...size }
  );
}
