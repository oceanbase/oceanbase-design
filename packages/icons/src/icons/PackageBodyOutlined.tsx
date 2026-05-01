// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PackageBodyOutlinedSvg from '../asn/PackageBodyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PackageBodyOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PackageBodyOutlinedSvg} />;

PackageBodyOutlined.displayName = 'PackageBodyOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PackageBodyOutlined);