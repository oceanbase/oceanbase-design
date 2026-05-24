// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SafetyFilledSvg from '../asn/SafetyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafetyFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SafetyFilledSvg} />;

SafetyFilled.displayName = 'SafetyFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SafetyFilled);