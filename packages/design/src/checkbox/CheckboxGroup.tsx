import { Checkbox as AntCheckbox } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

function InternalCheckboxGroup<T>(
  {
    prefixCls: customizePrefixCls,
    className,
    ...restProps
  }: CheckboxGroupProps<T> & React.RefAttributes<HTMLDivElement>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('checkbox', customizePrefixCls);
  const [wrapCSSVar] = useStyle(prefixCls);

  return wrapCSSVar(
    <AntCheckbox.Group
      ref={ref}
      prefixCls={customizePrefixCls}
      className={className}
      {...restProps}
    />
  );
}

const CheckboxGroup = React.forwardRef(InternalCheckboxGroup) as typeof AntCheckbox.Group & {
  displayName?: string;
};

CheckboxGroup.displayName = 'Checkbox.Group';

export default CheckboxGroup;
