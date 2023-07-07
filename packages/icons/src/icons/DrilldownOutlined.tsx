// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DrilldownOutlinedSvg from '../asn/DrilldownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DrilldownOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DrilldownOutlinedSvg} />;

DrilldownOutlined.displayName = 'DrilldownOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DrilldownOutlined);