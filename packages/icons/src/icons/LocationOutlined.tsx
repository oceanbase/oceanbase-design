// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import LocationOutlinedSvg from '../asn/LocationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LocationOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={LocationOutlinedSvg} />;

LocationOutlined.displayName = 'LocationOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LocationOutlined);