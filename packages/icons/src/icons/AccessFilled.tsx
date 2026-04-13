// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccessFilledSvg from '../asn/AccessFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccessFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccessFilledSvg} />;

AccessFilled.displayName = 'AccessFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccessFilled);