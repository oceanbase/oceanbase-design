// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TaskCenterColoredSvg from '../asn/TaskCenterColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskCenterColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaskCenterColoredSvg} />;

TaskCenterColored.displayName = 'TaskCenterColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaskCenterColored);