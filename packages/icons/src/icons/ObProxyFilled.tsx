// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObProxyFilledSvg from '../asn/ObProxyFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObProxyFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObProxyFilledSvg} />;

ObProxyFilled.displayName = 'ObProxyFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObProxyFilled);