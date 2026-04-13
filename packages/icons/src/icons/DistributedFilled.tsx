// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DistributedFilledSvg from '../asn/DistributedFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DistributedFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DistributedFilledSvg} />;

DistributedFilled.displayName = 'DistributedFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DistributedFilled);