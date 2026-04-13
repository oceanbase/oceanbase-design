// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccountAuditFilledSvg from '../asn/AccountAuditFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountAuditFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountAuditFilledSvg} />;

AccountAuditFilled.displayName = 'AccountAuditFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountAuditFilled);