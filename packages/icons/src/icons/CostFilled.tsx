// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CostFilledSvg from '../asn/CostFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CostFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CostFilledSvg} />;

CostFilled.displayName = 'CostFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CostFilled);