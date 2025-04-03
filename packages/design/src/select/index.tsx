import { Select as AntSelect } from 'antd';
import type {
  SelectProps as AntSelectProps,
  RefSelectProps,
  BaseOptionType,
  DefaultOptionType,
} from 'antd/es/select';
import type { Locale as AntLocale } from 'antd/es/locale';
import type { OptGroup, Option } from 'rc-select';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';
import useStyle from './style';

export * from 'antd/es/select';

export type SelectLocale = AntLocale['Select'] & {
  placeholder?: string;
};

export interface SelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends Omit<AntSelectProps<ValueType, OptionType>, 'variant'> {
  locale?: SelectLocale;
  variant?: AntSelectProps['variant'] | 'text';
}

type CompoundedComponent = React.ForwardRefExoticComponent<
  SelectProps<any, any> & React.RefAttributes<RefSelectProps>
> & {
  // need to use Option and OptGroup from rc-select to avoid ts error
  Option: typeof Option;
  OptGroup: typeof OptGroup;
  _InternalPanelDoNotUseOrYouWillBeFired: typeof AntSelect._InternalPanelDoNotUseOrYouWillBeFired;
};

const InternalSelect = React.forwardRef<RefSelectProps, SelectProps<any, any>>(
  (
    { locale: customLocale, prefixCls: customizePrefixCls, className, variant, ...restProps },
    ref
  ) => {
    const { locale: contextLocale, getPrefixCls } = useContext<ConfigConsumerProps>(
      ConfigProvider.ConfigContext
    );
    const selectLocale: SelectLocale = {
      ...defaultLocale.global,
      ...contextLocale?.global,
      ...defaultLocale.Select,
      ...contextLocale?.Select,
      ...customLocale,
    };

    const prefixCls = getPrefixCls('select', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const selectCls = classNames(className, {
      [`${prefixCls}-text`]: variant === 'text',
    });

    return wrapSSR(
      <AntSelect
        ref={ref}
        placeholder={selectLocale.placeholder}
        prefixCls={customizePrefixCls}
        className={selectCls}
        variant={variant === 'text' ? undefined : variant}
        {...restProps}
      />
    );
  }
);

const Select = InternalSelect as CompoundedComponent;

Select.Option = AntSelect.Option;
Select.OptGroup = AntSelect.OptGroup;

Select._InternalPanelDoNotUseOrYouWillBeFired = AntSelect._InternalPanelDoNotUseOrYouWillBeFired;

if (process.env.NODE_ENV !== 'production') {
  Select.displayName = AntSelect.displayName;
}

export default Select;
