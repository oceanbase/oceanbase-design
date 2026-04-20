// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MoreVerticalOutlinedSvg from '../asn/MoreVerticalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MoreVerticalOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MoreVerticalOutlinedSvg} />;

MoreVerticalOutlined.displayName = 'MoreVerticalOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MoreVerticalOutlined);