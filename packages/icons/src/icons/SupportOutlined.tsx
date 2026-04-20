// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SupportOutlinedSvg from '../asn/SupportOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SupportOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SupportOutlinedSvg} />;

SupportOutlined.displayName = 'SupportOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SupportOutlined);