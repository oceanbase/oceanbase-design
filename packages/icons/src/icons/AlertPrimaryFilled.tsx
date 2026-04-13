// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AlertPrimaryFilledSvg from '../asn/AlertPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertPrimaryFilledSvg} />;

AlertPrimaryFilled.displayName = 'AlertPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertPrimaryFilled);