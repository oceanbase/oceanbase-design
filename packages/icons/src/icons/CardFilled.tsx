// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CardFilledSvg from '../asn/CardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CardFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CardFilledSvg} />;

CardFilled.displayName = 'CardFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CardFilled);