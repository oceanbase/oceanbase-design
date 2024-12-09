// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DistributedTransactionFilledSvg from '../asn/DistributedTransactionFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DistributedTransactionFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DistributedTransactionFilledSvg} />;

DistributedTransactionFilled.displayName = 'DistributedTransactionFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DistributedTransactionFilled);