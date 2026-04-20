// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import PersonalSpaceOutlinedSvg from '../asn/PersonalSpaceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PersonalSpaceOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={PersonalSpaceOutlinedSvg} />;

PersonalSpaceOutlined.displayName = 'PersonalSpaceOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PersonalSpaceOutlined);