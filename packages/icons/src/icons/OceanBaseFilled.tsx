// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OceanBaseFilledSvg from '../asn/OceanBaseFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OceanBaseFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OceanBaseFilledSvg} />;

OceanBaseFilled.displayName = 'OceanBaseFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OceanBaseFilled);