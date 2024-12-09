// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TicketOutlinedSvg from '../asn/TicketOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TicketOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TicketOutlinedSvg} />;

TicketOutlined.displayName = 'TicketOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TicketOutlined);