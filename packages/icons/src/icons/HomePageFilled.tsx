// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HomePageFilledSvg from '../asn/HomePageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomePageFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomePageFilledSvg} />;

HomePageFilled.displayName = 'HomePageFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HomePageFilled);