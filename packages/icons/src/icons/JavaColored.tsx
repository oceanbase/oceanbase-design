// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import JavaColoredSvg from '../asn/JavaColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const JavaColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={JavaColoredSvg} />;

JavaColored.displayName = 'JavaColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(JavaColored);