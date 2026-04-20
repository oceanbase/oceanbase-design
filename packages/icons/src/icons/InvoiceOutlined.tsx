// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import InvoiceOutlinedSvg from '../asn/InvoiceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InvoiceOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={InvoiceOutlinedSvg} />;

InvoiceOutlined.displayName = 'InvoiceOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(InvoiceOutlined);