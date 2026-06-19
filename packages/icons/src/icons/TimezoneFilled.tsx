// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TimezoneFilledSvg from '../asn/TimezoneFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimezoneFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TimezoneFilledSvg} />;

TimezoneFilled.displayName = 'TimezoneFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TimezoneFilled);