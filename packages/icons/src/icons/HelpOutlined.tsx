// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import HelpOutlinedSvg from '../asn/HelpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HelpOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={HelpOutlinedSvg} />;

HelpOutlined.displayName = 'HelpOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(HelpOutlined);