// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NetworkSettingPrimaryFilledSvg from '../asn/NetworkSettingPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NetworkSettingPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NetworkSettingPrimaryFilledSvg} />;

NetworkSettingPrimaryFilled.displayName = 'NetworkSettingPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NetworkSettingPrimaryFilled);