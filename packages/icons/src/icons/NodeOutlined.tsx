// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NodeOutlinedSvg from '../asn/NodeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NodeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NodeOutlinedSvg} />;

NodeOutlined.displayName = 'NodeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NodeOutlined);