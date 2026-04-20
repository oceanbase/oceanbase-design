// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SwitchOutlinedSvg from '../asn/SwitchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SwitchOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SwitchOutlinedSvg} />;

SwitchOutlined.displayName = 'SwitchOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SwitchOutlined);