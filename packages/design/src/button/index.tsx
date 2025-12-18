import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd/es/button';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/button';

export type ButtonProps = AntButtonProps;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    { prefixCls: customizePrefixCls, className, loading, disabled, type, color, ...restProps },
    ref
  ) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('btn', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);
    const buttonCls = classNames(className);
    return wrapCSSVar(
      <AntButton
        ref={ref}
        prefixCls={customizePrefixCls}
        className={buttonCls}
        loading={loading}
        // if loading, set button to disabled style unless type is primary or danger or color is set
        disabled={loading && !['primary', 'danger'].includes(type) && !color ? true : disabled}
        type={type}
        color={color}
        {...restProps}
      />
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = AntButton.displayName;
}

export default Object.assign(Button, {
  Group: AntButton.Group,
  __ANT_BUTTON: (
    AntButton as typeof AntButton & {
      __ANT_BUTTON: boolean;
    }
  ).__ANT_BUTTON,
});
