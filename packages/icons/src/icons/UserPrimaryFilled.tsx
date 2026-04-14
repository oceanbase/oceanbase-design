// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserPrimaryFilledSvg from '../asn/UserPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserPrimaryFilledSvg} />;

UserPrimaryFilled.displayName = 'UserPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserPrimaryFilled);