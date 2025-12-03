import React, { forwardRef, useContext } from 'react';
import { Input as AntInput } from 'antd';
import type { TextAreaProps as AntTextAreaProps } from 'antd/es/input/TextArea';
import type { InputLocale, InputRef } from './Input';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';
import { showCountFormatter } from './Input';
import useStyle from './style';

export * from 'antd/es/input/TextArea';

export interface TextAreaProps extends AntTextAreaProps {
  locale?: InputLocale;
}

const TextArea = forwardRef<InputRef, TextAreaProps>(
  ({ prefixCls: customizePrefixCls, locale: customLocale, showCount, ...restProps }, ref) => {
    const { getPrefixCls, locale: contextLocale } = useContext<ConfigConsumerProps>(
      ConfigProvider.ConfigContext
    );
    const prefixCls = getPrefixCls('input', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const inputLocale: InputLocale = {
      placeholder:
        contextLocale?.global?.inputPlaceholder || defaultLocale.global?.inputPlaceholder,
      ...defaultLocale.Input,
      ...contextLocale?.Input,
      ...customLocale,
    };

    return wrapSSR(
      <AntInput.TextArea
        ref={ref}
        prefixCls={customizePrefixCls}
        placeholder={inputLocale.placeholder}
        showCount={showCount === true ? { formatter: showCountFormatter } : showCount}
        {...restProps}
      />
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  TextArea.displayName = 'TextArea';
}

export default TextArea;
