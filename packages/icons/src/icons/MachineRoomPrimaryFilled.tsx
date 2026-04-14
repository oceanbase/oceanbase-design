// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MachineRoomPrimaryFilledSvg from '../asn/MachineRoomPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MachineRoomPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MachineRoomPrimaryFilledSvg} />;

MachineRoomPrimaryFilled.displayName = 'MachineRoomPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MachineRoomPrimaryFilled);