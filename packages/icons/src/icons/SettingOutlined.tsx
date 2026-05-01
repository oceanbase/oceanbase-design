// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SettingOutlinedSvg from '../asn/SettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SettingOutlinedSvg} />;

SettingOutlined.displayName = 'SettingOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SettingOutlined);