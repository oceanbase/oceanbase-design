// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AdjustmentPrimaryFilledSvg from '../asn/AdjustmentPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AdjustmentPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AdjustmentPrimaryFilledSvg} />;

AdjustmentPrimaryFilled.displayName = 'AdjustmentPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AdjustmentPrimaryFilled);