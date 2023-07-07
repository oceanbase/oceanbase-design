// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import StepDownOutlinedSvg from '../asn/StepDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StepDownOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StepDownOutlinedSvg} />;

StepDownOutlined.displayName = 'StepDownOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StepDownOutlined);