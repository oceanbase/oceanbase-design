// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ArrowDownOutlinedSvg from '../asn/ArrowDownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ArrowDownOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ArrowDownOutlinedSvg} />;

ArrowDownOutlined.displayName = 'ArrowDownOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ArrowDownOutlined);