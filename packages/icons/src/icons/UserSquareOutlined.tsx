// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSquareOutlinedSvg from '../asn/UserSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSquareOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSquareOutlinedSvg} />;

UserSquareOutlined.displayName = 'UserSquareOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSquareOutlined);