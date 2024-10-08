// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserColoredSvg from '../asn/UserColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserColoredSvg} />;

UserColored.displayName = 'UserColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserColored);