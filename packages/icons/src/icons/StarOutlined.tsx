// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import StarOutlinedSvg from '../asn/StarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const StarOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={StarOutlinedSvg} />;

StarOutlined.displayName = 'StarOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(StarOutlined);