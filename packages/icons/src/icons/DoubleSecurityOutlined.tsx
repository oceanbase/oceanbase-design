// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DoubleSecurityOutlinedSvg from '../asn/DoubleSecurityOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DoubleSecurityOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DoubleSecurityOutlinedSvg} />;

DoubleSecurityOutlined.displayName = 'DoubleSecurityOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DoubleSecurityOutlined);