// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TencentCloudColoredSvg from '../asn/TencentCloudColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TencentCloudColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TencentCloudColoredSvg} />;

TencentCloudColored.displayName = 'TencentCloudColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TencentCloudColored);