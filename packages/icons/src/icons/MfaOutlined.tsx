// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MfaOutlinedSvg from '../asn/MfaOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MfaOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MfaOutlinedSvg} />;

MfaOutlined.displayName = 'MfaOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MfaOutlined);