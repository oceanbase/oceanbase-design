import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { LinkProps as AntLinkProps } from 'antd/es/typography/Link';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';

const { Link: AntLink } = AntTypography;

export * from 'antd/es/typography/Link';

export interface LinkProps extends AntLinkProps {}

const Link = React.forwardRef<HTMLDivElement, LinkProps>(
  ({ prefixCls: customizePrefixCls, children, className, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    const typographyCls = classNames(prefixCls, className);

    return wrapSSR(
      <AntLink ref={ref} className={typographyCls} prefixCls={customizePrefixCls} {...restProps}>
        {children}
      </AntLink>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Link.displayName = AntLink.displayName;
}

export default Link;
