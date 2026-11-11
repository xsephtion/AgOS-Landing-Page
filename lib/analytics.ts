// Google Analytics 4. The measurement ID comes from the environment so previews and local
// builds send nothing: with NEXT_PUBLIC_GA_ID unset, no script loads and no banner shows.
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

// GA sets cookies, so it loads only after a visitor accepts (components/Analytics.tsx). The
// choice is kept in the browser under this key; the footer's "Cookie settings" reopens it.
export const CONSENT_KEY = 'agos-analytics-consent';
export const CONSENT_EVENT = 'agos:cookie-settings';

export type Consent = 'granted' | 'denied';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function writeConsent(value: Consent) {
  try { localStorage.setItem(CONSENT_KEY, value); } catch { /* private mode: ask again next visit */ }
}

// A no-op until GA has loaded, so callers never need to check consent themselves.
export function track(event: string, params?: Record<string, string>) {
  window.gtag?.('event', event, params);
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
