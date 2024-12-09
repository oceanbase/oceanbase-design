// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WorkbenchOutlinedSvg from '../asn/WorkbenchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WorkbenchOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WorkbenchOutlinedSvg} />;

WorkbenchOutlined.displayName = 'WorkbenchOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WorkbenchOutlined);