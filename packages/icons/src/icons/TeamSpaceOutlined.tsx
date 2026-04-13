// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TeamSpaceOutlinedSvg from '../asn/TeamSpaceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TeamSpaceOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TeamSpaceOutlinedSvg} />;

TeamSpaceOutlined.displayName = 'TeamSpaceOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TeamSpaceOutlined);