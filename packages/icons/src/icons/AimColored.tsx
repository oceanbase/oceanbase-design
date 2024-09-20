// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AimColoredSvg from '../asn/AimColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AimColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AimColoredSvg} />;

AimColored.displayName = 'AimColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AimColored);