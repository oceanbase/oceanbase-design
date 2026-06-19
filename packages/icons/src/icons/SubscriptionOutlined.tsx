// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SubscriptionOutlinedSvg from '../asn/SubscriptionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubscriptionOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SubscriptionOutlinedSvg} />;

SubscriptionOutlined.displayName = 'SubscriptionOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SubscriptionOutlined);