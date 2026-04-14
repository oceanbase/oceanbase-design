// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CpuPrimaryFilledSvg from '../asn/CpuPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CpuPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CpuPrimaryFilledSvg} />;

CpuPrimaryFilled.displayName = 'CpuPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CpuPrimaryFilled);