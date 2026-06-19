// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LeftSquareOutlinedSvg from '../asn/LeftSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LeftSquareOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LeftSquareOutlinedSvg} />;

LeftSquareOutlined.displayName = 'LeftSquareOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftSquareOutlined);