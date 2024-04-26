import React from 'react';
import { App, ConfigProvider as AntConfigProvider } from 'antd';
import type {
  ConfigProviderProps as AntConfigProviderProps,
  ConfigConsumerProps as AntConfigConsumerProps,
  ThemeConfig as AntThemeConfig,
} from 'antd/es/config-provider';
import type { ComponentStyleConfig } from 'antd/es/config-provider/context';
import type { PaginationConfig } from 'antd/es/pagination';
import type { SpinIndicator } from 'antd/es/spin';
import { StyleProvider } from '@ant-design/cssinjs';
import type { StyleProviderProps } from '@ant-design/cssinjs';
import StyleContext from '@ant-design/cssinjs/es/StyleContext';
import type { StyleContextProps } from '@ant-design/cssinjs/es/StyleContext';
import { merge } from 'lodash';
import StaticFunction, { injectedStaticFunction } from '../static-function';
import themeConfig from '../theme';
import defaultTheme from '../theme/default';
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
  /* use custom font or not */
  customFont?: boolean;
}

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
  pagination?: PaginationConfig;
  spin?: SpinConfig;
  table?: TableConfig;
  // inject static function to consume ConfigProvider
  injectStaticFunction?: boolean;
  // StyleProvider props
  styleProviderProps?: StyleProviderProps;
}

export interface ExtendedConfigConsumerProps {
  navigate?: NavigateFunction;
  hideOnSinglePage?: boolean;
}

const ExtendedConfigContext = React.createContext<ExtendedConfigConsumerProps>({
  navigate: undefined,
  hideOnSinglePage: false,
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
  form,
  spin,
  table,
  tabs,
  injectStaticFunction = !injectedStaticFunction,
  styleProviderProps,
  ...restProps
}) => {
  // inherit from parent ConfigProvider
  const parentContext = React.useContext<ConfigConsumerProps>(AntConfigProvider.ConfigContext);
  const parentExtendedContext =
    React.useContext<ExtendedConfigConsumerProps>(ExtendedConfigContext);
  const mergedTheme = merge(parentContext.theme, theme);
  const currentTheme = mergedTheme?.isDark ? darkTheme : defaultTheme;
  const { token } = themeConfig.useToken();
  const fontFamily = mergedTheme.token?.fontFamily || token.fontFamily;
  const customFont = mergedTheme.customFont;

  // inherit from parent StyleProvider
  const parentStyleContext = React.useContext<StyleContextProps>(StyleContext);
  const mergedStyleProviderProps = merge(parentStyleContext, styleProviderProps);

  return (
    <AntConfigProvider
      locale={merge(parentContext.locale, locale)}
      form={merge(
        {
          requiredMark: 'optional',
        },
        parentContext.form,
        form
      )}
      spin={merge(parentContext.spin, spin)}
      table={merge(parentContext.table, table)}
      tabs={merge(
        {
          indicatorSize: origin => (origin >= 24 ? origin - 16 : origin),
        },
        parentContext.tabs,
        tabs
      )}
      theme={merge(currentTheme, mergedTheme, {
        token: {
          fontFamily:
            customFont && !fontFamily.startsWith(`'Source Sans Pro'`)
              ? `'Source Sans Pro', ${fontFamily}`
              : fontFamily,
        },
      })}
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
        }}
      >
        <StyleProvider {...mergedStyleProviderProps}>
          {/* Nested App component for static function of message, notification and Modal to consume ConfigProvider config */}
          {/* ref: https://ant.design/components/app */}
          <App component={false}>
            {children}
            {injectStaticFunction && <StaticFunction />}
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
