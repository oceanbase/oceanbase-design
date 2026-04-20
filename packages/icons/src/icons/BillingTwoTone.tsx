// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BillingTwoToneSvg from '../asn/BillingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillingTwoTone = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BillingTwoToneSvg} />;

BillingTwoTone.displayName = 'BillingTwoTone';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillingTwoTone);