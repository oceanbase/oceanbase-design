// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import StepOverOutlinedSvg from '../asn/StepOverOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StepOverOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StepOverOutlinedSvg} />;

StepOverOutlined.displayName = 'StepOverOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StepOverOutlined);