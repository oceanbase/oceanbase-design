// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FlinkColoredSvg from '../asn/FlinkColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FlinkColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FlinkColoredSvg} />;

FlinkColored.displayName = 'FlinkColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FlinkColored);