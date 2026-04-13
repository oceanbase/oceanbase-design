// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CalendarOutlinedSvg from '../asn/CalendarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CalendarOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CalendarOutlinedSvg} />;

CalendarOutlined.displayName = 'CalendarOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CalendarOutlined);