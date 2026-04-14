// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccountPrimaryFilledSvg from '../asn/AccountPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountPrimaryFilledSvg} />;

AccountPrimaryFilled.displayName = 'AccountPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountPrimaryFilled);