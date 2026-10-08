import { Radio as AntRadio } from 'antd';
import type { RadioGroupProps } from 'antd/es/radio';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ prefixCls: customizePrefixCls, className, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('radio', customizePrefixCls);
    const [wrapCSSVar] = useStyle(prefixCls);

    return wrapCSSVar(
      <AntRadio.Group
        ref={ref}
        prefixCls={customizePrefixCls}
        className={className}
        {...restProps}
      />
    );
  }
);

RadioGroup.displayName = 'Radio.Group';

export default RadioGroup;
