// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TicketFilledSvg from '../asn/TicketFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TicketFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TicketFilledSvg} />;

TicketFilled.displayName = 'TicketFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TicketFilled);