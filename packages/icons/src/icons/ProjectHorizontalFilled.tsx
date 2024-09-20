// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProjectHorizontalFilledSvg from '../asn/ProjectHorizontalFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectHorizontalFilled = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectHorizontalFilledSvg} />;

ProjectHorizontalFilled.displayName = 'ProjectHorizontalFilled';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectHorizontalFilled);