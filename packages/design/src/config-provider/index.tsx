import React from 'react';
import { App, ConfigProvider as AntConfigProvider } from 'antd';
import type {
  ConfigProviderProps as AntConfigProviderProps,
  ConfigConsumerProps as AntConfigConsumerProps,
  ThemeConfig as AntThemeConfig,
} from 'antd/es/config-provider';
import type {
  ComponentStyleConfig,
  CardConfig as AntCardConfig,
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
import StaticFunction from '../static-function';
import themeConfig from '../theme';
import defaultTheme, { fontFamilyEn } from '../theme/default';
import darkTheme from '../theme/dark';
import DefaultRenderEmpty from './DefaultRenderEmpty';
import type { NavigateFunction } from './navigate';
import type { Locale } from '../locale';

export * from './navigate';
export * from 'antd/es/config-provider/context';
export * from 'antd/es/config-provider/SizeContext';
export * from 'antd/es/config-provider/DisabledContext';
export * from 'antd/es/config-provider';

export interface ThemeConfig extends AntThemeConfig {
  isDark?: boolean;
  isAliyun?: boolean;
}

export type CardConfig = AntCardConfig & {
  divided?: boolean;
};

export type SpinConfig = ComponentStyleConfig & {
  indicator?: SpinIndicator;
};

export type TableConfig = ComponentStyleConfig & {
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

const ConfigProvider: ConfigProviderType = ({
  children,
  theme,
  locale,
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
  const { isDark, isAliyun } = merge({}, parentContext.theme, theme);
  const customTheme = isAliyun ? aliyunTheme : isDark ? darkTheme : undefined;
  const mergedTheme = merge(
    {},
    customTheme ? {} : defaultTheme,
    parentContext.theme,
    customTheme,
    theme
  );

  const { token } = themeConfig.useToken();
  const fontFamily = mergedTheme.token?.fontFamily || token.fontFamily;

  // inherit from parent StyleProvider
  const parentStyleContext = React.useContext<StyleContextProps>(StyleContext);
  const mergedStyleProviderProps = merge({}, parentStyleContext, styleProviderProps);
  const mergedLocale = merge({}, parentContext.locale, locale);

  return (
    <AntConfigProvider
      locale={mergedLocale}
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
      table={merge({}, parentContext.table, table)}
      tabs={merge(
        {},
        {
          indicatorSize: (origin: number) => (origin >= 24 ? origin - 16 : origin),
        } as ConfigProviderProps['tabs'],
        parentContext.tabs,
        tabs
      )}
      theme={merge({}, mergedTheme, {
        token:
          // custom fontFamily
          fontFamily !== defaultTheme.token.fontFamily
            ? { fontFamily }
            : // use fontFamilyEn for en
              ['en', 'en-gb'].includes(mergedLocale.locale)
              ? {
                  fontFamily: fontFamilyEn,
                }
              : {},
      } as ConfigProviderProps['theme']['token'])}
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
