// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FunctionBoldOutlinedSvg from '../asn/FunctionBoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FunctionBoldOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FunctionBoldOutlinedSvg} />;

FunctionBoldOutlined.displayName = 'FunctionBoldOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FunctionBoldOutlined);