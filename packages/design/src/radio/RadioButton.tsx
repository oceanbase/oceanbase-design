import { Radio as AntRadio } from 'antd';
import type { RadioButtonProps as AntRadioButtonProps } from 'antd/es/radio/radioButton';
import type { RadioRef } from 'antd/es/radio';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';

export interface RadioButtonProps extends AntRadioButtonProps {
  icon?: React.ReactNode;
}

const RadioButton = React.forwardRef<RadioRef, RadioButtonProps>(
  ({ prefixCls: customizePrefixCls, className, icon, children, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('radio', customizePrefixCls);

    const hasChildren = React.Children.count(children) > 0;
    const isIconOnly = icon && !hasChildren;

    const buttonPrefixCls = `${prefixCls}-button`;
    const buttonCls = classNames(
      {
        [`${buttonPrefixCls}-wrapper-with-icon`]: !!icon,
        [`${buttonPrefixCls}-wrapper-icon-only`]: isIconOnly,
      },
      className
    );

    return (
      <AntRadio.Button
        ref={ref}
        prefixCls={customizePrefixCls}
        className={buttonCls}
        {...restProps}
      >
        {icon ? (
          <>
            {icon}
            {children}
          </>
        ) : (
          children
        )}
      </AntRadio.Button>
    );
  }
);

RadioButton.displayName = 'Radio.Button';

export default RadioButton;
