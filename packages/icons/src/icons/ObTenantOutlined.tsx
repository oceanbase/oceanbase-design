// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObTenantOutlinedSvg from '../asn/ObTenantOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObTenantOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObTenantOutlinedSvg} />;

ObTenantOutlined.displayName = 'ObTenantOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObTenantOutlined);