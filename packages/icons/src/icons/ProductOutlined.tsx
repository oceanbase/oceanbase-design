// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProductOutlinedSvg from '../asn/ProductOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProductOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProductOutlinedSvg} />;

ProductOutlined.displayName = 'ProductOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProductOutlined);