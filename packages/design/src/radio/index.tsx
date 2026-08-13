import { Radio as AntRadio } from 'antd';
import type { RadioProps as AntRadioProps, RadioRef } from 'antd/es/radio';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import RadioButton from './RadioButton';
import useStyle from './style';

export * from 'antd/es/radio';
export type { RadioButtonProps } from './RadioButton';

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

const Radio = InternalRadio as typeof AntRadio & { Button: typeof RadioButton };

Radio.Button = RadioButton;
Radio.Group = AntRadio.Group;
// @ts-ignore
Radio.__ANT_RADIO = AntRadio.__ANT_RADIO;

if (process.env.NODE_ENV !== 'production') {
  Radio.displayName = AntRadio.displayName;
}

export default Radio;
