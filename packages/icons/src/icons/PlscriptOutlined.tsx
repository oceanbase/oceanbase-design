// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PlscriptOutlinedSvg from '../asn/PlscriptOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PlscriptOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PlscriptOutlinedSvg} />;

PlscriptOutlined.displayName = 'PlscriptOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlscriptOutlined);