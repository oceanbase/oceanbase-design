// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HomePageOutlinedSvg from '../asn/HomePageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomePageOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomePageOutlinedSvg} />;

HomePageOutlined.displayName = 'HomePageOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HomePageOutlined);