import React, { useContext } from 'react';
import { FooterToolbar as AntFooterToolbar } from '@ant-design/pro-components';
import type { FooterToolbarProps as AntFooterToolbarProps } from '@ant-design/pro-layout/es/components/FooterToolbar';
import { ConfigProvider } from '@oceanbase/design';
import type { LocaleWrapperProps } from '../locale/LocaleWrapper';
import LocaleWrapper from '../locale/LocaleWrapper';
import useStyle from './style';
import zhCN from './locale/zh-CN';

export interface FooterToolbarProps extends AntFooterToolbarProps, LocaleWrapperProps {
  /** 覆盖 locale 中的 toolbar 可访问名称 */
  toolbarAriaLabel?: string;
}

const FooterToolbar: React.FC<FooterToolbarProps> = props => {
  const {
    portalDom = false,
    prefixCls: customizePrefixCls,
    toolbarAriaLabel,
    locale,
    ...rest
  } = props;
  const { theme: _injectedTheme, ...restProps } = rest as typeof rest & {
    theme?: { hashed?: boolean };
  };
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('pro-footer-bar', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const label = toolbarAriaLabel ?? locale?.toolbarLabel;

  return wrapSSR(
    <div role="toolbar" aria-label={label}>
      <AntFooterToolbar portalDom={portalDom} prefixCls={customizePrefixCls} {...restProps} />
    </div>
  );
};

export default LocaleWrapper({
  componentName: 'FooterToolbar',
  defaultLocale: zhCN,
})(FooterToolbar);
