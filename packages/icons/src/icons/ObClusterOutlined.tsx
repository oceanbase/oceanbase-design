// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ObClusterOutlinedSvg from '../asn/ObClusterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ObClusterOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ObClusterOutlinedSvg} />;

ObClusterOutlined.displayName = 'ObClusterOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ObClusterOutlined);