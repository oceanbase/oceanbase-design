// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserGroupOutlinedSvg from '../asn/UserGroupOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserGroupOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserGroupOutlinedSvg} />;

UserGroupOutlined.displayName = 'UserGroupOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserGroupOutlined);