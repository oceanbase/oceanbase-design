// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InvoiceFilledSvg from '../asn/InvoiceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InvoiceFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InvoiceFilledSvg} />;

InvoiceFilled.displayName = 'InvoiceFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InvoiceFilled);