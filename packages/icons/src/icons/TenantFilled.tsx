// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TenantFilledSvg from '../asn/TenantFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TenantFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TenantFilledSvg} />;

TenantFilled.displayName = 'TenantFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TenantFilled);