// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DistributedTransactionColoredSvg from '../asn/DistributedTransactionColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DistributedTransactionColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DistributedTransactionColoredSvg} />;

DistributedTransactionColored.displayName = 'DistributedTransactionColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DistributedTransactionColored);