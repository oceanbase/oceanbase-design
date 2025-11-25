import {
  createCache,
  legacyNotSelectorLinter,
  logicalPropertiesLinter,
  parentSelectorLinter,
  StyleProvider,
} from '@ant-design/cssinjs';
import { App, theme as obTheme } from '@oceanbase/design';
import type { DirectionType } from '@oceanbase/design/es/config-provider';
import { usePrefersColor, createSearchParams, useOutlet, useSearchParams } from 'dumi';
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

type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
type SiteState = Partial<Omit<SiteContextProps, 'updateSiteContext'>>;

const RESPONSIVE_MOBILE = 768;

// 从 URL query 参数或 localStorage 读取语言设置
const getInitialLocale = (searchParams?: URLSearchParams): LocaleType => {
  if (typeof window === 'undefined') {
    return 'cn';
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
  if (utils.isLocalStorageNameSupported()) {
    const savedLocale = localStorage.getItem('locale');
    if (savedLocale === 'en-US' || savedLocale === 'en') {
      return 'en';
    }
    if (savedLocale === 'zh-CN' || savedLocale === 'cn') {
      return 'cn';
    }
  }

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
  const [{ theme = [], direction, isMobile, locale }, setSiteState] = useLayoutState<SiteState>({
    isMobile: false,
    direction: 'ltr',
    theme: ['light', 'motion-off'],
    locale: getInitialLocale(searchParams),
  });

  const updateSiteConfig = useCallback(
    (props: SiteState) => {
      setSiteState(prev => ({ ...prev, ...props }));

      // updating `searchParams` will clear the hash
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
            // 同步到 localStorage
            if (utils.isLocalStorageNameSupported()) {
              localStorage.setItem('locale', value === 'cn' ? 'zh-CN' : 'en-US');
            }
          }
        }
      });

      if (nextSearchParams.toString() !== oldSearchStr) {
        setSearchParams(nextSearchParams);
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
    const _locale = getInitialLocale(searchParams);

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

  // 监听 URL query 参数变化，同步 locale
  useEffect(() => {
    const localeParam = searchParams.get('locale');
    if (localeParam === 'en' || localeParam === 'cn') {
      const newLocale = localeParam as LocaleType;
      if (locale !== newLocale) {
        setSiteState({ locale: newLocale });
        // 同步到 localStorage
        if (utils.isLocalStorageNameSupported()) {
          localStorage.setItem('locale', newLocale === 'cn' ? 'zh-CN' : 'en-US');
        }
      }
    } else if (!localeParam && locale) {
      // 如果 URL 中没有 locale 参数，但当前有 locale 状态，保持当前状态
      // 这种情况通常发生在用户直接访问没有 locale 参数的 URL
      // 我们保持当前状态，不进行任何操作
    }
  }, [searchParams, locale]);

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
            isDark: theme.includes('dark'),
            isAliyun: theme.includes('aliyun'),
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
