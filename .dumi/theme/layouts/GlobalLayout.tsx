import {
  createCache,
  legacyNotSelectorLinter,
  logicalPropertiesLinter,
  parentSelectorLinter,
  StyleProvider,
} from '@ant-design/cssinjs';
import { App, theme as obTheme } from '@oceanbase/design';
import type { DirectionType } from '@oceanbase/design/es/config-provider';
import {
  usePrefersColor,
  createSearchParams,
  useOutlet,
  useSearchParams,
  useLocale as useDumiLocale,
  useSiteData,
} from 'dumi';
import { IColorValue } from 'dumi/dist/client/theme-api/usePrefersColor';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Analytics } from '@vercel/analytics/react';
import useLayoutState from '../../hooks/useLayoutState';
import SiteThemeProvider from '../SiteThemeProvider';
import useLocation from '../../hooks/useLocation';
import type { ThemeName } from '../common/ThemeSwitch';
import ThemeSwitch from '../common/ThemeSwitch';
import type { SiteContextProps, LocaleType } from '../slots/SiteContext';
import SiteContext from '../slots/SiteContext';
import * as utils from '../utils';
import { getStoredLocale, setStoredLocale } from '../locale-preference';
import useLocalePreference from '../../hooks/useLocalePreference';

type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
type SiteState = Partial<Omit<SiteContextProps, 'updateSiteContext'>>;

const RESPONSIVE_MOBILE = 768;

// 多语言时以 Dumi 路径为准；单语言场景保留 query/localStorage 回退
const getInitialLocale = (
  searchParams?: URLSearchParams,
  dumiLocaleId?: string,
  hasMultipleLocales?: boolean
): LocaleType => {
  if (hasMultipleLocales) {
    if (dumiLocaleId) {
      return dumiLocaleId === 'zh-CN' ? 'cn' : 'en';
    }
    return 'en';
  }

  if (typeof window === 'undefined') {
    return 'en';
  }

  // 优先从 URL query 参数读取
  if (searchParams) {
    const localeParam = searchParams.get('locale');
    if (localeParam === 'en' || localeParam === 'en-US') {
      return 'en';
    }
    if (localeParam === 'cn' || localeParam === 'zh-CN') {
      return 'cn';
    }
  }

  // 其次从 localStorage 读取
  const stored = getStoredLocale();
  if (stored === 'en-US') return 'en';
  if (stored === 'zh-CN') return 'cn';

  // 默认根据 URL 路径判断（向后兼容）
  return utils.isZhCN(window.location.pathname) ? 'cn' : 'en';
};

const styleCache = createCache();
if (typeof global !== 'undefined') {
  (global as any).styleCache = styleCache;
}

const getAlgorithm = (themes: ThemeName[] = []) =>
  themes.map(theme => {
    if (theme === 'dark') {
      return obTheme.darkAlgorithm;
    }
    if (theme === 'compact') {
      return obTheme.compactAlgorithm;
    }
    return obTheme.defaultAlgorithm;
  });

const GlobalLayout: React.FC = () => {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [, , setPrefersColor] = usePrefersColor();
  const dumiLocale = useDumiLocale();
  const { locales: siteLocales } = useSiteData();
  const hasMultipleLocales = siteLocales && siteLocales.length > 1;

  useLocalePreference();

  const [{ theme = [], direction, isMobile, locale }, setSiteState] = useLayoutState<SiteState>({
    isMobile: false,
    direction: 'ltr',
    theme: ['light', 'motion-off'],
    locale: getInitialLocale(searchParams, dumiLocale?.id, hasMultipleLocales),
  });

  const updateSiteConfig = useCallback(
    (props: SiteState) => {
      setSiteState(prev => ({ ...prev, ...props }));

      // resever current hash, because updating `searchParams` will clear the hash
      const currentHash = typeof window !== 'undefined' ? window.location.hash : '';

      const oldSearchStr = searchParams.toString();

      let nextSearchParams: URLSearchParams = searchParams;
      (Object.entries(props) as Entries<SiteContextProps>).forEach(([key, value]) => {
        if (key === 'direction') {
          if (value === 'rtl') {
            nextSearchParams.set('direction', 'rtl');
          } else {
            nextSearchParams.delete('direction');
          }
        }
        if (key === 'theme') {
          nextSearchParams = createSearchParams({
            ...nextSearchParams,
            theme: value.filter(t => t !== 'light'),
          } as URLSearchParams & any);
          // Set theme of dumi site
          setPrefersColor(value?.filter(t => t === 'dark' || t === 'light')?.[0] as IColorValue);
        }
        if (key === 'locale') {
          if (value === 'en' || value === 'cn') {
            nextSearchParams.set('locale', value);
            setStoredLocale(value === 'cn' ? 'zh-CN' : 'en-US');
          }
        }
      });

      if (nextSearchParams.toString() !== oldSearchStr) {
        setSearchParams(nextSearchParams);
        // 恢复 hash 参数
        if (currentHash && typeof window !== 'undefined') {
          window.history.replaceState(
            null,
            '',
            `${window.location.pathname}${window.location.search}${currentHash}`
          );
        }
      }
    },
    [searchParams, setSearchParams]
  );

  const updateMobileMode = () => {
    updateSiteConfig({ isMobile: window.innerWidth < RESPONSIVE_MOBILE });
  };

  useEffect(() => {
    const _theme = searchParams.getAll('theme') as ThemeName[];
    const _direction = searchParams.get('direction') as DirectionType;
    const _locale = getInitialLocale(searchParams, dumiLocale?.id, hasMultipleLocales);

    setSiteState({
      theme: _theme,
      direction: _direction === 'rtl' ? 'rtl' : 'ltr',
      locale: _locale,
    });
    // Set theme of dumi site
    setPrefersColor(_theme?.filter(t => t === 'dark' || t === 'light')?.[0] as IColorValue);
    // Handle isMobile
    updateMobileMode();

    window.addEventListener('resize', updateMobileMode);
    return () => {
      window.removeEventListener('resize', updateMobileMode);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 多语言时根据 Dumi 路径同步 locale；单语言时根据 query 参数同步
  useEffect(() => {
    if (hasMultipleLocales && dumiLocale?.id) {
      const newLocale = dumiLocale.id === 'zh-CN' ? 'cn' : 'en';
      if (locale !== newLocale) {
        setSiteState({ locale: newLocale });
      }
      return;
    }
    const localeParam = searchParams.get('locale');
    if (localeParam === 'en' || localeParam === 'cn') {
      const newLocale = localeParam as LocaleType;
      if (locale !== newLocale) {
        setSiteState({ locale: newLocale });
        setStoredLocale(newLocale === 'cn' ? 'zh-CN' : 'en-US');
      }
    }
  }, [searchParams, locale, hasMultipleLocales, dumiLocale?.id]);

  const siteContextValue = useMemo(
    () => ({
      direction,
      updateSiteConfig,
      theme: theme!,
      isMobile: isMobile!,
      locale: locale || 'cn',
    }),
    [isMobile, direction, updateSiteConfig, theme, locale]
  );

  return (
    <StyleProvider
      cache={styleCache}
      linters={[logicalPropertiesLinter, legacyNotSelectorLinter, parentSelectorLinter]}
    >
      <SiteContext.Provider value={siteContextValue}>
        <SiteThemeProvider
          theme={{
            algorithm: getAlgorithm(theme),
            isAliyun: theme.includes('aliyun'),
            isDark: theme.includes('dark'),
            isCompact: theme.includes('compact'),
            cssVar: theme.includes('css-var') ? true : false,
            token: {
              motion: !theme.includes('motion-off'),
            },
          }}
        >
          <App>
            {outlet}
            {!pathname.startsWith('/~demos') && (
              <ThemeSwitch
                value={theme}
                onChange={nextTheme => updateSiteConfig({ theme: nextTheme })}
              />
            )}
            <Analytics />
          </App>
        </SiteThemeProvider>
      </SiteContext.Provider>
    </StyleProvider>
  );
};

export default GlobalLayout;
