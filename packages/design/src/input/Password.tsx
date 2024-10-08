import React, { forwardRef, useContext } from 'react';
import { Input as AntInput } from 'antd';
import type { PasswordProps as AntPasswordProps } from 'antd/es/input/Password';
import type { InputLocale, InputRef } from './Input';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';

export * from 'antd/es/input/Password';

export interface PasswordProps extends AntPasswordProps {
  locale?: InputLocale;
}

const Password = forwardRef<InputRef, PasswordProps>(
  ({ locale: customLocale, ...restProps }, ref) => {
    const { locale: contextLocale } = useContext<ConfigConsumerProps>(ConfigProvider.ConfigContext);
    const inputLocale: InputLocale = {
      placeholder: contextLocale?.global?.inputPlaceholder || defaultLocale.global.inputPlaceholder,
      ...defaultLocale.Input,
      ...contextLocale?.Input,
      ...customLocale,
    };

    return <AntInput.Password ref={ref} placeholder={inputLocale.placeholder} {...restProps} />;
  }
);

if (process.env.NODE_ENV !== 'production') {
  Password.displayName = 'Password';
}

export default Password;
