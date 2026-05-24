// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CaretRightOutlinedSvg from '../asn/CaretRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CaretRightOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CaretRightOutlinedSvg} />;

CaretRightOutlined.displayName = 'CaretRightOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CaretRightOutlined);