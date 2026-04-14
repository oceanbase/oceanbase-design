// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProductPrimaryFilledSvg from '../asn/ProductPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProductPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProductPrimaryFilledSvg} />;

ProductPrimaryFilled.displayName = 'ProductPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProductPrimaryFilled);