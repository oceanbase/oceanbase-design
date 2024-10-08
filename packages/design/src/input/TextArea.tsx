import React, { forwardRef, useContext } from 'react';
import { Input as AntInput } from 'antd';
import type { TextAreaProps as AntTextAreaProps } from 'antd/es/input/TextArea';
import type { InputLocale, InputRef } from './Input';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';

export * from 'antd/es/input/TextArea';

export interface TextAreaProps extends AntTextAreaProps {
  locale?: InputLocale;
}

const TextArea = forwardRef<InputRef, TextAreaProps>(
  ({ locale: customLocale, ...restProps }, ref) => {
    const { locale: contextLocale } = useContext<ConfigConsumerProps>(ConfigProvider.ConfigContext);
    const inputLocale: InputLocale = {
      placeholder: contextLocale?.global?.inputPlaceholder || defaultLocale.global.inputPlaceholder,
      ...defaultLocale.Input,
      ...contextLocale?.Input,
      ...customLocale,
    };

    return <AntInput.TextArea ref={ref} placeholder={inputLocale.placeholder} {...restProps} />;
  }
);

if (process.env.NODE_ENV !== 'production') {
  TextArea.displayName = 'TextArea';
}

export default TextArea;
