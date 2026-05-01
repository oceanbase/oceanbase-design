// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CaretUpOutlinedSvg from '../asn/CaretUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretUpOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretUpOutlinedSvg} />;

CaretUpOutlined.displayName = 'CaretUpOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretUpOutlined);