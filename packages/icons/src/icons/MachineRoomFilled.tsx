// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MachineRoomFilledSvg from '../asn/MachineRoomFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MachineRoomFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MachineRoomFilledSvg} />;

MachineRoomFilled.displayName = 'MachineRoomFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MachineRoomFilled);