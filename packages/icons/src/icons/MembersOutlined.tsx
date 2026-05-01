// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import MembersOutlinedSvg from '../asn/MembersOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MembersOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={MembersOutlinedSvg} />;

MembersOutlined.displayName = 'MembersOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MembersOutlined);