// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WorkbenchFilledSvg from '../asn/WorkbenchFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WorkbenchFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WorkbenchFilledSvg} />;

WorkbenchFilled.displayName = 'WorkbenchFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WorkbenchFilled);