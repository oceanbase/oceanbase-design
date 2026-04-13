// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ZoomoutOutlinedSvg from '../asn/ZoomoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomoutOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZoomoutOutlinedSvg} />;

ZoomoutOutlined.displayName = 'ZoomoutOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ZoomoutOutlined);