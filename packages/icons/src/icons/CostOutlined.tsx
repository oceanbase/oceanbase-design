// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CostOutlinedSvg from '../asn/CostOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CostOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CostOutlinedSvg} />;

CostOutlined.displayName = 'CostOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CostOutlined);