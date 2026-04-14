// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ClusterPrimaryFilledSvg from '../asn/ClusterPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClusterPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClusterPrimaryFilledSvg} />;

ClusterPrimaryFilled.displayName = 'ClusterPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClusterPrimaryFilled);