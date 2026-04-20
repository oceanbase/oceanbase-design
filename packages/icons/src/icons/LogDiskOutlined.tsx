// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogDiskOutlinedSvg from '../asn/LogDiskOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogDiskOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogDiskOutlinedSvg} />;

LogDiskOutlined.displayName = 'LogDiskOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogDiskOutlined);