// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UpSquareOutlinedSvg from '../asn/UpSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UpSquareOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UpSquareOutlinedSvg} />;

UpSquareOutlined.displayName = 'UpSquareOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UpSquareOutlined);