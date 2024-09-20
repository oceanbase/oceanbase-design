// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSettingsColoredSvg from '../asn/UserSettingsColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSettingsColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSettingsColoredSvg} />;

UserSettingsColored.displayName = 'UserSettingsColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSettingsColored);