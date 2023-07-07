// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CpuFilledSvg from '../asn/CpuFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CpuFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CpuFilledSvg} />;

CpuFilled.displayName = 'CpuFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CpuFilled);