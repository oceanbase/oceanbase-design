// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RegionOutlinedSvg from '../asn/RegionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RegionOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RegionOutlinedSvg} />;

RegionOutlined.displayName = 'RegionOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RegionOutlined);