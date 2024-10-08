// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HostFilledSvg from '../asn/HostFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HostFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HostFilledSvg} />;

HostFilled.displayName = 'HostFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HostFilled);