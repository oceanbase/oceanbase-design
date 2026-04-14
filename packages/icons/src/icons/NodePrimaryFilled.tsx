// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NodePrimaryFilledSvg from '../asn/NodePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NodePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NodePrimaryFilledSvg} />;

NodePrimaryFilled.displayName = 'NodePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NodePrimaryFilled);