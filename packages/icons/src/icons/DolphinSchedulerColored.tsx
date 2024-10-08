// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import DolphinSchedulerColoredSvg from '../asn/DolphinSchedulerColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DolphinSchedulerColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={DolphinSchedulerColoredSvg} />;

DolphinSchedulerColored.displayName = 'DolphinSchedulerColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DolphinSchedulerColored);