// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CpuOutlinedSvg from '../asn/CpuOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CpuOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CpuOutlinedSvg} />;

CpuOutlined.displayName = 'CpuOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CpuOutlined);