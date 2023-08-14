import React, { useContext } from 'react';
import { ConfigProvider } from '@oceanbase/design';
import classNames from 'classnames';
import LocaleWrapper from '../locale/LocaleWrapper';
import zhCN from './locale/zh-CN';
import useStyle from './style';

export interface GridLayoutLocale {}

export interface GridLayoutProps {}

const GridLayout = ({
  prefixCls: customizePrefixCls,
  className,
  locale,
  ...restProps
}: GridLayoutProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const prefixCls = getPrefixCls('pro-page-container', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  return wrapSSR();
};

export default LocaleWrapper({
  componentName: 'PageContainer',
  defaultLocale: zhCN,
})(GridLayout);
