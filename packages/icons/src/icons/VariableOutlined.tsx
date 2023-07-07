// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import VariableOutlinedSvg from '../asn/VariableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VariableOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VariableOutlinedSvg} />;

VariableOutlined.displayName = 'VariableOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VariableOutlined);