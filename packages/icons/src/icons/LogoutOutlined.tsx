// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogoutOutlinedSvg from '../asn/LogoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogoutOutlinedSvg} />;

LogoutOutlined.displayName = 'LogoutOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogoutOutlined);