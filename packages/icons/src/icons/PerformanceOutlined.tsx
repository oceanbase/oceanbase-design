// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PerformanceOutlinedSvg from '../asn/PerformanceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PerformanceOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PerformanceOutlinedSvg} />;

PerformanceOutlined.displayName = 'PerformanceOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PerformanceOutlined);