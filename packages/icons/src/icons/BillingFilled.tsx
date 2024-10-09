// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BillingFilledSvg from '../asn/BillingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillingFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BillingFilledSvg} />;

BillingFilled.displayName = 'BillingFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillingFilled);