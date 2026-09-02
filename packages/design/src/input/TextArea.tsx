import React, { forwardRef, useContext } from 'react';
import { Input as AntInput } from 'antd';
import type { TextAreaProps as AntTextAreaProps } from 'antd/es/input/TextArea';
import type { InputLocale, InputRef } from './Input';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import { showCountFormatter } from './Input';
import useStyle from './style';
import { resolveInputLocale } from './resolveInputLocale';

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
    const [wrapCSSVar] = useStyle(prefixCls);
    const inputLocale = resolveInputLocale(contextLocale, customLocale);

    return wrapCSSVar(
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
