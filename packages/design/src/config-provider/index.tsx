import React from 'react';
import { App, ConfigProvider as AntConfigProvider } from 'antd';
import type {
  ConfigProviderProps as AntConfigProviderProps,
  ConfigConsumerProps as AntConfigConsumerProps,
  ThemeConfig as AntThemeConfig,
} from 'antd/es/config-provider';
import type { ComponentStyleConfig } from 'antd/es/config-provider/context';
import type { SpinIndicator } from 'antd/es/spin';
import { StyleProvider } from '@ant-design/cssinjs';
import type { StyleProviderProps } from '@ant-design/cssinjs';
import StyleContext from '@ant-design/cssinjs/es/StyleContext';
import type { StyleContextProps } from '@ant-design/cssinjs/es/StyleContext';
import { merge } from 'lodash';
import StaticFunction from '../static-function';
import themeConfig from '../theme';
import defaultTheme from '../theme/default';
import darkTheme from '../theme/dark';
import type { NavigateFunction } from './navigate';
import type { Locale } from '../locale';

export * from './navigate';
export * from 'antd/es/config-provider/context';
export * from 'antd/es/config-provider/SizeContext';
export * from 'antd/es/config-provider/DisabledContext';
export * from 'antd/es/config-provider';

export interface ThemeConfig extends AntThemeConfig {
  isDark?: boolean;
}

export type SpinConfig = ComponentStyleConfig & {
  indicator?: SpinIndicator;
};

export interface ConfigConsumerProps extends AntConfigConsumerProps {
  theme?: ThemeConfig;
  navigate?: NavigateFunction;
  hideOnSinglePage?: boolean;
  spin?: SpinConfig;
  locale?: Locale;
}

export interface ConfigProviderProps extends AntConfigProviderProps {
  theme?: ThemeConfig;
  // set global route navigate function
  // for react-router-dom v5: history.push
  // for react-router-dom v6: navigate
  navigate?: NavigateFunction;
  hideOnSinglePage?: boolean;
  spin?: SpinConfig;
  // StyleProvider props
  styleProviderProps?: StyleProviderProps;
}

export interface ExtendedConfigConsumerProps {
  navigate?: NavigateFunction;
  hideOnSinglePage?: boolean;
}

const ExtendedConfigContext = React.createContext<ExtendedConfigConsumerProps>({
  navigate: undefined,
  hideOnSinglePage: true,
});

const { defaultSeed } = themeConfig;

const ConfigProvider = ({
  children,
  theme,
  navigate,
  hideOnSinglePage,
  spin,
  tabs,
  styleProviderProps,
  ...restProps
}: ConfigProviderProps) => {
  // inherit from parent ConfigProvider
  const parentContext = React.useContext<ConfigConsumerProps>(AntConfigProvider.ConfigContext);
  const parentExtendedContext =
    React.useContext<ExtendedConfigConsumerProps>(ExtendedConfigContext);
  const mergedTheme = merge(parentContext.theme, theme);
  const currentTheme = mergedTheme?.isDark ? darkTheme : defaultTheme;

  // inherit from parent StyleProvider
  const parentStyleContext = React.useContext<StyleContextProps>(StyleContext);
  const mergedStyleProviderProps = merge(parentStyleContext, styleProviderProps);

  return (
    <AntConfigProvider
      spin={merge(parentContext.spin, spin)}
      tabs={merge(
        {
          indicatorSize: origin => (origin >= 24 ? origin - 16 : origin),
        },
        parentContext.tabs,
        tabs
      )}
      theme={merge(
        {
          token: {
            ...defaultSeed,
            ...currentTheme.token,
          },
          components: currentTheme.components,
        },
        mergedTheme
      )}
      {...restProps}
    >
      <ExtendedConfigContext.Provider
        value={{
          navigate: navigate === undefined ? parentExtendedContext.navigate : navigate,
          hideOnSinglePage:
            hideOnSinglePage === undefined
              ? parentExtendedContext.hideOnSinglePage
              : hideOnSinglePage,
        }}
      >
        <StyleProvider {...mergedStyleProviderProps}>
          {/* Nested App component for static function of message, notification and Modal to consume ConfigProvider config */}
          {/* ref: https://ant.design/components/app */}
          <App>
            {children}
            <StaticFunction />
          </App>
        </StyleProvider>
      </ExtendedConfigContext.Provider>
    </AntConfigProvider>
  );
};

ConfigProvider.ConfigContext =
  AntConfigProvider.ConfigContext as React.Context<ConfigConsumerProps>;
ConfigProvider.ExtendedConfigContext = ExtendedConfigContext;
ConfigProvider.SizeContext = AntConfigProvider.SizeContext;
ConfigProvider.config = AntConfigProvider.config;
ConfigProvider.useConfig = AntConfigProvider.useConfig;

if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = AntConfigProvider.displayName;
}

export default ConfigProvider;
