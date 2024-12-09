// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PerformanceFilledSvg from '../asn/PerformanceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PerformanceFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PerformanceFilledSvg} />;

PerformanceFilled.displayName = 'PerformanceFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PerformanceFilled);