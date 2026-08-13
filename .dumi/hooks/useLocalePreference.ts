import { useEffect } from 'react';
import { useLocation, useSiteData } from 'dumi';
import {
  applyLocalePreference,
  getCurrentLocaleFromPath,
  setStoredLocale,
} from '../theme/locale-preference';

/** Homepage: Accept-Language + stored preference. Other pages: sync storage from URL only. */
export default function useLocalePreference() {
  const { pathname } = useLocation();
  const { locales: siteLocales } = useSiteData();
  const hasMultipleLocales = Boolean(siteLocales && siteLocales.length > 1);

  useEffect(() => {
    if (!hasMultipleLocales) return;
    if (!applyLocalePreference(pathname, window.location.search)) {
      setStoredLocale(getCurrentLocaleFromPath(pathname));
    }
  }, [hasMultipleLocales, pathname]);
}
