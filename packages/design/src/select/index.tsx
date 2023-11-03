import { Select as AntSelect } from 'antd';
import type { SelectProps as AntSelectProps, RefSelectProps } from 'antd/es/select';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

const { Option, OptGroup } = AntSelect;

export * from 'antd/es/select';

export type SelectProps = AntSelectProps;

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

const Select = InternalSelect as typeof InternalSelect & {
  Option: typeof Option;
  OptGroup: typeof OptGroup;
};

Select.Option = Option;
Select.OptGroup = OptGroup;

if (process.env.NODE_ENV !== 'production') {
  Select.displayName = AntSelect.displayName;
}

export default Select;
