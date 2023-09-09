import React from 'react';
import { App, ConfigProvider as AntConfigProvider } from 'antd';
import type {
  ConfigProviderProps as AntConfigProviderProps,
  ConfigConsumerProps as AntConfigConsumerProps,
  ThemeConfig as AntThemeConfig,
} from 'antd/es/config-provider';
import type { ComponentStyleConfig } from 'antd/es/config-provider/context';
import type { SpinIndicator } from 'antd/es/spin';
import StaticFunction from '../static-function';
import defaultTheme from '../theme';
import defaultThemeToken from '../theme/default';
import type { NavigateFunction } from './navigate';

export * from './navigate';
export * from 'antd/es/config-provider';

export interface ThemeConfig extends AntThemeConfig {
  isDark?: boolean;
}

export type SpinConfig = ComponentStyleConfig & {
  indicator?: SpinIndicator;
};

export interface ConfigConsumerProps extends AntConfigConsumerProps {
  spin?: SpinConfig;
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

const { defaultSeed, components } = defaultTheme;

// ConfigProvider 默认设置主题和内嵌 App，支持 message, notification 和 Modal 等静态方法消费 ConfigProvider 配置
// ref: https://ant.design/components/app-cn
const ConfigProvider = ({ children, theme, navigate, spin, ...restProps }: ConfigProviderProps) => {
  // inherit from parent ConfigProvider
  const parentContext = React.useContext<ExtendedConfigConsumerProps>(ExtendedConfigContext);
  return (
    <AntConfigProvider
      spin={spin}
      theme={{
        ...theme,
        // Only set seed token for dark theme
        // Because defaultThemeToken is designed for light theme
        token: theme?.isDark
          ? {
              ...defaultSeed,
              ...theme?.token,
            }
          : {
              ...defaultSeed,
              ...defaultThemeToken,
              ...theme?.token,
            },
        components: {
          ...components,
          ...theme?.components,
          InputNumber: {
            ...components?.InputNumber,
            ...theme?.components?.InputNumber,
          },
        },
      }}
      {...restProps}
    >
      <ExtendedConfigContext.Provider
        value={{
          navigate: navigate === undefined ? parentContext.navigate : navigate,
        }}
      >
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
ConfigProvider.SizeContext = AntConfigProvider.SizeContext;
ConfigProvider.config = AntConfigProvider.config;
ConfigProvider.useConfig = AntConfigProvider.useConfig;

if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = AntConfigProvider.displayName;
}

export default ConfigProvider;
