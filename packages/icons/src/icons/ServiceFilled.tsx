// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ServiceFilledSvg from '../asn/ServiceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ServiceFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ServiceFilledSvg} />;

ServiceFilled.displayName = 'ServiceFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ServiceFilled);