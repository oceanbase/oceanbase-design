// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CostPrimaryFilledSvg from '../asn/CostPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CostPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CostPrimaryFilledSvg} />;

CostPrimaryFilled.displayName = 'CostPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CostPrimaryFilled);