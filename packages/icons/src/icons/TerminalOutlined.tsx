// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TerminalOutlinedSvg from '../asn/TerminalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TerminalOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TerminalOutlinedSvg} />;

TerminalOutlined.displayName = 'TerminalOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TerminalOutlined);