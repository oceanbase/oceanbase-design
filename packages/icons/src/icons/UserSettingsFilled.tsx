// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSettingsFilledSvg from '../asn/UserSettingsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSettingsFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSettingsFilledSvg} />;

UserSettingsFilled.displayName = 'UserSettingsFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSettingsFilled);