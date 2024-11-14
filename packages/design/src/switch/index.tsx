import { Switch as AntSwitch } from 'antd';
import type { SwitchProps as AntSwitchProps } from 'antd/es/switch';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/switch';

const InternalSwitch = React.forwardRef<HTMLButtonElement, AntSwitchProps>(
  ({ prefixCls: customizePrefixCls, className, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('switch', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const switchCls = classNames(className);
    return wrapSSR(
      <AntSwitch ref={ref} prefixCls={customizePrefixCls} className={switchCls} {...restProps} />
    );
  }
);

const Switch = InternalSwitch as typeof AntSwitch;

// @ts-ignore
Switch.__ANT_SWITCH = AntSwitch.__ANT_SWITCH;

if (process.env.NODE_ENV !== 'production') {
  Switch.displayName = AntSwitch.displayName;
}

export default Switch;
