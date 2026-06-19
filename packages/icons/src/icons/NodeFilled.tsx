// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NodeFilledSvg from '../asn/NodeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NodeFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NodeFilledSvg} />;

NodeFilled.displayName = 'NodeFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NodeFilled);