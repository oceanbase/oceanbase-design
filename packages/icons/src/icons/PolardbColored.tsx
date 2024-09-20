// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PolardbColoredSvg from '../asn/PolardbColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PolardbColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PolardbColoredSvg} />;

PolardbColored.displayName = 'PolardbColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PolardbColored);