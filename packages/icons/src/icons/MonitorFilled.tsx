// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MonitorFilledSvg from '../asn/MonitorFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MonitorFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MonitorFilledSvg} />;

MonitorFilled.displayName = 'MonitorFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MonitorFilled);