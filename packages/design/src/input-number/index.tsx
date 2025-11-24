import { InputNumber as AntInputNumber } from 'antd';
import type { InputNumberProps as AntInputNumberProps } from 'antd/es/input-number';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import type { ConfigConsumerProps } from '../config-provider';
import defaultLocale from '../locale/en-US';

export * from 'antd/es/input-number';

export interface InputNumberLocale {
  placeholder?: string;
}

export interface InputNumberProps extends AntInputNumberProps {
  locale?: InputNumberLocale;
}

type InputNumberRef = React.ComponentRef<typeof AntInputNumber>;

type CompoundedComponent = React.ForwardRefExoticComponent<
  InputNumberProps & React.RefAttributes<InputNumberRef>
> & {
  _InternalPanelDoNotUseOrYouWillBeFired: typeof AntInputNumber._InternalPanelDoNotUseOrYouWillBeFired;
};

const InternalInputNumber = React.forwardRef<InputNumberRef, InputNumberProps>(
  ({ locale: customLocale, ...restProps }, ref) => {
    const { locale: contextLocale } = useContext<ConfigConsumerProps>(ConfigProvider.ConfigContext);
    const inputNumberLocale: InputNumberLocale = {
      placeholder:
        contextLocale?.global?.inputPlaceholder || defaultLocale.global?.inputPlaceholder,
      ...defaultLocale.InputNumber,
      ...contextLocale?.InputNumber,
      ...customLocale,
    };

    return <AntInputNumber ref={ref} placeholder={inputNumberLocale.placeholder} {...restProps} />;
  }
);

const InputNumber = InternalInputNumber as CompoundedComponent;

InputNumber._InternalPanelDoNotUseOrYouWillBeFired =
  AntInputNumber._InternalPanelDoNotUseOrYouWillBeFired;

if (process.env.NODE_ENV !== 'production') {
  InputNumber.displayName = AntInputNumber.displayName;
}

export default InputNumber;
