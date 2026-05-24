// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TaskFilledSvg from '../asn/TaskFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaskFilledSvg} />;

TaskFilled.displayName = 'TaskFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaskFilled);