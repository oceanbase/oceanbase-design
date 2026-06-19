// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DiskOutlinedSvg from '../asn/DiskOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiskOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DiskOutlinedSvg} />;

DiskOutlined.displayName = 'DiskOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DiskOutlined);