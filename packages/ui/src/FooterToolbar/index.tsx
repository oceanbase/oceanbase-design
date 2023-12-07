import React, { useContext } from 'react';
import { FooterToolbar as AntFooterToolbar } from '@ant-design/pro-components';
import type { FooterToolbarProps as AntFooterToolbarProps } from '@ant-design/pro-layout/es/components/FooterToolbar';
import { ConfigProvider } from '@oceanbase/design';
import useStyle from './style';

export type FooterToolbarProps = AntFooterToolbarProps;

const FooterToolbar: React.FC<FooterToolbarProps> = ({
  // render footer under parent instead of body by default
  portalDom = false,
  prefixCls: customizePrefixCls,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('pro-footer-bar', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  return wrapSSR(
    <AntFooterToolbar portalDom={portalDom} prefixCls={customizePrefixCls} {...restProps} />
  );
};

export default FooterToolbar;
