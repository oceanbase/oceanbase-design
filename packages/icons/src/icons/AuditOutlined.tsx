// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AuditOutlinedSvg from '../asn/AuditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AuditOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AuditOutlinedSvg} />;

AuditOutlined.displayName = 'AuditOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AuditOutlined);