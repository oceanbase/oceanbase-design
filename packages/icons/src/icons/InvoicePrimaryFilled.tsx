// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InvoicePrimaryFilledSvg from '../asn/InvoicePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InvoicePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InvoicePrimaryFilledSvg} />;

InvoicePrimaryFilled.displayName = 'InvoicePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InvoicePrimaryFilled);