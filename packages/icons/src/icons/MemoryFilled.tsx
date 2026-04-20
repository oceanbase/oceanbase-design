// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MemoryFilledSvg from '../asn/MemoryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MemoryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MemoryFilledSvg} />;

MemoryFilled.displayName = 'MemoryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MemoryFilled);