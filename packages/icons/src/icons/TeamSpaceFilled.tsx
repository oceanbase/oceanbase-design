// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TeamSpaceFilledSvg from '../asn/TeamSpaceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TeamSpaceFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TeamSpaceFilledSvg} />;

TeamSpaceFilled.displayName = 'TeamSpaceFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TeamSpaceFilled);