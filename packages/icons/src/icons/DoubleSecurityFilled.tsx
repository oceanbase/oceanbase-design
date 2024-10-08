// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DoubleSecurityFilledSvg from '../asn/DoubleSecurityFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubleSecurityFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoubleSecurityFilledSvg} />;

DoubleSecurityFilled.displayName = 'DoubleSecurityFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DoubleSecurityFilled);