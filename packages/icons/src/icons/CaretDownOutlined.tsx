// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CaretDownOutlinedSvg from '../asn/CaretDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretDownOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretDownOutlinedSvg} />;

CaretDownOutlined.displayName = 'CaretDownOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretDownOutlined);