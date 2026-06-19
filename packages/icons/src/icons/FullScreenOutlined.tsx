// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FullScreenOutlinedSvg from '../asn/FullScreenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FullScreenOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FullScreenOutlinedSvg} />;

FullScreenOutlined.displayName = 'FullScreenOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FullScreenOutlined);