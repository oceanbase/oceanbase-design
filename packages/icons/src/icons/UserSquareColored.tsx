// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSquareColoredSvg from '../asn/UserSquareColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSquareColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSquareColoredSvg} />;

UserSquareColored.displayName = 'UserSquareColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSquareColored);