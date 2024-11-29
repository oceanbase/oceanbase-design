import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { LinkProps as AntLinkProps } from 'antd/es/typography/Link';
import ConfigProvider from '../config-provider';
import useClassName from './hooks/useClassName';
import useStyle from './style';

const { Link: AntLink } = AntTypography;

export * from 'antd/es/typography/Link';

export interface LinkProps extends AntLinkProps {}

const Link = React.forwardRef<HTMLElement, LinkProps>(
  ({ editable, prefixCls: customizePrefixCls, className, children, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const typographyCls = useClassName(prefixCls, className, editable);

    return wrapSSR(
      <AntLink
        ref={ref}
        editable={editable}
        prefixCls={customizePrefixCls}
        className={typographyCls}
        {...restProps}
      >
        {children}
      </AntLink>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Link.displayName = AntLink.displayName;
}

export default Link;
