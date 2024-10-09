// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import WorkspaceFilledSvg from '../asn/WorkspaceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const WorkspaceFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={WorkspaceFilledSvg} />;

WorkspaceFilled.displayName = 'WorkspaceFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WorkspaceFilled);