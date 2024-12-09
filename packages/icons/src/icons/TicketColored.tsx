// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TicketColoredSvg from '../asn/TicketColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TicketColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TicketColoredSvg} />;

TicketColored.displayName = 'TicketColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TicketColored);