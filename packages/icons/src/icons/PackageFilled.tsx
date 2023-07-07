// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PackageFilledSvg from '../asn/PackageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PackageFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PackageFilledSvg} />;

PackageFilled.displayName = 'PackageFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PackageFilled);