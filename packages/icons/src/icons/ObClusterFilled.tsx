// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObClusterFilledSvg from '../asn/ObClusterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObClusterFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObClusterFilledSvg} />;

ObClusterFilled.displayName = 'ObClusterFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObClusterFilled);