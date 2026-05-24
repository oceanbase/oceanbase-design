// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AccessOutlinedSvg from '../asn/AccessOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccessOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={AccessOutlinedSvg} />;

AccessOutlined.displayName = 'AccessOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(AccessOutlined);