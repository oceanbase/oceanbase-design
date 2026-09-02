import React, { forwardRef, useContext, useLayoutEffect, useRef, useState } from 'react';
import { Input as AntInput } from 'antd';
import type { InputRef } from 'antd';
import { composeRef } from 'rc-util/lib/ref';
import type { PasswordProps } from './Password';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import { showCountFormatter } from './Input';
import { resolveInputLocale } from './resolveInputLocale';

/**
 * new-password requires type=text plus text-security; cannot fully delegate to AntInput.Password.
 * Other behavior (visibility toggle, suffix, disabled) stays on antd; patch native input attrs after layout.
 */
const NewPassword = forwardRef<InputRef, PasswordProps>((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    locale: customLocale,
    showCount,
    autoComplete,
    visibilityToggle = true,
    ...restProps
  } = props;

  const { getPrefixCls, locale: contextLocale } = useContext<ConfigConsumerProps>(
    ConfigProvider.ConfigContext
  );
  const inputPrefixCls = getPrefixCls('input', customizePrefixCls);
  const inputLocale = resolveInputLocale(contextLocale, customLocale);
  const inputRef = useRef<InputRef>(null);

  const visibilityControlled =
    typeof visibilityToggle === 'object' && visibilityToggle.visible !== undefined;
  const [internalVisible, setInternalVisible] = useState(false);
  const visible = visibilityControlled ? (visibilityToggle.visible ?? false) : internalVisible;

  useLayoutEffect(() => {
    const input = inputRef.current?.input;
    if (!input) {
      return;
    }
    input.type = 'text';
    input.classList.toggle(`${inputPrefixCls}-text-security`, !visible);
  }, [visible, inputPrefixCls]);

  const resolvedVisibilityToggle =
    visibilityToggle === false
      ? false
      : {
          visible,
          onVisibleChange: (nextVisible: boolean) => {
            if (!visibilityControlled) {
              setInternalVisible(nextVisible);
            }
            if (typeof visibilityToggle === 'object') {
              visibilityToggle.onVisibleChange?.(nextVisible);
            }
          },
        };

  return (
    <AntInput.Password
      ref={composeRef(ref, inputRef)}
      prefixCls={customizePrefixCls}
      placeholder={inputLocale.placeholder}
      showCount={showCount === true ? { formatter: showCountFormatter } : showCount}
      autoComplete={autoComplete}
      visibilityToggle={resolvedVisibilityToggle}
      {...restProps}
      data-lpignore="true"
      data-1p-ignore="true"
      data-bwignore="true"
      data-form-type="other"
    />
  );
});

if (process.env.NODE_ENV !== 'production') {
  NewPassword.displayName = 'NewPassword';
}

export default NewPassword;
