// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import GlobalColoredSvg from '../asn/GlobalColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GlobalColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={GlobalColoredSvg} />;

GlobalColored.displayName = 'GlobalColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(GlobalColored);