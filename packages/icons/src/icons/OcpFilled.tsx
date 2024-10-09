// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OcpFilledSvg from '../asn/OcpFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OcpFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OcpFilledSvg} />;

OcpFilled.displayName = 'OcpFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OcpFilled);