// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DoubleSecurityColoredSvg from '../asn/DoubleSecurityColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubleSecurityColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoubleSecurityColoredSvg} />;

DoubleSecurityColored.displayName = 'DoubleSecurityColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DoubleSecurityColored);