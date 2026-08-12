import React, { forwardRef, useContext, useEffect, useState } from 'react';
import { Input as AntInput } from 'antd';
import type { InputRef } from 'antd';
import type { PasswordProps as AntPasswordProps } from 'antd/es/input/Password';
import DisabledContext from 'antd/es/config-provider/DisabledContext';
import { EyeInvisibleOutlined, EyeOutlined } from '@oceanbase/icons';
import classNames from 'classnames';
import type { InputLocale } from './Input';
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

const defaultIconRender = (visible: boolean) =>
  visible ? <EyeOutlined /> : <EyeInvisibleOutlined />;

const actionMap = {
  click: 'onClick',
  hover: 'onMouseOver',
} as const;

const Password = forwardRef<InputRef, PasswordProps>(
  (
    {
      prefixCls: customizePrefixCls,
      locale: customLocale,
      showCount,
      autoComplete,
      action = 'click',
      visibilityToggle = true,
      iconRender = defaultIconRender,
      suffix,
      className,
      size,
      disabled: customDisabled,
      ...restProps
    },
    ref
  ) => {
    const { getPrefixCls, locale: contextLocale } = useContext<ConfigConsumerProps>(
      ConfigProvider.ConfigContext
    );
    const inputPrefixCls = getPrefixCls('input', customizePrefixCls);
    const prefixCls = getPrefixCls('input-password', customizePrefixCls);
    const [wrapCSSVar] = useStyle(inputPrefixCls);
    const inputLocale: InputLocale = {
      placeholder:
        contextLocale?.global?.inputPlaceholder || defaultLocale.global?.inputPlaceholder,
      ...defaultLocale.Input,
      ...contextLocale?.Input,
      ...customLocale,
    };

    // 以 type="text" + -webkit-text-security 呈现密码遮蔽，
    // 避免浏览器识别为原生密码框而弹出密码保存/填充下拉
    const disabled = useContext(DisabledContext);
    const mergedDisabled = customDisabled ?? disabled;

    const visibilityControlled =
      typeof visibilityToggle === 'object' && visibilityToggle.visible !== undefined;
    const [visible, setVisible] = useState<boolean>(() =>
      visibilityControlled ? (visibilityToggle.visible ?? false) : false
    );

    useEffect(() => {
      if (visibilityControlled) {
        setVisible(visibilityToggle.visible ?? false);
      }
    }, [visibilityControlled, visibilityToggle]);

    const onVisibleChange = () => {
      if (mergedDisabled) {
        return;
      }
      const nextVisible = !visible;
      setVisible(nextVisible);
      if (typeof visibilityToggle === 'object') {
        visibilityToggle.onVisibleChange?.(nextVisible);
      }
    };

    const getIcon = (iconPrefixCls: string) => {
      const icon = iconRender(visible);
      const iconTrigger = actionMap[action];
      const iconProps = {
        className: `${iconPrefixCls}-icon`,
        key: 'passwordIcon',
        onMouseDown: (e: React.MouseEvent<HTMLElement>) => {
          // 防止点击图标时输入框失焦
          e.preventDefault();
        },
        onMouseUp: (e: React.MouseEvent<HTMLElement>) => {
          // 防止光标位置变化
          e.preventDefault();
        },
        [iconTrigger]: onVisibleChange,
      };
      return React.cloneElement(React.isValidElement(icon) ? icon : <span>{icon}</span>, iconProps);
    };

    const inputClassName = classNames(prefixCls, className, {
      [`${prefixCls}-${size}`]: !!size,
    });

    const suffixIcon = visibilityToggle && getIcon(prefixCls);

    return wrapCSSVar(
      <AntInput
        ref={ref}
        type="text"
        prefixCls={customizePrefixCls}
        className={inputClassName}
        size={size}
        placeholder={inputLocale.placeholder}
        showCount={showCount === true ? { formatter: showCountFormatter } : showCount}
        autoComplete={autoComplete}
        disabled={customDisabled}
        suffix={
          <>
            {suffixIcon}
            {suffix}
          </>
        }
        classNames={{ input: visible ? undefined : `${inputPrefixCls}-text-security` }}
        {...(isNewPasswordField(autoComplete)
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
