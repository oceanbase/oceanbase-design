// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MfaPrimaryFilledSvg from '../asn/MfaPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MfaPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MfaPrimaryFilledSvg} />;

MfaPrimaryFilled.displayName = 'MfaPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MfaPrimaryFilled);