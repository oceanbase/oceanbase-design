// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import ProjectHorizontalOutlinedSvg from '../asn/ProjectHorizontalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ProjectHorizontalOutlined = (
  props: AntdIconProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={ProjectHorizontalOutlinedSvg} />;

ProjectHorizontalOutlined.displayName = 'ProjectHorizontalOutlined';
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ProjectHorizontalOutlined);