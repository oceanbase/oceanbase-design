// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NetworkFilledSvg from '../asn/NetworkFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NetworkFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NetworkFilledSvg} />;

NetworkFilled.displayName = 'NetworkFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NetworkFilled);