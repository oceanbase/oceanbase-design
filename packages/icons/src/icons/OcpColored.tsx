// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OcpColoredSvg from '../asn/OcpColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OcpColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OcpColoredSvg} />;

OcpColored.displayName = 'OcpColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OcpColored);