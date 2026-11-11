'use client';

import Link from 'next/link';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import { CONTACT, SIGN_IN, SIGN_UP } from '@/lib/links';
import {
  CONSENT_EVENT, GA_ID, openCookieSettings, readConsent, track, writeConsent, type Consent,
} from '@/lib/analytics';

// The links that matter on a landing page. Sign-up and sign-in live on agos.digital, the same
// domain as this site, so GA's outbound-click measurement does not see them; they are sent here.
const CLICKS: [match: (href: string) => boolean, event: string][] = [
  [(h) => h.startsWith(SIGN_UP), 'sign_up_click'],
  [(h) => h.startsWith(SIGN_IN), 'login_click'],
  [(h) => h.startsWith(CONTACT), 'contact_click'],
];

// Loads GA only after consent and asks for it in a small banner. Page views on client-side
// navigation come from GA's enhanced measurement (browser history events), on by default.
export function Analytics() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [asking, setAsking] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    const saved = readConsent();
    setConsent(saved);
    setAsking(saved === null);
    const reopen = () => setAsking(true);
    window.addEventListener(CONSENT_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_EVENT, reopen);
  }, []);

  useEffect(() => {
    if (consent !== 'granted') return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') ?? '';
      const hit = CLICKS.find(([match]) => match(href));
      if (hit) track(hit[1], { location: window.location.pathname, link_text: a.textContent?.trim() ?? '' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [consent]);

  if (!GA_ID) return null;

  const choose = (value: Consent) => {
    writeConsent(value);
    setAsking(false);
    // Withdrawing consent after GA has loaded: stop storage now; the script itself goes on
    // the next page load, since it cannot be unloaded.
    // next/script runs the init only once per page, so a later change goes through an update.
    window.gtag?.('consent', 'update', { analytics_storage: value });
    setConsent(value);
  };

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('consent', 'default', {
              analytics_storage: 'granted',
              ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
            });
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { allow_google_signals: false, allow_ad_personalization_signals: false });
          `}</Script>
        </>
      )}
      {asking && (
        <aside className="consent" aria-label="Cookie preferences">
          <p>
            We use Google Analytics cookies to count visits and see which pages help. Nothing is
            used for ads. <Link href="/privacy#cookies">Details</Link>
          </p>
          <div className="consent-actions">
            <button type="button" className="btn btn-line btn-sm" onClick={() => choose('denied')}>Decline</button>
            <button type="button" className="btn btn-ink btn-sm" onClick={() => choose('granted')}>Accept</button>
          </div>
        </aside>
      )}
    </>
  );
}

export function CookieSettingsButton() {
  if (!GA_ID) return null;
  return (
    <button type="button" className="footer-link-btn" onClick={openCookieSettings}>
      Cookie settings
    </button>
  );
}
