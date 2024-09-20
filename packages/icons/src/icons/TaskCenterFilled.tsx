// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TaskCenterFilledSvg from '../asn/TaskCenterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskCenterFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaskCenterFilledSvg} />;

TaskCenterFilled.displayName = 'TaskCenterFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaskCenterFilled);