import React from 'react';
import { FooterToolbar as AntFooterToolbar } from '@ant-design/pro-components';
import type { FooterToolbarProps as AntFooterToolbarProps } from '@ant-design/pro-layout/es/components/FooterToolbar';

export type FooterToolbarProps = AntFooterToolbarProps;

const FooterToolbar: React.FC<FooterToolbarProps> = ({
  // render footer under parent instead of body by default
  portalDom = false,
  ...restProps
}) => {
  return <AntFooterToolbar portalDom={portalDom} {...restProps} />;
};

export default FooterToolbar;
