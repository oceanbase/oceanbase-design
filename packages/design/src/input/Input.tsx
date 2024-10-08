import React, { forwardRef, useContext } from 'react';
import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps, InputRef } from 'antd';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';

export * from 'antd/es/input/Input';

export interface InputLocale {
  placeholder?: string;
}

export interface InputProps extends AntInputProps {
  locale?: InputLocale;
}

const Input = forwardRef<InputRef, InputProps>(({ locale: customLocale, ...restProps }, ref) => {
  const { locale: contextLocale } = useContext<ConfigConsumerProps>(ConfigProvider.ConfigContext);
  const inputLocale: InputLocale = {
    placeholder: contextLocale?.global?.inputPlaceholder || defaultLocale.global.inputPlaceholder,
    ...defaultLocale.Input,
    ...contextLocale?.Input,
    ...customLocale,
  };

  return <AntInput ref={ref} placeholder={inputLocale.placeholder} {...restProps} />;
});

if (process.env.NODE_ENV !== 'production') {
  Input.displayName = 'Input';
}

export default Input;
