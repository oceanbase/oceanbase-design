// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ParameterOutlinedSvg from '../asn/ParameterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ParameterOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ParameterOutlinedSvg} />;

ParameterOutlined.displayName = 'ParameterOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ParameterOutlined);