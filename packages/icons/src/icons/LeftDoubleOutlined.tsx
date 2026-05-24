// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LeftDoubleOutlinedSvg from '../asn/LeftDoubleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftDoubleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftDoubleOutlinedSvg} />;

LeftDoubleOutlined.displayName = 'LeftDoubleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftDoubleOutlined);