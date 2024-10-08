// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AimFilledSvg from '../asn/AimFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AimFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AimFilledSvg} />;

AimFilled.displayName = 'AimFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AimFilled);