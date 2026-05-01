// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ViewOutlinedSvg from '../asn/ViewOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ViewOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ViewOutlinedSvg} />;

ViewOutlined.displayName = 'ViewOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ViewOutlined);