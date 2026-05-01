// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AdjustmentFilledSvg from '../asn/AdjustmentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AdjustmentFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AdjustmentFilledSvg} />;

AdjustmentFilled.displayName = 'AdjustmentFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AdjustmentFilled);