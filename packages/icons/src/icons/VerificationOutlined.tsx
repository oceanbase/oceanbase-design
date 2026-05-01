// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import VerificationOutlinedSvg from '../asn/VerificationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VerificationOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={VerificationOutlinedSvg} />;

VerificationOutlined.displayName = 'VerificationOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(VerificationOutlined);