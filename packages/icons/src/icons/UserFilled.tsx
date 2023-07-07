// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserFilledSvg from '../asn/UserFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserFilledSvg} />;

UserFilled.displayName = 'UserFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserFilled);