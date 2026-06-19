// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OpsOutlinedSvg from '../asn/OpsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OpsOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OpsOutlinedSvg} />;

OpsOutlined.displayName = 'OpsOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OpsOutlined);