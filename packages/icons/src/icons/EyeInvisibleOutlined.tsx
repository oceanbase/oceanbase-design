// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import EyeInvisibleOutlinedSvg from '../asn/EyeInvisibleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const EyeInvisibleOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={EyeInvisibleOutlinedSvg} />;

EyeInvisibleOutlined.displayName = 'EyeInvisibleOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EyeInvisibleOutlined);