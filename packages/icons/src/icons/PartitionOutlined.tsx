// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PartitionOutlinedSvg from '../asn/PartitionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PartitionOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PartitionOutlinedSvg} />;

PartitionOutlined.displayName = 'PartitionOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PartitionOutlined);