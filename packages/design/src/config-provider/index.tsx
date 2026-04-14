import React from 'react';
import { ConfigProvider as AntConfigProvider } from 'antd';
import type {
  ConfigProviderProps as AntConfigProviderProps,
  ConfigConsumerProps as AntConfigConsumerProps,
  ThemeConfig as AntThemeConfig,
} from 'antd/es/config-provider';
import type {
  ComponentStyleConfig,
  CardConfig as AntCardConfig,
  TableConfig as AntTableConfig,
} from 'antd/es/config-provider/context';
import type { AppProps } from 'antd/es/app';
import type { PaginationConfig } from 'antd/es/pagination';
import type { SpinIndicator } from 'antd/es/spin';
import { StyleProvider } from '@ant-design/cssinjs';
import type { StyleProviderProps } from '@ant-design/cssinjs';
import StyleContext from '@ant-design/cssinjs/es/StyleContext';
import type { StyleContextProps } from '@ant-design/cssinjs/es/StyleContext';
import { CaretRightOutlined } from '@oceanbase/icons';
import aliyunTheme from '@oceanbase/aliyun-theme';
import { merge } from 'lodash';
import App from '../app';
import StaticFunction from '../static-function';
import themeConfig from '../theme';
import defaultTheme, {
  fontFamilyEn,
  fontSizeCn,
  fontHeightCn,
  lineHeightCn,
  fontSizeEn,
  fontWeightWeakEn,
  fontWeightEn,
  fontWeightStrongEn,
  isCnLikeLocale,
  isEnLikeLocale,
  tableCellFontSizeEn,
} from '../theme/default';
import darkTheme from '../theme/dark';
import compactTheme from '../theme/compact';
import type { GlobalToken } from '../theme/interface';
import DefaultRenderEmpty from './DefaultRenderEmpty';
import type { NavigateFunction } from './navigate';
import type { Locale } from '../locale';
import GlobalStyle from '../style/global';
import CssVariablesStyle from '../theme/obToken';

export * from './navigate';
export * from 'antd/es/config-provider/context';
export * from 'antd/es/config-provider/SizeContext';
export * from 'antd/es/config-provider/DisabledContext';
export * from 'antd/es/config-provider';

export interface ThemeConfig extends AntThemeConfig {
  isAliyun?: boolean;
  isDark?: boolean;
  isCompact?: boolean;
}

export type CardConfig = AntCardConfig & {
  divided?: boolean;
};

export type SpinConfig = ComponentStyleConfig & {
  indicator?: SpinIndicator;
};

export type TableConfig = AntTableConfig & {
  selectionColumnWidth?: number;
};

export interface ConfigConsumerProps extends AntConfigConsumerProps {
  theme?: ThemeConfig;
  navigate?: NavigateFunction;
  hideOnSinglePage?: boolean;
  card?: CardConfig;
  spin?: SpinConfig;
  table?: TableConfig;
  builtInApp?: boolean;
  locale?: Locale;
}

export interface ConfigProviderProps extends AntConfigProviderProps {
  theme?: ThemeConfig;
  locale?: Locale;
  // set global route navigate function
  // for react-router-dom v5: history.push
  // for react-router-dom v6: navigate
  navigate?: NavigateFunction;
  hideOnSinglePage?: boolean;
  card?: CardConfig;
  pagination?: PaginationConfig;
  spin?: SpinConfig;
  table?: TableConfig;
  // StyleProvider props
  styleProviderProps?: StyleProviderProps;
  appProps?: AppProps;
}

export interface ExtendedConfigConsumerProps {
  navigate?: NavigateFunction;
  hideOnSinglePage?: boolean;
  // inject static function to ConfigProvider
  injectStaticFunction?: boolean;
}

const ExtendedConfigContext = React.createContext<ExtendedConfigConsumerProps>({
  navigate: undefined,
  hideOnSinglePage: false,
  injectStaticFunction: true,
});

export type ConfigProviderType = React.FC<ConfigProviderProps> & {
  ExtendedConfigContext: typeof ExtendedConfigContext;
} & {
  ConfigContext: React.Context<ConfigConsumerProps>;
  SizeContext: typeof AntConfigProvider.SizeContext;
  config: typeof AntConfigProvider.config;
  useConfig: typeof AntConfigProvider.useConfig;
};

/** `en` / `en-gb` → `tokenValueEn`（与 `fontFamilyEn` 等一致）。 */
const getLocaleTokenValue = (
  mergedThemeToken: GlobalToken,
  locale: Locale,
  tokenKey: string,
  tokenValue: string | number,
  tokenValueEn: string | number
) => {
  return tokenValue !== mergedThemeToken[tokenKey]
    ? { [tokenKey]: tokenValue }
    : ['en', 'en-gb'].includes(locale.locale)
      ? { [tokenKey]: tokenValueEn }
      : {};
};

/** Cn（zh/ja/ko）且仍为拉丁基线 `tokenValueEn` 时 → `tokenValueCn`，结构上与 {@link getLocaleTokenValue} 对称。 */
const getLocaleTokenValueCn = (
  mergedThemeToken: GlobalToken,
  locale: Locale,
  tokenKey: string,
  tokenValue: string | number | undefined,
  tokenValueEn: number,
  tokenValueCn: number
) => {
  return tokenValue !== mergedThemeToken[tokenKey]
    ? { [tokenKey]: tokenValue }
    : isCnLikeLocale(locale.locale) && (tokenValue === undefined || tokenValue === tokenValueEn)
      ? { [tokenKey]: tokenValueCn }
      : {};
};

/**
 * 按 locale 合并主题补丁：Cn 正文/表内字号、英文 Table 内嵌控件与分页对齐（`localeEnEmbeddedControls`）。
 * 供单测与 ConfigProvider 共用。
 */
export function getLocaleFontSizeThemePatch(
  mergedLocale: Locale,
  mergedTheme: ThemeConfig,
  resolvedFontSize: number | undefined
): ThemeConfig {
  const tokenPatch = getLocaleTokenValueCn(
    (mergedTheme.token ?? {}) as GlobalToken,
    mergedLocale,
    'fontSize',
    resolvedFontSize,
    fontSizeEn,
    fontSizeCn
  );

  const patch: ThemeConfig = {};
  if ('fontSize' in tokenPatch && tokenPatch.fontSize !== undefined) {
    patch.token = {
      fontSize: tokenPatch.fontSize as number,
      lineHeight: lineHeightCn,
      fontHeight: fontHeightCn,
    } as ThemeConfig['token'];
  }

  const tablePatch: NonNullable<ThemeConfig['components']>['Table'] = {};

  const cellFs = mergedTheme.components?.Table?.cellFontSize;
  if (
    (cellFs === undefined || cellFs === tableCellFontSizeEn) &&
    isCnLikeLocale(mergedLocale.locale)
  ) {
    Object.assign(tablePatch, { cellFontSize: fontSizeCn });
  }

  if (isEnLikeLocale(mergedLocale.locale)) {
    Object.assign(tablePatch, { localeEnEmbeddedControls: true });
  }

  if (Object.keys(tablePatch as object).length > 0) {
    patch.components = { Table: tablePatch };
  }

  return patch;
}

const ConfigProvider: ConfigProviderType = ({
  children,
  theme,
  locale,
  wave,
  navigate,
  hideOnSinglePage,
  card,
  collapse,
  form,
  spin,
  table,
  tabs,
  styleProviderProps,
  appProps,
  ...restProps
}) => {
  // inherit from parent ConfigProvider
  const parentContext = React.useContext<ConfigConsumerProps>(AntConfigProvider.ConfigContext);
  const parentExtendedContext =
    React.useContext<ExtendedConfigConsumerProps>(ExtendedConfigContext);
  const { isAliyun, isDark, isCompact } = merge({}, parentContext.theme, theme);
  const aliyunThemeConfig = isAliyun ? aliyunTheme : undefined;
  const darkThemeConfig =
    isDark && !isAliyun
      ? isCompact
        ? darkTheme
        : {
            ...darkTheme,
            token: {
              ...darkTheme.token,
              ...Object.fromEntries(
                Object.entries(defaultTheme.token).filter(
                  ([key]) => !key?.toLowerCase()?.startsWith('color')
                )
              ),
            },
          }
      : undefined;
  const compactThemeConfig =
    isCompact && !isAliyun
      ? isDark
        ? compactTheme
        : {
            ...compactTheme,
            token: {
              ...compactTheme.token,
              ...Object.fromEntries(
                Object.entries(defaultTheme.token).filter(
                  ([key]) =>
                    key?.toLowerCase()?.startsWith('color') &&
                    !['colorBgBase', 'colorTextBase'].includes(key)
                )
              ),
            },
          }
      : undefined;
  const mergedTheme = merge(
    {},
    isAliyun ? {} : isDark || isCompact ? themeConfig.defaultSeed : defaultTheme,
    parentContext.theme,
    aliyunThemeConfig,
    darkThemeConfig,
    compactThemeConfig,
    theme
  );

  const { token } = themeConfig.useToken();
  const fontFamily = mergedTheme.token?.fontFamily || token.fontFamily;
  const fontSize = mergedTheme.token?.fontSize ?? token.fontSize;
  const fontWeightWeak = mergedTheme.token?.fontWeightWeak || token.fontWeightWeak;
  const fontWeight = mergedTheme.token?.fontWeight || token.fontWeight;
  const fontWeightStrong = mergedTheme.token?.fontWeightStrong || token.fontWeightStrong;

  // inherit from parent StyleProvider
  const parentStyleContext = React.useContext<StyleContextProps>(StyleContext);
  const mergedStyleProviderProps = merge({}, parentStyleContext, styleProviderProps);
  const mergedLocale = merge({}, parentContext.locale, locale);

  return (
    <AntConfigProvider
      locale={mergedLocale}
      wave={merge(
        {},
        {
          disabled: true,
        } as ConfigProviderProps['wave'],
        parentContext.wave,
        wave
      )}
      card={merge({}, parentContext.card, card)}
      collapse={merge(
        {},
        {
          expandIcon: ({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />,
        } as ConfigProviderProps['collapse'],
        parentContext.collapse,
        collapse
      )}
      form={merge(
        {},
        {
          requiredMark: 'optional',
        } as ConfigProviderProps['form'],
        parentContext.form,
        form
      )}
      spin={merge({}, parentContext.spin, spin)}
      table={
        merge(
          {},
          {
            expandable: {
              expandIcon: ({ expandable, expanded, onExpand, record }) =>
                expandable && (
                  <CaretRightOutlined
                    onClick={e => onExpand(record, e)}
                    style={{
                      // marginRight: mergedTheme.token?.marginXS || 8,
                      transition: `transform 0.2s`,
                      transform: expanded ? 'rotate(90deg)' : undefined,
                      color: mergedTheme.token?.colorIcon || mergedTheme.token?.colorTextSecondary,
                    }}
                  />
                ),
            },
          },
          parentContext.table,
          table
        ) as TableConfig
      }
      tabs={merge({}, parentContext.tabs, tabs)}
      theme={merge(
        {},
        mergedTheme,
        getLocaleFontSizeThemePatch(mergedLocale, mergedTheme, fontSize),
        {
          token: {
            ...getLocaleTokenValue(
              mergedTheme.token || {},
              mergedLocale,
              'fontFamily',
              fontFamily,
              fontFamilyEn
            ),
            ...getLocaleTokenValue(
              mergedTheme.token || {},
              mergedLocale,
              'fontWeightWeak',
              fontWeightWeak,
              fontWeightWeakEn
            ),
            ...getLocaleTokenValue(
              mergedTheme.token || {},
              mergedLocale,
              'fontWeight',
              fontWeight,
              fontWeightEn
            ),
            ...getLocaleTokenValue(
              mergedTheme.token || {},
              mergedLocale,
              'fontWeightStrong',
              fontWeightStrong,
              fontWeightStrongEn
            ),
          },
        } as ConfigProviderProps['theme']
      )}
      renderEmpty={
        parentContext.renderEmpty ||
        (componentName => <DefaultRenderEmpty componentName={componentName} />)
      }
      {...restProps}
    >
      <ExtendedConfigContext.Provider
        value={{
          navigate: navigate === undefined ? parentExtendedContext.navigate : navigate,
          hideOnSinglePage: parentContext.pagination?.showSizeChanger
            ? false
            : hideOnSinglePage !== undefined
              ? hideOnSinglePage
              : parentExtendedContext.hideOnSinglePage,
          // inject static function to outermost ConfigProvider only
          injectStaticFunction: false,
        }}
      >
        <StyleProvider {...mergedStyleProviderProps}>
          {/* Inject CSS variables via cssinjs */}
          <CssVariablesStyle />
          {/* Inject global styles via cssinjs */}
          <GlobalStyle prefixCls={restProps.prefixCls} iconPrefixCls={restProps.iconPrefixCls} />
          {/* Nested App component for static function of message, notification and Modal to consume ConfigProvider config */}
          {/* ref: https://ant.design/components/app */}
          <App component={false} {...appProps}>
            {children}
            {parentExtendedContext.injectStaticFunction && <StaticFunction />}
          </App>
        </StyleProvider>
      </ExtendedConfigContext.Provider>
    </AntConfigProvider>
  );
};

ConfigProvider.ConfigContext = AntConfigProvider.ConfigContext;
ConfigProvider.ExtendedConfigContext = ExtendedConfigContext;
ConfigProvider.SizeContext = AntConfigProvider.SizeContext;
ConfigProvider.config = AntConfigProvider.config;
ConfigProvider.useConfig = AntConfigProvider.useConfig;

if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = AntConfigProvider.displayName;
}

export default ConfigProvider;
