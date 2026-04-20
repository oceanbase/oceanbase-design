// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TaskOutlinedSvg from '../asn/TaskOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaskOutlinedSvg} />;

TaskOutlined.displayName = 'TaskOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaskOutlined);