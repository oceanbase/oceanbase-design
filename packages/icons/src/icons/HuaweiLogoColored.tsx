// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HuaweiLogoColoredSvg from '../asn/HuaweiLogoColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HuaweiLogoColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HuaweiLogoColoredSvg} />;

HuaweiLogoColored.displayName = 'HuaweiLogoColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HuaweiLogoColored);