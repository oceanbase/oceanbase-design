// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MemoryOutlinedSvg from '../asn/MemoryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MemoryOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MemoryOutlinedSvg} />;

MemoryOutlined.displayName = 'MemoryOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MemoryOutlined);