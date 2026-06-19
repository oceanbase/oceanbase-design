// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NetworkOutlinedSvg from '../asn/NetworkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NetworkOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NetworkOutlinedSvg} />;

NetworkOutlined.displayName = 'NetworkOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NetworkOutlined);