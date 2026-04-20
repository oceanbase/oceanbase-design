// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AlertOutlinedSvg from '../asn/AlertOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlertOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AlertOutlinedSvg} />;

AlertOutlined.displayName = 'AlertOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AlertOutlined);