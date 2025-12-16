import { Radio as AntRadio } from 'antd';
import type { RadioProps as AntRadioProps, RadioRef } from 'antd/es/radio';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/radio';

const InternalRadio = React.forwardRef<RadioRef, AntRadioProps>(
  ({ prefixCls: customizePrefixCls, className, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('radio', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);
    const radioCls = classNames(className);
    return wrapCSSVar(
      <AntRadio ref={ref} prefixCls={customizePrefixCls} className={radioCls} {...restProps} />
    );
  }
);

const Radio = InternalRadio as typeof AntRadio;

Radio.Button = AntRadio.Button;
Radio.Group = AntRadio.Group;
// @ts-ignore
Radio.__ANT_RADIO = AntRadio.__ANT_RADIO;

if (process.env.NODE_ENV !== 'production') {
  Radio.displayName = AntRadio.displayName;
}

export default Radio;
