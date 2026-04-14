// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MonitorLineChartPrimaryFilledSvg from '../asn/MonitorLineChartPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MonitorLineChartPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MonitorLineChartPrimaryFilledSvg} />;

MonitorLineChartPrimaryFilled.displayName = 'MonitorLineChartPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MonitorLineChartPrimaryFilled);