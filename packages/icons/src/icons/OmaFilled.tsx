// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OmaFilledSvg from '../asn/OmaFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OmaFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OmaFilledSvg} />;

OmaFilled.displayName = 'OmaFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OmaFilled);