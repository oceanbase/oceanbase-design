// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WorkBenchPrimaryFilledSvg from '../asn/WorkBenchPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WorkBenchPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WorkBenchPrimaryFilledSvg} />;

WorkBenchPrimaryFilled.displayName = 'WorkBenchPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WorkBenchPrimaryFilled);