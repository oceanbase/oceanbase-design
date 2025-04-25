// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObTenantColoredSvg from '../asn/ObTenantColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObTenantColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObTenantColoredSvg} />;

ObTenantColored.displayName = 'ObTenantColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObTenantColored);