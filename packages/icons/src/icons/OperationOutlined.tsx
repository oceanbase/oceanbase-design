// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OperationOutlinedSvg from '../asn/OperationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OperationOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OperationOutlinedSvg} />;

OperationOutlined.displayName = 'OperationOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OperationOutlined);