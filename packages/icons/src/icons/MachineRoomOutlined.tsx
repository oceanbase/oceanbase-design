// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MachineRoomOutlinedSvg from '../asn/MachineRoomOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MachineRoomOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MachineRoomOutlinedSvg} />;

MachineRoomOutlined.displayName = 'MachineRoomOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MachineRoomOutlined);