// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ClusterFilledSvg from '../asn/ClusterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClusterFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClusterFilledSvg} />;

ClusterFilled.displayName = 'ClusterFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClusterFilled);