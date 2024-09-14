// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CompatibilityFilledSvg from '../asn/CompatibilityFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompatibilityFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompatibilityFilledSvg} />;

CompatibilityFilled.displayName = 'CompatibilityFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompatibilityFilled);