// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TaskCenterOutlinedSvg from '../asn/TaskCenterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskCenterOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaskCenterOutlinedSvg} />;

TaskCenterOutlined.displayName = 'TaskCenterOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaskCenterOutlined);