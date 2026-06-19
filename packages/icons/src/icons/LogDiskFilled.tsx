// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogDiskFilledSvg from '../asn/LogDiskFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogDiskFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogDiskFilledSvg} />;

LogDiskFilled.displayName = 'LogDiskFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogDiskFilled);