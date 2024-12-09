// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WorkbenchColoredSvg from '../asn/WorkbenchColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WorkbenchColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WorkbenchColoredSvg} />;

WorkbenchColored.displayName = 'WorkbenchColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WorkbenchColored);