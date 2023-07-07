// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ServerUpOutlinedSvg from '../asn/ServerUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServerUpOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ServerUpOutlinedSvg} />;

ServerUpOutlined.displayName = 'ServerUpOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ServerUpOutlined);