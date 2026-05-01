// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OperationFilledSvg from '../asn/OperationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OperationFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OperationFilledSvg} />;

OperationFilled.displayName = 'OperationFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OperationFilled);