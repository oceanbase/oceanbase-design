// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ServiceColoredSvg from '../asn/ServiceColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServiceColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ServiceColoredSvg} />;

ServiceColored.displayName = 'ServiceColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ServiceColored);