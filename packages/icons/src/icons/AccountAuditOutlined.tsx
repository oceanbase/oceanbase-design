// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccountAuditOutlinedSvg from '../asn/AccountAuditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountAuditOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountAuditOutlinedSvg} />;

AccountAuditOutlined.displayName = 'AccountAuditOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountAuditOutlined);