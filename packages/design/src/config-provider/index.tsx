import React from 'react';
import { App, ConfigProvider as AntConfigProvider } from 'antd';
import type {
  ConfigProviderProps as AntConfigProviderProps,
  ConfigConsumerProps as AntConfigConsumerProps,
  ThemeConfig as AntThemeConfig,
} from 'antd/es/config-provider';
import type { ComponentStyleConfig } from 'antd/es/config-provider/context';
import type { SpinIndicator } from 'antd/es/spin';
import { merge } from 'lodash';
import StaticFunction from '../static-function';
import themeConfig from '../theme';
import defaultTheme from '../theme/default';
import darkTheme from '../theme/dark';
import type { NavigateFunction } from './navigate';
import { Locale } from '../locale';

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
  spin?: SpinConfig;
  locale?: Locale;
}

export interface ConfigProviderProps extends AntConfigProviderProps {
  theme?: ThemeConfig;
  // set global route navigate function
  // for react-router-dom v5: history.push
  // for react-router-dom v6: navigate
  navigate?: NavigateFunction;
  spin?: SpinConfig;
}

export interface ExtendedConfigConsumerProps {
  navigate?: NavigateFunction;
}

const ExtendedConfigContext = React.createContext<ExtendedConfigConsumerProps>({
  navigate: undefined,
});

const { defaultSeed } = themeConfig;

const ConfigProvider = ({
  children,
  theme,
  navigate,
  spin,
  tabs,
  ...restProps
}: ConfigProviderProps) => {
  // inherit from parent ConfigProvider
  const parentContext = React.useContext<ConfigConsumerProps>(AntConfigProvider.ConfigContext);
  const parentExtendedContext =
    React.useContext<ExtendedConfigConsumerProps>(ExtendedConfigContext);
  const mergedTheme = merge(parentContext.theme, theme);
  const currentTheme = mergedTheme.isDark ? darkTheme : defaultTheme;
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
          components: {
            ...currentTheme.components,
            Segmented: {
              itemHoverBg: theme?.isDark,
            },
          },
        },
        mergedTheme
      )}
      {...restProps}
    >
      <ExtendedConfigContext.Provider
        value={{
          navigate: navigate === undefined ? parentExtendedContext.navigate : navigate,
        }}
      >
        {/* Nested App component for static function of message, notification and Modal to consume ConfigProvider config */}
        {/* ref: https://ant.design/components/app */}
        <App>
          {children}
          <StaticFunction />
        </App>
      </ExtendedConfigContext.Provider>
    </AntConfigProvider>
  );
};

ConfigProvider.ConfigContext =
  AntConfigProvider.ConfigContext as React.Context<ConfigConsumerProps>;
ConfigProvider.ExtendedConfigContext = ExtendedConfigContext;
// SizeContext is deprecated
// ConfigProvider.SizeContext = AntConfigProvider.SizeContext;
ConfigProvider.config = AntConfigProvider.config;
ConfigProvider.useConfig = AntConfigProvider.useConfig;

if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = AntConfigProvider.displayName;
}

export default ConfigProvider;
