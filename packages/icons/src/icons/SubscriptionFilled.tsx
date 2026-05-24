// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SubscriptionFilledSvg from '../asn/SubscriptionFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubscriptionFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SubscriptionFilledSvg} />;

SubscriptionFilled.displayName = 'SubscriptionFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SubscriptionFilled);