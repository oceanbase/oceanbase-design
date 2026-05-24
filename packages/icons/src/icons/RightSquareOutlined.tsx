// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RightSquareOutlinedSvg from '../asn/RightSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RightSquareOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RightSquareOutlinedSvg} />;

RightSquareOutlined.displayName = 'RightSquareOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RightSquareOutlined);