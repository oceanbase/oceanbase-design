// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FunctionOutlinedSvg from '../asn/FunctionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunctionOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FunctionOutlinedSvg} />;

FunctionOutlined.displayName = 'FunctionOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FunctionOutlined);