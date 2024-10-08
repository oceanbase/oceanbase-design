// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NavicatColoredSvg from '../asn/NavicatColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NavicatColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NavicatColoredSvg} />;

NavicatColored.displayName = 'NavicatColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NavicatColored);