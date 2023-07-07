// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DatabaseAuditRadiusOutlinedSvg from '../asn/DatabaseAuditRadiusOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DatabaseAuditRadiusOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DatabaseAuditRadiusOutlinedSvg} />;

DatabaseAuditRadiusOutlined.displayName = 'DatabaseAuditRadiusOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DatabaseAuditRadiusOutlined);