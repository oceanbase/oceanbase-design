// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NetworkSettingFilledSvg from '../asn/NetworkSettingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NetworkSettingFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NetworkSettingFilledSvg} />;

NetworkSettingFilled.displayName = 'NetworkSettingFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NetworkSettingFilled);