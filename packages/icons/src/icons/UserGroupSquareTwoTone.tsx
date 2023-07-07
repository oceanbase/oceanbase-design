// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserGroupSquareTwoToneSvg from '../asn/UserGroupSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserGroupSquareTwoTone = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserGroupSquareTwoToneSvg} />;

UserGroupSquareTwoTone.displayName = 'UserGroupSquareTwoTone';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserGroupSquareTwoTone);