// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CompatibilityOutlinedSvg from '../asn/CompatibilityOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CompatibilityOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CompatibilityOutlinedSvg} />;

CompatibilityOutlined.displayName = 'CompatibilityOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CompatibilityOutlined);