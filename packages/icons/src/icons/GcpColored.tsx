// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GcpColoredSvg from '../asn/GcpColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GcpColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GcpColoredSvg} />;

GcpColored.displayName = 'GcpColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GcpColored);