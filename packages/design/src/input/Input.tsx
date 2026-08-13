import React, { forwardRef, useContext } from 'react';
import { Input as AntInput } from 'antd';
import type { InputProps as AntInputProps, InputRef } from 'antd';
import type { ShowCountFormatter } from 'rc-input/es/interface';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';
import useStyle from './style';

export * from 'antd/es/input/Input';

export interface InputLocale {
  placeholder?: string;
}

export interface InputProps extends AntInputProps {
  locale?: InputLocale;
}

export const showCountFormatter: ShowCountFormatter = ({ count, maxLength }) => {
  return `${count}/${maxLength}`;
};

const Input = forwardRef<InputRef, InputProps>(
  ({ prefixCls: customizePrefixCls, locale: customLocale, showCount, ...restProps }, ref) => {
    const { getPrefixCls, locale: contextLocale } = useContext<ConfigConsumerProps>(
      ConfigProvider.ConfigContext
    );
    const inputLocale: InputLocale = {
      placeholder:
        contextLocale?.global?.inputPlaceholder || defaultLocale.global?.inputPlaceholder,
      ...defaultLocale.Input,
      ...contextLocale?.Input,
      ...customLocale,
    };
    const prefixCls = getPrefixCls('input', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);

    return wrapCSSVar(
      <AntInput
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
  Input.displayName = 'Input';
}

export default Input;
