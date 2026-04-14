// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OperationPrimaryFilledSvg from '../asn/OperationPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OperationPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OperationPrimaryFilledSvg} />;

OperationPrimaryFilled.displayName = 'OperationPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OperationPrimaryFilled);