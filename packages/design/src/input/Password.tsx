import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { Input as AntInput } from 'antd';
import type { PasswordProps as AntPasswordProps } from 'antd/es/input/Password';
import type { InputLocale, InputRef } from './Input';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';
import { showCountFormatter } from './Input';
import useStyle from './style';

export * from 'antd/es/input/Password';

export interface PasswordProps extends AntPasswordProps {
  locale?: InputLocale;
}

function isNewPasswordField(autoComplete?: string): boolean {
  return autoComplete === 'new-password';
}

const Password = forwardRef<InputRef, PasswordProps>(
  (
    {
      prefixCls: customizePrefixCls,
      locale: customLocale,
      showCount,
      autoComplete,
      readOnly,
      onFocus,
      onBlur,
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls, locale: contextLocale } = useContext<ConfigConsumerProps>(
      ConfigProvider.ConfigContext
    );
    const prefixCls = getPrefixCls('input', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);
    const preventSavedPasswordDropdown = isNewPasswordField(autoComplete);
    const [autofillLocked, setAutofillLocked] = useState(preventSavedPasswordDropdown);
    const inputLocale: InputLocale = {
      placeholder:
        contextLocale?.global?.inputPlaceholder || defaultLocale.global?.inputPlaceholder,
      ...defaultLocale.Input,
      ...contextLocale?.Input,
      ...customLocale,
    };

    useEffect(() => {
      setAutofillLocked(preventSavedPasswordDropdown);
    }, [preventSavedPasswordDropdown]);

    const handleFocus: AntPasswordProps['onFocus'] = e => {
      if (preventSavedPasswordDropdown) {
        setAutofillLocked(false);
      }
      onFocus?.(e);
    };

    const handleBlur: AntPasswordProps['onBlur'] = e => {
      if (preventSavedPasswordDropdown) {
        setAutofillLocked(true);
      }
      onBlur?.(e);
    };

    return wrapCSSVar(
      <AntInput.Password
        ref={ref}
        prefixCls={customizePrefixCls}
        placeholder={inputLocale.placeholder}
        showCount={showCount === true ? { formatter: showCountFormatter } : showCount}
        autoComplete={autoComplete}
        readOnly={readOnly ?? (preventSavedPasswordDropdown && autofillLocked)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...(preventSavedPasswordDropdown
          ? {
              'data-lpignore': 'true',
              'data-1p-ignore': 'true',
              'data-bwignore': 'true',
              'data-form-type': 'other',
            }
          : {})}
        {...restProps}
      />
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Password.displayName = 'Password';
}

export default Password;
