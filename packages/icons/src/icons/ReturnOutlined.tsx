// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ReturnOutlinedSvg from '../asn/ReturnOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ReturnOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ReturnOutlinedSvg} />;

ReturnOutlined.displayName = 'ReturnOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ReturnOutlined);