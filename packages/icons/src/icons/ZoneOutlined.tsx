// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ZoneOutlinedSvg from '../asn/ZoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ZoneOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ZoneOutlinedSvg} />;

ZoneOutlined.displayName = 'ZoneOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ZoneOutlined);