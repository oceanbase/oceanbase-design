// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import VerificationPrimaryFilledSvg from '../asn/VerificationPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerificationPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerificationPrimaryFilledSvg} />;

VerificationPrimaryFilled.displayName = 'VerificationPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VerificationPrimaryFilled);