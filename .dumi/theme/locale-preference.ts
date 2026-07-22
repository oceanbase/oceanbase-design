import * as utils from './utils';

export type StoredLocale = 'zh-CN' | 'en-US';

const STORAGE_KEY = 'locale';

export function getStoredLocale(): StoredLocale | null {
  if (!utils.isLocalStorageNameSupported()) return null;
  const value = localStorage.getItem(STORAGE_KEY);
  if (value === 'zh-CN' || value === 'cn') return 'zh-CN';
  if (value === 'en-US' || value === 'en') return 'en-US';
  return null;
}

export function setStoredLocale(locale: StoredLocale) {
  if (utils.isLocalStorageNameSupported()) {
    localStorage.setItem(STORAGE_KEY, locale);
  }
}

/** Resolve preferred locale from navigator.languages (client) or Accept-Language-like list. */
export function resolvePreferredLocale(languages?: readonly string[]): StoredLocale {
  const list =
    languages ??
    (typeof navigator !== 'undefined'
      ? navigator.languages?.length
        ? navigator.languages
        : [navigator.language]
      : ['en-US']);

  for (const lang of list) {
    const normalized = (lang || '').toLowerCase();
    if (normalized.startsWith('zh')) return 'zh-CN';
    if (normalized.startsWith('en')) return 'en-US';
  }
  return 'en-US';
}

export function getCurrentLocaleFromPath(pathname: string): StoredLocale {
  return utils.isZhCN(pathname) ? 'zh-CN' : 'en-US';
}

export function toLocalizedPath(pathname: string, locale: StoredLocale): string {
  const base = utils.getPathWithoutLocale(pathname);
  if (locale === 'zh-CN') {
    return base === '/' ? utils.ZH_CN_BASE : `${utils.ZH_CN_BASE}${base}`;
  }
  return base;
}

/** Homepage only (`/` or `/zh-CN`); inner pages follow URL locale. */
export function isHomePath(pathname: string): boolean {
  return utils.getPathWithoutLocale(pathname) === '/';
}

/**
 * Homepage only: Accept-Language on first visit, localStorage on return visits.
 * Other pages never redirect — locale is determined by the URL path.
 * Returns true if a redirect was triggered.
 */
export function applyLocalePreference(pathname: string, search = ''): boolean {
  if (typeof window === 'undefined') return false;
  if (!isHomePath(pathname)) return false;

  const current = getCurrentLocaleFromPath(pathname);
  const stored = getStoredLocale();

  if (stored) {
    if (stored !== current) {
      window.location.replace(`${toLocalizedPath(pathname, stored)}${search}`);
      return true;
    }
    return false;
  }

  const preferred = resolvePreferredLocale();
  if (preferred !== current) {
    window.location.replace(`${toLocalizedPath(pathname, preferred)}${search}`);
    return true;
  }

  setStoredLocale(current);
  return false;
}
