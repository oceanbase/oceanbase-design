// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import OasOutlinedSvg from '../asn/OasOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OasOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={OasOutlinedSvg} />;

OasOutlined.displayName = 'OasOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(OasOutlined);