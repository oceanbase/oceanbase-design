import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { TextProps as AntTextProps } from 'antd/es/typography/Text';
import ConfigProvider from '../config-provider';
import useStyle from './style';

const { Text: AntText } = AntTypography;

export * from 'antd/es/typography/Text';

export interface TextProps extends AntTextProps {}

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ prefixCls: customizePrefixCls, children, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    return wrapSSR(
      <AntText ref={ref} prefixCls={customizePrefixCls} {...restProps}>
        {children}
      </AntText>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Text.displayName = AntText.displayName;
}

export default Text;
