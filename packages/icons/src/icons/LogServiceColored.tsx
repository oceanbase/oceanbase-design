// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogServiceColoredSvg from '../asn/LogServiceColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogServiceColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogServiceColoredSvg} />;

LogServiceColored.displayName = 'LogServiceColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogServiceColored);