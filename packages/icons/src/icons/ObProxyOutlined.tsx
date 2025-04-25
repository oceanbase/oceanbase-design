// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObProxyOutlinedSvg from '../asn/ObProxyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObProxyOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObProxyOutlinedSvg} />;

ObProxyOutlined.displayName = 'ObProxyOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObProxyOutlined);