import React from 'react';
import { App, ConfigProvider as AntConfigProvider } from 'antd';
import type {
  ConfigProviderProps as AntConfigProviderProps,
  ThemeConfig as AntThemeConfig,
} from 'antd/es/config-provider';
import StaticFunction, { token } from '../static-function';
import defaultTheme from '../theme';
import defaultThemeToken from '../theme/default';
import type { NavigateFunction } from './navigate';

export * from './navigate';
export * from 'antd/es/config-provider';

export interface ThemeConfig extends AntThemeConfig {
  isDark?: boolean;
}

export interface ConfigProviderProps extends AntConfigProviderProps {
  theme?: ThemeConfig;
  // set global route navigate function
  // for react-router-dom v5: history.push
  // for react-router-dom v6: navigate
  navigate?: NavigateFunction;
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
const ConfigProvider = ({ children, theme, navigate, ...restProps }: ConfigProviderProps) => {
  return (
    <AntConfigProvider
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
          Segmented: {
            itemSelectedColor: token.colorPrimary
          }
        },
      }}
      {...restProps}
    >
      <ExtendedConfigContext.Provider
        value={{
          navigate,
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

ConfigProvider.ConfigContext = AntConfigProvider.ConfigContext;
ConfigProvider.ExtendedConfigContext = ExtendedConfigContext;
ConfigProvider.SizeContext = AntConfigProvider.SizeContext;
ConfigProvider.config = AntConfigProvider.config;
ConfigProvider.useConfig = AntConfigProvider.useConfig;

if (process.env.NODE_ENV !== 'production') {
  ConfigProvider.displayName = AntConfigProvider.displayName;
}

export default ConfigProvider;
