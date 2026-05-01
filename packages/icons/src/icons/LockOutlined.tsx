// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LockOutlinedSvg from '../asn/LockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LockOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LockOutlinedSvg} />;

LockOutlined.displayName = 'LockOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LockOutlined);