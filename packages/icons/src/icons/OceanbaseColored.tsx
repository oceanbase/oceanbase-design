// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OceanbaseColoredSvg from '../asn/OceanbaseColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OceanbaseColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OceanbaseColoredSvg} />;

OceanbaseColored.displayName = 'OceanbaseColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OceanbaseColored);