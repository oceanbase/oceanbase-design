// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import BinaryOutlinedSvg from '../asn/BinaryOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BinaryOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BinaryOutlinedSvg} />;

BinaryOutlined.displayName = 'BinaryOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(BinaryOutlined);