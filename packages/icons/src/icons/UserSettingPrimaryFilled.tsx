// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import UserSettingPrimaryFilledSvg from '../asn/UserSettingPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UserSettingPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={UserSettingPrimaryFilledSvg} />;

UserSettingPrimaryFilled.displayName = 'UserSettingPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserSettingPrimaryFilled);