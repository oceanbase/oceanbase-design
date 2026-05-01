// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccountLinkOutlinedSvg from '../asn/AccountLinkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountLinkOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountLinkOutlinedSvg} />;

AccountLinkOutlined.displayName = 'AccountLinkOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountLinkOutlined);