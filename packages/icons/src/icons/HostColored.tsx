// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HostColoredSvg from '../asn/HostColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HostColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HostColoredSvg} />;

HostColored.displayName = 'HostColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HostColored);