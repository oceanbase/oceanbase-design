// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SafetyOutlinedSvg from '../asn/SafetyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafetyOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SafetyOutlinedSvg} />;

SafetyOutlined.displayName = 'SafetyOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SafetyOutlined);