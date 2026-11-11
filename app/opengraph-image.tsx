import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { SITE_URL } from '@/lib/links';
import { SHARE_IMAGE } from '@/lib/seo';

// The share card for every page: one white window on the desk, the wash bleeding from its top,
// the product's headline in Poppins. Rendered once at build time; pageMetadata (lib/seo.ts)
// points every page at it.

export const alt = SHARE_IMAGE.alt;
export const size = { width: SHARE_IMAGE.width, height: SHARE_IMAGE.height };
export const contentType = 'image/png';

// Broken where the hero breaks it.
const HEADLINE = ['Ask your company a question', 'and get an answer.'];
const LEDE = 'Answers from the documents your team already writes, with citations.';
const HOST = new URL(SITE_URL).host;

// The same faces next/font loads for the page. ImageResponse needs TrueType, not WOFF2, so
// they come from the Google Fonts CSS API, cut down to the characters on the card.
async function googleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
  if (!src) throw new Error(`No TrueType file for ${family} ${weight}`);
  return (await fetch(src)).arrayBuffer();
}

export default async function Image() {
  const [poppins, manrope, mark] = await Promise.all([
    googleFont('Poppins', 600, `AgOS${HEADLINE.join('')}`),
    googleFont('Manrope', 500, `${LEDE}${HOST}`),
    readFile(join(process.cwd(), 'public/agos-mark.png')),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', padding: 56, background: '#EDEBE7' }}>
        <div
          style={{
            position: 'relative',
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '52px 64px 48px',
            borderRadius: 28,
            overflow: 'hidden',
            background: '#FFFFFF',
            border: '1px solid rgba(28, 25, 20, .08)',
            boxShadow: '0 34px 70px -38px rgba(28, 25, 20, .5)',
          }}
        >
          <div
            style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 260, display: 'flex',
              backgroundImage: 'linear-gradient(90deg, rgba(255, 196, 154, .9), rgba(249, 168, 200, .6), rgba(183, 166, 255, .7), rgba(157, 196, 255, .8))',
            }}
          />
          <div
            style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 262, display: 'flex',
              backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0), #FFFFFF)',
            }}
          />

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'Poppins', fontSize: 34, color: '#1B1A17', letterSpacing: '-0.02em' }}>
            <img src={`data:image/png;base64,${mark.toString('base64')}`} width={48} height={48} alt="" />
            AgOS
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Poppins', fontSize: 64, lineHeight: 1.06, letterSpacing: '-0.04em', color: '#1B1A17' }}>
              {HEADLINE.map((line) => <span key={line}>{line}</span>)}
            </div>
            <div style={{ display: 'flex', fontFamily: 'Manrope', fontSize: 28, lineHeight: 1.4, color: '#57534C' }}>
              {LEDE}
            </div>
          </div>

          <div style={{ display: 'flex', fontFamily: 'Manrope', fontSize: 22, color: '#6E6A63' }}>{HOST}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Poppins', data: poppins, weight: 600, style: 'normal' },
        { name: 'Manrope', data: manrope, weight: 500, style: 'normal' },
      ],
    },
  );
}
