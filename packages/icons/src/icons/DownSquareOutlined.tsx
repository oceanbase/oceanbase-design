// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DownSquareOutlinedSvg from '../asn/DownSquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownSquareOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DownSquareOutlinedSvg} />;

DownSquareOutlined.displayName = 'DownSquareOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownSquareOutlined);