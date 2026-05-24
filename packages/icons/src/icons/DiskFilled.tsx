// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DiskFilledSvg from '../asn/DiskFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiskFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiskFilledSvg} />;

DiskFilled.displayName = 'DiskFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiskFilled);