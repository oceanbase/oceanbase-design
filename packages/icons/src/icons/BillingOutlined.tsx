// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BillingOutlinedSvg from '../asn/BillingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BillingOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BillingOutlinedSvg} />;

BillingOutlined.displayName = 'BillingOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BillingOutlined);