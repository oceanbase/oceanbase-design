// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MonitorLineChartOutlinedSvg from '../asn/MonitorLineChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MonitorLineChartOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MonitorLineChartOutlinedSvg} />;

MonitorLineChartOutlined.displayName = 'MonitorLineChartOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MonitorLineChartOutlined);