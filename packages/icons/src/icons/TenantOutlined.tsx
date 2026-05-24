// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TenantOutlinedSvg from '../asn/TenantOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TenantOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TenantOutlinedSvg} />;

TenantOutlined.displayName = 'TenantOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TenantOutlined);