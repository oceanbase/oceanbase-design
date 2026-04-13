// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSettingFilledSvg from '../asn/UserSettingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSettingFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSettingFilledSvg} />;

UserSettingFilled.displayName = 'UserSettingFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSettingFilled);