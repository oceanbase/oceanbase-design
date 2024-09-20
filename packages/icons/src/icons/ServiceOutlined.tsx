// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ServiceOutlinedSvg from '../asn/ServiceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServiceOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ServiceOutlinedSvg} />;

ServiceOutlined.displayName = 'ServiceOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ServiceOutlined);