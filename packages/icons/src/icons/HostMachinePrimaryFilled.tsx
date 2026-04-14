// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HostMachinePrimaryFilledSvg from '../asn/HostMachinePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HostMachinePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HostMachinePrimaryFilledSvg} />;

HostMachinePrimaryFilled.displayName = 'HostMachinePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HostMachinePrimaryFilled);