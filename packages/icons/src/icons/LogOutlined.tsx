// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogOutlinedSvg from '../asn/LogOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogOutlinedSvg} />;

LogOutlined.displayName = 'LogOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogOutlined);