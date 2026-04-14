// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObProxyPrimaryFilledSvg from '../asn/ObProxyPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObProxyPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObProxyPrimaryFilledSvg} />;

ObProxyPrimaryFilled.displayName = 'ObProxyPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObProxyPrimaryFilled);