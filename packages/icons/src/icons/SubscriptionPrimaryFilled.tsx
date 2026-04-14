// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SubscriptionPrimaryFilledSvg from '../asn/SubscriptionPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubscriptionPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SubscriptionPrimaryFilledSvg} />;

SubscriptionPrimaryFilled.displayName = 'SubscriptionPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SubscriptionPrimaryFilled);