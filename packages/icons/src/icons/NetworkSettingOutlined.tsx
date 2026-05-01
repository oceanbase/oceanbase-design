// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NetworkSettingOutlinedSvg from '../asn/NetworkSettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NetworkSettingOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NetworkSettingOutlinedSvg} />;

NetworkSettingOutlined.displayName = 'NetworkSettingOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NetworkSettingOutlined);