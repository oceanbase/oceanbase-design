// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DistributedTransactionOutlinedSvg from '../asn/DistributedTransactionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DistributedTransactionOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DistributedTransactionOutlinedSvg} />;

DistributedTransactionOutlined.displayName = 'DistributedTransactionOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DistributedTransactionOutlined);