import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { TitleProps as AntTitleProps } from 'antd/es/typography/Title';
import classNames from 'classnames';
import ConfigProvider from '../config-provider';
import useStyle from './style';

const { Title: AntTitle } = AntTypography;

export * from 'antd/es/typography/Title';

export interface TitleProps extends AntTitleProps {}

const Title = React.forwardRef<HTMLDivElement, TitleProps>(
  ({ prefixCls: customizePrefixCls, children, className, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    const typographyCls = classNames(prefixCls, className);

    return wrapSSR(
      <AntTitle ref={ref} className={typographyCls} prefixCls={customizePrefixCls} {...restProps}>
        {children}
      </AntTitle>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Title.displayName = AntTitle.displayName;
}

export default Title;
