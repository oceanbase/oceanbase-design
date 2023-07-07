// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RunCurrentOutlinedSvg from '../asn/RunCurrentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RunCurrentOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RunCurrentOutlinedSvg} />;

RunCurrentOutlined.displayName = 'RunCurrentOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RunCurrentOutlined);