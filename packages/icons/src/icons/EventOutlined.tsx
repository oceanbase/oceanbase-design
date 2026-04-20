// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import EventOutlinedSvg from '../asn/EventOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EventOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EventOutlinedSvg} />;

EventOutlined.displayName = 'EventOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EventOutlined);