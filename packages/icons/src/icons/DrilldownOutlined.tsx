// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DrillDownOutlinedSvg from '../asn/DrillDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DrillDownOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DrillDownOutlinedSvg} />;

DrillDownOutlined.displayName = 'DrillDownOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DrillDownOutlined);