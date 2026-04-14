// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccessPrimaryFilledSvg from '../asn/AccessPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccessPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccessPrimaryFilledSvg} />;

AccessPrimaryFilled.displayName = 'AccessPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccessPrimaryFilled);