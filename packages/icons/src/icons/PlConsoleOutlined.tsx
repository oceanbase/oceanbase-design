// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PlConsoleOutlinedSvg from '../asn/PlConsoleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlConsoleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlConsoleOutlinedSvg} />;

PlConsoleOutlined.displayName = 'PlConsoleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlConsoleOutlined);