// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AuditFilledSvg from '../asn/AuditFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AuditFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AuditFilledSvg} />;

AuditFilled.displayName = 'AuditFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AuditFilled);