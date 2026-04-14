// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RegionPrimaryFilledSvg from '../asn/RegionPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RegionPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RegionPrimaryFilledSvg} />;

RegionPrimaryFilled.displayName = 'RegionPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RegionPrimaryFilled);