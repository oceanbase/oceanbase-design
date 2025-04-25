// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProjectHorizontalColoredSvg from '../asn/ProjectHorizontalColored';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectHorizontalColored = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectHorizontalColoredSvg} />;

ProjectHorizontalColored.displayName = 'ProjectHorizontalColored';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectHorizontalColored);