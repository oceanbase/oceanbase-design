// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SystemManagementOutlinedSvg from '../asn/SystemManagementOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SystemManagementOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SystemManagementOutlinedSvg} />;

SystemManagementOutlined.displayName = 'SystemManagementOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SystemManagementOutlined);