import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { TitleProps as AntTitleProps } from 'antd/es/typography/Title';
import ConfigProvider from '../config-provider';
import useStyle from './style';

const { Title: AntTitle } = AntTypography;

export * from 'antd/es/typography/Title';

export interface TitleProps extends AntTitleProps {}

const Title = React.forwardRef<HTMLDivElement, TitleProps>(
  ({ prefixCls: customizePrefixCls, children, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    return wrapSSR(
      <AntTitle ref={ref} prefixCls={customizePrefixCls} {...restProps}>
        {children}
      </AntTitle>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Title.displayName = AntTitle.displayName;
}

export default Title;
