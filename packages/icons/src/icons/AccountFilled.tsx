// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccountFilledSvg from '../asn/AccountFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountFilledSvg} />;

AccountFilled.displayName = 'AccountFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountFilled);