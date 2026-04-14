// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SafetyPrimaryFilledSvg from '../asn/SafetyPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafetyPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SafetyPrimaryFilledSvg} />;

SafetyPrimaryFilled.displayName = 'SafetyPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SafetyPrimaryFilled);