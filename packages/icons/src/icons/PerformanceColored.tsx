// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PerformanceColoredSvg from '../asn/PerformanceColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PerformanceColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PerformanceColoredSvg} />;

PerformanceColored.displayName = 'PerformanceColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PerformanceColored);