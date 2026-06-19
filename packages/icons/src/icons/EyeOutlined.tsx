// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import EyeOutlinedSvg from '../asn/EyeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeOutlinedSvg} />;

EyeOutlined.displayName = 'EyeOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeOutlined);