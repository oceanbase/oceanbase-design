// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HourglassHalfOutlinedSvg from '../asn/HourglassHalfOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HourglassHalfOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HourglassHalfOutlinedSvg} />;

HourglassHalfOutlined.displayName = 'HourglassHalfOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HourglassHalfOutlined);