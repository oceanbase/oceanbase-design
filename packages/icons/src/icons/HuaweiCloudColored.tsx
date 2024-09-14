// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HuaweiCloudColoredSvg from '../asn/HuaweiCloudColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HuaweiCloudColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HuaweiCloudColoredSvg} />;

HuaweiCloudColored.displayName = 'HuaweiCloudColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HuaweiCloudColored);