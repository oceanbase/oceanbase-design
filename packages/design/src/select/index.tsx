import { Select as AntSelect } from 'antd';
import type { SelectProps as AntSelectProps, RefSelectProps } from 'antd/es/select';
import type { OptGroup, Option } from 'rc-select';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/select';

export type SelectProps = AntSelectProps;

type CompoundedComponent = React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<RefSelectProps>
> & {
  Option: typeof Option;
  OptGroup: typeof OptGroup;
};

const InternalSelect = React.forwardRef<RefSelectProps, SelectProps>(
  ({ prefixCls: customizePrefixCls, className, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('select', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);

    const selectCls = classNames(className);
    return wrapSSR(
      <AntSelect ref={ref} prefixCls={customizePrefixCls} className={selectCls} {...restProps} />
    );
  }
);

const Select = InternalSelect as CompoundedComponent;

Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;

if (process.env.NODE_ENV !== 'production') {
  Select.displayName = AntSelect.displayName;
}

export default Select;
