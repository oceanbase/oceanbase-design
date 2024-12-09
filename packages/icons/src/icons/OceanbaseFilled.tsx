// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OceanbaseFilledSvg from '../asn/OceanbaseFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OceanbaseFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OceanbaseFilledSvg} />;

OceanbaseFilled.displayName = 'OceanbaseFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OceanbaseFilled);