// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObTenantFilledSvg from '../asn/ObTenantFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObTenantFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObTenantFilledSvg} />;

ObTenantFilled.displayName = 'ObTenantFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObTenantFilled);