// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RegionFilledSvg from '../asn/RegionFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RegionFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RegionFilledSvg} />;

RegionFilled.displayName = 'RegionFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RegionFilled);