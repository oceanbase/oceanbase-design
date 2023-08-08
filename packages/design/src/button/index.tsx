import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd/es/button';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/button';

export type ButtonProps = AntButtonProps;

const Button = ({ prefixCls: customizePrefixCls, className, ...restProps }: ButtonProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('btn', customizePrefixCls);
  const { wrapSSR } = useStyle(prefixCls);
  const buttonCls = classNames(className);
  return wrapSSR(<AntButton prefixCls={customizePrefixCls} className={buttonCls} {...restProps} />);
};

Button.Group = AntButton.Group;
Button.__ANT_BUTTON = (
  AntButton as typeof AntButton & {
    __ANT_BUTTON: boolean;
  }
).__ANT_BUTTON;

if (process.env.NODE_ENV !== 'production') {
  Button.displayName = AntButton.displayName;
}

export default Button;
