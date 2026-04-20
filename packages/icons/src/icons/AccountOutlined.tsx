// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccountOutlinedSvg from '../asn/AccountOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccountOutlinedSvg} />;

AccountOutlined.displayName = 'AccountOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccountOutlined);