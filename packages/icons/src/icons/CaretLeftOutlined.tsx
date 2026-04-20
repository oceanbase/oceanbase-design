// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CaretLeftOutlinedSvg from '../asn/CaretLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretLeftOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretLeftOutlinedSvg} />;

CaretLeftOutlined.displayName = 'CaretLeftOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretLeftOutlined);