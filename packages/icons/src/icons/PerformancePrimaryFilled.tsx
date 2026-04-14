// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PerformancePrimaryFilledSvg from '../asn/PerformancePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PerformancePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PerformancePrimaryFilledSvg} />;

PerformancePrimaryFilled.displayName = 'PerformancePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PerformancePrimaryFilled);