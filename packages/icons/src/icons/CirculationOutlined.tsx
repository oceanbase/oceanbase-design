// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import CirculationOutlinedSvg from '../asn/CirculationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CirculationOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={CirculationOutlinedSvg} />;

CirculationOutlined.displayName = 'CirculationOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(CirculationOutlined);