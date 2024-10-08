// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WorkspaceColoredSvg from '../asn/WorkspaceColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WorkspaceColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WorkspaceColoredSvg} />;

WorkspaceColored.displayName = 'WorkspaceColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WorkspaceColored);