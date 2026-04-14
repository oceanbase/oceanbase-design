// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TicketPrimaryFilledSvg from '../asn/TicketPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TicketPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TicketPrimaryFilledSvg} />;

TicketPrimaryFilled.displayName = 'TicketPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TicketPrimaryFilled);