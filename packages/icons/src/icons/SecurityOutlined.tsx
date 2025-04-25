// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SecurityOutlinedSvg from '../asn/SecurityOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SecurityOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SecurityOutlinedSvg} />;

SecurityOutlined.displayName = 'SecurityOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SecurityOutlined);