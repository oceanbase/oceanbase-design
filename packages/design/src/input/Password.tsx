import React, { forwardRef, useContext } from 'react';
import { Input as AntInput } from 'antd';
import type { InputRef } from 'antd';
import type { PasswordProps as AntPasswordProps } from 'antd/es/input/Password';
import type { InputLocale } from './Input';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import { showCountFormatter } from './Input';
import NewPassword from './NewPassword';
import useStyle from './style';
import { resolveInputLocale } from './resolveInputLocale';

export * from 'antd/es/input/Password';

export interface PasswordProps extends AntPasswordProps {
  locale?: InputLocale;
}

function isNewPasswordField(autoComplete?: string): boolean {
  return autoComplete === 'new-password';
}

const Password = forwardRef<InputRef, PasswordProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    locale: customLocale,
    showCount,
    autoComplete,
    ...restProps
  } = props;

  const { getPrefixCls, locale: contextLocale } = useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );
  const inputPrefixCls = getPrefixCls('input', customizePrefixCls);
  const [wrapCSSVar] = useStyle(inputPrefixCls);

  if (isNewPasswordField(autoComplete)) {
    return wrapCSSVar(<NewPassword ref={ref} {...props} />);
  }

  const inputLocale = resolveInputLocale(contextLocale, customLocale);

  return wrapCSSVar(
    <AntInput.Password
      ref={ref}
      prefixCls={customizePrefixCls}
      placeholder={inputLocale.placeholder}
      showCount={showCount === true ? { formatter: showCountFormatter } : showCount}
      autoComplete={autoComplete}
      {...restProps}
    />
  );
});

if (process.env.NODE_ENV !== 'production') {
  Password.displayName = 'Password';
}

export default Password;
