// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import RunOutlinedSvg from '../asn/RunOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RunOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={RunOutlinedSvg} />;

RunOutlined.displayName = 'RunOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RunOutlined);