// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import StepUpOutlinedSvg from '../asn/StepUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StepUpOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StepUpOutlinedSvg} />;

StepUpOutlined.displayName = 'StepUpOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StepUpOutlined);