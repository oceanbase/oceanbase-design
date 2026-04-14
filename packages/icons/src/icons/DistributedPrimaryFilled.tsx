// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DistributedPrimaryFilledSvg from '../asn/DistributedPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DistributedPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DistributedPrimaryFilledSvg} />;

DistributedPrimaryFilled.displayName = 'DistributedPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DistributedPrimaryFilled);