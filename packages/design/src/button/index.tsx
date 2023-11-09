import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd/es/button';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/button';

export type ButtonProps = AntButtonProps;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ prefixCls: customizePrefixCls, className, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('btn', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const buttonCls = classNames(className);
    return wrapSSR(
      <AntButton ref={ref} prefixCls={customizePrefixCls} className={buttonCls} {...restProps} />
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
