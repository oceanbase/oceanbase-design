// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccountAuditPrimaryFilledSvg from '../asn/AccountAuditPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountAuditPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountAuditPrimaryFilledSvg} />;

AccountAuditPrimaryFilled.displayName = 'AccountAuditPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountAuditPrimaryFilled);