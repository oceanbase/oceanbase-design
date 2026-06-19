// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DistributedOutlinedSvg from '../asn/DistributedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DistributedOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DistributedOutlinedSvg} />;

DistributedOutlined.displayName = 'DistributedOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DistributedOutlined);