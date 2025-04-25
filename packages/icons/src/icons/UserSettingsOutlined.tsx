// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSettingsOutlinedSvg from '../asn/UserSettingsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSettingsOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSettingsOutlinedSvg} />;

UserSettingsOutlined.displayName = 'UserSettingsOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSettingsOutlined);