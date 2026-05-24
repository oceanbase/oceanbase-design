// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PackageOutlinedSvg from '../asn/PackageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PackageOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PackageOutlinedSvg} />;

PackageOutlined.displayName = 'PackageOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PackageOutlined);