import { Checkbox as AntCheckbox } from 'antd';
import type { CheckboxProps as AntCheckboxProps, CheckboxRef } from 'antd/es/checkbox';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/checkbox';

const InternalCheckbox = React.forwardRef<CheckboxRef, AntCheckboxProps>(
  ({ prefixCls: customizePrefixCls, className, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);
    const checkboxCls = classNames(className);

    return wrapCSSVar(
      <AntCheckbox
        ref={ref}
        prefixCls={customizePrefixCls}
        className={checkboxCls}
        {...restProps}
      />
    );
  }
);

const Checkbox = InternalCheckbox as typeof Checkbox;

Checkbox.Group = AntCheckbox.Group;
// @ts-ignore
Checkbox.__ANT_CHECKBOX = AntCheckbox.__ANT_CHECKBOX;

if (process.env.NODE_ENV !== 'production') {
  Checkbox.displayName = AntCheckbox.displayName;
}

export default Checkbox;
