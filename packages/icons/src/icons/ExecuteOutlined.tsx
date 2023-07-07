// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ExecuteOutlinedSvg from '../asn/ExecuteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ExecuteOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ExecuteOutlinedSvg} />;

ExecuteOutlined.displayName = 'ExecuteOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExecuteOutlined);