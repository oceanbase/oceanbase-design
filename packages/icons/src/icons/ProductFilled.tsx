// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProductFilledSvg from '../asn/ProductFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProductFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProductFilledSvg} />;

ProductFilled.displayName = 'ProductFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProductFilled);