// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ActivityFilledSvg from '../asn/ActivityFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ActivityFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ActivityFilledSvg} />;

ActivityFilled.displayName = 'ActivityFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ActivityFilled);