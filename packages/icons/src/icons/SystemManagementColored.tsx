// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SystemManagementColoredSvg from '../asn/SystemManagementColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SystemManagementColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SystemManagementColoredSvg} />;

SystemManagementColored.displayName = 'SystemManagementColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SystemManagementColored);