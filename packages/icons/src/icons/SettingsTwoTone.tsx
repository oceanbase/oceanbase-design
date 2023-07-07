// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import SettingsTwoToneSvg from '../asn/SettingsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SettingsTwoTone = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SettingsTwoToneSvg} />;

SettingsTwoTone.displayName = 'SettingsTwoTone';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SettingsTwoTone);