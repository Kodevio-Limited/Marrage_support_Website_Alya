export interface PublicStaticPage {
  content: string;
  updated_at: string | null;
}

/**
 * Admin-managed footer content. Every field is optional in the response so the
 * backend can send a sparse object; the Footer falls back to i18n strings for
 * any missing/blank value.
 */
export interface FooterLink {
  label: string;
  labelAr?: string;
  href: string;
}

export interface FooterContent {
  brandText: string;
  brandTextAr?: string;
  governmentInitiative: string;
  governmentInitiativeAr?: string;
  phone: string;
  email: string;
  address: string;
  addressAr?: string;
  copyright: string;
  copyrightAr?: string;
  quickLinks: FooterLink[];
  resources: FooterLink[];
  updated_at?: string | null;
}

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:8000/api';

export async function getPrivacyPolicy(): Promise<PublicStaticPage | null> {
  try {
    const res = await fetch(`${API_URL}/privacy/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Failed to load privacy policy (${res.status})`);
    return res.json();
  } catch (e) {
    console.warn('[privacy] Falling back to empty content:', e);
    return null;
  }
}

export async function getTerms(): Promise<PublicStaticPage | null> {
  try {
    const res = await fetch(`${API_URL}/terms/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error(`Failed to load terms (${res.status})`);
    return res.json();
  } catch (e) {
    console.warn('[terms] Falling back to empty content:', e);
    return null;
  }
}

/**
 * Load the footer content managed from the admin panel. Returns null when the
 * backend has no footer settings yet (or is unreachable) so the caller can
 * render the built-in i18n strings.
 */
export async function getFooterContent(): Promise<FooterContent | null> {
  try {
    const res = await fetch(`${API_URL}/footer-settings/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to load footer settings (${res.status})`);
    }
    const json = await res.json();
    // Support both a bare object and a { data: ... } envelope.
    const data = (json?.data as FooterContent | undefined) ?? (json as FooterContent);
    if (!data || typeof data !== 'object') return null;
    return data;
  } catch (e) {
    console.warn('[footer-settings] Falling back to i18n footer:', e);
    return null;
  }
}
