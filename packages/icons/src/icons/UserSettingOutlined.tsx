// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSettingOutlinedSvg from '../asn/UserSettingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSettingOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSettingOutlinedSvg} />;

UserSettingOutlined.displayName = 'UserSettingOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSettingOutlined);