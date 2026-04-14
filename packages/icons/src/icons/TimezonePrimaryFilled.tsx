// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TimezonePrimaryFilledSvg from '../asn/TimezonePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimezonePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TimezonePrimaryFilledSvg} />;

TimezonePrimaryFilled.displayName = 'TimezonePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TimezonePrimaryFilled);