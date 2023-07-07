// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PlOutlinedSvg from '../asn/PlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlOutlinedSvg} />;

PlOutlined.displayName = 'PlOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlOutlined);