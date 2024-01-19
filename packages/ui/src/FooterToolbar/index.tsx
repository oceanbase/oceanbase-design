import React, { useContext } from 'react';
import { FooterToolbar as AntFooterToolbar } from '@ant-design/pro-components';
import type { FooterToolbarProps as AntFooterToolbarProps } from '@ant-design/pro-layout/es/components/FooterToolbar';
import { ConfigProvider, theme } from '@oceanbase/design';
import useStyle from './style';

export type FooterToolbarProps = AntFooterToolbarProps;

const FooterToolbar: React.FC<FooterToolbarProps> = ({
  // render footer under parent instead of body by default
  portalDom = false,
  prefixCls: customizePrefixCls,
  children,
  ...restProps
}) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('pro-footer-bar', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);

  const { token } = theme.useToken();

  return wrapSSR(
    <AntFooterToolbar portalDom={portalDom} prefixCls={customizePrefixCls} {...restProps}>
      <ConfigProvider
        // large size component
        componentSize="large"
        // middle font size
        theme={{
          token: {
            fontSizeLG: token.fontSize,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntFooterToolbar>
  );
};

export default FooterToolbar;
