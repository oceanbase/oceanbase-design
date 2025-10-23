import React, { useContext } from 'react';
import { App as AntApp } from 'antd';
import type { AppProps } from 'antd/es/app';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/app';

export type AppType = React.FC<AppProps> & {
  useApp: typeof AntApp.useApp;
};

const App: AppType = ({ prefixCls: customizePrefixCls, ...restProps }) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('app', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const appCls = classNames(prefixCls);

  return wrapSSR(<AntApp prefixCls={customizePrefixCls} className={appCls} {...restProps} />);
};

App.useApp = AntApp.useApp;

if (process.env.NODE_ENV !== 'production') {
  App.displayName = AntApp.displayName;
}

export default App;
