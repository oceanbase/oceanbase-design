// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import StepForoverOutlinedSvg from '../asn/StepForoverOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StepForoverOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StepForoverOutlinedSvg} />;

StepForoverOutlined.displayName = 'StepForoverOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StepForoverOutlined);