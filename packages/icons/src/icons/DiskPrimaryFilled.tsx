// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DiskPrimaryFilledSvg from '../asn/DiskPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiskPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiskPrimaryFilledSvg} />;

DiskPrimaryFilled.displayName = 'DiskPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiskPrimaryFilled);