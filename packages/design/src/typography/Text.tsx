import React, { useContext } from 'react';
import { Typography as AntTypography } from 'antd';
import type { TextProps as AntTextProps } from 'antd/es/typography/Text';
import ConfigProvider from '../config-provider';
import useClassName from './hooks/useClassName';
import useStyle from './style';

const { Text: AntText } = AntTypography;

export * from 'antd/es/typography/Text';

export interface TextProps extends AntTextProps {}

const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  ({ editable, prefixCls: customizePrefixCls, className, children, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('typography', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const typographyCls = useClassName(prefixCls, className, editable);

    return wrapSSR(
      <AntText
        ref={ref}
        editable={editable}
        prefixCls={customizePrefixCls}
        className={typographyCls}
        {...restProps}
      >
        {children}
      </AntText>
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Text.displayName = AntText.displayName;
}

export default Text;
