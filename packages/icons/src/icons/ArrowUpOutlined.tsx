// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ArrowUpOutlinedSvg from '../asn/ArrowUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowUpOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowUpOutlinedSvg} />;

ArrowUpOutlined.displayName = 'ArrowUpOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowUpOutlined);