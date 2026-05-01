// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PackageHeaderOutlinedSvg from '../asn/PackageHeaderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PackageHeaderOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PackageHeaderOutlinedSvg} />;

PackageHeaderOutlined.displayName = 'PackageHeaderOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PackageHeaderOutlined);