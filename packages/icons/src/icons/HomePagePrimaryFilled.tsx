// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HomePagePrimaryFilledSvg from '../asn/HomePagePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomePagePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HomePagePrimaryFilledSvg} />;

HomePagePrimaryFilled.displayName = 'HomePagePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HomePagePrimaryFilled);