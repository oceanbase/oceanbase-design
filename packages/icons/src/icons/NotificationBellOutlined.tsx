// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NotificationBellOutlinedSvg from '../asn/NotificationBellOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NotificationBellOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NotificationBellOutlinedSvg} />;

NotificationBellOutlined.displayName = 'NotificationBellOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NotificationBellOutlined);