// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserOutlinedSvg from '../asn/UserOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserOutlinedSvg} />;

UserOutlined.displayName = 'UserOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserOutlined);