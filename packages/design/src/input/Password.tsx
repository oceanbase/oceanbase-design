import React, { forwardRef, useContext } from 'react';
import { Input as AntInput } from 'antd';
import type { InputRef } from 'antd';
import type { PasswordProps as AntPasswordProps } from 'antd/es/input/Password';
import type { InputLocale } from './Input';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import { showCountFormatter } from './Input';
import useStyle from './style';
import { resolveInputLocale } from './resolveInputLocale';

export * from 'antd/es/input/Password';

export interface PasswordProps extends AntPasswordProps {
  locale?: InputLocale;
}

function isNewPasswordField(autoComplete?: string): boolean {
  return autoComplete === 'new-password';
}

const NEW_PASSWORD_MANAGER_ATTRS = {
  'data-lpignore': 'true',
  'data-1p-ignore': 'true',
  'data-bwignore': 'true',
  'data-form-type': 'other',
} as const;

const Password = forwardRef<InputRef, PasswordProps>(
  (
    { prefixCls: customizePrefixCls, locale: customLocale, showCount, autoComplete, ...restProps },
    ref
  ) => {
    const { getPrefixCls, locale: contextLocale } = useContext<ConfigConsumerProps>(
      ConfigProvider.ConfigContext
    );
    const inputPrefixCls = getPrefixCls('input', customizePrefixCls);
    const [wrapCSSVar] = useStyle(inputPrefixCls);
    const inputLocale = resolveInputLocale(contextLocale, customLocale);

    return wrapCSSVar(
      <AntInput.Password
        ref={ref}
        prefixCls={customizePrefixCls}
        placeholder={inputLocale.placeholder}
        showCount={showCount === true ? { formatter: showCountFormatter } : showCount}
        autoComplete={autoComplete}
        {...restProps}
        {...(isNewPasswordField(autoComplete) ? NEW_PASSWORD_MANAGER_ATTRS : {})}
      />
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Password.displayName = 'Password';
}

export default Password;
