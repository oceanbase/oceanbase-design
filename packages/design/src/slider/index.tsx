import { Slider as AntSlider } from 'antd';
import type {
  SliderSingleProps as AntSliderSingleProps,
  SliderRangeProps as AntSliderRangeProps,
} from 'antd/es/slider';
import type { SliderRef } from 'rc-slider/lib/Slider';
import classNames from 'classnames';
import React, { useContext } from 'react';
import ConfigProvider from '../config-provider';
import useStyle from './style';

export * from 'antd/es/slider';

const Slider = React.forwardRef<SliderRef, AntSliderSingleProps | AntSliderRangeProps>(
  ({ prefixCls: customizePrefixCls, className, ...restProps }, ref) => {
    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const prefixCls = getPrefixCls('slider', customizePrefixCls);
    const { wrapSSR } = useStyle(prefixCls);
    const sliderCls = classNames(className);

    return wrapSSR(
      <AntSlider ref={ref} prefixCls={customizePrefixCls} className={sliderCls} {...restProps} />
    );
  }
);

if (process.env.NODE_ENV !== 'production') {
  Slider.displayName = AntSlider.displayName;
}

export default Slider;
