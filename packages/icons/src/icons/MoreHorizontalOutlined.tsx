// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MoreHorizontalOutlinedSvg from '../asn/MoreHorizontalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoreHorizontalOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoreHorizontalOutlinedSvg} />;

MoreHorizontalOutlined.displayName = 'MoreHorizontalOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MoreHorizontalOutlined);