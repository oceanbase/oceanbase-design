// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AdjustmentOutlinedSvg from '../asn/AdjustmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AdjustmentOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AdjustmentOutlinedSvg} />;

AdjustmentOutlined.displayName = 'AdjustmentOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AdjustmentOutlined);