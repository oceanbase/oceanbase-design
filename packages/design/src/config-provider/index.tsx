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
import SizeContext from 'antd/es/config-provider/SizeContext';
import App from '../app';
import StaticFunction from '../static-function';
import themeConfig from '../theme';
import seedTheme from '../theme/default';
import darkTheme from '../theme/dark';
import compactSpacingTheme from '../theme/compactSpacing';
import { isTypographyThemeLocked, resolveLocaleTypographyPatch } from '../theme/localeTypography';
import DefaultRenderEmpty from './DefaultRenderEmpty';
import type { NavigateFunction } from './navigate';
import type { Locale } from '../locale';
import GlobalStyle from '../style/global';
import CssVariablesStyle from '../theme/obToken';
import type { OBFormConfig } from '../form/validateMode';
import { DEFAULT_REVALIDATE_MODE, DEFAULT_VALIDATE_MODE } from '../form/validateMode';

export * from './navigate';
export * from 'antd/es/config-provider/context';
export * from 'antd/es/config-provider/SizeContext';
export * from 'antd/es/config-provider/DisabledContext';
export * from 'antd/es/config-provider';

export { compactTheme, defaultTheme } from '../theme/localeTypography';

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

export type { OBFormConfig } from '../form/validateMode';
export type { FormReValidateMode, FormValidateMode } from '../form/validateMode';

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
  form?: AntConfigProviderProps['form'] & OBFormConfig;
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
  SizeContext: typeof SizeContext;
  config: typeof AntConfigProvider.config;
  useConfig: typeof AntConfigProvider.useConfig;
};

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
                Object.entries(seedTheme.token).filter(
                  ([key]) => !key?.toLowerCase()?.startsWith('color')
                )
              ),
            },
          }
      : undefined;
  const compactSpacingThemeConfig =
    isCompact && !isAliyun
      ? isDark
        ? compactSpacingTheme
        : {
            ...compactSpacingTheme,
            token: {
              ...compactSpacingTheme.token,
              ...Object.fromEntries(
                Object.entries(seedTheme.token).filter(
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
    isAliyun ? {} : isDark || isCompact ? themeConfig.defaultSeed : seedTheme,
    parentContext.theme,
    aliyunThemeConfig,
    darkThemeConfig,
    compactSpacingThemeConfig,
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

  const typographyLocked = isTypographyThemeLocked(mergedTheme);
  const resolvedTokens = {
    fontFamily,
    fontWeightWeak,
    fontWeight,
    fontWeightStrong,
  };
  const localeTypographyPatch = resolveLocaleTypographyPatch(
    mergedLocale,
    mergedTheme,
    fontSize,
    resolvedTokens,
    { sizeLocked: typographyLocked }
  );

  const resolvedAntTheme = merge({}, mergedTheme, localeTypographyPatch);

  // cssVar 模式下 App 必须有真实 DOM 节点挂载 cssVarCls，component={false} 会导致变量作用域丢失
  const cssVarEnabled = Boolean(resolvedAntTheme?.cssVar);
  const resolvedAppProps: AppProps = merge(
    {},
    cssVarEnabled ? { component: 'div' as const } : { component: false as const },
    appProps
  );

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
          validateMode: DEFAULT_VALIDATE_MODE,
          reValidateMode: DEFAULT_REVALIDATE_MODE,
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
      theme={resolvedAntTheme}
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
          <App {...resolvedAppProps}>
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
// Read SizeContext from the module directly instead of `AntConfigProvider.SizeContext`,
// which triggers antd's deprecated getter (`ConfigProvider.SizeContext`) and logs a warning.
ConfigProvider.SizeContext = SizeContext;
ConfigProvider.config = AntConfigProvider.config;
ConfigProvider.useConfig = AntConfigProvider.useConfig;

if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = AntConfigProvider.displayName;
}

export default ConfigProvider;
