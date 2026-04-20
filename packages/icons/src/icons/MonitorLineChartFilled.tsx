// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MonitorLineChartFilledSvg from '../asn/MonitorLineChartFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MonitorLineChartFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MonitorLineChartFilledSvg} />;

MonitorLineChartFilled.displayName = 'MonitorLineChartFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MonitorLineChartFilled);