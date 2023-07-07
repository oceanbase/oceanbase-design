// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ArrowUpCircleOutlinedSvg from '../asn/ArrowUpCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowUpCircleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowUpCircleOutlinedSvg} />;

ArrowUpCircleOutlined.displayName = 'ArrowUpCircleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowUpCircleOutlined);