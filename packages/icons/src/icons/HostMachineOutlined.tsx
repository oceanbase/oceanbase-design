// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HostMachineOutlinedSvg from '../asn/HostMachineOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HostMachineOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HostMachineOutlinedSvg} />;

HostMachineOutlined.displayName = 'HostMachineOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HostMachineOutlined);