// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MonitorOutlinedSvg from '../asn/MonitorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MonitorOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MonitorOutlinedSvg} />;

MonitorOutlined.displayName = 'MonitorOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MonitorOutlined);