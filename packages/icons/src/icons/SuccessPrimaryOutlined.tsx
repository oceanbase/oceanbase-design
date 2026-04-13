// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SuccessPrimaryOutlinedSvg from '../asn/SuccessPrimaryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SuccessPrimaryOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SuccessPrimaryOutlinedSvg} />;

SuccessPrimaryOutlined.displayName = 'SuccessPrimaryOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SuccessPrimaryOutlined);