// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TimezoneOutlinedSvg from '../asn/TimezoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimezoneOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TimezoneOutlinedSvg} />;

TimezoneOutlined.displayName = 'TimezoneOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TimezoneOutlined);