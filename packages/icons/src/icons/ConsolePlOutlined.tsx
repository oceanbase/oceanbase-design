// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ConsolePlOutlinedSvg from '../asn/ConsolePlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ConsolePlOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ConsolePlOutlinedSvg} />;

ConsolePlOutlined.displayName = 'ConsolePlOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ConsolePlOutlined);