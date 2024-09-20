// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WorkspaceOutlinedSvg from '../asn/WorkspaceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WorkspaceOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WorkspaceOutlinedSvg} />;

WorkspaceOutlined.displayName = 'WorkspaceOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WorkspaceOutlined);