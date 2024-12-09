// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SystemManagementFilledSvg from '../asn/SystemManagementFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SystemManagementFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SystemManagementFilledSvg} />;

SystemManagementFilled.displayName = 'SystemManagementFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SystemManagementFilled);