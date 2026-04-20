// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import EventFilledSvg from '../asn/EventFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EventFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EventFilledSvg} />;

EventFilled.displayName = 'EventFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EventFilled);