// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SupportFilledSvg from '../asn/SupportFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SupportFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SupportFilledSvg} />;

SupportFilled.displayName = 'SupportFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SupportFilled);