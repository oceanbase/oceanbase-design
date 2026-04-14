// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NetworkPrimaryFilledSvg from '../asn/NetworkPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NetworkPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NetworkPrimaryFilledSvg} />;

NetworkPrimaryFilled.displayName = 'NetworkPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NetworkPrimaryFilled);