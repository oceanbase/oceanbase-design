// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObClusterColoredSvg from '../asn/ObClusterColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObClusterColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObClusterColoredSvg} />;

ObClusterColored.displayName = 'ObClusterColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObClusterColored);