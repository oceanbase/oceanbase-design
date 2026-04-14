// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MemoryPrimaryFilledSvg from '../asn/MemoryPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MemoryPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MemoryPrimaryFilledSvg} />;

MemoryPrimaryFilled.displayName = 'MemoryPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MemoryPrimaryFilled);