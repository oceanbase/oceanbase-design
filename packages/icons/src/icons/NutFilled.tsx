// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import NutFilledSvg from '../asn/NutFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NutFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={NutFilledSvg} />;

NutFilled.displayName = 'NutFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(NutFilled);