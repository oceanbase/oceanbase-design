// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CardPrimaryFilledSvg from '../asn/CardPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CardPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CardPrimaryFilledSvg} />;

CardPrimaryFilled.displayName = 'CardPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CardPrimaryFilled);