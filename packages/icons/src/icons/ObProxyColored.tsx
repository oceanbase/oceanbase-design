// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObProxyColoredSvg from '../asn/ObProxyColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObProxyColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObProxyColoredSvg} />;

ObProxyColored.displayName = 'ObProxyColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObProxyColored);