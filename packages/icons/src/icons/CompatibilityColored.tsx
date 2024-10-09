// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CompatibilityColoredSvg from '../asn/CompatibilityColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompatibilityColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompatibilityColoredSvg} />;

CompatibilityColored.displayName = 'CompatibilityColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompatibilityColored);