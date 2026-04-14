// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BillingPrimaryFilledSvg from '../asn/BillingPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillingPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BillingPrimaryFilledSvg} />;

BillingPrimaryFilled.displayName = 'BillingPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillingPrimaryFilled);