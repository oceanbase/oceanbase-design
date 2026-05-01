// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HostMachineFilledSvg from '../asn/HostMachineFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HostMachineFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HostMachineFilledSvg} />;

HostMachineFilled.displayName = 'HostMachineFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HostMachineFilled);