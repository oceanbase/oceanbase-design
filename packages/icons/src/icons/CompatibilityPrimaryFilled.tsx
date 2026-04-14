// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CompatibilityPrimaryFilledSvg from '../asn/CompatibilityPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompatibilityPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompatibilityPrimaryFilledSvg} />;

CompatibilityPrimaryFilled.displayName = 'CompatibilityPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompatibilityPrimaryFilled);