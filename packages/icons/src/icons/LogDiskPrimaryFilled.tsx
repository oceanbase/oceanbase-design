// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LogDiskPrimaryFilledSvg from '../asn/LogDiskPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogDiskPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LogDiskPrimaryFilledSvg} />;

LogDiskPrimaryFilled.displayName = 'LogDiskPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LogDiskPrimaryFilled);