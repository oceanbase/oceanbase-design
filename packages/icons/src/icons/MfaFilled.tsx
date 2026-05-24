// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MfaFilledSvg from '../asn/MfaFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MfaFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MfaFilledSvg} />;

MfaFilled.displayName = 'MfaFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MfaFilled);