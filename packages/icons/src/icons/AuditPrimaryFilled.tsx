// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AuditPrimaryFilledSvg from '../asn/AuditPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AuditPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AuditPrimaryFilledSvg} />;

AuditPrimaryFilled.displayName = 'AuditPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AuditPrimaryFilled);