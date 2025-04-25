// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PowerbiColoredSvg from '../asn/PowerbiColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PowerbiColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PowerbiColoredSvg} />;

PowerbiColored.displayName = 'PowerbiColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PowerbiColored);