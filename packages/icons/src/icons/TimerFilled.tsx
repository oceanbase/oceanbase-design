// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TimerFilledSvg from '../asn/TimerFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TimerFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TimerFilledSvg} />;

TimerFilled.displayName = 'TimerFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TimerFilled);