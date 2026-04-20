// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import FullScreenExitOutlinedSvg from '../asn/FullScreenExitOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FullScreenExitOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={FullScreenExitOutlinedSvg} />;

FullScreenExitOutlined.displayName = 'FullScreenExitOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FullScreenExitOutlined);