// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OatColoredSvg from '../asn/OatColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OatColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OatColoredSvg} />;

OatColored.displayName = 'OatColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OatColored);