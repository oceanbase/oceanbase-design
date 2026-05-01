// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ZoomOutOutlinedSvg from '../asn/ZoomOutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoomOutOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZoomOutOutlinedSvg} />;

ZoomOutOutlined.displayName = 'ZoomOutOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ZoomOutOutlined);