// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ClusterOutlinedSvg from '../asn/ClusterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ClusterOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ClusterOutlinedSvg} />;

ClusterOutlined.displayName = 'ClusterOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ClusterOutlined);