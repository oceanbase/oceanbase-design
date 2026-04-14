// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import TaskPrimaryFilledSvg from '../asn/TaskPrimaryFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const TaskPrimaryFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={TaskPrimaryFilledSvg} />;

TaskPrimaryFilled.displayName = 'TaskPrimaryFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(TaskPrimaryFilled);