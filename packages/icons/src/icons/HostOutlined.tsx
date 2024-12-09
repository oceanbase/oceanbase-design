// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HostOutlinedSvg from '../asn/HostOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HostOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HostOutlinedSvg} />;

HostOutlined.displayName = 'HostOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HostOutlined);