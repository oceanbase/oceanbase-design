// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TeamSpacePrimaryFilledSvg from '../asn/TeamSpacePrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TeamSpacePrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TeamSpacePrimaryFilledSvg} />;

TeamSpacePrimaryFilled.displayName = 'TeamSpacePrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TeamSpacePrimaryFilled);