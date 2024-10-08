// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NifiColoredSvg from '../asn/NifiColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NifiColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NifiColoredSvg} />;

NifiColored.displayName = 'NifiColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NifiColored);