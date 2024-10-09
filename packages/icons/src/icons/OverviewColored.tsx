// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OverviewColoredSvg from '../asn/OverviewColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OverviewColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OverviewColoredSvg} />;

OverviewColored.displayName = 'OverviewColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OverviewColored);