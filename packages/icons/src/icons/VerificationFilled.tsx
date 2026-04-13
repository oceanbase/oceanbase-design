// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import VerificationFilledSvg from '../asn/VerificationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerificationFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerificationFilledSvg} />;

VerificationFilled.displayName = 'VerificationFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VerificationFilled);