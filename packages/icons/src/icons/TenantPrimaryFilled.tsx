// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TenantPrimaryFilledSvg from '../asn/TenantPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TenantPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TenantPrimaryFilledSvg} />;

TenantPrimaryFilled.displayName = 'TenantPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TenantPrimaryFilled);