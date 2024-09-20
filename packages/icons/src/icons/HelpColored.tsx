// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HelpColoredSvg from '../asn/HelpColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HelpColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HelpColoredSvg} />;

HelpColored.displayName = 'HelpColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HelpColored);