// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import EventPrimaryFilledSvg from '../asn/EventPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EventPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EventPrimaryFilledSvg} />;

EventPrimaryFilled.displayName = 'EventPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EventPrimaryFilled);